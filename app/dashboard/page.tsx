'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Calendar, FileText, Sparkles, User, ArrowRight, Trash2 } from 'lucide-react';
import { db } from '@/lib/supabase/client';
import { INSPIRATION_ITEMS } from '@/lib/data/inspiration';
import { PROJECTS } from '@/lib/data/projects';

export default function CustomerDashboardPage() {
  const [activeTab, setActiveTab] = useState<'boards' | 'consultations' | 'quotes'>('boards');
  const [savedItemIds, setSavedItemIds] = useState<string[]>(() => db.getSavedItemIds());

  const savedInspirations = INSPIRATION_ITEMS.filter((item) => savedItemIds.includes(item.id));
  const savedProjects = PROJECTS.filter((proj) => savedItemIds.includes(proj.id));

  const handleRemoveSaved = (id: string) => {
    const updated = db.toggleSavedItem(id);
    setSavedItemIds(updated);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* User Welcome Banner */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#EAE4DA] shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-[#191816] text-[#C5A880] flex items-center justify-center font-serif-heading font-bold text-2xl border-2 border-[#C5A880]">
              A
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block">
                ATELIER CLIENT PORTAL
              </span>
              <h1 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#191816]">
                Welcome Back to Your Design Sanctuary
              </h1>
              <p className="text-xs text-[#6B665E] mt-0.5">
                Manage your saved moodboards, project quotation requests, and upcoming studio consultations.
              </p>
            </div>
          </div>

          <Link
            href="/consultation"
            className="bg-[#C5A880] hover:bg-[#9E8159] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book New Appointment</span>
          </Link>
        </div>

        {/* Dashboard Tabs */}
        <div className="flex items-center space-x-3 mb-8 border-b border-[#EAE4DA] pb-3">
          <button
            onClick={() => setActiveTab('boards')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center space-x-2 ${
              activeTab === 'boards'
                ? 'bg-[#191816] text-white shadow-xs'
                : 'text-[#6B665E] hover:text-[#191816]'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>My Moodboards ({savedItemIds.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('consultations')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center space-x-2 ${
              activeTab === 'consultations'
                ? 'bg-[#191816] text-white shadow-xs'
                : 'text-[#6B665E] hover:text-[#191816]'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>My Consultations</span>
          </button>

          <button
            onClick={() => setActiveTab('quotes')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center space-x-2 ${
              activeTab === 'quotes'
                ? 'bg-[#191816] text-white shadow-xs'
                : 'text-[#6B665E] hover:text-[#191816]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>My Estimates</span>
          </button>
        </div>

        {/* Tab 1: Saved Boards */}
        {activeTab === 'boards' && (
          <div className="space-y-8">
            {savedInspirations.length === 0 && savedProjects.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-[#EAE4DA]">
                <Heart className="w-12 h-12 text-[#EAE4DA] mx-auto mb-3" />
                <h3 className="font-serif-heading text-xl font-bold text-[#191816]">No Saved Ideas Yet</h3>
                <p className="text-xs text-[#6B665E] mt-1 mb-4">
                  Browse our portfolio and inspiration gallery to save ideas to your board.
                </p>
                <Link
                  href="/inspiration"
                  className="bg-[#191816] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                >
                  Explore Inspiration Gallery
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedInspirations.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl overflow-hidden border border-[#EAE4DA] shadow-xs relative group flex flex-col justify-between"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <button
                        onClick={() => handleRemoveSaved(item.id)}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors shadow-xs"
                        title="Remove from board"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="p-5 space-y-2">
                      <span className="text-[10px] uppercase font-bold text-[#C5A880] block">
                        {item.room} • {item.style}
                      </span>
                      <h4 className="font-serif-heading text-base font-bold text-[#191816] line-clamp-1">
                        {item.title}
                      </h4>
                      <Link
                        href={`/quote?style=${encodeURIComponent(item.style)}`}
                        className="text-xs text-[#191816] font-semibold underline block pt-1"
                      >
                        Estimate this design →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Consultations */}
        {activeTab === 'consultations' && (
          <div className="bg-white rounded-3xl border border-[#EAE4DA] p-8 sm:p-10 shadow-xs space-y-6">
            <h3 className="font-serif-heading text-2xl font-bold text-[#191816]">
              Your Scheduled Appointments
            </h3>
            
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DA] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="bg-[#2E7D32] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  Confirmed
                </span>
                <h4 className="font-bold text-base text-[#191816] pt-1">
                  1-on-1 Studio Architectural Discovery
                </h4>
                <p className="text-xs text-[#6B665E]">
                  📅 Upcoming Saturday at 11:00 AM • Gurgaon Experience Studio
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href="https://wa.me/919810088234"
                  className="text-xs font-semibold text-[#191816] border border-[#EAE4DA] px-4 py-2 rounded-full hover:bg-white"
                >
                  Reschedule on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Quotes */}
        {activeTab === 'quotes' && (
          <div className="bg-white rounded-3xl border border-[#EAE4DA] p-8 sm:p-10 shadow-xs space-y-6">
            <h3 className="font-serif-heading text-2xl font-bold text-[#191816]">
              Generated Project Quotations
            </h3>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DA] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="bg-[#191816] text-[#C5A880] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  Atelier Premium Estimate
                </span>
                <h4 className="font-serif-heading text-xl font-bold text-[#191816] pt-1">
                  3 BHK Apartment (1,850 sq.ft) — ₹22.5L – ₹28.0 Lakhs
                </h4>
                <p className="text-xs text-[#6B665E]">
                  Includes: Modular Kitchen (Dekton), Floor-to-ceiling Wardrobes, Acoustic False Ceiling, 10-Year Warranty.
                </p>
              </div>

              <Link
                href="/consultation"
                className="bg-[#C5A880] hover:bg-[#9E8159] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider"
              >
                Discuss BOQ with Architect
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
