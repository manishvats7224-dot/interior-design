'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  FileText,
  ChevronDown
} from 'lucide-react';
import { SERVICES } from '@/lib/data/services';
import ConsultationModal from '@/components/layout/ConsultationModal';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = SERVICES.find((s) => s.slug === slug);

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!service) {
    return (
      <div className="py-32 text-center">
        <h2 className="font-serif-heading text-3xl font-bold">Service Not Found</h2>
        <Link href="/services" className="text-[#C5A880] underline mt-4 inline-block">
          ← Back to all services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#EAE4DA] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#6B665E] hover:text-[#191816] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            Back to All Services
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="bg-[#191816] text-[#C5A880] text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
              {service.startingPrice}
            </span>
            <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-[#191816] tracking-tight">
              {service.name}
            </h1>
            <p className="text-base sm:text-xl text-[#6B665E] font-light leading-relaxed">
              {service.tagline}
            </p>
            <p className="text-sm text-[#6B665E] font-light leading-relaxed">
              {service.fullDescription}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="bg-[#C5A880] hover:bg-[#9E8159] text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-lg flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation for this Service</span>
              </button>

              <Link
                href={`/quote?service=${encodeURIComponent(service.name)}`}
                className="border border-[#191816] hover:bg-[#191816] hover:text-white text-[#191816] px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all"
              >
                Get Itemized Quote
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-80 sm:h-[450px] rounded-3xl overflow-hidden border border-[#EAE4DA] shadow-xl">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${service.image})` }}
            />
          </div>

        </div>
      </div>

      {/* Scope, Deliverables & Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
        
        {/* Left Column: Scope & Process */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Key Deliverables */}
          <section className="bg-white p-8 sm:p-10 rounded-3xl border border-[#EAE4DA] shadow-xs space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-1">
                SCOPE SPECIFICATIONS
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#191816]">
                What is Included & Delivered
              </h2>
            </div>

            <div className="space-y-3">
              {service.deliverables.map((deliv, dIdx) => (
                <div key={dIdx} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE4DA] flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#191816] font-medium">{deliv}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Process Steps */}
          <section className="bg-white p-8 sm:p-10 rounded-3xl border border-[#EAE4DA] shadow-xs space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-1">
                STEP-BY-STEP
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#191816]">
                Execution Phasing for {service.name}
              </h2>
            </div>

            <div className="space-y-4">
              {service.processSteps.map((step, sIdx) => (
                <div key={sIdx} className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DA] flex items-start space-x-4">
                  <span className="font-serif-heading font-bold text-xl text-[#C5A880] shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-[#191816]">{step.title}</h4>
                    <p className="text-xs text-[#6B665E] mt-1 font-light leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Service FAQs */}
          <section className="bg-white p-8 sm:p-10 rounded-3xl border border-[#EAE4DA] shadow-xs space-y-6">
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#191816]">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {service.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="border border-[#EAE4DA] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-[#191816] flex justify-between items-center"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openFaqIndex === fIdx ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaqIndex === fIdx && (
                    <div className="p-4 pt-0 text-xs text-[#6B665E] leading-relaxed border-t border-[#FAF8F5]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Sticky Column */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#191816] text-white p-8 rounded-3xl border border-[#2F2C28] shadow-xl space-y-6 sticky top-28">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block">
              SCHEDULE A MEETING
            </span>
            <h3 className="font-serif-heading text-2xl font-bold">
              Consult an Expert on {service.name}
            </h3>
            <p className="text-xs text-neutral-300 font-light leading-relaxed">
              Meet our Principal Architects for a complimentary floor plan review, material sample consultation, and preliminary BOQ estimation.
            </p>

            <button
              onClick={() => setIsConsultationOpen(true)}
              className="w-full bg-[#C5A880] hover:bg-[#9E8159] text-white py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="pt-4 border-t border-white/10 space-y-2 text-[11px] text-neutral-400">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>10-Year Warranty Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Blum German-tech Factory Hardware</span>
              </div>
            </div>
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
