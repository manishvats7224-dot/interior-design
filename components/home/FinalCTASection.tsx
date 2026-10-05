'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, MessageCircle, ArrowRight, Sparkles, Phone } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenConsultation: () => void;
}

export default function FinalCTASection({ onOpenConsultation }: FinalCTASectionProps) {
  return (
    <section className="py-24 sm:py-32 bg-[#191816] text-white relative overflow-hidden">
      {/* Subtle architectural background texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#191816] via-[#191816]/90 to-[#191816]/70" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Subtle pill */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs text-[#FAF8F5]">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span className="font-medium tracking-wide uppercase">
            Let&apos;s Build Something Timeless
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="font-serif-heading text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
          Your Dream Home Starts With a <span className="italic font-normal text-[#C5A880]">Conversation.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
          Tell us about your space, your lifestyle, and your vision. Our designers will help turn it into a home you&apos;ll love.
        </p>

        {/* 3 Prominent CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#9E8159] text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Free Consultation</span>
          </button>

          <Link
            href="/quote"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all flex items-center justify-center space-x-2"
          >
            <span>Get a Detailed Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/919810088234?text=Hi%2C%20I%20am%20interested%20in%20interior%20design%20services.%20I%20would%20like%20to%20discuss%20my%20project."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5B] text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all flex items-center justify-center space-x-2 shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Talk on WhatsApp</span>
          </a>
        </div>

        {/* Hotline */}
        <div className="pt-6">
          <a href="tel:+919810088234" className="text-xs text-neutral-400 hover:text-white transition-colors inline-flex items-center space-x-1.5">
            <Phone className="w-3 h-3 text-[#C5A880]" />
            <span>Prefer to call? Speak directly with our Design Desk: <strong>+91 98100 88234</strong></span>
          </a>
        </div>

      </div>
    </section>
  );
}
