'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, HelpCircle, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { FAQS } from '@/lib/data/faqs';
import ConsultationModal from '@/components/layout/ConsultationModal';

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const categories = ['All', 'General', 'Pricing & Budget', 'Design Process', 'Materials & Warranty', 'Execution'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchQuery = !searchQuery || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
            KNOWLEDGE BASE & FAQS
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold text-[#191816] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-[#6B665E] mt-3 font-light leading-relaxed">
            Everything you need to know about our turnkey deliverables, factory fabrication, payment schedules, and 10-year warranty coverage.
          </p>
        </div>

        {/* Search & Category Pills */}
        <div className="bg-white p-6 rounded-3xl border border-[#EAE4DA] shadow-md mb-12 space-y-4">
          <div className="w-full relative">
            <Search className="w-4 h-4 text-[#948E85] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by keyword (e.g. warranty, marble, timelines, modular kitchen)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm pl-11 pr-4 py-3 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#FAF8F5]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#191816] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-[#6B665E] hover:text-[#191816]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs List */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#EAE4DA] overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:text-[#C5A880] transition-colors"
                >
                  <span className="font-serif-heading text-base sm:text-lg font-bold text-[#191816]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#EAE4DA] flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-[#191816] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#6B665E] leading-relaxed font-light border-t border-[#FAF8F5]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner */}
        <div className="bg-[#191816] text-white p-8 sm:p-12 rounded-3xl border border-[#2F2C28] text-center shadow-xl space-y-6">
          <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold">
            Have a Specific Question About Your Home?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto font-light leading-relaxed">
            Our interior architecture consultants are ready to discuss your floor plan, budgets, and finish preferences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#9E8159] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-md"
            >
              Book Free Consultation
            </button>

            <a
              href="tel:+919810088234"
              className="w-full sm:w-auto border border-white/20 hover:border-white text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all flex items-center justify-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Call +91 98100 88234</span>
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
