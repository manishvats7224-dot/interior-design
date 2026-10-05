import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-14 rounded-3xl border border-[#EAE4DA] shadow-xs space-y-6 text-[#191816]">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block">
          LEGAL & COMPLIANCE
        </span>
        <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#948E85]">Last updated: March 2026</p>

        <div className="space-y-4 text-xs sm:text-sm text-[#6B665E] font-light leading-relaxed">
          <p>
            Atelier Aura Interior Architecture Pvt. Ltd. (&ldquo;Atelier Aura&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal information.
          </p>
          <h2 className="font-serif-heading text-xl font-bold text-[#191816] pt-2">
            1. Information We Collect
          </h2>
          <p>
            When you request a consultation, quotation, or submit contact enquiries, we collect your name, phone number, email address, city, property type, floor plan documents, and design preferences.
          </p>
          <h2 className="font-serif-heading text-xl font-bold text-[#191816] pt-2">
            2. How We Use Your Data
          </h2>
          <p>
            We use your data solely to schedule architectural consultations, prepare itemized BOQ estimations, send WhatsApp project progress updates, and deliver our design and execution services. We never sell your personal data to third-party telemarketers.
          </p>
          <h2 className="font-serif-heading text-xl font-bold text-[#191816] pt-2">
            3. Data Security & Storage
          </h2>
          <p>
            Your information is stored in encrypted PostgreSQL database instances with strict Row-Level Security (RLS). File uploads (such as floor plans) are secured via protected cloud storage buckets.
          </p>
        </div>

        <div className="pt-6 border-t border-[#FAF8F5]">
          <Link href="/" className="text-xs font-semibold text-[#C5A880] underline">
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
