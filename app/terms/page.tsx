import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-14 rounded-3xl border border-[#EAE4DA] shadow-xs space-y-6 text-[#191816]">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block">
          TERMS OF SERVICE
        </span>
        <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold">
          Terms & Conditions
        </h1>
        <p className="text-xs text-[#948E85]">Last updated: March 2026</p>

        <div className="space-y-4 text-xs sm:text-sm text-[#6B665E] font-light leading-relaxed">
          <p>
            Welcome to Atelier Aura. By accessing our website and engaging our interior design, architectural planning, and turnkey execution services, you agree to the following terms and specifications.
          </p>
          <h2 className="font-serif-heading text-xl font-bold text-[#191816] pt-2">
            1. Fixed BOQ Scope & Non-Escalation
          </h2>
          <p>
            All turnkey interior contracts executed with Atelier Aura include a binding, itemized Bill of Quantities (BOQ). Scope alterations requested post 3D sign-off will be quoted via formal Change Order Addendums.
          </p>
          <h2 className="font-serif-heading text-xl font-bold text-[#191816] pt-2">
            2. 10-Year Structural Warranty
          </h2>
          <p>
            Our 10-year warranty applies to all factory-manufactured modular cabinetry and joinery against borer, termite infestations, and delamination under standard residential indoor usage conditions.
          </p>
          <h2 className="font-serif-heading text-xl font-bold text-[#191816] pt-2">
            3. 45-Day Handover Protocol
          </h2>
          <p>
            The 45-working-day move-in guarantee applies to standard turnkey apartment fitouts from the date of final 3D design freeze, site civil clearance, and initial milestone clearance.
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
