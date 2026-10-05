'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Award, MapPin, Calendar, ArrowRight, GraduationCap, Sparkles } from 'lucide-react';
import { DESIGNERS } from '@/lib/data/designers';
import { PROJECTS } from '@/lib/data/projects';
import ConsultationModal from '@/components/layout/ConsultationModal';

export default function DesignersPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
            DESIGN LEADERSHIP
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold text-[#191816] tracking-tight">
            Our Principal Architects & Specialists
          </h1>
          <p className="text-sm sm:text-base text-[#6B665E] mt-3 font-light leading-relaxed">
            Every home at Atelier Aura is led by a dedicated Principal Architect who guides spatial zoning, material sourcing, custom millwork, and site execution.
          </p>
        </div>

        {/* Designers Full Profiles */}
        <div className="space-y-12">
          {DESIGNERS.map((des) => {
            const designerProjects = PROJECTS.filter(p => des.featuredProjects.includes(p.slug));

            return (
              <div
                key={des.id}
                className="bg-white rounded-3xl border border-[#EAE4DA] overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Avatar Photo Side */}
                <div className="lg:col-span-4 relative h-80 lg:h-auto overflow-hidden bg-neutral-900">
                  <div
                    className="w-full h-full bg-cover bg-top"
                    style={{ backgroundImage: `url(${des.avatar})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C5A880] block">
                      {des.experienceYears}+ YEARS EXPERIENCE
                    </span>
                    <h3 className="font-serif-heading text-2xl font-bold">
                      {des.name}
                    </h3>
                    <p className="text-xs text-neutral-300">{des.role}</p>
                  </div>
                </div>

                {/* Details Side */}
                <div className="lg:col-span-8 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#6B665E] border-b border-[#FAF8F5] pb-4 mb-4">
                      <span className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 text-[#C5A880] mr-1" />
                        {des.city} Studio
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Award className="w-3.5 h-3.5 text-[#C5A880] mr-1" />
                        {des.projectsCompleted}+ Homes Delivered
                      </span>
                      <span>•</span>
                      <span className="flex items-center text-[#191816] font-medium">
                        <GraduationCap className="w-3.5 h-3.5 text-[#C5A880] mr-1" />
                        {des.education}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#6B665E] leading-relaxed font-light mb-4">
                      {des.bio}
                    </p>

                    <blockquote className="p-4 rounded-xl bg-[#FAF8F5] border-l-2 border-[#C5A880] text-xs italic text-[#191816] font-serif-heading mb-6">
                      &ldquo;{des.philosophy}&rdquo;
                    </blockquote>

                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#948E85] block mb-2">
                        Design Specializations:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {des.specializations.map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="bg-[#FAF8F5] border border-[#EAE4DA] text-xs font-medium text-[#191816] px-3 py-1 rounded-lg"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="pt-4 border-t border-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      onClick={() => setIsConsultationOpen(true)}
                      className="w-full sm:w-auto bg-[#191816] hover:bg-[#C5A880] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 shadow-md"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Consultation with {des.name.split(' ')[0]}</span>
                    </button>

                    <Link
                      href="/projects"
                      className="text-xs font-semibold text-[#C5A880] hover:text-[#191816] flex items-center"
                    >
                      <span>Explore Portfolio</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
