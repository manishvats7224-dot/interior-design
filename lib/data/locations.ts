import { CityLocation } from '@/types';
import { TESTIMONIALS } from './testimonials';

export const LOCATIONS: CityLocation[] = [
  {
    slug: 'delhi',
    cityName: 'Delhi',
    state: 'National Capital Territory',
    heroHeadline: 'Premier Luxury Interior Designers in Delhi NCR',
    heroSubheadline: 'Bespoke interior architecture for heritage kothis, sprawling South Delhi floors, and modern luxury apartments across Vasant Vihar, Greater Kailash, Golf Links, and Sunder Nagar.',
    studioAddress: 'Level 3, The Grand Arcade, Vasant Vihar, New Delhi 110057',
    phone: '+91 98100 88234',
    email: 'delhi@atelieraura.com',
    operatingHours: 'Mon – Sat: 10:00 AM – 7:30 PM (By Appointment)',
    homesDesigned: 180,
    featuredProjectsCount: 42,
    averageBudget: '₹25 Lakhs – 1.5 Cr',
    popularAreas: ['Vasant Vihar', 'Greater Kailash', 'Panchsheel Park', 'Sundar Nagar', 'Civil Lines', 'Chanakyapuri', 'Def Col'],
    testimonials: [TESTIMONIALS[3]],
    localFaqs: [
      {
        question: 'Do you design independent builder floors and kothis in South Delhi?',
        answer: 'Yes, we have extensive experience managing complete civil remodeling, elevator shaft integration, double-height foyer planning, and turnkey fitouts for builder floors across South Delhi.'
      }
    ]
  },
  {
    slug: 'gurgaon',
    cityName: 'Gurgaon',
    state: 'Haryana',
    heroHeadline: 'Award-Winning Interior Architects in Gurgaon & DLF',
    heroSubheadline: 'Crafting sophisticated high-rise penthouses, golf-course condominiums, and luxury villas across DLF Phase 1–5, Golf Course Road, and Sohna Road.',
    studioAddress: 'Tower B, 14th Floor, Horizon Center, Golf Course Road, Gurgaon 122002',
    phone: '+91 98100 88235',
    email: 'gurgaon@atelieraura.com',
    operatingHours: 'Mon – Sat: 10:00 AM – 8:00 PM',
    homesDesigned: 210,
    featuredProjectsCount: 54,
    averageBudget: '₹22 Lakhs – 1.2 Cr',
    popularAreas: ['Golf Course Road', 'The Camellias / Magnolias', 'DLF Phase 1–5', 'Golf Course Extn', 'Sohna Road', 'Ambience Island'],
    testimonials: [TESTIMONIALS[0]],
    localFaqs: [
      {
        question: 'Are your designers familiar with DLF and high-rise society guidelines?',
        answer: 'Yes, our team is deeply familiar with DLF Camellias, Magnolias, Aralias, Belaire, and M3M society delivery norms, acoustic requirements, and HVAC approvals.'
      }
    ]
  },
  {
    slug: 'noida',
    cityName: 'Noida & Greater Noida',
    state: 'Uttar Pradesh',
    heroHeadline: 'Modern & Turnkey Interior Designers in Noida',
    heroSubheadline: 'Transforming premium expressway condominiums and luxury row villas across Sector 150, Sector 128, and Noida Expressway into high-function sanctuaries.',
    studioAddress: 'Sky Corporate Suites, Sector 132, Noida Expressway, Noida 201304',
    phone: '+91 98100 88236',
    email: 'noida@atelieraura.com',
    operatingHours: 'Mon – Sat: 10:00 AM – 7:30 PM',
    homesDesigned: 110,
    featuredProjectsCount: 28,
    averageBudget: '₹15 Lakhs – 60 Lakhs',
    popularAreas: ['Sector 150', 'Sector 128 (Jaypee Wish Town)', 'Sector 44', 'Sector 93B', 'Noida Extension', 'Greater Noida West'],
    testimonials: [TESTIMONIALS[0]],
    localFaqs: [
      {
        question: 'How fast can you finish a 3BHK flat on Noida Expressway?',
        answer: 'With our precision off-site factory fabrication, we complete standard 3BHK turnkey interiors in Noida in 45 working days guaranteed.'
      }
    ]
  },
  {
    slug: 'mumbai',
    cityName: 'Mumbai',
    state: 'Maharashtra',
    heroHeadline: 'Luxury Coastal & Sea-Facing Interior Designers in Mumbai',
    heroSubheadline: 'Maximizing space, Arabian Sea panoramas, and rust-proof coastal durability for high-rise residences across Worli, Bandra, Juhu, and South Mumbai.',
    studioAddress: 'The Pavilions, 5th Floor, Dr. Annie Besant Rd, Worli, Mumbai 400018',
    phone: '+91 98200 77412',
    email: 'mumbai@atelieraura.com',
    operatingHours: 'Mon – Sat: 10:00 AM – 8:00 PM',
    homesDesigned: 195,
    featuredProjectsCount: 46,
    averageBudget: '₹35 Lakhs – 2.5 Cr',
    popularAreas: ['Worli Sea Face', 'Bandra West (Pali Hill)', 'Juhu', 'Prabhadevi', 'Altamount Road', 'BKC', 'Colaba'],
    testimonials: [TESTIMONIALS[2]],
    localFaqs: [
      {
        question: 'How do you safeguard luxury finishes against Mumbai sea humidity and salinity?',
        answer: 'We exclusively specify SS304/SS316 marine-grade hardware, 100% BWP Marine Plywood, specialized moisture-barrier primers, and anodized corrosion-proof aluminum profiles.'
      }
    ]
  },
  {
    slug: 'bangalore',
    cityName: 'Bangalore',
    state: 'Karnataka',
    heroHeadline: 'Minimalist & Japandi Interior Architecture in Bangalore',
    heroSubheadline: 'Contemporary, tech-forward, and biophilic homes designed for visionary professionals across Indiranagar, Koramangala, Whitefield, and Lavelle Road.',
    studioAddress: 'Indiranagar 100ft Road, 4th Block, Bangalore 560038',
    phone: '+91 98800 66321',
    email: 'bangalore@atelieraura.com',
    operatingHours: 'Mon – Sat: 10:00 AM – 8:00 PM',
    homesDesigned: 175,
    featuredProjectsCount: 38,
    averageBudget: '₹22 Lakhs – 90 Lakhs',
    popularAreas: ['Indiranagar', 'Koramangala', 'Lavelle Road', 'Sadashivanagar', 'Whitefield', 'Sarjapur Road', 'Hebbal'],
    testimonials: [TESTIMONIALS[1]],
    localFaqs: [
      {
        question: 'Do you create integrated home automation and work-from-home pods?',
        answer: 'Yes! Bangalore homes often feature dedicated acoustic home offices, fiber-optic smart routing, IoT climate dimmers, and biophilic balcony green zones.'
      }
    ]
  },
  {
    slug: 'pune',
    cityName: 'Pune',
    state: 'Maharashtra',
    heroHeadline: 'Turnkey Luxury Interior Designers in Pune',
    heroSubheadline: 'Elegant modern apartments, penthouses, and gated community villas across Koregaon Park, Kalyani Nagar, Baner, and Boat Club Road.',
    studioAddress: 'Hermes Heritage, Koregaon Park North Main Road, Pune 411001',
    phone: '+91 98230 55198',
    email: 'pune@atelieraura.com',
    operatingHours: 'Mon – Sat: 10:00 AM – 7:30 PM',
    homesDesigned: 120,
    featuredProjectsCount: 30,
    averageBudget: '₹18 Lakhs – 75 Lakhs',
    popularAreas: ['Koregaon Park', 'Kalyani Nagar', 'Boat Club Road', 'Baner', 'Balewadi High Street', 'Aundh'],
    testimonials: [TESTIMONIALS[1]],
    localFaqs: [
      {
        question: 'Do you handle villa interior architecture in Pune outskirts (Lonavala/Mulshi)?',
        answer: 'Yes, we manage country home and weekend retreat architecture with natural stone courtyards, wooden pergolas, and landscape integration.'
      }
    ]
  }
];
