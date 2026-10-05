'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, ArrowUpRight, Sparkles, Tag } from 'lucide-react';
import { INSPIRATION_ITEMS } from '@/lib/data/inspiration';
import { db } from '@/lib/supabase/client';

export default function InspirationPreview() {
  const [savedIds, setSavedIds] = useState<string[]>(() => db.getSavedItemIds());

  const handleToggleSave = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    const updated = db.toggleSavedItem(id);
    setSavedIds(updated);
  };

  const previewItems = INSPIRATION_ITEMS.slice(0, 6);

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
              CURATED MOODBOARDS
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#191816] tracking-tight">
              Design Ideas & Inspiration Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#6B665E] max-w-2xl mt-2 font-light">
              Save ideas directly to your personalized Atelier Moodboard to share with your architect during consultation.
            </p>
          </div>

          <Link
            href="/inspiration"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#191816] hover:text-[#C5A880] transition-colors self-start sm:self-auto"
          >
            <span>View Full Gallery ({INSPIRATION_ITEMS.length}+ Ideas)</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item) => {
            const isSaved = savedIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-white border border-[#EAE4DA] shadow-xs hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  
                  {/* Save Heart Button */}
                  <button
                    onClick={(e) => handleToggleSave(e, item.id)}
                    className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      isSaved
                        ? 'bg-[#C5A880] text-white'
                        : 'bg-white/80 backdrop-blur-md text-[#191816] hover:bg-white hover:text-red-500'
                    }`}
                    title={isSaved ? 'Saved to your board' : 'Save to my moodboard'}
                  >
                    <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                  </button>

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#191816]/80 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                      {item.room}
                    </span>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C5A880] block mb-1">
                      {item.style}
                    </span>
                    <h3 className="font-serif-heading text-lg font-bold line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Tags footer */}
                <div className="p-4 bg-white flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] bg-[#FAF8F5] text-[#6B665E] px-2 py-0.5 rounded-md border border-[#EAE4DA]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
