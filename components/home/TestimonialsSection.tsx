'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, ShieldCheck, ArrowRight, ArrowLeft, Quote, ArrowUpRight } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data/testimonials';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#191816] tracking-tight">
              Stories from 500+ Transformed Homes
            </h2>
            <p className="text-sm sm:text-base text-[#6B665E] max-w-2xl mt-2 font-light">
              Real reflections from discerning homeowners in DLF Camellias, Indiranagar, Worli, and South Delhi.
            </p>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center space-x-3 self-start sm:self-auto">
            <button
              onClick={prevTestimonial}
              className="w-11 h-11 rounded-full bg-white border border-[#EAE4DA] flex items-center justify-center text-[#191816] hover:bg-[#191816] hover:text-white transition-colors shadow-xs"
              aria-label="Previous review"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-11 h-11 rounded-full bg-white border border-[#EAE4DA] flex items-center justify-center text-[#191816] hover:bg-[#191816] hover:text-white transition-colors shadow-xs"
              aria-label="Next review"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Large Testimonial Card */}
        <div className="bg-white rounded-3xl border border-[#EAE4DA] p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Project Image */}
          <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: `url(${current.projectImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C5A880] block">
                DELIVERED PROJECT
              </span>
              <h4 className="font-serif-heading text-lg font-bold">
                {current.projectName}
              </h4>
              <p className="text-xs text-neutral-300">{current.propertyType}</p>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              {/* Stars & Verified */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
                  ))}
                </div>
                {current.verifiedOwner && (
                  <span className="inline-flex items-center text-[11px] font-semibold text-[#2E7D32] bg-[#E8F5E9] px-3 py-1 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                    Verified Homeowner
                  </span>
                )}
              </div>

              {/* Quote text */}
              <Quote className="w-10 h-10 text-[#EAE4DA] mb-2" />
              <p className="font-serif-heading text-xl sm:text-2xl text-[#191816] italic leading-relaxed">
                &ldquo;{current.content}&rdquo;
              </p>
            </div>

            {/* Author details */}
            <div className="pt-6 border-t border-[#FAF8F5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div
                  className="w-12 h-12 rounded-full bg-cover bg-center border border-[#EAE4DA]"
                  style={{ backgroundImage: `url(${current.clientAvatar})` }}
                />
                <div>
                  <div className="font-bold text-sm text-[#191816]">{current.clientName}</div>
                  <div className="text-xs text-[#6B665E]">{current.clientLocation}</div>
                </div>
              </div>

              {current.projectSlug && (
                <Link
                  href={`/projects/${current.projectSlug}`}
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#C5A880] hover:text-[#191816] transition-colors"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Link>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
