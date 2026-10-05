'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Compass, 
  Ruler, 
  Palette, 
  Box, 
  Layers, 
  Hammer, 
  ShieldCheck, 
  Key,
  ArrowRight
} from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    subtitle: 'Understanding Your Rhythm & Space',
    icon: <Compass className="w-5 h-5 text-[#C5A880]" />,
    description: 'We meet at our studio or online to discuss your lifestyle, family routines, aesthetic preferences, budget boundaries, and timeline expectations.'
  },
  {
    step: '02',
    title: 'Precision Site Laser Scan',
    subtitle: 'Sub-Millimeter Site Assessment',
    icon: <Ruler className="w-5 h-5 text-[#C5A880]" />,
    description: 'Our site engineers conduct a digital laser survey of your apartment or villa, verifying civil shafts, wet areas, ceiling heights, and HVAC constraints.'
  },
  {
    step: '03',
    title: 'Concept & Spatial Zoning',
    subtitle: 'Optimizing Movement & Ergonomics',
    icon: <Palette className="w-5 h-5 text-[#C5A880]" />,
    description: 'We generate 2D architectural layout iterations focusing on light circulation, Vastu harmony, and bespoke functional compartmentalization.'
  },
  {
    step: '04',
    title: 'Photorealistic 3D Renders',
    subtitle: 'Experience Your Home Before Build',
    icon: <Box className="w-5 h-5 text-[#C5A880]" />,
    description: 'We produce 8K photorealistic 3D renders and virtual walkthroughs. You see exact stone grains, veneer tones, lighting scenes, and joinery details.'
  },
  {
    step: '05',
    title: 'Atelier Material Experience',
    subtitle: 'Tactile Physical Curation',
    icon: <Layers className="w-5 h-5 text-[#C5A880]" />,
    description: 'Touch and feel genuine Italian Statuario marble slabs, smoked oak veneers, Belgian linen textiles, and Blum hardware at our design studio.'
  },
  {
    step: '06',
    title: 'Off-Site Precision Production',
    subtitle: 'Automated Factory Fabrication',
    icon: <Hammer className="w-5 h-5 text-[#C5A880]" />,
    description: 'All modular cabinetry and joinery are precision-cut and edge-banded in our automated German-tech facility while civil works happen on-site in parallel.'
  },
  {
    step: '07',
    title: '150-Point Quality Audit',
    subtitle: 'Rigorous Multi-Layer Inspections',
    icon: <ShieldCheck className="w-5 h-5 text-[#C5A880]" />,
    description: 'Our Quality Assurance team checks laser leveling, hinge alignment, waterproofing sealants, electrical loads, and paint smoothness.'
  },
  {
    step: '08',
    title: 'White-Glove Handover',
    subtitle: 'Welcome to Your Masterpiece',
    icon: <Key className="w-5 h-5 text-[#C5A880]" />,
    description: 'Professional deep cleaning, designer styling, warranty certificate handover, and complimentary 1-year concierge support initiation.'
  }
];

export default function DesignProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
            THE ATELIER BLUEPRINT
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#191816] tracking-tight">
            Our 8-Step Architectural Process
          </h2>
          <p className="text-sm sm:text-base text-[#6B665E] mt-3 font-light leading-relaxed">
            A disciplined, milestone-driven journey that transforms complex construction into an enjoyable, transparent luxury experience.
          </p>
        </div>

        {/* 8-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((item, idx) => (
            <div
              key={item.step}
              onClick={() => setActiveStep(idx)}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                activeStep === idx
                  ? 'bg-white border-[#C5A880] shadow-xl ring-2 ring-[#C5A880]/20'
                  : 'bg-white/60 border-[#EAE4DA] hover:bg-white hover:border-[#C5A880]/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#EAE4DA] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-serif-heading text-xl font-bold text-[#C5A880]">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-serif-heading text-lg font-bold text-[#191816] mb-1">
                  {item.title}
                </h3>
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#948E85] mb-3">
                  {item.subtitle}
                </h4>
                <p className="text-xs text-[#6B665E] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#FAF8F5] flex items-center text-[11px] text-[#C5A880] font-medium">
                <span>Phase {Math.floor(idx / 2) + 1} Milestone</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 text-center">
          <Link
            href="/process"
            className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#191816] hover:text-[#C5A880] transition-colors"
          >
            <span>Learn More About Our Quality Protocols & Warranty Standards</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
