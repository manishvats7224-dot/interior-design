'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';

const STYLES = [
  {
    id: 'japandi',
    title: 'Japandi & Zen',
    subtitle: 'Where Scandinavian Hygge meets Japanese Wabi-Sabi.',
    description: 'Blonde ash wood, lime-washed textural walls, low-profile tatami seating, and natural linen drapes for peaceful modern living.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    colorSwatches: ['#F3EFEA', '#D5C4A1', '#8C8275', '#4A463F'],
    keyElements: ['Micro-cement floors', 'Concealed storage', 'Paper Noguchi lighting', 'Open ash timber']
  },
  {
    id: 'luxury-neoclassical',
    title: 'Luxury Neoclassical',
    subtitle: 'Timeless symmetry, Italian marble, and burnished champagne gold.',
    description: 'Bespoke double-height fluted stone portals, crystal chandeliers, velvet seating, and bookmatched Statuario marble accents.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    colorSwatches: ['#FAF8F5', '#C5A880', '#2E2B27', '#EAE4DA'],
    keyElements: ['Statuario marble', 'Brass inlay profiles', 'Acoustic boiserie panelling', 'Curated chandeliers']
  },
  {
    id: 'modern-contemporary',
    title: 'Modern Contemporary',
    subtitle: 'Sleek architectural lines, smoked glass, and smart IoT automation.',
    description: 'Handleless anthracite cabinetry, floating consoles, magnetic architectural track lighting, and uninterrupted open vistas.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    colorSwatches: ['#191816', '#71717A', '#E4E4E7', '#B89B72'],
    keyElements: ['Travertine stone', 'Concealed air conditioning', 'Smoked glass partitions', 'Lutron IoT scenes']
  },
  {
    id: 'scandinavian',
    title: 'Nordic Scandinavian',
    subtitle: 'Daylight maximization, organic curved forms, and tactile bouclé.',
    description: 'Warm natural light, whitewashed European oak, plush organic rugs, and joyful pastel accent palettes for modern families.',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85',
    colorSwatches: ['#FFFFFF', '#E6DFD5', '#9FB4C7', '#283845'],
    keyElements: ['Light oak joinery', 'Bouclé upholstery', 'Biophilic plant walls', 'Curved sofas']
  }
];

export default function PopularStyles() {
  const [selectedStyle, setSelectedStyle] = useState(STYLES[0]);

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
            DESIGN VOCABULARY
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#191816] tracking-tight">
            Popular Interior Architectural Styles
          </h2>
          <p className="text-sm sm:text-base text-[#6B665E] mt-3 font-light">
            Every home is a bespoke narrative. Explore our foundational design philosophies and discover which aesthetic resonates with your soul.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {STYLES.map((st) => (
            <button
              key={st.id}
              onClick={() => setSelectedStyle(st)}
              className={`px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border ${
                selectedStyle.id === st.id
                  ? 'bg-[#191816] text-white border-[#191816] shadow-md scale-105'
                  : 'bg-white text-[#6B665E] border-[#EAE4DA] hover:border-[#C5A880]'
              }`}
            >
              {st.title}
            </button>
          ))}
        </div>

        {/* Interactive Style Detail Stage */}
        <div className="bg-white rounded-3xl border border-[#EAE4DA] overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Image Side */}
          <div className="lg:col-span-7 relative h-80 sm:h-[480px] overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-700 hover:scale-105"
              style={{ backgroundImage: `url(${selectedStyle.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-1">
                AESTHETIC SIGNATURE
              </span>
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold">
                {selectedStyle.title}
              </h3>
            </div>
          </div>

          {/* Description & Palette Side */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div>
              <h4 className="font-serif-heading text-2xl font-bold text-[#191816] mb-2">
                {selectedStyle.subtitle}
              </h4>
              <p className="text-sm text-[#6B665E] leading-relaxed font-light mb-6">
                {selectedStyle.description}
              </p>

              {/* Color Palette */}
              <div className="mb-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#948E85] block mb-2">
                  Curated Material Palette:
                </span>
                <div className="flex items-center space-x-2">
                  {selectedStyle.colorSwatches.map((color, cIdx) => (
                    <div
                      key={cIdx}
                      className="w-8 h-8 rounded-full border border-black/10 shadow-xs"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Key Architectural Elements */}
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#948E85] block mb-2">
                  Signature Inclusions:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {selectedStyle.keyElements.map((elem, eIdx) => (
                    <div key={eIdx} className="text-xs text-[#191816] flex items-center space-x-1.5">
                      <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>{elem}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-[#FAF8F5] flex items-center justify-between">
              <Link
                href={`/projects?style=${encodeURIComponent(selectedStyle.title)}`}
                className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#191816] hover:text-[#C5A880] transition-colors"
              >
                <span>View {selectedStyle.title} Homes</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Link>

              <Link
                href="/inspiration"
                className="text-xs text-[#948E85] hover:text-[#191816] underline"
              >
                Explore Moodboard
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
