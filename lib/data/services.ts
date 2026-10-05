import { Service } from '@/types';

export const SERVICES: Service[] = [
  {
    id: 'srv-1',
    slug: 'turnkey-interiors',
    name: 'Turnkey Interiors',
    tagline: 'End-to-End Design, Procurement, Execution & White-Glove Handover',
    shortDescription: 'Complete single-point responsibility for your home transformation, from 3D blueprints and material supply to on-site execution and final styling.',
    fullDescription: 'Our Turnkey Interior service removes all hassle from home construction and interior fitouts. We assign a dedicated Principal Architect and a Project Manager on site. Everything—from civil modifications, electrical cabling, false ceilings, plumbing, bespoke carpentry to soft furnishings—is executed with factory precision, clear timelines, and a 10-year structural warranty.',
    startingPrice: '₹8.5 Lakhs onwards',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Key',
    features: [
      'Single Point of Contact & Project Management',
      '10-Year Warranty on Modular Furniture',
      '45-Day Move-in Guarantee (standard flats)',
      'Transparent Itemized BOQ with Zero Hidden Costs',
      'Live App-based Daily Site Progress Tracking',
      '150-Point Quality Inspection Protocol'
    ],
    deliverables: [
      'Comprehensive 3D Virtual Walkthrough & 2D Working CAD Drawings',
      'Factory-finished HDHMR / BWP Plywood Cabinetry',
      'Complete Civil, Electrical, Plumbing & HVAC Integration',
      'Designer Lighting, False Ceiling & Acoustic Panelling',
      'Curated Soft Furnishings, Curtains & Decorative Accessories'
    ],
    processSteps: [
      { step: '01', title: 'Consultation & Site Scan', description: 'Laser-accurate measurements and deep discovery of your lifestyle requirements.' },
      { step: '02', title: 'Concept & 3D Photoreal Renders', description: 'Experience your future space down to millimeter-accurate materials.' },
      { step: '03', title: 'Material Selection Studio Visit', description: 'Touch and feel veneers, marble slabs, fabrics, and hardware at our Atelier.' },
      { step: '04', title: 'Factory Production & Civil Work', description: 'Parallel execution of site civil work while cabinetry is precision-machined.' },
      { step: '05', title: 'Assembly, Quality Audit & Handover', description: 'On-site installation, deep cleaning, designer styling, and formal key handover.' }
    ],
    faqs: [
      {
        question: 'What is included in Turnkey Interior Design?',
        answer: 'Our turnkey service includes everything: concept design, 3D renderings, demolition/civil works, flooring, modular kitchen & wardrobes, false ceiling, lighting, electrical rewiring, painting, wallpaper, loose furniture, curtains, and deep cleaning before handover.'
      },
      {
        question: 'How do you ensure projects finish on time?',
        answer: 'We utilize an industrial off-site manufacturing model where all cabinetry and joinery are built in our automated German-tech factory while civil works happen on-site simultaneously. We back this with a guaranteed timeline and delay penalty clauses in our contract.'
      },
      {
        question: 'Is there a warranty on turnkey work?',
        answer: 'Yes! We provide a 10-year comprehensive warranty on all factory modular woodwork and hardware (Blum/Hafele/Hettich) along with 1-year complimentary on-site maintenance support.'
      }
    ]
  },
  {
    id: 'srv-2',
    slug: 'residential-interior-design',
    name: 'Residential Interior Design',
    tagline: 'Bespoke Luxury Homes Tailored to Your Legacy',
    shortDescription: 'Comprehensive interior architecture for premium apartments, penthouses, duplexes, and independent luxury villas across India.',
    fullDescription: 'From compact urban 2BHKs to sprawling 10,000 sq.ft villas, our residential design practice marries timeless elegance with everyday functional brilliance. We tailor layouts to your family routines, maximizing natural daylight, optimizing storage, and selecting timeless materials that appreciate over time.',
    startingPrice: '₹5.5 Lakhs onwards',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Home',
    features: [
      'Custom Furniture & Joinery Design',
      'Vastu-Compliant Space Planning',
      'Smart Home Automation Integration',
      'Bespoke Acoustic & Lighting Schematics'
    ],
    deliverables: [
      'Detailed Floor Layout Plans & Sectional Elevations',
      'Material Moodboards & Physical Sample Kits',
      'Procurement Assistance for Art & Loose Furniture'
    ],
    processSteps: [
      { step: '01', title: 'Lifestyle Discovery', description: 'Understanding how your family lives, cooks, works, and relaxes.' },
      { step: '02', title: 'Master Spatial Planning', description: 'Zoning functional areas and optimizing circulation.' },
      { step: '03', title: 'Detailed Design Package', description: 'Complete working drawings for execution.' }
    ],
    faqs: [
      {
        question: 'Can you work with builder-provided floor plans before possession?',
        answer: 'Yes! We start 3D conceptualization, space planning, and material selection up to 6 months before possession so work can begin the day keys are handed over.'
      }
    ]
  },
  {
    id: 'srv-3',
    slug: 'modular-kitchen',
    name: 'Modular Kitchen Design',
    tagline: 'German Engineering Meets Culinary Artistry',
    shortDescription: 'Bespoke, ergonomic kitchen environments featuring Blum servo-drive motion, quartz/Dekton worktops, and waterproof marine-grade cabinetry.',
    fullDescription: 'We design kitchens that turn cooking into a joy. Incorporating golden work triangle ergonomics, specialized spice pullouts, tall pantry units, anti-fingerprint acrylics, and integrated appliances from Miele, Bosch, and Siemens.',
    startingPrice: '₹2.8 Lakhs onwards',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    iconName: 'UtensilsCrossed',
    features: [
      'Anti-Scratch & Anti-Fingerprint Finishes',
      'Blum Servo-Drive Motorized Opening',
      'Dekton & Caesarstone Heat-Resistant Counters',
      '100% Water-Resistant Boiling Waterproof (BWP) Core'
    ],
    deliverables: [
      'Ergonomic Kitchen Layout Blueprint',
      'Appliance Integration & Plumbing Plan',
      'Modular Storage Organizers & Magic Corners'
    ],
    processSteps: [
      { step: '01', title: 'Cooking Habits Analysis', description: 'Evaluating dry/wet zones, storage frequency, and appliance footprint.' },
      { step: '02', title: 'Cabinet & Hardware Configuration', description: 'Customizing tandem drawers, corner solutions, and tall units.' },
      { step: '03', title: 'Precision CNC Manufacturing', description: '0.1mm tolerance edge banding and assembly.' }
    ],
    faqs: [
      {
        question: 'What materials are used to withstand Indian cooking and turmeric stains?',
        answer: 'We use 100% BWP Marine Plywood / HDHMR cores paired with non-porous sintered stone (Dekton/Quartz) countertops and PU/Acrylic shutters that resist turmeric, oil splatters, and heat.'
      }
    ]
  },
  {
    id: 'srv-4',
    slug: 'wardrobe-design',
    name: 'Custom Wardrobes & Walk-ins',
    tagline: 'Couture Storage Designed for Effortless Organization',
    shortDescription: 'Floor-to-ceiling sliding, hinged, and walk-in glass wardrobes with integrated sensor lighting, velvet jewellery trays, and luxury leather details.',
    fullDescription: 'Experience morning routines like never before. Our custom wardrobes are tailored to your attire collection—long coats, sarees, accessories, footwear, and watches. Built with tinted fluted glass, brushed champagne aluminum frames, and soft-close mechanisms.',
    startingPrice: '₹1.5 Lakhs onwards',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Shirt',
    features: [
      'Fluted Tinted Glass & Concealed LED Profiles',
      'Motorized Wardrobe Lifts for High Ceilings',
      'Custom Velvet Jewellery & Watch Winder Drawers',
      'Dehumidifier & Odor Neutralizing Vents'
    ],
    deliverables: [
      'Custom Storage Compartmentalization Layout',
      'Internal Wardrobe Lighting & Sensor Setup',
      'Soft-Close Precision Hardware'
    ],
    processSteps: [
      { step: '01', title: 'Wardrobe Audit', description: 'Measuring hanging vs folded clothing ratio.' },
      { step: '02', title: 'Internal Zoning', description: 'Allocating dedicated bays for suits, ethnic wear, shoes, and safes.' },
      { step: '03', title: 'Installation & Fine Tuning', description: 'Laser leveling and motion-sensor calibration.' }
    ],
    faqs: [
      {
        question: 'Do you make walk-in closets for smaller bedroom spaces?',
        answer: 'Yes! We create smart L-shaped and partition-based walk-in concepts with slimline glass frames that maximize storage without encroaching on bedroom floor area.'
      }
    ]
  },
  {
    id: 'srv-5',
    slug: 'living-room-design',
    name: 'Living & Dining Spaces',
    tagline: 'The Heart of Entertaining and Family Warmth',
    shortDescription: 'Dramatic double-height accents, acoustic fluted feature walls, custom bar lounges, and curated statement lighting fixtures.',
    fullDescription: 'The living room makes the first and lasting impression of your residence. We craft conversational seating layouts, concealed TV media walls, bespoke brass liquor cabinets, and layered lighting scenes for intimate family evenings or high-energy hosting.',
    startingPrice: '₹2.2 Lakhs onwards',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Sofa',
    features: [
      'Acoustic Panelling & Cable-Concealed Media Walls',
      'Integrated Bar Units with Backlit Onyx Marble',
      'Custom Hand-knotted Carpets & Designer Seating',
      'Smart Ambient Scene-Controller Lighting'
    ],
    deliverables: [
      'Furniture Placement Plan',
      'Feature Wall 3D Detail & Lighting Schematics',
      'Custom Art & Decor Curation'
    ],
    processSteps: [
      { step: '01', title: 'Social Flow Layout', description: 'Balancing conversation clusters and pathway circulation.' },
      { step: '02', title: 'Material & Fabric Pairing', description: 'Curating velvets, bouclés, leathers, and metal trims.' },
      { step: '03', title: 'Styling & Illumination', description: 'Layering focal, task, and ambient lighting.' }
    ],
    faqs: [
      {
        question: 'Can you sound-insulate our home theatre or TV wall?',
        answer: 'Absolutely. We incorporate acoustic rockwool and architectural fluted acoustic wood slats that absorb reverberation and keep audio crisp.'
      }
    ]
  },
  {
    id: 'srv-6',
    slug: 'bedroom-design',
    name: 'Bedroom Sanctuary Design',
    tagline: 'Restorative Retreats Focused on Serenity and Sleep',
    shortDescription: 'Acoustically treated, circadian lighting-enabled bedroom suites with custom upholstered headboards and serene color palettes.',
    fullDescription: 'Your bedroom is your sanctuary from the frantic outside world. We focus on thermal comfort, blackout shading solutions, soundproofing, ergonomic reading sconces, and tactile textiles that invite deep relaxation.',
    startingPrice: '₹1.8 Lakhs onwards',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    iconName: 'BedDouble',
    features: [
      'Circadian Rhythm Smart Lighting',
      'Acoustically Padded Headboard Walls',
      'Integrated Hidden Dressing Units',
      'Hypoallergenic Natural Finishes'
    ],
    deliverables: [
      'Master Bed Suite Layout & 3D Render',
      'Dressing Table & Lighting Detail Plan',
      'Curtain & Blackout Drapery Specifications'
    ],
    processSteps: [
      { step: '01', title: 'Sleep Environment Analysis', description: 'Assessing light infiltration and noise levels.' },
      { step: '02', title: 'Custom Bed & Joinery Design', description: 'Designing integrated nightstands with USB-C and light controls.' },
      { step: '03', title: 'Fabric & Linen Selection', description: 'Selecting breathable, luxurious bedding and drapery.' }
    ],
    faqs: [
      {
        question: 'Do you design kids and teenager rooms?',
        answer: 'Yes! We create adaptive kids rooms with study pods, magnetic boards, bunk beds, and modular storage that evolves as the child grows.'
      }
    ]
  },
  {
    id: 'srv-7',
    slug: 'bathroom-design',
    name: 'Luxury Spa Bathrooms',
    tagline: 'Private Wellness & Spa-Grade Sanctuaries',
    shortDescription: 'Bookmatched Italian marble walls, frameless fluted shower enclosures, thermostatic Hansgrohe/Grohe rain showers, and backlit smart mirrors.',
    fullDescription: 'We transform utilitarian bathrooms into five-star wellness experiences. Featuring radiant floor heating, recessed niche lighting, anti-fog touch mirrors, floating vanity units, and concealed cisterns.',
    startingPrice: '₹1.2 Lakhs onwards',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Bath',
    features: [
      'Thermostatic Concealed Shower Systems',
      'Bookmatched Italian Marble & Large Format Porcelain',
      'Anti-Fog Touch Mirrors with Warm Dimming',
      'Custom Quartz Floating Vanities with Undermount Basins'
    ],
    deliverables: [
      'Tile Laying Pattern & Plumbing Grid',
      'Waterproofing Verification Certificate',
      'Niche & Shower Glass Fabrication Drawings'
    ],
    processSteps: [
      { step: '01', title: 'Wet/Dry Zoning', description: 'Creating distinct glass-enclosed shower zones.' },
      { step: '02', title: 'Multi-layer Waterproofing', description: 'German elastomeric membrane sealing and flood testing.' },
      { step: '03', title: 'Stone Cladding & Fixtures', description: 'Precision tile mitering and fixture installation.' }
    ],
    faqs: [
      {
        question: 'How do you prevent bathroom water leakage in high-rise apartments?',
        answer: 'We apply a 3-layer fiber-reinforced polymer waterproofing membrane with angle filleting and conduct a mandatory 72-hour standing water flood test before laying tiles.'
      }
    ]
  },
  {
    id: 'srv-8',
    slug: 'office-interiors',
    name: 'Corporate & Executive Offices',
    tagline: 'Inspiring Workspaces Built for Productivity and Prestige',
    shortDescription: 'Modern corporate headquarters, boutique executive cabins, conference suites, and collaborative open-plan workstations.',
    fullDescription: 'We build work environments that attract top talent, boost productivity, and communicate institutional authority. Incorporating acoustic phone booths, ergonomic Herman Miller seating, cable management, and high-efficiency HVAC zoning.',
    startingPrice: '₹12 Lakhs onwards',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Building2',
    features: [
      'Acoustic Partitioning & Sound Masking',
      'Ergonomic Workstation Clusters with Cable Ducting',
      'Biophilic Green Walls & Natural Lighting Maximization',
      'Smart Boardrooms with Integrated Video Conferencing'
    ],
    deliverables: [
      'Occupancy & Fire-Safety Layout Plans',
      'Data Cabling & Power Grid Infrastructure Plan',
      'Branded Reception & Executive Boardroom Renders'
    ],
    processSteps: [
      { step: '01', title: 'Workforce Spatial Study', description: 'Mapping collaboration vs focus work ratios.' },
      { step: '02', title: 'MEP & Safety Approvals', description: 'Sprinkler, HVAC, and power load calculations.' },
      { step: '03', title: 'Rapid Turnkey Fitout', description: 'Weekend/night shifts to minimize business disruption.' }
    ],
    faqs: [
      {
        question: 'Can you handle commercial building landlord NOCs and approvals?',
        answer: 'Yes. Our team prepares all necessary MEP drawings, fire safety compliance documentation, and coordinates with building facility managers.'
      }
    ]
  },
  {
    id: 'srv-9',
    slug: 'commercial-interiors',
    name: 'Commercial, Retail & Hospitality',
    tagline: 'High-Conversion Experiential Spaces for Brands',
    shortDescription: 'Flagship retail boutiques, fine dining restaurants, artisanal cafes, and luxury salon/spa interiors designed for customer dwell time and Instagrammable moments.',
    fullDescription: 'Retail and dining interiors require a blend of theatrics, customer journey mapping, and rugged commercial durability. We engineer spaces that drive footfall, maximize table turnover, and showcase brand merchandise under theatrical lighting.',
    startingPrice: '₹15 Lakhs onwards',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Store',
    features: [
      'Customer Flow & High-Visibility Merchandising',
      'Commercial Grade High-Traffic Materials (AC5/Porcelain)',
      'Theatrical Accent Lighting & Illuminated Signage',
      'Commercial Kitchen & POS Exhaust Integration'
    ],
    deliverables: [
      'Brand Identity Interior Guideline Book',
      'Fixture & Display Joinery Working CADs',
      'Lighting Lux Calculations & HVAC Plan'
    ],
    processSteps: [
      { step: '01', title: 'Brand Story Discovery', description: 'Translating brand ethos into physical material palettes.' },
      { step: '02', title: 'Customer Pathway Modeling', description: 'Optimizing checkout flow and display sightlines.' },
      { step: '03', title: 'Fast-Track Handover', description: 'Completing fitouts in 30–60 days to meet launch dates.' }
    ],
    faqs: [
      {
        question: 'Do you supply custom commercial display racks and counters?',
        answer: 'Yes, we manufacture custom powder-coated metal racks, fluted cash counters, and acrylic backlit display cases in our own facilities.'
      }
    ]
  },
  {
    id: 'srv-10',
    slug: 'home-renovation',
    name: 'Complete Home Renovation',
    tagline: 'Transforming Dated Properties into Modern Masterpieces',
    shortDescription: 'Full structural remodeling, wall reconfigurations, plumbing/electrical overhaul, and fresh contemporary finishes for existing apartments and villas.',
    fullDescription: 'Love your neighborhood but tired of your outdated home? Our renovation service updates aging civil infrastructure, knocks down non-load-bearing walls to create open concepts, replaces vintage flooring with expansive marble, and modernizes all bathrooms and kitchens.',
    startingPrice: '₹6 Lakhs onwards',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Hammer',
    features: [
      'Structural Assessment & Safe Wall Demolition',
      'Complete Plumbing & Electrical Rewiring',
      'Marble Grinding & Polyurethane Floor Restoration',
      'Old Tile Removal & Subfloor Leveling'
    ],
    deliverables: [
      'Before & After Demolition Comparison Blueprint',
      'Revised MEP Conduit & Plumbing Grid',
      'Debris Removal & Society Clearance Protocol'
    ],
    processSteps: [
      { step: '01', title: 'Structural Feasibility Audit', description: 'Checking column beams, wet stacks, and society bylaws.' },
      { step: '02', title: 'Controlled Demolition & Debris Disposal', description: 'Dust-free cutting and eco-friendly debris transport.' },
      { step: '03', title: 'New Infrastructure & Fitouts', description: 'Modernizing pipes, wiring, and installing new finishes.' }
    ],
    faqs: [
      {
        question: 'How do you handle noise restrictions and society permissions during renovation?',
        answer: 'We strictly follow apartment society working hours (usually 10 AM to 5 PM, Monday-Friday), install acoustic dust sheets, and manage all security passes and indemnity bonds.'
      }
    ]
  }
];
