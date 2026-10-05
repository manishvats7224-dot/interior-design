'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Award,
  ArrowUpRight 
} from 'lucide-react';
import { LOCATIONS } from '@/lib/data/locations';
import { PROJECTS } from '@/lib/data/projects';
import ConsultationModal from '@/components/layout/ConsultationModal';

export default function CityLandingPage() {
  const params = useParams();
  const citySlug = params?.city as string;
  const location = LOCATIONS.find((l) => l.slug === citySlug) || LOCATIONS[0];

  const cityProjects = PROJECTS.filter((p) => p.city.toLowerCase() === location.cityName.toLowerCase());
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      
      {/* City Hero */}
      <section className="relative bg-[#191816] text-white py-20 sm:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#191816] via-[#191816]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full text-xs text-[#C5A880] border border-white/15">
            <MapPin className="w-3.5 h-3.5" />
            <span>{location.cityName} Studio & Turnkey Architecture</span>
          </div>

          <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl leading-tight">
            {location.heroHeadline}
          </h1>

          <p className="text-sm sm:text-lg text-neutral-300 font-light max-w-2xl leading-relaxed">
            {location.heroSubheadline}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15 max-w-3xl">
            <div>
              <div className="font-serif-heading text-2xl sm:text-3xl font-bold text-white">{location.homesDesigned}+</div>
              <div className="text-[11px] uppercase tracking-wider text-[#D5CCC0]">Homes in {location.cityName}</div>
            </div>
            <div>
              <div className="font-serif-heading text-2xl sm:text-3xl font-bold text-white">{location.averageBudget}</div>
              <div className="text-[11px] uppercase tracking-wider text-[#D5CCC0]">Typical Scope</div>
            </div>
            <div>
              <div className="font-serif-heading text-2xl sm:text-3xl font-bold text-white">45 Days</div>
              <div className="text-[11px] uppercase tracking-wider text-[#D5CCC0]">Turnkey Delivery</div>
            </div>
            <div>
              <div className="font-serif-heading text-2xl sm:text-3xl font-bold text-white">10-Year</div>
              <div className="text-[11px] uppercase tracking-wider text-[#D5CCC0]">Warranty Assurance</div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="bg-[#C5A880] hover:bg-[#9E8159] text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-xl flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book {location.cityName} Studio Consultation</span>
            </button>

            <Link
              href={`/quote?city=${encodeURIComponent(location.cityName)}`}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all text-center"
            >
              Calculate {location.cityName} Cost
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Neighborhoods Served */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE4DA] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#191816] whitespace-nowrap">
            Popular Neighborhoods Served in {location.cityName}:
          </span>
          <div className="flex flex-wrap gap-2">
            {location.popularAreas.map((area, aIdx) => (
              <span
                key={aIdx}
                className="bg-[#FAF8F5] border border-[#EAE4DA] text-xs font-medium text-[#6B665E] px-3 py-1 rounded-lg"
              >
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Local Projects in City */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-1">
            DELIVERED ARCHITECTURE
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#191816]">
            Featured Projects in {location.cityName}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(cityProjects.length > 0 ? cityProjects : PROJECTS.slice(0, 3)).map((proj) => (
            <div
              key={proj.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#EAE4DA] shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <Link href={`/projects/${proj.slug}`} className="relative h-64 overflow-hidden block">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${proj.coverImage})` }}
                />
                <div className="absolute top-4 left-4 bg-[#191816]/90 text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  {proj.propertyType}
                </div>
              </Link>
              <div className="p-6 space-y-3">
                <h3 className="font-serif-heading text-xl font-bold text-[#191816] group-hover:text-[#C5A880] transition-colors">
                  <Link href={`/projects/${proj.slug}`}>{proj.title}</Link>
                </h3>
                <p className="text-xs text-[#6B665E] line-clamp-2">{proj.subtitle}</p>
                <div className="pt-3 border-t border-[#FAF8F5] flex justify-between text-xs font-semibold">
                  <span>{proj.budgetRange}</span>
                  <span className="text-[#C5A880] flex items-center">
                    View Case Study <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Studio Location Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#191816] text-white p-8 sm:p-12 rounded-3xl border border-[#2F2C28] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block">
              VISIT OUR {location.cityName.toUpperCase()} STUDIO
            </span>
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold">
              Experience Physical Stone & Joinery Mockups
            </h3>
            <div className="space-y-2 text-xs text-neutral-300 font-light">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{location.studioAddress}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>{location.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>{location.email}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="w-full bg-[#C5A880] hover:bg-[#9E8159] text-white py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-md text-center block"
            >
              Book Studio Appointment
            </button>
            <a
              href={`https://wa.me/919810088234?text=Hi%2C%20I%20want%20to%20visit%20the%20${location.cityName}%20experience%20center.`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#25D366] text-white py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all text-center block"
            >
              WhatsApp {location.cityName} Desk
            </a>
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
