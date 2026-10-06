import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabase } from "@/lib/supabase";

const LEMONSQUEEZY_WEBHOOK_SECRET = process.env.LEMONSQUEEZY_WEBHOOK_SECRET || "";

export async function POST(req: Request) {
  try {
    // 1. Get the raw body for signature verification
    const rawBody = await req.text();
    const signature = req.headers.get("x-signature") || "";

    // 2. Verify HMAC SHA-256 signature
    const hmac = crypto.createHmac("sha256", LEMONSQUEEZY_WEBHOOK_SECRET);
    const digest = Buffer.from(hmac.update(rawBody).digest("hex"), "utf8");
    const signatureBuffer = Buffer.from(signature, "utf8");

    if (digest.length !== signatureBuffer.length || !crypto.timingSafeEqual(digest, signatureBuffer)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    // 3. Parse the payload
    const payload = JSON.parse(rawBody);
    const eventName = payload.meta.event_name;
    const orderId = payload.data.id;
    const attributes = payload.data.attributes;

    // 4. Handle "order_created"
    if (eventName === "order_created") {
      const customerEmail = attributes.user_email;
      const customerName = attributes.user_name;
      const variantId = attributes.first_order_item.variant_id;
      
      // Store the order in our database
      const { error: dbError } = await supabase.from("orders").insert([
        {
          lemon_order_id: orderId,
          customer_email: customerEmail,
          customer_name: customerName,
          variant_id: variantId,
          total_usd: attributes.total_formatted,
          status: "paid",
        }
      ]);
      
      if (dbError) {
        console.error("Supabase Order Insert Error:", dbError);
      }

      // NOTE: In Phase 4.1, we will trigger the DRM stamping and email delivery here.
      // For now, the transaction is securely recorded.
    }

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}
