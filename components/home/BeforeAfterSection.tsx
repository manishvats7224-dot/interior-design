'use client';

import React, { useState, useRef } from 'react';
import { Sparkles, MoveHorizontal, ArrowRight, ShieldCheck } from 'lucide-react';

export default function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(5, Math.min(95, (x / width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#191816] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 bg-white/10 text-[#C5A880] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3 border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE CASE STUDY</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            The Power of Architectural Transformation
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 mt-3 font-light leading-relaxed">
            Drag the slider to experience how raw builder-finish shell spaces are transformed into bespoke, high-performance architectural luxury.
          </p>
        </div>

        {/* Comparison Viewer Container */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-80 sm:h-[520px] rounded-3xl overflow-hidden border border-white/20 select-none cursor-ew-resize shadow-2xl"
          >
            {/* AFTER Image (Full background) */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85')`,
              }}
            >
              <div className="absolute top-6 right-6 bg-[#C5A880] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                AFTER: ATELIER AURA
              </div>
            </div>

            {/* BEFORE Image (Clipped overlay) */}
            <div
              className="absolute inset-0 bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80')`,
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            >
              <div className="absolute top-6 left-6 bg-[#191816]/90 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
                BEFORE: RAW BUILDER FINISH
              </div>
            </div>

            {/* Vertical Divider Line with Draggable Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-white text-[#191816] shadow-xl flex items-center justify-center border-2 border-[#C5A880]">
                <MoveHorizontal className="w-5 h-5 text-[#191816]" />
              </div>
            </div>
          </div>

          {/* Under-slider Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-[#22201D] p-5 rounded-2xl border border-[#2F2C28] flex items-start space-x-3.5">
              <ShieldCheck className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">100% Fixed BOQ Guarantee</h4>
                <p className="text-xs text-neutral-400 mt-0.5">Zero unexpected mid-construction price hikes.</p>
              </div>
            </div>
            <div className="bg-[#22201D] p-5 rounded-2xl border border-[#2F2C28] flex items-start space-x-3.5">
              <Sparkles className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">45-Day Handover</h4>
                <p className="text-xs text-neutral-400 mt-0.5">Factory-machined modular joinery assembled in days.</p>
              </div>
            </div>
            <div className="bg-[#22201D] p-5 rounded-2xl border border-[#2F2C28] flex items-start space-x-3.5">
              <ShieldCheck className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">10-Year Structural Assure</h4>
                <p className="text-xs text-neutral-400 mt-0.5">BWP Marine Plywood & Blum lifetime hardware.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
