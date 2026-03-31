-- Append Site Settings to the migration
CREATE TABLE IF NOT EXISTS public.college_info (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    key TEXT UNIQUE NOT NULL,
    value TEXT NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.college_info ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read on college_info" ON public.college_info
    FOR SELECT USING (true);

INSERT INTO public.college_info (key, value)
VALUES 
    ('phone', '0726000770'),
    ('name', 'Muyog Vocational College'),
    ('email', 'info@muyogcollege.ac.ke'),
    ('address', 'Nairobi, Kenya')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;