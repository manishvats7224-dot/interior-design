'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, X, Sparkles, Shield, Clock, ArrowRight, HelpCircle } from 'lucide-react';
import { PACKAGES } from '@/lib/data/packages';
import ConsultationModal from '@/components/layout/ConsultationModal';

export default function PackagesPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const comparisonFeatures = [
    { name: '2D Furniture Layout & Spatial Planning', essential: true, premium: true, luxury: true },
    { name: '8K Photorealistic 3D Renders & VR Walkthrough', essential: false, premium: true, luxury: true },
    { name: 'Principal Architect Direct Supervision', essential: false, premium: false, luxury: true },
    { name: 'Core Substrate Material', essential: 'IS 303 MR Ply', premium: '100% BWP Marine Ply', luxury: 'Imported Birch Ply / Solid Oak' },
    { name: 'Cabinetry Finishes', essential: '0.8mm Matte Laminates', premium: 'Anti-Fingerprint Acrylic / Veneer', luxury: 'Bespoke PU Matte / Marble Cladding' },
    { name: 'Hardware & Soft-Close Mechanisms', essential: 'Hettich / Ebco', premium: 'Blum Clip Top Blumotion', luxury: 'Blum Servo-Drive Motorized' },
    { name: 'Kitchen Countertop', essential: 'Granite / Basic Quartz', premium: 'Sintered Stone (Dekton) / Quartz', luxury: 'Custom Bookmatched Marble & Dekton' },
    { name: 'Wardrobes Design', essential: 'Standard Sliding / Hinged', premium: 'Floor-to-Ceiling Tinted Fluted Glass', luxury: 'Walk-in Closets with Leather Trays' },
    { name: 'Smart IoT Home Automation', essential: false, premium: 'Lighting Dimmers', luxury: 'Full Crestron / Lutron IoT Suite' },
    { name: 'Warranty Coverage', essential: '5-Year Warranty', premium: '10-Year Comprehensive', luxury: '10-Year + Lifetime Concierge' },
    { name: 'Execution Timeline', essential: '4–6 Weeks', premium: '6–8 Weeks', luxury: '10–14 Weeks' }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
            TRANSPARENT VALUE MATRIX
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold text-[#191816] tracking-tight">
            Turnkey Interior Design Packages
          </h1>
          <p className="text-sm sm:text-base text-[#6B665E] mt-3 font-light leading-relaxed">
            Compare our Essential, Atelier Premium, and Haute Bespoke packages side-by-side with complete transparency on materials, hardware brands, and warranty tiers.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all relative ${
                pkg.isPopular
                  ? 'bg-[#191816] text-white shadow-2xl border-2 border-[#C5A880] lg:-translate-y-3'
                  : 'bg-white text-[#191816] border border-[#EAE4DA] shadow-lg'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C5A880] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>MOST POPULAR CHOICE</span>
                </div>
              )}

              <div>
                <span className={`text-xs font-semibold uppercase tracking-widest block mb-1 ${
                  pkg.isPopular ? 'text-[#C5A880]' : 'text-[#948E85]'
                }`}>
                  {pkg.tagline}
                </span>
                <h2 className="font-serif-heading text-3xl font-bold mb-3">
                  {pkg.name}
                </h2>
                <div className="flex items-baseline space-x-2 border-b border-current/10 pb-4 mb-4">
                  <span className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#C5A880]">
                    {pkg.startingPrice}
                  </span>
                  <span className={`text-xs ${pkg.isPopular ? 'text-neutral-400' : 'text-[#6B665E]'}`}>
                    / on-wards
                  </span>
                </div>

                <p className={`text-xs mb-6 font-light leading-relaxed ${pkg.isPopular ? 'text-neutral-300' : 'text-[#6B665E]'}`}>
                  {pkg.idealFor}
                </p>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2 text-xs">
                      <Check className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                      <span className={pkg.isPopular ? 'text-neutral-200' : 'text-[#44403C]'}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsConsultationOpen(true)}
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
          ))}
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white rounded-3xl border border-[#EAE4DA] shadow-xl overflow-hidden mb-16">
          <div className="p-6 sm:p-8 bg-[#FAF8F5] border-b border-[#EAE4DA]">
            <h3 className="font-serif-heading text-2xl font-bold text-[#191816]">
              Detailed Feature & Specification Comparison
            </h3>
            <p className="text-xs text-[#6B665E] mt-1">
              Compare architectural deliverables across all tiers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#EAE4DA] bg-white text-[#191816]">
                  <th className="p-4 sm:p-6 font-bold uppercase tracking-wider text-[11px] w-2/5">Specification Feature</th>
                  <th className="p-4 sm:p-6 font-bold uppercase tracking-wider text-[11px] text-center">Essential</th>
                  <th className="p-4 sm:p-6 font-bold uppercase tracking-wider text-[11px] text-center bg-[#FAF8F5] text-[#C5A880]">Atelier Premium</th>
                  <th className="p-4 sm:p-6 font-bold uppercase tracking-wider text-[11px] text-center">Haute Bespoke</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE4DA]">
                {comparisonFeatures.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-[#FAF8F5]/50 transition-colors">
                    <td className="p-4 sm:p-6 font-medium text-[#191816]">{row.name}</td>
                    <td className="p-4 sm:p-6 text-center text-[#6B665E]">
                      {typeof row.essential === 'boolean' ? (
                        row.essential ? <Check className="w-4 h-4 text-[#2E7D32] mx-auto" /> : <X className="w-4 h-4 text-neutral-300 mx-auto" />
                      ) : (
                        <span>{row.essential}</span>
                      )}
                    </td>
                    <td className="p-4 sm:p-6 text-center font-semibold text-[#191816] bg-[#FAF8F5]">
                      {typeof row.premium === 'boolean' ? (
                        row.premium ? <Check className="w-4 h-4 text-[#C5A880] mx-auto" /> : <X className="w-4 h-4 text-neutral-300 mx-auto" />
                      ) : (
                        <span>{row.premium}</span>
                      )}
                    </td>
                    <td className="p-4 sm:p-6 text-center font-semibold text-[#191816]">
                      {typeof row.luxury === 'boolean' ? (
                        row.luxury ? <Check className="w-4 h-4 text-[#C5A880] mx-auto" /> : <X className="w-4 h-4 text-neutral-300 mx-auto" />
                      ) : (
                        <span>{row.luxury}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
