'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  Heart, 
  Search, 
  Sparkles, 
  X, 
  Maximize2, 
  Share2, 
  Download, 
  FolderPlus,
  SlidersHorizontal,
  Check
} from 'lucide-react';
import { INSPIRATION_ITEMS } from '@/lib/data/inspiration';
import { RoomCategory, DesignStyle, InspirationItem } from '@/types';
import { db } from '@/lib/supabase/client';

function InspirationContent() {
  const searchParams = useSearchParams();
  const showSavedOnly = searchParams.get('saved') === 'true';
  const initialRoom = searchParams.get('room') || 'All';
  const initialStyle = searchParams.get('style') || 'All';

  const [selectedRoom, setSelectedRoom] = useState<string>(initialRoom);
  const [selectedStyle, setSelectedStyle] = useState<string>(initialStyle);
  const [filterSaved, setFilterSaved] = useState<boolean>(showSavedOnly);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const [savedIds, setSavedIds] = useState<string[]>(() => db.getSavedItemIds());
  const [lightboxItem, setLightboxItem] = useState<InspirationItem | null>(null);

  const rooms: (string | RoomCategory)[] = [
    'All',
    'Living Room',
    'Modular Kitchen',
    'Master Bedroom',
    'Bathroom',
    'Walk-in Wardrobe',
    'Balcony & Deck',
    'Dining Room',
    'Home Office',
    'Pooja Room',
    'Kids Room',
    'Foyer & Entryway'
  ];

  const styles: (string | DesignStyle)[] = [
    'All',
    'Luxury Neoclassical',
    'Japandi',
    'Modern Contemporary',
    'Scandinavian',
    'Minimalist',
    'Warm Traditional',
    'Art Deco'
  ];

  const handleToggleSave = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    const updated = db.toggleSavedItem(id);
    setSavedIds(updated);
  };

  const filteredItems = useMemo(() => {
    return INSPIRATION_ITEMS.filter((item) => {
      if (filterSaved && !savedIds.includes(item.id)) return false;
      if (selectedRoom !== 'All' && item.room !== selectedRoom) return false;
      if (selectedStyle !== 'All' && item.style !== selectedStyle) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(q));
        const matchesColor = item.colorScheme.toLowerCase().includes(q);
        if (!matchesTitle && !matchesTags && !matchesColor) return false;
      }
      return true;
    });
  }, [selectedRoom, selectedStyle, filterSaved, searchQuery, savedIds]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
          PINTEREST-STYLE MOODBOARD
        </span>
        <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold text-[#191816] tracking-tight">
          Inspiration & Interior Ideas Gallery
        </h1>
        <p className="text-sm sm:text-base text-[#6B665E] mt-3 font-light leading-relaxed">
          Browse high-resolution architectural ideas, tap the heart icon to curate your personal moodboard, and present your saved designs during consultation.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-6 rounded-3xl border border-[#EAE4DA] shadow-md mb-12 space-y-4">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="w-full md:w-96 relative">
            <Search className="w-4 h-4 text-[#948E85] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search ideas by material, room, tag or color..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
            />
          </div>

          {/* My Saved Boards Toggle */}
          <div className="flex items-center space-x-3 w-full md:w-auto justify-between">
            <button
              onClick={() => setFilterSaved(!filterSaved)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center space-x-2 border ${
                filterSaved
                  ? 'bg-[#C5A880] text-white border-[#C5A880] shadow-xs'
                  : 'bg-[#FAF8F5] text-[#191816] border-[#EAE4DA] hover:border-[#C5A880]'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${filterSaved ? 'fill-current' : ''}`} />
              <span>My Saved Board ({savedIds.length})</span>
            </button>

            {(selectedRoom !== 'All' || selectedStyle !== 'All' || searchQuery || filterSaved) && (
              <button
                onClick={() => {
                  setSelectedRoom('All');
                  setSelectedStyle('All');
                  setSearchQuery('');
                  setFilterSaved(false);
                }}
                className="text-xs text-[#C5A880] hover:underline flex items-center"
              >
                <X className="w-3.5 h-3.5 mr-1" />
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Rooms Filter Tabs */}
        <div className="pt-3 border-t border-[#FAF8F5] space-y-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-semibold text-[#948E85] uppercase tracking-wider mr-2">
              Room:
            </span>
            {rooms.map((rm) => (
              <button
                key={rm}
                onClick={() => setSelectedRoom(rm)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedRoom === rm
                    ? 'bg-[#191816] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-[#191816] hover:bg-[#EAE4DA]'
                }`}
              >
                {rm}
              </button>
            ))}
          </div>

          {/* Styles Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-semibold text-[#948E85] uppercase tracking-wider mr-2">
              Style:
            </span>
            {styles.map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStyle(st)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedStyle === st
                    ? 'bg-[#191816] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-[#191816] hover:bg-[#EAE4DA]'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Masonry / Grid Gallery */}
      {filteredItems.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-[#EAE4DA] max-w-lg mx-auto">
          <Sparkles className="w-10 h-10 text-[#C5A880] mx-auto mb-3" />
          <h3 className="font-serif-heading text-xl font-bold text-[#191816]">No matching ideas found</h3>
          <p className="text-xs text-[#6B665E] mt-1 mb-4">
            {filterSaved ? "You haven't saved any inspiration ideas to your board yet." : "Try adjusting your room or style filters."}
          </p>
          <button
            onClick={() => {
              setSelectedRoom('All');
              setSelectedStyle('All');
              setSearchQuery('');
              setFilterSaved(false);
            }}
            className="bg-[#191816] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            Show All Inspiration
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isSaved = savedIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#EAE4DA] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div
                  onClick={() => setLightboxItem(item)}
                  className="relative h-80 overflow-hidden cursor-pointer"
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-80 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Top Badges & Actions */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-[#191816]/90 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                      {item.room}
                    </span>
                    
                    <button
                      onClick={(e) => handleToggleSave(e, item.id)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        isSaved
                          ? 'bg-[#C5A880] text-white shadow-md'
                          : 'bg-white/80 backdrop-blur-md text-[#191816] hover:bg-white hover:text-red-500'
                      }`}
                      title={isSaved ? 'Remove from Saved' : 'Save to Board'}
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C5A880] block mb-1">
                      {item.style}
                    </span>
                    <h3 className="font-serif-heading text-lg font-bold leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-neutral-300 mt-1 line-clamp-1">
                      Palette: {item.colorScheme}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="p-4 bg-white border-t border-[#FAF8F5] flex flex-wrap gap-1.5 items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] bg-[#FAF8F5] text-[#6B665E] px-2 py-0.5 rounded-md border border-[#EAE4DA]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setLightboxItem(item)}
                    className="text-xs text-[#948E85] hover:text-[#191816] p-1"
                    title="View Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-[#191816] rounded-3xl border border-white/20 max-w-4xl w-full overflow-hidden shadow-2xl relative text-white">
            
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 h-80 sm:h-[500px] relative">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${lightboxItem.image})` }}
                />
              </div>

              <div className="lg:col-span-5 p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-[#C5A880] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
                      {lightboxItem.room}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {lightboxItem.style}
                    </span>
                  </div>

                  <h3 className="font-serif-heading text-2xl font-bold mb-3">
                    {lightboxItem.title}
                  </h3>

                  <div className="space-y-2 text-xs text-neutral-300">
                    <p><strong>Color Palette:</strong> {lightboxItem.colorScheme}</p>
                    <div className="flex flex-wrap gap-1 pt-2">
                      {lightboxItem.tags.map((t, i) => (
                        <span key={i} className="bg-white/10 px-2 py-0.5 rounded-md text-[10px]">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <button
                    onClick={(e) => handleToggleSave(e, lightboxItem.id)}
                    className={`w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all ${
                      savedIds.includes(lightboxItem.id)
                        ? 'bg-[#C5A880] text-white'
                        : 'bg-white text-[#191816] hover:bg-[#C5A880] hover:text-white'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${savedIds.includes(lightboxItem.id) ? 'fill-current' : ''}`} />
                    <span>{savedIds.includes(lightboxItem.id) ? 'Saved to Your Board' : 'Save to My Moodboard'}</span>
                  </button>

                  <Link
                    href={`/quote?style=${encodeURIComponent(lightboxItem.style)}`}
                    onClick={() => setLightboxItem(null)}
                    className="w-full block text-center border border-white/20 hover:border-white text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    Get Quote for this Look
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default function InspirationPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-20">
      <Suspense fallback={<div className="text-center py-20 text-xs text-[#948E85]">Loading inspiration moodboard...</div>}>
        <InspirationContent />
      </Suspense>
    </div>
  );
}
