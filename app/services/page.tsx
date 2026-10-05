'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Sparkles, Shield, Clock } from 'lucide-react';
import { SERVICES } from '@/lib/data/services';
import ConsultationModal from '@/components/layout/ConsultationModal';

export default function ServicesPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
            DESIGN & EXECUTION PRACTICE
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold text-[#191816] tracking-tight">
            Complete Interior Architectural Services
          </h1>
          <p className="text-sm sm:text-base text-[#6B665E] mt-3 font-light leading-relaxed">
            From single-point turnkey home execution to high-precision modular kitchens and acoustic living spaces, explore our full spectrum of specialized capabilities.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12">
          {SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              className={`bg-white rounded-3xl border border-[#EAE4DA] overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`lg:col-span-6 h-72 sm:h-96 relative overflow-hidden ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url(${srv.image})` }}
                />
                <div className="absolute top-4 left-4 bg-[#191816]/90 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full border border-white/10">
                  {srv.startingPrice}
                </div>
              </div>

              {/* Content */}
              <div className={`lg:col-span-6 p-8 sm:p-12 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-1">
                    {srv.tagline}
                  </span>
                  <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#191816] mb-3">
                    <Link href={`/services/${srv.slug}`} className="hover:text-[#C5A880] transition-colors">
                      {srv.name}
                    </Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-[#6B665E] leading-relaxed font-light">
                    {srv.shortDescription}
                  </p>
                </div>

                {/* Inclusions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {srv.features.slice(0, 4).map((feat, fIdx) => (
                    <div key={fIdx} className="text-xs text-[#191816] flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#FAF8F5] flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    href={`/services/${srv.slug}`}
                    className="w-full sm:w-auto bg-[#191816] hover:bg-[#C5A880] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <span>View Service Specs & Process</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => setIsConsultationOpen(true)}
                    className="w-full sm:w-auto border border-[#EAE4DA] hover:border-[#191816] text-[#191816] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors text-center"
                  >
                    Book Consultation
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
