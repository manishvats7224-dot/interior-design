'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, UploadCloud, RefreshCw, ArrowRight, Wand2, CheckCircle2 } from 'lucide-react';
import { DesignStyle } from '@/types';

export default function AIConceptSection() {
  const [selectedStyle, setSelectedStyle] = useState<DesignStyle>('Japandi');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedConcept, setGeneratedConcept] = useState<string>(
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85'
  );

  const styleConcepts: Record<string, string> = {
    'Japandi': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    'Luxury Neoclassical': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    'Modern Contemporary': 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    'Scandinavian': 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85',
    'Minimalist': 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85'
  };

  const handleGenerate = (style: DesignStyle) => {
    setSelectedStyle(style);
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedConcept(styleConcepts[style] || styleConcepts['Japandi']);
      setIsGenerating(false);
    }, 600);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#191816] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 bg-white/10 text-[#C5A880] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3 border border-white/10">
            <Wand2 className="w-3.5 h-3.5" />
            <span>AI INTERIOR VISUALIZATION ENGINE</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Visualize Your Room Reimagined in Seconds
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 mt-3 font-light leading-relaxed">
            Experience our intelligent concept generator. Select an architectural aesthetic below to see how a plain living room instantly adapts.
          </p>
        </div>

        {/* Visualizer Workbench */}
        <div className="bg-[#22201D] rounded-3xl border border-[#2F2C28] p-6 sm:p-10 shadow-2xl max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Side */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-1">
                STEP 1: SELECT DESIRED AESTHETIC
              </span>
              <div className="space-y-2 mt-3">
                {(['Japandi', 'Luxury Neoclassical', 'Modern Contemporary', 'Scandinavian', 'Minimalist'] as DesignStyle[]).map((st) => (
                  <button
                    key={st}
                    onClick={() => handleGenerate(st)}
                    disabled={isGenerating}
                    className={`w-full text-left p-3 rounded-xl text-xs font-medium transition-all flex items-center justify-between border ${
                      selectedStyle === st
                        ? 'bg-[#C5A880] text-white border-[#C5A880] shadow-md font-semibold'
                        : 'bg-[#191816] text-neutral-300 border-[#2F2C28] hover:border-[#C5A880]/50'
                    }`}
                  >
                    <span>{st} Aesthetic</span>
                    {selectedStyle === st && <CheckCircle2 className="w-4 h-4 text-white shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom photo upload trigger */}
            <div className="pt-2">
              <Link
                href="/ai-visualizer"
                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white p-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 text-center"
              >
                <UploadCloud className="w-4 h-4 text-[#C5A880]" />
                <span>Upload Your Own Room Photo</span>
              </Link>
            </div>
          </div>

          {/* Render Preview Side */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/15 shadow-xl">
            {isGenerating ? (
              <div className="w-full h-full bg-[#191816] flex flex-col items-center justify-center space-y-3">
                <RefreshCw className="w-8 h-8 text-[#C5A880] animate-spin" />
                <p className="text-xs text-neutral-300 tracking-wider uppercase font-semibold">
                  Synthesizing {selectedStyle} Blueprint...
                </p>
              </div>
            ) : (
              <>
                <div
                  className="w-full h-full bg-cover bg-center transition-all duration-700 animate-in fade-in"
                  style={{ backgroundImage: `url(${generatedConcept})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#C5A880] block">Generated Concept</span>
                    <h4 className="font-serif-heading text-lg font-bold">{selectedStyle} Sanctuary</h4>
                  </div>

                  <Link
                    href={`/quote?style=${encodeURIComponent(selectedStyle)}`}
                    className="bg-white text-[#191816] hover:bg-[#C5A880] hover:text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center space-x-1 shadow-md"
                  >
                    <span>Bring to Life</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
