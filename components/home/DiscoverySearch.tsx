'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Sparkles, ArrowRight, Check } from 'lucide-react';
import { PropertyType, DesignStyle, RoomCategory } from '@/types';

export default function DiscoverySearch() {
  const router = useRouter();
  
  const [activeTab, setActiveTab] = useState<'property' | 'room'>('property');
  const [selectedProperty, setSelectedProperty] = useState<PropertyType>('3 BHK');
  const [selectedRoom, setSelectedRoom] = useState<RoomCategory>('Living Room');
  const [selectedStyle, setSelectedStyle] = useState<DesignStyle>('Modern Contemporary');
  const [selectedCity, setSelectedCity] = useState('Gurgaon');

  const propertyOptions: PropertyType[] = [
    '1 BHK',
    '2 BHK',
    '3 BHK',
    '4 BHK+',
    'Villa',
    'Penthouse',
    'Office'
  ];

  const roomOptions: RoomCategory[] = [
    'Living Room',
    'Modular Kitchen',
    'Master Bedroom',
    'Bathroom',
    'Balcony & Deck',
    'Walk-in Wardrobe',
    'Pooja Room',
    'Home Office'
  ];

  const styleOptions: { style: DesignStyle; image: string; tag: string }[] = [
    { 
      style: 'Modern Contemporary', 
      tag: 'Sleek & Functional',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=80'
    },
    { 
      style: 'Japandi', 
      tag: 'Zen & Wood Tones',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80'
    },
    { 
      style: 'Luxury Neoclassical', 
      tag: 'Italian Stone & Brass',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80'
    },
    { 
      style: 'Scandinavian', 
      tag: 'Airy & Light Ash',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=400&q=80'
    },
    { 
      style: 'Minimalist', 
      tag: 'Clean & Clutter-free',
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const handleSearch = () => {
    if (activeTab === 'property') {
      router.push(`/projects?type=${encodeURIComponent(selectedProperty)}&style=${encodeURIComponent(selectedStyle)}&city=${encodeURIComponent(selectedCity)}`);
    } else {
      router.push(`/inspiration?room=${encodeURIComponent(selectedRoom)}&style=${encodeURIComponent(selectedStyle)}`);
    }
  };

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl shadow-2xl border border-[#EAE4DA] p-6 sm:p-8">
        
        {/* Top Header & Tab Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#FAF8F5]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-1">
              DISCOVER INSPIRATION
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#191816]">
              What are you looking to design?
            </h2>
          </div>

          {/* Toggle Type / Room */}
          <div className="flex items-center bg-[#FAF8F5] p-1 rounded-full border border-[#EAE4DA] self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('property')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'property'
                  ? 'bg-[#191816] text-white shadow-xs'
                  : 'text-[#6B665E] hover:text-[#191816]'
              }`}
            >
              Full Home / Property
            </button>
            <button
              onClick={() => setActiveTab('room')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'room'
                  ? 'bg-[#191816] text-white shadow-xs'
                  : 'text-[#6B665E] hover:text-[#191816]'
              }`}
            >
              Specific Room
            </button>
          </div>
        </div>

        {/* Step 1: Select Space */}
        <div className="py-5">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#6B665E] block mb-3">
            {activeTab === 'property' ? '1. Select Property Configuration' : '1. Select Room Category'}
          </label>
          <div className="flex flex-wrap gap-2">
            {activeTab === 'property'
              ? propertyOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedProperty(opt)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium border transition-all ${
                      selectedProperty === opt
                        ? 'bg-[#191816] text-white border-[#191816] shadow-xs scale-105'
                        : 'bg-[#FAF8F5] text-[#191816] border-[#EAE4DA] hover:border-[#C5A880]'
                    }`}
                  >
                    {opt}
                  </button>
                ))
              : roomOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedRoom(opt)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium border transition-all ${
                      selectedRoom === opt
                        ? 'bg-[#191816] text-white border-[#191816] shadow-xs scale-105'
                        : 'bg-[#FAF8F5] text-[#191816] border-[#EAE4DA] hover:border-[#C5A880]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
          </div>
        </div>

        {/* Step 2: Select Architectural Style */}
        <div className="py-4 border-t border-[#FAF8F5]">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#6B665E] block mb-3">
            2. Choose Your Preferred Aesthetic Style
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {styleOptions.map((item) => (
              <div
                key={item.style}
                onClick={() => setSelectedStyle(item.style)}
                className={`group cursor-pointer rounded-2xl p-2.5 border transition-all flex flex-col items-center text-center ${
                  selectedStyle === item.style
                    ? 'border-[#C5A880] bg-[#FAF8F5] ring-2 ring-[#C5A880]/30 shadow-md'
                    : 'border-[#EAE4DA] hover:border-[#C5A880]/60'
                }`}
              >
                <div 
                  className="w-full h-20 rounded-xl bg-cover bg-center mb-2 relative overflow-hidden"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  {selectedStyle === item.style && (
                    <div className="absolute top-1.5 right-1.5 w-5 h-5 bg-[#C5A880] text-white rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </div>
                <div className="text-xs font-semibold text-[#191816] line-clamp-1">{item.style}</div>
                <div className="text-[10px] text-[#948E85]">{item.tag}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Filter & CTA Bar */}
        <div className="mt-6 pt-5 border-t border-[#EAE4DA] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <span className="text-xs text-[#6B665E] font-medium whitespace-nowrap">City:</span>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-[#FAF8F5] border border-[#EAE4DA] text-xs font-medium px-3 py-2 rounded-lg text-[#191816] focus:outline-hidden focus:border-[#C5A880]"
            >
              <option value="Gurgaon">Gurgaon (DLF & Golf Course)</option>
              <option value="Delhi">Delhi (South & Central)</option>
              <option value="Mumbai">Mumbai (Worli, Bandra, Juhu)</option>
              <option value="Bangalore">Bangalore (Indiranagar, Whitefield)</option>
              <option value="Noida">Noida (Sector 150, Expressway)</option>
              <option value="Pune">Pune (Koregaon Park)</option>
            </select>
          </div>

          <button
            onClick={handleSearch}
            className="w-full sm:w-auto bg-[#191816] hover:bg-[#C5A880] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-md flex items-center justify-center space-x-2"
          >
            <Search className="w-4 h-4 text-[#C5A880]" />
            <span>Explore Matching Designs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
