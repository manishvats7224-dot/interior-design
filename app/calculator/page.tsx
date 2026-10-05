'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Download, 
  RefreshCw, 
  FileText,
  Home,
  CheckCircle2
} from 'lucide-react';
import { PropertyType } from '@/types';
import ConsultationModal from '@/components/layout/ConsultationModal';

export default function CalculatorPage() {
  const [propertyType, setPropertyType] = useState<PropertyType>('3 BHK');
  const [areaSqFt, setAreaSqFt] = useState<number>(1850);
  const [designTier, setDesignTier] = useState<'Essential' | 'Premium' | 'Luxury'>('Premium');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const [scope, setScope] = useState<{ [key: string]: boolean }>({
    modularKitchen: true,
    wardrobes: true,
    falseCeiling: true,
    tvUnit: true,
    lighting: true,
    furniture: true,
    wallpaper: false,
    flooring: false,
    bathroomVanities: true,
    smartHome: false
  });

  const scopeItems = [
    { key: 'modularKitchen', label: 'Modular Kitchen & Island', baseCost: 280000, desc: 'BWP Marine Ply + Blum Soft-close + Quartz Top' },
    { key: 'wardrobes', label: 'Wardrobes (All Bedrooms)', baseCost: 220000, desc: 'Floor-to-ceiling tinted fluted glass & sensor LED' },
    { key: 'falseCeiling', label: 'Designer False Ceiling & Coves', baseCost: 110000, desc: 'Gyproc boards with architectural shadow-gaps' },
    { key: 'tvUnit', label: 'Acoustic TV Feature Unit', baseCost: 75000, desc: 'Fluted wooden acoustic panelling & cable ducting' },
    { key: 'lighting', label: 'Architectural Lighting & Magnetic Tracks', baseCost: 85000, desc: 'Warm 3000K recessed spots + magnetic track lights' },
    { key: 'furniture', label: 'Loose Furniture (Sofas, Dining, Bed)', baseCost: 250000, desc: 'Custom velvet sofas, dining chairs & master bed' },
    { key: 'wallpaper', label: 'Textural Wallpaper / Lime Wash', baseCost: 65000, desc: 'Breathable lime plaster & European wallpapers' },
    { key: 'flooring', label: 'Italian Marble / Wooden Flooring', baseCost: 320000, desc: 'Statuario / European Oak herringbone tiles' },
    { key: 'bathroomVanities', label: 'Custom Bathroom Vanities', baseCost: 90000, desc: 'Floating quartz vanities + LED anti-fog mirrors' },
    { key: 'smartHome', label: 'Smart IoT Automation & Dimmers', baseCost: 140000, desc: 'Lutron scene dimmers & smart curtain tracks' }
  ];

  const toggleScope = (key: string) => {
    setScope(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const estimatedCost = useMemo(() => {
    let tierMultiplier = 1.0;
    if (designTier === 'Essential') tierMultiplier = 0.75;
    if (designTier === 'Luxury') tierMultiplier = 1.8;

    let areaMultiplier = areaSqFt / 1500;

    let totalBase = 0;
    scopeItems.forEach(item => {
      if (scope[item.key]) {
        totalBase += item.baseCost;
      }
    });

    const calculatedTotal = totalBase * tierMultiplier * areaMultiplier;
    const minRange = Math.round(calculatedTotal * 0.9 / 10000) * 10000;
    const maxRange = Math.round(calculatedTotal * 1.15 / 10000) * 10000;

    return {
      min: minRange,
      max: maxRange,
      minLakhs: (minRange / 100000).toFixed(1),
      maxLakhs: (maxRange / 100000).toFixed(1),
      calculatedTotal
    };
  }, [propertyType, areaSqFt, designTier, scope]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
            TRANSPARENT ESTIMATOR
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold text-[#191816] tracking-tight">
            Interior Design Cost Calculator
          </h1>
          <p className="text-sm sm:text-base text-[#6B665E] mt-3 font-light leading-relaxed">
            Instant, itemized interior budget estimation calibrated for metros across India. Zero hidden contractor markups.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#EAE4DA] shadow-lg space-y-8">
            
            {/* 1. Property */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#6B665E] block mb-2">
                1. Select Property Configuration
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {(['1 BHK', '2 BHK', '3 BHK', '4 BHK+', 'Villa'] as PropertyType[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => {
                      setPropertyType(p);
                      if (p === '1 BHK') setAreaSqFt(750);
                      if (p === '2 BHK') setAreaSqFt(1250);
                      if (p === '3 BHK') setAreaSqFt(1850);
                      if (p === '4 BHK+') setAreaSqFt(2800);
                      if (p === 'Villa') setAreaSqFt(4200);
                    }}
                    className={`py-3 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                      propertyType === p
                        ? 'bg-[#191816] text-white border-[#191816] shadow-xs'
                        : 'bg-[#FAF8F5] text-[#191816] border-[#EAE4DA] hover:border-[#C5A880]'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Carpet Area */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#6B665E]">
                  2. Approximate Carpet Area
                </label>
                <span className="font-serif-heading font-bold text-xl text-[#191816]">
                  {areaSqFt} sq.ft
                </span>
              </div>
              <input
                type="range"
                min={500}
                max={6000}
                step={50}
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full h-2.5 bg-[#EAE4DA] rounded-lg appearance-none cursor-pointer accent-[#C5A880]"
              />
              <div className="flex justify-between text-[11px] text-[#948E85] mt-1">
                <span>500 sq.ft</span>
                <span>3,000 sq.ft</span>
                <span>6,000 sq.ft+</span>
              </div>
            </div>

            {/* 3. Finish Tier */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#6B665E] block mb-2">
                3. Material & Architectural Finish Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { tier: 'Essential', price: '₹', desc: 'Matte laminates & standard hardware' },
                  { tier: 'Premium', price: '₹₹', desc: 'Veneers, acrylics & Blum German fittings' },
                  { tier: 'Luxury', price: '₹₹₹', desc: 'Italian marble, custom brass & smart IoT' }
                ].map((t) => (
                  <button
                    key={t.tier}
                    onClick={() => setDesignTier(t.tier as any)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      designTier === t.tier
                        ? 'bg-[#191816] text-white border-[#191816] shadow-md ring-2 ring-[#C5A880]/40'
                        : 'bg-[#FAF8F5] text-[#191816] border-[#EAE4DA] hover:border-[#C5A880]'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm">{t.tier}</span>
                      <span className="text-xs text-[#C5A880] font-bold">{t.price}</span>
                    </div>
                    <p className={`text-[11px] ${designTier === t.tier ? 'text-[#D5CCC0]' : 'text-[#6B665E]'}`}>
                      {t.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Room Scope */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#6B665E] block mb-2">
                4. Select Scope Items to Include
              </label>
              <div className="space-y-2">
                {scopeItems.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => toggleScope(item.key)}
                    className={`w-full p-3.5 rounded-xl text-xs font-medium border text-left transition-all flex items-center justify-between ${
                      scope[item.key]
                        ? 'bg-[#FAF8F5] text-[#191816] border-[#C5A880] shadow-xs'
                        : 'bg-white text-[#948E85] border-[#EAE4DA]'
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-xs text-[#191816]">{item.label}</div>
                      <div className="text-[10px] text-[#6B665E] mt-0.5">{item.desc}</div>
                    </div>
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ml-3 ${
                      scope[item.key] ? 'bg-[#C5A880] border-[#C5A880] text-white' : 'border-[#D5CCC0]'
                    }`}>
                      {scope[item.key] && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result / Quotation Summary Card */}
          <div className="lg:col-span-5 sticky top-28 bg-[#191816] text-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-[#2F2C28] space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-1">
                ESTIMATED INVESTMENT RANGE
              </span>
              <div className="font-serif-heading text-4xl sm:text-5xl font-bold text-white mt-1">
                ₹{estimatedCost.minLakhs}L – ₹{estimatedCost.maxLakhs}L
              </div>
              <p className="text-xs text-neutral-400 mt-1.5 font-light">
                Estimated turnkey interior cost for a <strong>{propertyType}</strong> ({areaSqFt} sq.ft) in <strong>{designTier}</strong> grade.
              </p>
            </div>

            {/* Inclusions summary */}
            <div className="bg-[#22201D] p-5 rounded-2xl border border-[#2F2C28] text-xs space-y-2">
              <div className="flex justify-between py-1 border-b border-[#2A2825] text-neutral-300">
                <span>Selected Scope Modules:</span>
                <span className="font-bold text-white">{Object.values(scope).filter(Boolean).length} items</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#2A2825] text-neutral-300">
                <span>Move-in Timeline:</span>
                <span className="font-bold text-white">45–60 Working Days</span>
              </div>
              <div className="flex justify-between py-1 text-neutral-300">
                <span>Warranty Assurance:</span>
                <span className="font-bold text-[#C5A880]">10-Year Comprehensive</span>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                href={`/quote?type=${encodeURIComponent(propertyType)}&area=${areaSqFt}&tier=${designTier}`}
                className="w-full bg-[#C5A880] hover:bg-[#9E8159] text-white py-4 px-6 rounded-full text-xs font-semibold uppercase tracking-widest transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Get Detailed Quotation Breakdown</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setIsConsultationOpen(true)}
                className="w-full border border-white/20 hover:border-white text-white py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all text-center block"
              >
                Discuss with Principal Architect
              </button>
            </div>

            <p className="text-[10px] text-[#948E85] text-center leading-relaxed">
              * Disclaimer: Final pricing depends on structural conditions, selected stone slabs, customized hardware, and site MEP drawings.
            </p>

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
