-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create Services table
CREATE TABLE IF NOT EXISTS public.services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    description TEXT,
    icon TEXT,
    slug TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Courses table
CREATE TABLE IF NOT EXISTS public.courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    service_id UUID REFERENCES public.services(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    duration TEXT,
    price DECIMAL(10, 2),
    features TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Inquiries table
CREATE TABLE IF NOT EXISTS public.inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    email TEXT,
    service_interested TEXT,
    message TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'resolved')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Services
CREATE POLICY "Allow public read access on services" ON public.services
    FOR SELECT USING (true);

-- RLS Policies for Courses
CREATE POLICY "Allow public read access on courses" ON public.courses
    FOR SELECT USING (true);

-- RLS Policies for Inquiries
CREATE POLICY "Allow public insert access on inquiries" ON public.inquiries
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated read access on inquiries" ON public.inquiries
    FOR SELECT TO authenticated USING (true);

-- Seed Initial Data
INSERT INTO public.services (name, description, slug, icon)
VALUES 
    ('Computer Training', 'Comprehensive computer packages from basic literacy to advanced applications.', 'computer-training', 'Monitor'),
    ('Hair Dressing', 'Professional hair styling, treatment, and beauty therapy courses.', 'hair-dressing', 'Scissors')
ON CONFLICT (slug) DO NOTHING;

-- Get Service IDs for seeding courses
DO $$
DECLARE
    comp_id UUID;
    hair_id UUID;
BEGIN
    SELECT id INTO comp_id FROM public.services WHERE slug = 'computer-training';
    SELECT id INTO hair_id FROM public.services WHERE slug = 'hair-dressing';

    -- Seed Computer Courses
    INSERT INTO public.courses (service_id, title, description, duration, price, features)
    VALUES 
        (comp_id, 'Computer Packages', 'Introduction to Windows, MS Office (Word, Excel, PowerPoint), and Internet.', '3 Months', 15000, ARRAY['Hands-on practice', 'Certificate provided', 'Modern lab']),
        (comp_id, 'Graphic Design', 'Learn Photoshop, Illustrator, and CorelDraw.', '2 Months', 12000, ARRAY['Portfolio building', 'Industry tools', 'Creative projects']);

    -- Seed Hairdressing Courses
    INSERT INTO public.courses (service_id, title, description, duration, price, features)
    VALUES 
        (hair_id, 'Basic Hairdressing', 'Hair washing, blow-drying, and basic styling techniques.', '3 Months', 20000, ARRAY['Salon equipment access', 'Mannequin practice', 'Live demonstrations']),
        (hair_id, 'Advanced Styling & Coloring', 'Complex braids, chemical treatments, and advanced coloring.', '4 Months', 25000, ARRAY['Professional techniques', 'Customer care skills', 'Attachment opportunities']);
END $$;