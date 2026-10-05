'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { 
  MapPin, 
  Sparkles, 
  Calendar, 
  Layers, 
  Ruler, 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Heart,
  CheckCircle2,
  MoveHorizontal
} from 'lucide-react';
import { PROJECTS } from '@/lib/data/projects';
import { db } from '@/lib/supabase/client';
import ConsultationModal from '@/components/layout/ConsultationModal';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = PROJECTS.find((p) => p.slug === slug);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(() => db.getSavedItemIds().includes(project?.id || ''));

  if (!project) {
    return (
      <div className="py-32 text-center">
        <h2 className="font-serif-heading text-3xl font-bold">Project Not Found</h2>
        <Link href="/projects" className="text-[#C5A880] underline mt-4 inline-block">
          ← Back to all projects
        </Link>
      </div>
    );
  }

  const handleToggleSave = () => {
    const updated = db.toggleSavedItem(project.id);
    setIsSaved(updated.includes(project.id));
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      
      {/* Top Breadcrumb & Actions Bar */}
      <div className="bg-white border-b border-[#EAE4DA] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#6B665E] hover:text-[#191816] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            Back to All Projects
          </Link>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleToggleSave}
              className={`p-2 rounded-full border text-xs flex items-center space-x-1.5 transition-colors ${
                isSaved
                  ? 'bg-[#C5A880] text-white border-[#C5A880]'
                  : 'bg-white text-[#191816] border-[#EAE4DA] hover:border-[#C5A880]'
              }`}
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">{isSaved ? 'Saved to Board' : 'Save Case Study'}</span>
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Project URL copied to clipboard!');
              }}
              className="p-2 rounded-full border bg-white text-[#191816] border-[#EAE4DA] hover:border-[#C5A880] transition-colors"
              title="Share project"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-[#191816] text-[#FAF8F5] text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
            {project.propertyType}
          </span>
          <span className="bg-[#C5A880] text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
            {project.style}
          </span>
          <span className="text-xs text-[#948E85] flex items-center ml-2">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880] mr-1" />
            {project.location}
          </span>
        </div>

        <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-[#191816] tracking-tight">
          {project.title}
        </h1>
        <p className="text-base sm:text-lg text-[#6B665E] font-light max-w-3xl mt-3 leading-relaxed">
          {project.subtitle}
        </p>

        {/* Project Key Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 bg-white p-6 rounded-2xl border border-[#EAE4DA] shadow-xs">
          <div>
            <span className="text-[10px] uppercase font-semibold text-[#948E85] block">Carpet Area</span>
            <span className="font-serif-heading text-lg sm:text-xl font-bold text-[#191816]">{project.areaSqFt} sq.ft</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-semibold text-[#948E85] block">Investment Scope</span>
            <span className="font-serif-heading text-lg sm:text-xl font-bold text-[#191816]">{project.budgetRange}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-semibold text-[#948E85] block">Handover Timeline</span>
            <span className="font-serif-heading text-lg sm:text-xl font-bold text-[#191816]">{project.durationMonths} Months ({project.completionDate})</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-semibold text-[#948E85] block">Lead Architect</span>
            <span className="font-serif-heading text-lg sm:text-xl font-bold text-[#191816]">{project.designerName}</span>
          </div>
        </div>
      </div>

      {/* Main Image Gallery Stage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative h-96 sm:h-[580px] rounded-3xl overflow-hidden border border-[#EAE4DA] shadow-xl bg-neutral-900 mb-4">
          <div
            className="w-full h-full bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url(${project.gallery[activeImageIndex] || project.coverImage})` }}
          />
        </div>

        {/* Gallery Thumbnails */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {project.gallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`relative w-24 sm:w-32 h-16 sm:h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                activeImageIndex === idx
                  ? 'border-[#C5A880] ring-2 ring-[#C5A880]/30 scale-105'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Deep Case Study Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Story & Rooms */}
        <div className="lg:col-span-8 space-y-14">
          
          {/* 1. Design Story */}
          <section className="bg-white p-8 sm:p-10 rounded-3xl border border-[#EAE4DA] shadow-xs space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block">
              THE DESIGN CONCEPT
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#191816]">
              Architectural Narrative & Spatial Intent
            </h2>
            <p className="text-sm sm:text-base text-[#6B665E] leading-relaxed font-light">
              {project.designStory}
            </p>
          </section>

          {/* 2. Before & After Transformation */}
          {project.beforeImage && project.afterImage && (
            <section className="bg-[#191816] text-white p-8 sm:p-10 rounded-3xl border border-[#2F2C28] shadow-xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
                SITE COMPARISON
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold mb-4">
                Before & After Transformation
              </h2>
              <p className="text-xs text-neutral-300 mb-6 font-light">
                Slide horizontally to see the raw builder handoff vs the Atelier completed space.
              </p>

              <div
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  setSliderPosition(Math.max(10, Math.min(90, (x / rect.width) * 100)));
                }}
                className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/20 select-none cursor-ew-resize"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.afterImage})` }}
                />
                <div
                  className="absolute inset-0 bg-cover bg-center overflow-hidden"
                  style={{
                    backgroundImage: `url(${project.beforeImage})`,
                    clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                  }}
                />
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white flex items-center justify-center pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-white text-[#191816] shadow-lg flex items-center justify-center">
                    <MoveHorizontal className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* 3. Detailed Room Breakdown */}
          <section className="space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-1">
                ZONAL ARCHITECTURE
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#191816]">
                Room-by-Room Spatial Breakdown
              </h2>
            </div>

            <div className="space-y-6">
              {project.rooms.map((room, rIdx) => (
                <div
                  key={rIdx}
                  className="bg-white rounded-3xl border border-[#EAE4DA] overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-12"
                >
                  <div
                    className="md:col-span-5 h-64 md:h-auto bg-cover bg-center"
                    style={{ backgroundImage: `url(${room.image})` }}
                  />
                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-serif-heading text-xl font-bold text-[#191816] mb-2">
                        {room.name}
                      </h3>
                      <p className="text-xs text-[#6B665E] leading-relaxed font-light mb-4">
                        {room.description}
                      </p>

                      <div className="space-y-1.5">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#948E85] block">
                          Key Joinery & Elements:
                        </span>
                        {room.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="text-xs text-[#191816] flex items-center space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Materials Palette */}
          <section className="bg-white p-8 sm:p-10 rounded-3xl border border-[#EAE4DA] shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
              AUTHENTIC SOURCING
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#191816] mb-6">
              Material Palette & Specifications
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.materials.map((mat, mIdx) => (
                <div key={mIdx} className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DA]">
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-[#191816] mb-2">
                    {mat.category}
                  </h4>
                  <ul className="space-y-1 text-xs text-[#6B665E]">
                    {mat.items.map((item, iIdx) => (
                      <li key={iIdx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Project Timeline Milestone Breakdown */}
          <section className="bg-white p-8 sm:p-10 rounded-3xl border border-[#EAE4DA] shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
              EXECUTION PHASING
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#191816] mb-6">
              Milestone & Handover Timeline
            </h2>

            <div className="space-y-4">
              {project.timeline.map((phase, pIdx) => (
                <div key={pIdx} className="flex items-start space-x-4 pb-4 border-b border-[#FAF8F5] last:border-0">
                  <span className="font-serif-heading font-bold text-lg text-[#C5A880] w-24 shrink-0">
                    {phase.weeks}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-[#191816]">{phase.phase}</h4>
                    <p className="text-xs text-[#6B665E] mt-0.5 font-light">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Sticky Column: Designer & Consultation Booking */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Lead Architect Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE4DA] shadow-md space-y-4 text-center">
            <div
              className="w-20 h-20 rounded-full bg-cover bg-center mx-auto border-2 border-[#C5A880]"
              style={{ backgroundImage: `url(${project.designerAvatar})` }}
            />
            <div>
              <span className="text-[10px] uppercase font-semibold text-[#948E85] tracking-widest block">
                PROJECT ARCHITECT
              </span>
              <h3 className="font-serif-heading text-xl font-bold text-[#191816]">
                {project.designerName}
              </h3>
              <p className="text-xs text-[#6B665E] mt-1">
                Specialized in {project.style} & High-Rise Turnkey Fitouts
              </p>
            </div>
            
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="w-full bg-[#191816] hover:bg-[#C5A880] text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Call with {project.designerName.split(' ')[0]}</span>
            </button>
          </div>

          {/* Want a Similar Interior Card */}
          <div className="bg-[#191816] text-white p-8 rounded-3xl border border-[#2F2C28] shadow-xl space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-1">
                GET STARTED
              </span>
              <h3 className="font-serif-heading text-2xl font-bold">
                Want a Similar Interior for Your Home?
              </h3>
              <p className="text-xs text-neutral-300 mt-2 font-light leading-relaxed">
                Our architects can tailor this exact aesthetic, material palette, and joinery ergonomics for your floor plan.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="w-full bg-[#C5A880] hover:bg-[#9E8159] text-white py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <Link
                href={`/quote?style=${encodeURIComponent(project.style)}`}
                className="w-full block text-center border border-white/20 hover:border-white text-white py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all"
              >
                Estimate Similar Project
              </Link>
            </div>

            <div className="pt-2 border-t border-white/10 space-y-2 text-[11px] text-neutral-400">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>10-Year Warranty on all Woodwork</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Fixed BOQ with Zero Escalation</span>
              </div>
            </div>
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
