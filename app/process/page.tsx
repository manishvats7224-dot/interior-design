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
  ArrowRight,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import ConsultationModal from '@/components/layout/ConsultationModal';

export default function ProcessPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const steps = [
    {
      num: '01',
      title: 'Discovery & Consultation',
      duration: 'Week 1',
      desc: 'We map out your lifestyle, cooking habits, family routines, lighting preferences, budget expectations, and possession milestones.',
      inclusions: ['Lifestyle & Ergonomics Audit', 'Budget Feasibility Roadmap', 'Preliminary Moodboard Alignment']
    },
    {
      num: '02',
      title: 'Precision Site Laser Survey',
      duration: 'Week 1–2',
      desc: 'Our site engineers conduct a sub-millimeter digital laser scan of your property, analyzing column locations, duct routing, and plumbing stacks.',
      inclusions: ['Sub-millimeter 3D Laser Scan', 'Civil & MEP Constraint Mapping', 'Slab Leveling Assessment']
    },
    {
      num: '03',
      title: 'Spatial Planning & 2D Layouts',
      duration: 'Week 2–3',
      desc: 'We iterate through space-optimized furniture layouts, circulation pathways, and Vastu-harmonized directional placements.',
      inclusions: ['2D Furniture Placement Blueprints', 'Circulation & Daylighting Analysis', 'Vastu Orientation Layouts']
    },
    {
      num: '04',
      title: 'Photorealistic 8K 3D Renders',
      duration: 'Week 3–4',
      desc: 'Experience your future residence in photorealistic clarity. See exact marble vein matching, veneer shades, fabric textures, and ceiling lighting.',
      inclusions: ['8K Photoreal Room Renders', 'Virtual 360° Walkthrough', 'Lighting Scene Simulation']
    },
    {
      num: '05',
      title: 'Atelier Material Experience',
      duration: 'Week 4–5',
      desc: 'Visit our studio to touch and feel physical samples of Italian marble slabs, European oak veneers, Dekton countertops, and Blum mechanisms.',
      inclusions: ['Physical Material Palette Box', 'Hardware Demo & Testing', 'Final Itemized BOQ Signoff']
    },
    {
      num: '06',
      title: 'Off-Site Precision Production',
      duration: 'Weeks 5–8',
      desc: 'Cabinetry is precision-machined in our automated German CNC factory with 0.1mm tolerance while civil and electrical works happen on site.',
      inclusions: ['BWP Plywood CNC Fabrication', 'Automated Edge Banding & PU Polish', 'Parallel Civil & False Ceiling Work']
    },
    {
      num: '07',
      title: '150-Point Quality Assurance Audit',
      duration: 'Week 9',
      desc: 'Our specialized QA engineers conduct rigorous multi-layer checks on alignment, water seals, electrical circuits, and paint gloss uniformity.',
      inclusions: ['72-Hour Standing Water Flood Test', 'Laser Level Alignment Check', 'Circuit Load & Safety Audit']
    },
    {
      num: '08',
      title: 'White-Glove Move-in Handover',
      duration: 'Week 10',
      desc: 'Professional deep cleaning, designer styling with art and accessories, 10-year warranty certificate delivery, and formal key handover.',
      inclusions: ['Deep Cleaning & Air Purification', '10-Year Warranty Certificate', '1-Year Complimentary Maintenance Concierge']
    }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
            METHODOLOGY & QUALITY
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold text-[#191816] tracking-tight">
            The 8-Step Atelier Journey
          </h1>
          <p className="text-sm sm:text-base text-[#6B665E] mt-3 font-light leading-relaxed">
            How we eliminate the chaos of traditional home construction with industrial precision, clear milestones, and white-glove execution.
          </p>
        </div>

        {/* Steps Detailed Timeline */}
        <div className="space-y-8 max-w-5xl mx-auto mb-16">
          {steps.map((st) => (
            <div
              key={st.num}
              className="bg-white rounded-3xl border border-[#EAE4DA] p-8 sm:p-10 shadow-md flex flex-col md:flex-row gap-8 items-start justify-between"
            >
              <div className="flex items-start space-x-6">
                <span className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#C5A880] shrink-0">
                  {st.num}
                </span>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-serif-heading text-2xl font-bold text-[#191816]">
                      {st.title}
                    </h2>
                    <span className="bg-[#FAF8F5] text-[#9E8159] border border-[#EAE4DA] text-xs font-semibold px-3 py-1 rounded-full">
                      {st.duration}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6B665E] font-light leading-relaxed">
                    {st.desc}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                    {st.inclusions.map((inc, iIdx) => (
                      <div key={iIdx} className="text-xs text-[#191816] flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-[#191816] text-white p-10 sm:p-14 rounded-3xl border border-[#2F2C28] text-center max-w-4xl mx-auto shadow-2xl space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block">
            READY TO START?
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold">
            Begin Your 8-Step Transformation
          </h2>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto font-light leading-relaxed">
            Schedule a complimentary discovery consultation with our Principal Architects today.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="bg-[#C5A880] hover:bg-[#9E8159] text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-lg inline-flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Discovery Session</span>
            </button>
          </div>
        </div>

      </div>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
