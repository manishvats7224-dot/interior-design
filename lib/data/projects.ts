import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    slug: 'the-glasshouse-penthouse-gurgaon',
    title: 'The Glasshouse Penthouse',
    subtitle: 'A bespoke 4BHK duplex penthouse blending Italian marble, custom brass accents, and panoramic skyline vistas.',
    location: 'Golf Course Road, Gurgaon',
    city: 'Gurgaon',
    propertyType: 'Penthouse',
    areaSqFt: 4200,
    budgetRange: '₹65 – 80 Lakhs',
    style: 'Luxury Neoclassical',
    completionDate: 'November 2025',
    durationMonths: 5,
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    ],
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    isFeatured: true,
    designerId: 'des-1',
    designerName: 'Aarav Sharma',
    designerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    conceptDescription: 'A sanctuary in the sky balancing warmth, neoclassical symmetry, and ultra-modern smart living automation.',
    designStory: 'Our clients, an art-collector couple, wanted a home that felt like a private gallery without sacrificing everyday comfort. We designed custom arched portals with burnished champagne gold inlays, Statuario marble flooring with brass chevron trims, and acoustic fluted wood panelling that conceals all entertainment systems effortlessly.',
    rooms: [
      {
        name: 'Grand Living & Dining Room',
        description: 'Double-height ceiling with bespoke crystal chandelier, Italian Statuario marble, and custom velvet seating.',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        highlights: ['Double-height acoustic wall panelling', 'Concealed Bose surround sound', 'Custom brass bar unit with onyx lighting'],
      },
      {
        name: 'Island Chef Kitchen',
        description: 'Handleless matte anthracite cabinetry with quartz countertop, Blum servo-drive drawers, and Miele appliances.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        highlights: ['Dekton Laurent scratchproof island', 'Motorized pantry pull-out', 'Integrated wine cellar'],
      },
      {
        name: 'Master Sanctuary Bedroom',
        description: 'Plush velvet headboard wall with integrated circadian lighting and seamless transition to a glass walk-in wardrobe.',
        image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
        highlights: ['Sound-dampening fluted timber wall', 'Custom leather nightstands', 'Fluted glass tinted wardrobe'],
      },
      {
        name: 'Spa Ensuite Bathroom',
        description: 'Freestanding soaking tub overlooking the skyline with brushed gold Grohe fittings and heated towel rails.',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        highlights: ['Bookmatched Calacatta marble wall', 'Rainfall ceiling shower', 'Anti-fog LED smart mirror'],
      }
    ],
    materials: [
      { category: 'Flooring', items: ['Italian Statuario Marble', 'Smoked European Oak Herringbone'] },
      { category: 'Woodwork & Cabinetry', items: ['Marine Grade HDHMR', 'Natural Charcoal Teak Veneer', 'PU Matte Polish'] },
      { category: 'Metals & Hardware', items: ['Brushed Champagne Gold Profiles', 'Blum Soft-Close Systems', 'Hafele Glass Fittings'] },
      { category: 'Lighting & Automation', items: ['Lutron Smart Lighting', 'Delta Light Architectural Luminaires', 'Loxone Automation'] },
    ],
    timeline: [
      { phase: 'Discovery & Concept 3D', weeks: 'Weeks 1–3', description: 'Site laser scan, moodboard alignment, 8K realistic render approvals.' },
      { phase: 'Civil & MEP Infrastructure', weeks: 'Weeks 4–8', description: 'HVAC ducting, smart wiring, concealed plumbing, acoustic wall treatment.' },
      { phase: 'Precision Carpentry & Millwork', weeks: 'Weeks 9–15', description: 'Factory-crafted modular systems, veneer pressing, marble cladding.' },
      { phase: 'Finishes, Lighting & Handover', weeks: 'Weeks 16–20', description: 'Art curation, designer styling, 150-point quality audit & white-glove handover.' }
    ]
  },
  {
    id: 'proj-2',
    slug: 'nordic-sanctuary-3bhk-bangalore',
    title: 'Nordic Sanctuary 3BHK',
    subtitle: 'A serene Scandinavian-Japanese aesthetic featuring blonde ash wood, neutral linen textures, and indoor biophilic courtyards.',
    location: 'Indiranagar, Bangalore',
    city: 'Bangalore',
    propertyType: '3 BHK',
    areaSqFt: 2150,
    budgetRange: '₹28 – 35 Lakhs',
    style: 'Japandi',
    completionDate: 'January 2026',
    durationMonths: 3.5,
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1600&q=85'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    isFeatured: true,
    designerId: 'des-2',
    designerName: 'Ananya Deshmukh',
    designerAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    conceptDescription: 'Stripping away excess to cultivate visual calm, natural light flow, and effortless ergonomics for modern tech professionals.',
    designStory: 'Designed for a young couple working in tech, this space reimagines a standard builder-grade flat into a calming sanctuary. We incorporated micro-cement seamless floors, custom curved ash wood joinery, and an open tatami-style reading nook integrated with the living room balcony.',
    rooms: [
      {
        name: 'Open Living & Tea Nook',
        description: 'Low-slung minimalist seating with warm textured plaster walls and an elevated wooden tea platform.',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
        highlights: ['Seamless micro-cement flooring', 'Concealed storage beneath tea platform', 'Paper pendant Noguchi lanterns'],
      },
      {
        name: 'Minimalist Kitchen',
        description: 'Fluted glass upper cabinets with blonde oak laminate base units and seamless terrazzo countertop.',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
        highlights: ['Handleless J-pull profiles', 'Pull-out spice rack & magic corner', 'Under-cabinet warm ambient LED'],
      },
      {
        name: 'Wabi-Sabi Master Bedroom',
        description: 'Low-profile platform bed with floating side tables, raw linen drapes, and a lime-wash accent wall.',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
        highlights: ['Natural lime plaster wall', 'Organic linen headboard', 'Concealed air conditioning grills'],
      }
    ],
    materials: [
      { category: 'Flooring & Walls', items: ['Seamless Microtopping Cement', 'Limewash Breathable Plaster', 'Cast Terrazzo'] },
      { category: 'Woodwork', items: ['Blonde Ash Wood Veneer', 'High-Density Moisture Resistant Core', 'Natural Oil Matte Sealant'] },
      { category: 'Fabrics', items: ['Belgian Linen Drapes', 'Organic Bouclé Upholstery', 'Hand-knotted Jute Rugs'] }
    ],
    timeline: [
      { phase: 'Concept & Ergonomics', weeks: 'Weeks 1–2', description: 'Space planning, daylight analysis, sample box sign-off.' },
      { phase: 'Civil & Flooring', weeks: 'Weeks 3–6', description: 'Wall demolition, micro-cement application, plumbing revamp.' },
      { phase: 'Modular Joinery', weeks: 'Weeks 7–11', description: 'Factory fabricated modules and bespoke wooden archway installation.' },
      { phase: 'Biophilic Styling', weeks: 'Weeks 12–14', description: 'Plant curation, linen installation, lighting calibration and handover.' }
    ]
  },
  {
    id: 'proj-3',
    slug: 'minimalist-sky-residence-mumbai',
    title: 'Minimalist Sky Residence',
    subtitle: 'A contemporary 3BHK sea-facing apartment in Worli, designed with muted monochromes, smoked glass, and seamless transitions.',
    location: 'Worli Sea Face, Mumbai',
    city: 'Mumbai',
    propertyType: '3 BHK',
    areaSqFt: 2400,
    budgetRange: '₹45 – 55 Lakhs',
    style: 'Modern Contemporary',
    completionDate: 'December 2025',
    durationMonths: 4,
    coverImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    isFeatured: true,
    designerId: 'des-3',
    designerName: 'Vikramaditya Roy',
    designerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    conceptDescription: 'Maximizing Arabian Sea views while creating an uncluttered, high-function modern urban luxury residence.',
    designStory: 'We took advantage of the floor-to-ceiling panoramic windows by creating low-profile bespoke furniture and floating partitions. Smoked glass sliding doors allow natural sea breezes to flow continuously while maintaining acoustic privacy when needed.',
    rooms: [
      {
        name: 'Sea View Living Pavilion',
        description: 'Continuous Italian grey travertine marble flowing from foyer into the balcony deck.',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
        highlights: ['Travertine floating console', 'Acoustic motorized sheer curtains', 'Recessed shadow gap ceiling'],
      },
      {
        name: 'Master Suite',
        description: 'Leather-clad accent panelling with built-in reading sconces and walk-in dressing chamber.',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
        highlights: ['Tinted grey mirror wardrobe', 'Custom king bed with wireless charging', 'Automated blackout blinds'],
      }
    ],
    materials: [
      { category: 'Stone', items: ['Italian Grey Travertine', 'Nero Marquina Black Marble'] },
      { category: 'Glass & Metals', items: ['Fluted Grey Smoked Glass', 'Anodized Black Aluminum Profiles'] },
      { category: 'Woodwork', items: ['Eucalyptus Smoked Veneer', 'Polyurethane High-Gloss White Cabinets'] }
    ],
    timeline: [
      { phase: 'Design & Space Engineering', weeks: 'Weeks 1–3', description: 'Layout restructuring, custom joinery drawings, material mockups.' },
      { phase: 'Core Infrastructure', weeks: 'Weeks 4–7', description: 'Window waterproofing, electrical retrofitting, acoustic ceiling framing.' },
      { phase: 'Fitouts & Cladding', weeks: 'Weeks 8–13', description: 'Stone installation, glass partitions, custom wardrobes.' },
      { phase: 'Final Handover', weeks: 'Weeks 14–16', description: 'Deep cleaning, air filtration audit, client signoff.' }
    ]
  },
  {
    id: 'proj-4',
    slug: 'the-wabi-sabi-villa-alibaug',
    title: 'The Wabi-Sabi Villa',
    subtitle: 'A sprawling 5-bedroom coastal sanctuary celebrating raw earthen textures, teak pergolas, and stone infinity courtyards.',
    location: 'Awas, Alibaug',
    city: 'Mumbai',
    propertyType: 'Villa',
    areaSqFt: 5800,
    budgetRange: '₹90 Lakhs – 1.2 Cr',
    style: 'Japandi',
    completionDate: 'February 2026',
    durationMonths: 6,
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    isFeatured: true,
    designerId: 'des-2',
    designerName: 'Ananya Deshmukh',
    designerAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    conceptDescription: 'Seamless connection between indoor living pavilions and lush tropical gardens using reclaimed natural materials.',
    designStory: 'Constructed with exposed rammed earth, reclaimed Burmese teak rafters, and Kota stone pathways, this villa serves as an effortless weekend getaway.',
    rooms: [
      {
        name: 'Great Room & Courtyard',
        description: 'Open-air high-ceiling pavilion with custom reclaimed wood daybeds and sunken conversation pit.',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
        highlights: ['Sunken conversation lounge', 'Reclaimed teak roof beams', 'Handcrafted ceramic lighting'],
      }
    ],
    materials: [
      { category: 'Masonry & Stone', items: ['Hand-dressed River Bed Stone', 'Mirror-polished Kota Stone'] },
      { category: 'Wood', items: ['Reclaimed Burmese Teak', 'Hand-hewn Cedar'] }
    ],
    timeline: [
      { phase: 'Master Architecture & Interior Plan', weeks: 'Weeks 1–4', description: 'Full 3D landscape and interior integration.' },
      { phase: 'Civil & Roof Structure', weeks: 'Weeks 5–12', description: 'Exposed rafters, stone masonry, climate insulation.' },
      { phase: 'Interiors & Custom Joinery', weeks: 'Weeks 13–20', description: 'Kitchen, bespoke bathroom stone bathtubs, lighting.' },
      { phase: 'Turnkey Commissioning', weeks: 'Weeks 21–24', description: 'Furnishing, audio system calibration, garden styling.' }
    ]
  },
  {
    id: 'proj-5',
    slug: 'contemporary-duplex-vasant-vihar-delhi',
    title: 'Contemporary Duplex Residence',
    subtitle: 'An opulent 4BHK duplex featuring double-height fluted stone walls, bespoke brass spiral staircase, and automated climate zoning.',
    location: 'Vasant Vihar, South Delhi',
    city: 'Delhi',
    propertyType: 'Duplex',
    areaSqFt: 3600,
    budgetRange: '₹55 – 70 Lakhs',
    style: 'Modern Contemporary',
    completionDate: 'October 2025',
    durationMonths: 4.5,
    coverImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85'
    ],
    isFeatured: false,
    designerId: 'des-1',
    designerName: 'Aarav Sharma',
    designerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    conceptDescription: 'Architectural grandeur paired with warm intimate living zones for a multi-generational family.',
    designStory: 'We connected two levels with a sculptural spiral staircase crafted in gunmetal steel and warm walnut treads, creating an unforgettable foyer statement.',
    rooms: [
      {
        name: 'Foyer & Grand Staircase',
        description: 'Curved architectural staircase with brass handrail and integrated step lighting.',
        image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
        highlights: ['Gunmetal spiral spine', 'Solid walnut floating treads', 'Arched fluted wall sconces'],
      }
    ],
    materials: [
      { category: 'Stone', items: ['Boticchino Italian Marble', 'Silver Travertine'] },
      { category: 'Woodwork', items: ['American Walnut Veneer', 'Champagne Metallic PU Lacquer'] }
    ],
    timeline: [
      { phase: 'Structural & Concept', weeks: 'Weeks 1–3', description: 'Staircase engineering and structural reinforcement.' },
      { phase: 'Execution & Carpentry', weeks: 'Weeks 4–14', description: 'Duplex staircase installation, modular kitchen, acoustic panelling.' },
      { phase: 'Finishing & Handover', weeks: 'Weeks 15–18', description: 'Automation setup, luxury furnishings, deep polish and handover.' }
    ]
  },
  {
    id: 'proj-6',
    slug: 'urban-chic-2bhk-noida',
    title: 'Urban Chic 2BHK Apartment',
    subtitle: 'A high-efficiency 2BHK masterclass in space optimization, concealed storage, and vibrant mid-century modern flair.',
    location: 'Sector 150, Noida',
    city: 'Noida',
    propertyType: '2 BHK',
    areaSqFt: 1350,
    budgetRange: '₹16 – 22 Lakhs',
    style: 'Modern Contemporary',
    completionDate: 'March 2026',
    durationMonths: 2.5,
    coverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85'
    ],
    isFeatured: false,
    designerId: 'des-4',
    designerName: 'Meera Iyer',
    designerAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    conceptDescription: 'Smart compact living where every square inch works twice as hard without ever feeling cluttered.',
    designStory: 'By using bespoke multi-functional furniture, a fold-down dining bar, and floor-to-ceiling acrylic wardrobes with hidden dresser units, we transformed this compact 2BHK into an airy, vibrant sanctuary.',
    rooms: [
      {
        name: 'Compact Living & Work Pod',
        description: 'Multi-functional TV wall with integrated work desk and pull-out dining extension.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
        highlights: ['Dual-function transformable furniture', 'Concealed LED cove lighting', 'High-gloss acrylic finishes'],
      }
    ],
    materials: [
      { category: 'Woodwork', items: ['High-Gloss Acrylic Sheets', 'Action TESA HDHMR', 'Anti-Fingerprint Laminate'] },
      { category: 'Hardware', items: ['Hettich InnoTech Drawers', 'Hafele Lift-up Systems'] }
    ],
    timeline: [
      { phase: 'Space Optimization Plan', weeks: 'Weeks 1–2', description: 'Modular cut-list generation and 3D preview.' },
      { phase: 'Modular Manufacturing', weeks: 'Weeks 3–6', description: 'Factory precision cutting, edge-banding, hardware testing.' },
      { phase: 'Site Assembly & Styling', weeks: 'Weeks 7–10', description: 'Installation in 14 days, lighting, curtains, handover.' }
    ]
  }
];
