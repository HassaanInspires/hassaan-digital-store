-- 1. Automated Timestamp Trigger
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$ BEGIN     NEW.updated_at = now();     RETURN NEW; END; $$ language 'plpgsql';

-- 2. Custom ENUM Types
CREATE TYPE trust_tier_status AS ENUM ('Personal', 'Community');

-- 3. Core Storefront Products Table
CREATE TABLE public.products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT,
    description TEXT,
    price DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    lemon_squeezy_product_id TEXT,
    lemon_squeezy_variant_id TEXT,
    cover_url TEXT,
    ui_metadata JSONB DEFAULT '{}'::jsonb,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Index for ultra-fast URL routing
CREATE INDEX products_slug_idx ON public.products(slug);

-- Apply Timestamp Trigger
CREATE TRIGGER update_products_modtime
    BEFORE UPDATE ON public.products
    FOR EACH ROW
    EXECUTE FUNCTION update_modified_column();

-- 4. Partner Catalog Table (Dr. Zeeshan Usmani)
CREATE TABLE public.partner_catalog (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    badge TEXT,
    pages TEXT,
    description TEXT,
    trust_tier trust_tier_status DEFAULT 'Community',
    curator_note TEXT,
    cover_url TEXT,
    lemon_squeezy_product_id TEXT,
    lemon_squeezy_variant_id TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Index for ultra-fast URL routing
CREATE INDEX partner_catalog_slug_idx ON public.partner_catalog(slug);

-- Apply Timestamp Trigger
CREATE TRIGGER update_partner_catalog_modtime
    BEFORE UPDATE ON public.partner_catalog
    FOR EACH ROW
    EXECUTE FUNCTION update_modified_column();

-- ==========================================
-- ROW-LEVEL SECURITY (RLS) POLICIES
-- ==========================================

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partner_catalog ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to active products" 
    ON public.products FOR SELECT 
    USING (is_active = true);

CREATE POLICY "Allow public read access to active partner catalog" 
    ON public.partner_catalog FOR SELECT 
    USING (is_active = true);
