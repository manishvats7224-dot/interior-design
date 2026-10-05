import { Package } from '@/types';

export const PACKAGES: Package[] = [
  {
    id: 'pkg-essential',
    name: 'Essential Living',
    tagline: 'Smart, Functional & Stylish Modern Essentials',
    startingPrice: '₹3.5 Lakhs',
    priceNote: 'Starting from ₹3.5L for 2BHK / ₹4.5L for 3BHK',
    idealFor: 'Rental investments, first-time homeowners, and functional modern upgrades on a smart budget.',
    warrantyYears: 5,
    timelineWeeks: '4–6 Weeks',
    features: [
      'Comprehensive 2D Layout & 3D Spatial Renders',
      'Modular Kitchen with Soft-Close Hardware',
      '2 Custom Wardrobes (up to 7ft height)',
      'Basic TV Feature Unit with Concealed Wiring',
      'Premium Royal Acrylic Paint (Asian Paints Royale)',
      'False Ceiling in Living & Dining with LED Cove',
      'Dedicated Site Supervisor'
    ],
    includedRooms: ['Modular Kitchen', 'Master Bedroom', 'Living Room', 'Guest Bedroom'],
    detailedSpecs: {
      material: 'Commercial HDHMR Board / IS 303 MR Grade Plywood',
      hardware: 'Hettich / Ebco Soft-Close Hinges and Telescopic Channels',
      finishes: '0.8mm Matte & Suede Finish High-Pressure Laminates',
      lighting: 'Warm White 3000K Recessed COB LED Spotlights'
    }
  },
  {
    id: 'pkg-premium',
    name: 'Atelier Premium',
    tagline: 'Our Most Popular Turnkey Signature Experience',
    startingPrice: '₹7.5 Lakhs',
    priceNote: 'Starting from ₹7.5L for 2BHK / ₹9.8L for 3BHK / ₹14L for 4BHK',
    isPopular: true,
    idealFor: 'Families seeking complete luxury transformation, bespoke cabinetry, high-end stone, and turnkey peace of mind.',
    warrantyYears: 10,
    timelineWeeks: '6–8 Weeks',
    features: [
      '8K Photorealistic 3D Renders & Virtual Walkthrough',
      'German Modular Kitchen with Quartz / Sintered Stone Top',
      'Floor-to-Ceiling Wardrobes with Fluted Tinted Glass & LEDs',
      'Acoustic Fluted Wooden Feature Panelling in Living Room',
      'Complete False Ceiling with Shadow Gap Profiles across All Rooms',
      'Designer Lighting Package & Magnetic Track Lights',
      'Custom Vanity Units in All Bathrooms',
      'Dedicated Project Manager & Daily Video Updates',
      '10-Year Comprehensive Warranty'
    ],
    includedRooms: ['Modular Kitchen', 'Master Suite', 'Living & Dining', 'Kids Room', 'Guest Room', 'Bathrooms', 'Foyer'],
    detailedSpecs: {
      material: '100% Boiling Water Proof (BWP) Marine Ply & High-Density HDHMR',
      hardware: 'Blum Clip Top Blumotion & Tandembox Antaro Drawers',
      finishes: '1mm Anti-Fingerprint Matte Acrylics & Natural Smoked Teak Veneer',
      lighting: 'Architectural Magnetic Track Spots + Lutron Smart Scene Dimmers'
    }
  },
  {
    id: 'pkg-luxury',
    name: 'Bespoke Haute',
    tagline: 'Ultra-Luxury Architectural Living & Custom Craftsmanship',
    startingPrice: '₹18 Lakhs+',
    priceNote: 'Starting from ₹18L for 3BHK / ₹25L+ for Penthouses & Villas',
    idealFor: 'Discerning homeowners who demand Italian marble, custom brass metalwork, automation, and museum-grade finishes.',
    warrantyYears: 10,
    timelineWeeks: '10–14 Weeks',
    features: [
      'Principal Architect Directed Design & Styling',
      'Imported Italian Statuario / Travertine Flooring & Cladding',
      'Motorized Blum Servo-Drive Modular Kitchen with Miele Built-ins',
      'Walk-In Glass Wardrobes with Leather Drawer Inlays & Sensor Lights',
      'Full Home Crestron / Lutron IoT Automation & Climate Control',
      'Bespoke Handcrafted Furniture in Italian Velvet & Bouclé',
      'Curated Art, Sculptures & Imported Architectural Fixtures',
      'White-Glove Move-in Setup & 1-Year Complimentary Concierge Support'
    ],
    includedRooms: ['All Rooms, Walk-in Wardrobes, Bar Lounge, Balcony Deck, Powder Room, Spa Ensuite'],
    detailedSpecs: {
      material: 'Imported Birch Plywood, Solid White Oak, Exotic Veneers & Brass',
      hardware: 'Blum Servo-Drive Motorized & Salice Air Concealed Hinges',
      finishes: 'Polyurethane (PU) Matte Lacquer & Bookmatched Italian Marble',
      lighting: 'Flos / Delta Light Architectural Fixtures with DALI Dimmable Protocols'
    }
  }
];
