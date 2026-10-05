'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin, Maximize2, Sparkles, Clock, Layers } from 'lucide-react';
import { PROJECTS } from '@/lib/data/projects';
import { FadeIn, StaggerContainer, StaggerItem, MagneticCard } from '@/components/ui/Motion';

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = ['All', 'Luxury Neoclassical', 'Japandi', 'Modern Contemporary'];

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.style.includes(activeFilter));

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
              PORTFOLIO ARCHIVE
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#191816] tracking-tight">
              Featured Case Studies & Residences
            </h2>
            <p className="text-sm sm:text-base text-[#6B665E] max-w-2xl mt-2 font-light">
              Explore recently delivered homes across Gurgaon, Mumbai, Bangalore, and Delhi. Every space represents an original architectural concept engineered to our client&apos;s exact lifestyle.
            </p>
          </div>

          {/* Style Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border ${
                  activeFilter === filter
                    ? 'bg-[#191816] text-white border-[#191816] shadow-xs scale-105'
                    : 'bg-white text-[#6B665E] border-[#EAE4DA] hover:border-[#C5A880]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Project Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={proj.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#EAE4DA] shadow-xs hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Container with Hover Zoom */}
                <Link href={`/projects/${proj.slug}`} className="relative h-72 sm:h-80 overflow-hidden block">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-108"
                    style={{ backgroundImage: `url(${proj.coverImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="bg-[#191816]/80 backdrop-blur-md text-[#FAF8F5] text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
                      {proj.propertyType}
                    </span>
                    <span className="bg-[#C5A880] text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
                      {proj.style}
                    </span>
                  </div>

                  {/* Bottom Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                    <div className="flex items-center text-xs text-neutral-200">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A880] mr-1" />
                      <span>{proj.location}</span>
                    </div>
                    <div className="text-xs font-semibold text-[#FAF8F5]">
                      {proj.areaSqFt} sq.ft
                    </div>
                  </div>
                </Link>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif-heading text-xl font-bold text-[#191816] group-hover:text-[#C5A880] transition-colors line-clamp-1">
                      <Link href={`/projects/${proj.slug}`}>
                        {proj.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-[#6B665E] line-clamp-2 mt-2 font-light leading-relaxed">
                      {proj.subtitle}
                    </p>
                  </div>

                  {/* Meta details */}
                  <div className="pt-4 border-t border-[#FAF8F5] flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] uppercase text-[#948E85] block">Investment</span>
                      <span className="font-semibold text-[#191816]">{proj.budgetRange}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-[#948E85] block">Timeline</span>
                      <span className="font-semibold text-[#191816]">{proj.durationMonths} Months</span>
                    </div>
                    <Link
                      href={`/projects/${proj.slug}`}
                      className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#EAE4DA] flex items-center justify-center text-[#191816] group-hover:bg-[#C5A880] group-hover:text-white transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All CTA */}
        <FadeIn delay={0.2} className="mt-14 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 bg-transparent hover:bg-[#191816] text-[#191816] hover:text-white border border-[#191816] px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all"
          >
            <span>View Complete Portfolio ({PROJECTS.length}+ Projects)</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}
