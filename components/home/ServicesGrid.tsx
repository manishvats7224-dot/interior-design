'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Key, 
  Home, 
  UtensilsCrossed, 
  Shirt, 
  Sofa, 
  BedDouble, 
  Bath, 
  Building2, 
  Store, 
  Hammer,
  CheckCircle2
} from 'lucide-react';
import { SERVICES } from '@/lib/data/services';
import { FadeIn, StaggerContainer, StaggerItem, MagneticCard } from '@/components/ui/Motion';

const iconMap: Record<string, React.ReactNode> = {
  Key: <Key className="w-6 h-6 text-[#C5A880]" />,
  Home: <Home className="w-6 h-6 text-[#C5A880]" />,
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-[#C5A880]" />,
  Shirt: <Shirt className="w-6 h-6 text-[#C5A880]" />,
  Sofa: <Sofa className="w-6 h-6 text-[#C5A880]" />,
  BedDouble: <BedDouble className="w-6 h-6 text-[#C5A880]" />,
  Bath: <Bath className="w-6 h-6 text-[#C5A880]" />,
  Building2: <Building2 className="w-6 h-6 text-[#C5A880]" />,
  Store: <Store className="w-6 h-6 text-[#C5A880]" />,
  Hammer: <Hammer className="w-6 h-6 text-[#C5A880]" />
};

export default function ServicesGrid() {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-[#EAE4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
            PRACTICE & EXPERTISE
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#191816] tracking-tight">
            Specialized Interior Design Services
          </h2>
          <p className="text-sm sm:text-base text-[#6B665E] mt-3 font-light leading-relaxed">
            From complete turnkey residence execution to precision modular kitchens and luxury spa bathrooms, explore our comprehensive design and build capabilities.
          </p>
        </FadeIn>

        {/* 10 Services Staggered Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => (
            <StaggerItem key={srv.id} className={idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <MagneticCard className={`h-full rounded-2xl border transition-all duration-300 p-8 flex flex-col justify-between ${
                idx === 0
                  ? 'bg-[#191816] text-white border-[#191816] shadow-xl'
                  : 'bg-[#FAF8F5] text-[#191816] border-[#EAE4DA] hover:border-[#C5A880] hover:shadow-xl'
              }`}>
                <div>
                  {/* Icon & Starting Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      idx === 0 ? 'bg-white/10' : 'bg-white border border-[#EAE4DA]'
                    }`}>
                      {iconMap[srv.iconName] || <Home className="w-6 h-6 text-[#C5A880]" />}
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      idx === 0 ? 'bg-[#C5A880] text-white' : 'bg-[#EAE4DA] text-[#6B665E]'
                    }`}>
                      {srv.startingPrice}
                    </span>
                  </div>

                  {/* Service Name & Tagline */}
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold mb-2">
                    <Link href={`/services/${srv.slug}`} className="hover:text-[#C5A880] transition-colors">
                      {srv.name}
                    </Link>
                  </h3>
                  <p className={`text-xs mb-6 leading-relaxed ${idx === 0 ? 'text-[#D5CCC0]' : 'text-[#6B665E]'}`}>
                    {srv.shortDescription}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {srv.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                        <span className={idx === 0 ? 'text-neutral-300' : 'text-[#44403C]'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/services/${srv.slug}`}
                    className={`text-xs font-semibold uppercase tracking-wider flex items-center group-hover:text-[#C5A880] transition-colors ${
                      idx === 0 ? 'text-white' : 'text-[#191816]'
                    }`}
                  >
                    <span>Explore Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                  <Link
                    href="/quote"
                    className={`text-[11px] underline ${idx === 0 ? 'text-[#D5CCC0] hover:text-white' : 'text-[#948E85] hover:text-[#191816]'}`}
                  >
                    Get Quote
                  </Link>
                </div>
              </MagneticCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
