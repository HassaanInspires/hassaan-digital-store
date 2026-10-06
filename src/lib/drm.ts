import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { supabase } from "@/lib/supabase";

/**
 * Applies Social DRM (Digital Rights Management) to a PDF by stamping the buyer's email 
 * onto every page. This creates psychological friction against unauthorized sharing.
 * 
 * @param bucketName Supabase storage bucket name (e.g., 'products')
 * @param filePath Path to the raw PDF inside the bucket (e.g., 'anchor-release/raw.pdf')
 * @param buyerEmail The email to stamp on the PDF
 * @returns A temporary signed URL to download the stamped PDF
 */
export async function generateStampedPDFUrl(bucketName: string, filePath: string, buyerEmail: string): Promise<string> {
  // 1. Download the raw PDF from private storage
  const { data: fileData, error: downloadError } = await supabase
    .storage
    .from(bucketName)
    .download(filePath);
    
  if (downloadError || !fileData) {
    throw new Error(`Failed to download source PDF: ${downloadError?.message}`);
  }

  // 2. Load the PDF document
  const arrayBuffer = await fileData.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  
  // 3. Embed font
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  
  // 4. Stamp every page
  const pages = pdfDoc.getPages();
  const watermarkText = `Licensed to ${buyerEmail} - M. Hassaan Khan`;
  
  for (const page of pages) {
    const { width, height } = page.getSize();
    page.drawText(watermarkText, {
      x: 20,
      y: 20,
      size: 9,
      font: helveticaFont,
      color: rgb(0.5, 0.5, 0.5),
      opacity: 0.6,
    });
  }

  // 5. Serialize the new PDF
  const pdfBytes = await pdfDoc.save();
  
  // 6. Upload the stamped PDF to a temporary "deliveries" folder
  const stampedFileName = `deliveries/${Date.now()}-${buyerEmail}.pdf`;
  const { error: uploadError } = await supabase
    .storage
    .from(bucketName)
    .upload(stampedFileName, pdfBytes, {
      contentType: 'application/pdf',
      upsert: false
    });

  if (uploadError) {
    throw new Error(`Failed to upload stamped PDF: ${uploadError.message}`);
  }

  // 7. Generate a 60-second expiring Signed URL
  const { data: urlData, error: urlError } = await supabase
    .storage
    .from(bucketName)
    .createSignedUrl(stampedFileName, 60);

  if (urlError || !urlData) {
    throw new Error(`Failed to generate signed URL: ${urlError?.message}`);
  }

  return urlData.signedUrl;
}
