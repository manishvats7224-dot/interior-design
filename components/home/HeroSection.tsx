'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight, Shield, Award, MapPin } from 'lucide-react';
import { FadeIn, AnimatedCounter } from '@/components/ui/Motion';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center bg-[#191816] text-white overflow-hidden -mt-20 pt-24 pb-16">
      {/* Background Architectural Photography with cinematic slow zoom animation */}
      <motion.div 
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#191816] via-black/55 to-black/45" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/30 to-black/80" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col items-center sm:items-start justify-center pt-8">
        
        {/* Floating pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs text-[#FAF8F5] mb-6 shadow-lg hover:border-[#C5A880]/60 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-ping" />
          <span className="font-medium tracking-wide">
            Turnkey Interior Architecture & Bespoke Millwork
          </span>
        </motion.div>

        {/* Large Editorial Headline with staggered words */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.12] mb-6"
        >
          Designing Spaces That Feel Like <span className="italic font-normal text-[#C5A880]">Home.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-base sm:text-xl text-neutral-200 font-light max-w-2xl leading-relaxed mb-8 sm:mb-10"
        >
          Thoughtfully curated luxury interiors tailored to your family&apos;s lifestyle, taste, and architectural heritage. From 3D blueprint to white-glove handover in 45 days.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12 sm:mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenConsultation}
            className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#9E8159] text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2.5 group"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/projects"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all flex items-center justify-center space-x-2 block"
            >
              <span>Explore Our Projects</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust Indicators Bar with Live Number Counters */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full max-w-4xl pt-6 border-t border-white/15 text-left"
        >
          <div className="space-y-0.5">
            <div className="text-2xl sm:text-3xl font-serif-heading font-bold text-white">
              <AnimatedCounter to={500} suffix="+" duration={1.8} />
            </div>
            <div className="text-[11px] uppercase tracking-wider text-[#D5CCC0]">Homes Designed</div>
          </div>

          <div className="space-y-0.5">
            <div className="text-2xl sm:text-3xl font-serif-heading font-bold text-white">
              <AnimatedCounter to={12} suffix="+ Years" duration={1.5} />
            </div>
            <div className="text-[11px] uppercase tracking-wider text-[#D5CCC0]">Studio Pedigree</div>
          </div>

          <div className="space-y-0.5">
            <div className="text-2xl sm:text-3xl font-serif-heading font-bold text-white">
              <AnimatedCounter to={4.9} decimals={1} suffix=" / 5.0" duration={1.6} />
            </div>
            <div className="text-[11px] uppercase tracking-wider text-[#D5CCC0]">Verified Client Rating</div>
          </div>

          <div className="space-y-0.5">
            <div className="text-2xl sm:text-3xl font-serif-heading font-bold text-white">
              <AnimatedCounter to={10} suffix="-Year" duration={1.4} />
            </div>
            <div className="text-[11px] uppercase tracking-wider text-[#D5CCC0]">Structural Warranty</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
