'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowUpRight, MapPin, SlidersHorizontal, Sparkles, Filter, X } from 'lucide-react';
import { PROJECTS } from '@/lib/data/projects';
import { PropertyType, DesignStyle } from '@/types';

function ProjectsContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type') || 'All';
  const initialStyle = searchParams.get('style') || 'All';
  const initialCity = searchParams.get('city') || 'All';

  const [selectedType, setSelectedType] = useState<string>(initialType);
  const [selectedStyle, setSelectedStyle] = useState<string>(initialStyle);
  const [selectedCity, setSelectedCity] = useState<string>(initialCity);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const propertyTypes = ['All', 'Penthouse', 'Villa', '3 BHK', '2 BHK', 'Duplex'];
  const designStyles = ['All', 'Luxury Neoclassical', 'Japandi', 'Modern Contemporary'];
  const cities = ['All', 'Gurgaon', 'Mumbai', 'Bangalore', 'Delhi', 'Noida'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((proj) => {
      const matchType = selectedType === 'All' || proj.propertyType.includes(selectedType);
      const matchStyle = selectedStyle === 'All' || proj.style.includes(selectedStyle);
      const matchCity = selectedCity === 'All' || proj.city.toLowerCase() === selectedCity.toLowerCase();
      const matchQuery = !searchQuery || 
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.style.toLowerCase().includes(searchQuery.toLowerCase());

      return matchType && matchStyle && matchCity && matchQuery;
    });
  }, [selectedType, selectedStyle, selectedCity, searchQuery]);

  const resetFilters = () => {
    setSelectedType('All');
    setSelectedStyle('All');
    setSelectedCity('All');
    setSearchQuery('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
          ARCHITECTURAL PORTFOLIO
        </span>
        <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold text-[#191816] tracking-tight">
          Curated Architectural Residences
        </h1>
        <p className="text-sm sm:text-base text-[#6B665E] mt-3 font-light leading-relaxed">
          Explore our collection of custom-designed penthouses, duplexes, modern apartments, and coastal villas delivered across India.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-6 rounded-3xl border border-[#EAE4DA] shadow-md mb-12 space-y-4">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="w-full md:w-80">
            <input
              type="text"
              placeholder="Search by name, location, or style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm px-4 py-2.5 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
            />
          </div>

          {/* Active summary & Reset */}
          <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-end text-xs text-[#6B665E]">
            <span>Showing <strong>{filteredProjects.length}</strong> Projects</span>
            {(selectedType !== 'All' || selectedStyle !== 'All' || selectedCity !== 'All' || searchQuery) && (
              <button
                onClick={resetFilters}
                className="text-[#C5A880] hover:underline flex items-center"
              >
                <X className="w-3.5 h-3.5 mr-1" />
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="pt-3 border-t border-[#FAF8F5] space-y-3">
          
          {/* Property Type */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold text-[#948E85] uppercase tracking-wider w-24">
              Configuration:
            </span>
            {propertyTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedType === type
                    ? 'bg-[#191816] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-[#191816] hover:bg-[#EAE4DA]'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Aesthetic Style */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold text-[#948E85] uppercase tracking-wider w-24">
              Style:
            </span>
            {designStyles.map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedStyle === style
                    ? 'bg-[#191816] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-[#191816] hover:bg-[#EAE4DA]'
                }`}
              >
                {style}
              </button>
            ))}
          </div>

          {/* City */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold text-[#948E85] uppercase tracking-wider w-24">
              City Studio:
            </span>
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCity === city
                    ? 'bg-[#191816] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-[#191816] hover:bg-[#EAE4DA]'
                }`}
              >
                {city}
              </button>
            ))}
          </div>

        </div>

      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-[#EAE4DA] max-w-lg mx-auto">
          <Sparkles className="w-10 h-10 text-[#C5A880] mx-auto mb-3" />
          <h3 className="font-serif-heading text-xl font-bold text-[#191816]">No matching projects found</h3>
          <p className="text-xs text-[#6B665E] mt-1 mb-4">Try clearing your search query or broadening your filters.</p>
          <button
            onClick={resetFilters}
            className="bg-[#191816] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#EAE4DA] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image */}
              <Link href={`/projects/${proj.slug}`} className="relative h-72 sm:h-80 overflow-hidden block">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${proj.coverImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="bg-[#191816]/90 backdrop-blur-md text-[#FAF8F5] text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
                    {proj.propertyType}
                  </span>
                  <span className="bg-[#C5A880] text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                    {proj.style}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                  <div className="flex items-center text-xs text-neutral-200">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A880] mr-1" />
                    <span>{proj.location}</span>
                  </div>
                  <div className="text-xs font-semibold text-[#FAF8F5]">
                    {proj.areaSqFt} sq.ft
                  </div>
                </div>
              </Link>

              {/* Body */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-serif-heading text-xl font-bold text-[#191816] group-hover:text-[#C5A880] transition-colors line-clamp-1">
                    <Link href={`/projects/${proj.slug}`}>
                      {proj.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-[#6B665E] line-clamp-2 mt-1.5 font-light leading-relaxed">
                    {proj.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#FAF8F5] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] uppercase text-[#948E85] block">Budget</span>
                    <span className="font-semibold text-[#191816]">{proj.budgetRange}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#948E85] block">Architect</span>
                    <span className="font-semibold text-[#191816]">{proj.designerName}</span>
                  </div>
                  <Link
                    href={`/projects/${proj.slug}`}
                    className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#EAE4DA] flex items-center justify-center text-[#191816] group-hover:bg-[#C5A880] group-hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-20">
      <Suspense fallback={<div className="text-center py-20 text-xs text-[#948E85]">Loading projects portfolio...</div>}>
        <ProjectsContent />
      </Suspense>
    </div>
  );
}
