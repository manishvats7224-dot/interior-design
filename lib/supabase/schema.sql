-- ==============================================================================
-- ATELIER AURA - COMPLETE POSTGRESQL / SUPABASE DATABASE SCHEMA
-- ==============================================================================

-- Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. USERS TABLE
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    phone TEXT,
    role TEXT DEFAULT 'client' CHECK (role IN ('client', 'designer', 'admin', 'project_manager')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. PROJECTS TABLE
CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT,
    location TEXT NOT NULL,
    city TEXT NOT NULL,
    property_type TEXT NOT NULL,
    area_sqft INTEGER NOT NULL,
    budget_range TEXT NOT NULL,
    style TEXT NOT NULL,
    completion_date TEXT NOT NULL,
    duration_months NUMERIC NOT NULL,
    cover_image TEXT NOT NULL,
    before_image TEXT,
    after_image TEXT,
    is_featured BOOLEAN DEFAULT false,
    designer_name TEXT NOT NULL,
    designer_avatar TEXT,
    concept_description TEXT,
    design_story TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. PROJECT IMAGES
CREATE TABLE IF NOT EXISTS project_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    caption TEXT,
    sort_order INTEGER DEFAULT 0
);

-- 4. SERVICES TABLE
CREATE TABLE IF NOT EXISTS services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    tagline TEXT,
    short_description TEXT NOT NULL,
    full_description TEXT NOT NULL,
    starting_price TEXT NOT NULL,
    image TEXT NOT NULL,
    icon_name TEXT NOT NULL,
    features JSONB DEFAULT '[]'::jsonb,
    deliverables JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. PACKAGES TABLE
CREATE TABLE IF NOT EXISTS packages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    tagline TEXT,
    starting_price TEXT NOT NULL,
    price_note TEXT,
    is_popular BOOLEAN DEFAULT false,
    ideal_for TEXT,
    features JSONB DEFAULT '[]'::jsonb,
    included_rooms JSONB DEFAULT '[]'::jsonb,
    warranty_years INTEGER DEFAULT 5,
    timeline_weeks TEXT,
    detailed_specs JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. DESIGNERS TABLE
CREATE TABLE IF NOT EXISTS designers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    avatar TEXT NOT NULL,
    experience_years INTEGER NOT NULL,
    specializations TEXT[] DEFAULT ARRAY[]::TEXT[],
    city TEXT NOT NULL,
    projects_completed INTEGER DEFAULT 0,
    bio TEXT NOT NULL,
    philosophy TEXT,
    education TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. LEADS / ENQUIRIES TABLE
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    city TEXT NOT NULL,
    property_type TEXT NOT NULL,
    area_sqft INTEGER,
    budget TEXT NOT NULL,
    requirements TEXT[] DEFAULT ARRAY[]::TEXT[],
    status TEXT DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Consultation Scheduled', 'Design Discussion', 'Proposal Sent', 'Negotiation', 'Won', 'Lost')),
    assigned_designer TEXT,
    source TEXT DEFAULT 'Website Form',
    notes TEXT,
    preferred_date DATE,
    preferred_time TEXT,
    consultation_type TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 8. CONSULTATIONS TABLE
CREATE TABLE IF NOT EXISTS consultations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    city TEXT NOT NULL,
    property_type TEXT NOT NULL,
    property_size_sqft INTEGER,
    budget TEXT NOT NULL,
    preferred_date DATE NOT NULL,
    preferred_time TEXT NOT NULL,
    consultation_type TEXT NOT NULL CHECK (consultation_type IN ('Online', 'Phone', 'Studio Visit', 'Home Visit')),
    requirements TEXT,
    status TEXT DEFAULT 'Pending' CHECK (status IN ('Pending', 'Confirmed', 'Completed', 'Rescheduled', 'Cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 9. QUOTES TABLE
CREATE TABLE IF NOT EXISTS quotes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    city TEXT NOT NULL,
    property_type TEXT NOT NULL,
    area_sqft INTEGER NOT NULL,
    rooms_selected TEXT[] DEFAULT ARRAY[]::TEXT[],
    style_preference TEXT NOT NULL,
    budget_range TEXT NOT NULL,
    possession_status TEXT NOT NULL,
    estimated_cost_range TEXT NOT NULL,
    has_floor_plan BOOLEAN DEFAULT false,
    floor_plan_file_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 10. INSPIRATION / BOARDS TABLE
CREATE TABLE IF NOT EXISTS inspiration (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    room TEXT NOT NULL,
    style TEXT NOT NULL,
    color_scheme TEXT,
    image TEXT NOT NULL,
    aspect_ratio TEXT DEFAULT 'portrait',
    tags TEXT[] DEFAULT ARRAY[]::TEXT[],
    likes_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 11. BLOG POSTS TABLE
CREATE TABLE IF NOT EXISTS blog_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    cover_image TEXT NOT NULL,
    category TEXT NOT NULL,
    read_time TEXT DEFAULT '5 min read',
    author_name TEXT NOT NULL,
    author_role TEXT,
    author_avatar TEXT,
    tags TEXT[] DEFAULT ARRAY[]::TEXT[],
    faq_schema JSONB DEFAULT '[]'::jsonb,
    published_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 12. FAVORITES / SAVED BOARDS TABLE
CREATE TABLE IF NOT EXISTS favorites (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    item_type TEXT NOT NULL CHECK (item_type IN ('project', 'inspiration', 'package', 'designer')),
    item_id TEXT NOT NULL,
    board_name TEXT DEFAULT 'General',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Row Level Security (RLS) Configuration
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;

-- Public insert policy for public forms
CREATE POLICY "Allow public submissions for leads" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public submissions for consultations" ON consultations FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public submissions for quotes" ON quotes FOR INSERT WITH CHECK (true);
