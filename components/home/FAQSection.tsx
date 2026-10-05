'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { FAQS } from '@/lib/data/faqs';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#191816] tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="text-sm sm:text-base text-[#6B665E] mt-3 font-light leading-relaxed">
            Transparent answers regarding pricing, execution timelines, factory warranties, and our architectural delivery methodology.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#EAE4DA] overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:text-[#C5A880] transition-colors focus:outline-hidden"
                >
                  <span className="font-serif-heading text-base sm:text-lg font-bold text-[#191816]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#EAE4DA] flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#191816] text-white' : 'text-[#191816]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#6B665E] leading-relaxed font-light border-t border-[#FAF8F5] animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE4DA] text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center sm:text-left">
            <h4 className="font-serif-heading text-lg font-bold text-[#191816]">
              Have a specific question about your floor plan?
            </h4>
            <p className="text-xs text-[#6B665E] mt-0.5">
              Our design concierge is available Monday to Saturday (10 AM to 8 PM).
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="tel:+919810088234"
              className="bg-[#191816] hover:bg-[#C5A880] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919810088234?text=Hi%2C%20I%20have%20a%20question%20regarding%20interior%20design%20services."
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#1EBE5B] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center space-x-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
