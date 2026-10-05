'use client';

import React from 'react';
import Link from 'next/link';
import { Check, Sparkles, Shield, Clock, ArrowRight } from 'lucide-react';
import { PACKAGES } from '@/lib/data/packages';

interface PackagesSectionProps {
  onOpenConsultation: () => void;
}

export default function PackagesSection({ onOpenConsultation }: PackagesSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
            TURNKEY INVESTMENT TIERS
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#191816] tracking-tight">
            Transparent Interior Design Packages
          </h2>
          <p className="text-sm sm:text-base text-[#6B665E] mt-3 font-light leading-relaxed">
            Clear, itemized scopes with zero surprise billings. Choose the level of bespoke craftsmanship and material luxury that suits your vision.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.isPopular
                  ? 'bg-[#191816] text-white shadow-2xl border-2 border-[#C5A880] lg:-translate-y-3'
                  : 'bg-white text-[#191816] border border-[#EAE4DA] shadow-lg hover:shadow-xl'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C5A880] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>MOST POPULAR CHOICE</span>
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="border-b pb-6 mb-6 border-current/10">
                  <span className={`text-xs font-semibold uppercase tracking-widest block mb-1 ${
                    pkg.isPopular ? 'text-[#C5A880]' : 'text-[#948E85]'
                  }`}>
                    {pkg.tagline}
                  </span>
                  <h3 className="font-serif-heading text-3xl font-bold mb-3">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#C5A880]">
                      {pkg.startingPrice}
                    </span>
                    <span className={`text-xs ${pkg.isPopular ? 'text-neutral-400' : 'text-[#6B665E]'}`}>
                      / on-wards
                    </span>
                  </div>
                  <p className={`text-[11px] mt-2 ${pkg.isPopular ? 'text-neutral-400' : 'text-[#948E85]'}`}>
                    {pkg.priceNote}
                  </p>
                </div>

                {/* Scope & Guarantees */}
                <div className="grid grid-cols-2 gap-3 mb-6 p-3 rounded-xl bg-current/5 text-xs">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span className="font-medium">{pkg.warrantyYears}-Year Warranty</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span className="font-medium">{pkg.timelineWeeks}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className={`text-[11px] font-semibold uppercase tracking-wider block ${
                    pkg.isPopular ? 'text-[#D5CCC0]' : 'text-[#6B665E]'
                  }`}>
                    What&apos;s Included:
                  </span>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2.5 text-xs">
                      <Check className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                      <span className={pkg.isPopular ? 'text-neutral-200' : 'text-[#44403C]'}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Material Specs */}
                <div className="border-t pt-4 mb-6 border-current/10 space-y-1.5 text-[11px]">
                  <div>
                    <span className="font-semibold">Core: </span>
                    <span className={pkg.isPopular ? 'text-neutral-300' : 'text-[#6B665E]'}>{pkg.detailedSpecs.material}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Hardware: </span>
                    <span className={pkg.isPopular ? 'text-neutral-300' : 'text-[#6B665E]'}>{pkg.detailedSpecs.hardware}</span>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={onOpenConsultation}
                  className={`w-full py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all flex items-center justify-center space-x-2 shadow-md ${
                    pkg.isPopular
                      ? 'bg-[#C5A880] hover:bg-[#9E8159] text-white'
                      : 'bg-[#191816] hover:bg-[#C5A880] text-white'
                  }`}
                >
                  <span>Select {pkg.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#6B665E] max-w-xl mx-auto">
            💡 Need a fully custom architectural quote for your villa or penthouse?{' '}
            <Link href="/quote" className="text-[#191816] font-semibold underline hover:text-[#C5A880]">
              Use our 7-step Quotation Builder →
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}
