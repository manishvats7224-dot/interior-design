export type PropertyType = 
  | '1 BHK' 
  | '2 BHK' 
  | '3 BHK' 
  | '4 BHK+' 
  | 'Villa' 
  | 'Penthouse' 
  | 'Duplex' 
  | 'Office' 
  | 'Commercial' 
  | 'Restaurant';

export type DesignStyle = 
  | 'Modern Contemporary' 
  | 'Minimalist' 
  | 'Luxury Neoclassical' 
  | 'Japandi' 
  | 'Scandinavian' 
  | 'Industrial Chic' 
  | 'Warm Traditional' 
  | 'Bohemian Modern' 
  | 'Art Deco';

export type RoomCategory = 
  | 'Living Room' 
  | 'Modular Kitchen' 
  | 'Master Bedroom' 
  | 'Guest Bedroom' 
  | 'Kids Room' 
  | 'Bathroom' 
  | 'Balcony & Deck' 
  | 'Dining Room' 
  | 'Home Office' 
  | 'Pooja Room' 
  | 'Walk-in Wardrobe' 
  | 'Foyer & Entryway';

export type LeadStatus = 
  | 'New' 
  | 'Contacted' 
  | 'Consultation Scheduled' 
  | 'Design Discussion' 
  | 'Proposal Sent' 
  | 'Negotiation' 
  | 'Won' 
  | 'Lost';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  city: string;
  propertyType: PropertyType;
  areaSqFt: number;
  budgetRange: string;
  style: DesignStyle;
  completionDate: string;
  durationMonths: number;
  coverImage: string;
  gallery: string[];
  beforeImage?: string;
  afterImage?: string;
  isFeatured: boolean;
  designerId: string;
  designerName: string;
  designerAvatar: string;
  conceptDescription: string;
  designStory: string;
  rooms: {
    name: string;
    description: string;
    image: string;
    highlights: string[];
  }[];
  materials: {
    category: string;
    items: string[];
  }[];
  timeline: {
    phase: string;
    weeks: string;
    description: string;
  }[];
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  startingPrice: string;
  image: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface Package {
  id: string;
  name: string;
  tagline: string;
  startingPrice: string;
  priceNote: string;
  isPopular?: boolean;
  idealFor: string;
  features: string[];
  includedRooms: string[];
  warrantyYears: number;
  timelineWeeks: string;
  detailedSpecs: {
    material: string;
    hardware: string;
    finishes: string;
    lighting: string;
  };
}

export interface Designer {
  id: string;
  name: string;
  role: string;
  avatar: string;
  experienceYears: number;
  specializations: DesignStyle[];
  city: string;
  projectsCompleted: number;
  bio: string;
  philosophy: string;
  featuredProjects: string[];
  education: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientLocation: string;
  clientAvatar: string;
  propertyType: string;
  projectName: string;
  projectSlug?: string;
  projectImage: string;
  rating: number;
  reviewDate: string;
  content: string;
  verifiedOwner: boolean;
  designerName: string;
}

export interface InspirationItem {
  id: string;
  title: string;
  room: RoomCategory;
  style: DesignStyle;
  colorScheme: string;
  image: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  tags: string[];
  likesCount: number;
  projectRefSlug?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  faqSchema?: {
    question: string;
    answer: string;
  }[];
}

export interface FAQ {
  id: string;
  category: 'General' | 'Pricing & Budget' | 'Design Process' | 'Materials & Warranty' | 'Execution';
  question: string;
  answer: string;
}

export interface Lead {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  propertyType: string;
  areaSqFt?: number;
  budget: string;
  requirements: string[];
  status: LeadStatus;
  assignedDesigner?: string;
  source: 'Website Form' | 'Cost Calculator' | 'Consultation Booking' | 'Quote Request' | 'AI Visualizer' | 'WhatsApp';
  notes?: string;
  preferredDate?: string;
  preferredTime?: string;
  consultationType?: 'Online' | 'Phone' | 'Studio Visit' | 'Home Visit';
}

export interface ConsultationBooking {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  propertyType: string;
  propertySizeSqFt?: number;
  budget: string;
  preferredDate: string;
  preferredTime: string;
  consultationType: 'Online' | 'Phone' | 'Studio Visit' | 'Home Visit';
  requirements: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Rescheduled' | 'Cancelled';
}

export interface QuoteRequest {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  propertyType: string;
  areaSqFt: number;
  roomsSelected: string[];
  stylePreference: DesignStyle;
  budgetRange: string;
  possessionStatus: 'Ready to Move' | 'Within 3 Months' | '3-6 Months' | 'Under Construction';
  estimatedCostRange: string;
  hasFloorPlan: boolean;
  floorPlanFileName?: string;
}

export interface CityLocation {
  slug: string;
  cityName: string;
  state: string;
  heroHeadline: string;
  heroSubheadline: string;
  studioAddress: string;
  phone: string;
  email: string;
  operatingHours: string;
  homesDesigned: number;
  featuredProjectsCount: number;
  averageBudget: string;
  popularAreas: string[];
  testimonials: Testimonial[];
  localFaqs: { question: string; answer: string }[];
}
