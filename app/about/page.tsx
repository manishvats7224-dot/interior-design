'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  Compass, 
  Hammer,
  ArrowRight,
  Calendar
} from 'lucide-react';
import ConsultationModal from '@/components/layout/ConsultationModal';

export default function AboutPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
            HERITAGE & PHILOSOPHY
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold text-[#191816] tracking-tight">
            Interior Architecture Crafted for Generations
          </h1>
          <p className="text-sm sm:text-base text-[#6B665E] mt-3 font-light leading-relaxed">
            Atelier Aura was founded on a singular premise: that luxury is not surface ornamentation, but the uncompromising harmony of spatial light, authentic raw materials, and factory-precision joinery.
          </p>
        </div>

        {/* Hero Image Showcase */}
        <div className="relative h-80 sm:h-[500px] rounded-3xl overflow-hidden border border-[#EAE4DA] shadow-2xl mb-20">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-1">
              THE ATELIER STANDARD
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold">
              500+ Bespoke Sanctuaries Across India
            </h2>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#EAE4DA] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DA] flex items-center justify-center text-[#C5A880]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif-heading text-2xl font-bold text-[#191816]">
              Architectural Pedigree
            </h3>
            <p className="text-xs sm:text-sm text-[#6B665E] font-light leading-relaxed">
              Every design is originated by architects trained at prestigious institutions (SPA Delhi, Politecnico di Milano, CEPT). We design spaces that honor structural load bearings and daylight orientations.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#EAE4DA] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DA] flex items-center justify-center text-[#C5A880]">
              <Hammer className="w-6 h-6" />
            </div>
            <h3 className="font-serif-heading text-2xl font-bold text-[#191816]">
              Automated Off-Site Joinery
            </h3>
            <p className="text-xs sm:text-sm text-[#6B665E] font-light leading-relaxed">
              We operate an automated German CNC manufacturing facility. All cabinetry is pre-cut with 0.1mm tolerance and edge-banded in dust-free controlled chambers, eliminating messy on-site carpentry delays.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#EAE4DA] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DA] flex items-center justify-center text-[#C5A880]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif-heading text-2xl font-bold text-[#191816]">
              10-Year Warranty & Zero Escalation
            </h3>
            <p className="text-xs sm:text-sm text-[#6B665E] font-light leading-relaxed">
              We offer 100% itemized fixed BOQs. Once signed, your price is locked with zero mid-construction cost surprises. All structural woodwork is warranted for 10 years against borer and delamination.
            </p>
          </div>
        </div>

        {/* Studio Numbers */}
        <div className="bg-[#191816] text-white rounded-3xl p-10 sm:p-16 border border-[#2F2C28] shadow-2xl mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-serif-heading text-4xl sm:text-5xl font-bold text-white mb-1">500+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">Residences Delivered</div>
            </div>
            <div>
              <div className="font-serif-heading text-4xl sm:text-5xl font-bold text-white mb-1">12+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">Years Studio Experience</div>
            </div>
            <div>
              <div className="font-serif-heading text-4xl sm:text-5xl font-bold text-white mb-1">45 Days</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">Move-In Guarantee</div>
            </div>
            <div>
              <div className="font-serif-heading text-4xl sm:text-5xl font-bold text-white mb-1">100%</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">Fixed BOQ Guarantee</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-4">
          <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#191816]">
            Ready to experience the Atelier difference?
          </h3>
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
