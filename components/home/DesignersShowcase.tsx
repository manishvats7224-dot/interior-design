'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Award, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { DESIGNERS } from '@/lib/data/designers';

interface DesignersShowcaseProps {
  onOpenConsultation?: () => void;
}

export default function DesignersShowcase({ onOpenConsultation }: DesignersShowcaseProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#EAE4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
              DESIGN LEADERSHIP
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#191816] tracking-tight">
              Meet Our Principal Interior Architects
            </h2>
            <p className="text-sm sm:text-base text-[#6B665E] max-w-2xl mt-2 font-light">
              Collaborate directly with seasoned architectural minds trained at SPA Delhi, Politecnico di Milano, CEPT, and NID.
            </p>
          </div>

          <Link
            href="/designers"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#191816] hover:text-[#C5A880] transition-colors self-start sm:self-auto"
          >
            <span>View All Profiles</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Designers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DESIGNERS.map((des) => (
            <div
              key={des.id}
              className="group bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#EAE4DA] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Avatar with Photo */}
                <div className="relative h-72 overflow-hidden bg-neutral-200">
                  <div
                    className="w-full h-full bg-cover bg-top transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${des.avatar})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif-heading text-xl font-bold">
                      {des.name}
                    </h3>
                    <p className="text-xs text-[#C5A880] font-medium">
                      {des.role}
                    </p>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#6B665E] border-b border-[#EAE4DA] pb-3">
                    <span className="flex items-center">
                      <Award className="w-3.5 h-3.5 mr-1 text-[#C5A880]" />
                      {des.experienceYears}+ Years Exp.
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-[#C5A880]" />
                      {des.city}
                    </span>
                  </div>

                  <p className="text-xs text-[#6B665E] font-light leading-relaxed line-clamp-3">
                    &ldquo;{des.philosophy}&rdquo;
                  </p>

                  {/* Specializations Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {des.specializations.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-white border border-[#EAE4DA] text-[10px] font-medium text-[#191816] px-2.5 py-1 rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    if (onOpenConsultation) {
                      onOpenConsultation();
                    } else {
                      window.location.href = '/consultation';
                    }
                  }}
                  className="w-full bg-[#191816] group-hover:bg-[#C5A880] text-white py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book with {des.name.split(' ')[0]}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
