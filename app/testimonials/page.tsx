'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, ShieldCheck, ArrowUpRight, Quote, Sparkles, Calendar } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data/testimonials';
import ConsultationModal from '@/components/layout/ConsultationModal';

export default function TestimonialsPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
            CLIENT EXPERIENCES
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold text-[#191816] tracking-tight">
            500+ Homes, 500+ Stories
          </h1>
          <p className="text-sm sm:text-base text-[#6B665E] mt-3 font-light leading-relaxed">
            Read authentic reviews from homeowners who entrusted their sanctuaries to Atelier Aura across Gurgaon, Mumbai, Bangalore, and Delhi.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-3xl border border-[#EAE4DA] overflow-hidden shadow-md flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url(${test.projectImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#C5A880] block">
                      {test.propertyType}
                    </span>
                    <h3 className="font-serif-heading text-lg font-bold">
                      {test.projectName}
                    </h3>
                  </div>
                  {test.projectSlug && (
                    <Link
                      href={`/projects/${test.projectSlug}`}
                      className="bg-white text-[#191816] hover:bg-[#C5A880] hover:text-white px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  )}
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
                    ))}
                  </div>
                  {test.verifiedOwner && (
                    <span className="inline-flex items-center text-[10px] font-semibold text-[#2E7D32] bg-[#E8F5E9] px-2.5 py-0.5 rounded-full">
                      <ShieldCheck className="w-3 h-3 mr-1" />
                      Verified Owner
                    </span>
                  )}
                </div>

                <Quote className="w-8 h-8 text-[#EAE4DA]" />
                <p className="font-serif-heading text-base sm:text-lg text-[#191816] italic leading-relaxed">
                  &ldquo;{test.content}&rdquo;
                </p>

                <div className="pt-4 border-t border-[#FAF8F5] flex items-center space-x-3">
                  <div
                    className="w-10 h-10 rounded-full bg-cover bg-center border border-[#EAE4DA]"
                    style={{ backgroundImage: `url(${test.clientAvatar})` }}
                  />
                  <div>
                    <div className="font-bold text-xs text-[#191816]">{test.clientName}</div>
                    <div className="text-[11px] text-[#6B665E]">{test.clientLocation}</div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="text-center">
          <button
            onClick={() => setIsConsultationOpen(true)}
            className="bg-[#191816] hover:bg-[#C5A880] text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-md inline-flex items-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Own Consultation</span>
          </button>
        </div>

      </div>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
