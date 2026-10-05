'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Calculator, Sparkles, Check, ArrowRight, ShieldCheck, Download, RefreshCw } from 'lucide-react';
import { PropertyType } from '@/types';

interface CostCalculatorSectionProps {
  onOpenConsultation?: () => void;
}

export default function CostCalculatorSection({ onOpenConsultation }: CostCalculatorSectionProps) {
  const [propertyType, setPropertyType] = useState<PropertyType>('3 BHK');
  const [areaSqFt, setAreaSqFt] = useState<number>(1850);
  const [designTier, setDesignTier] = useState<'Essential' | 'Premium' | 'Luxury'>('Premium');
  const [possessionTimeline, setPossessionTimeline] = useState<'Ready' | '1-3 Months' | 'Under Construction'>('Ready');

  // Selected Scope items
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
    { key: 'modularKitchen', label: 'Modular Kitchen & Island', baseCost: 280000 },
    { key: 'wardrobes', label: 'Wardrobes (All Bedrooms)', baseCost: 220000 },
    { key: 'falseCeiling', label: 'Designer False Ceiling & Coves', baseCost: 110000 },
    { key: 'tvUnit', label: 'Acoustic TV Feature Unit', baseCost: 75000 },
    { key: 'lighting', label: 'Architectural Lighting & Magnetic Tracks', baseCost: 85000 },
    { key: 'furniture', label: 'Loose Furniture (Sofas, Dining, Bed)', baseCost: 250000 },
    { key: 'wallpaper', label: 'Textural Wallpaper / Lime Wash', baseCost: 65000 },
    { key: 'flooring', label: 'Italian Marble / Wooden Flooring', baseCost: 320000 },
    { key: 'bathroomVanities', label: 'Custom Bathroom Vanities', baseCost: 90000 },
    { key: 'smartHome', label: 'Smart IoT Automation & Dimmers', baseCost: 140000 }
  ];

  const toggleScope = (key: string) => {
    setScope(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Calculation Algorithm
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
      maxLakhs: (maxRange / 100000).toFixed(1)
    };
  }, [propertyType, areaSqFt, designTier, scope]);

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-[#EAE4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 bg-[#F4ECE1] text-[#9E8159] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>INTERACTIVE ESTIMATOR</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#191816] tracking-tight">
            Estimate Your Interior Design Cost
          </h2>
          <p className="text-sm sm:text-base text-[#6B665E] mt-3 font-light leading-relaxed">
            Configure your apartment configuration, carpet area, architectural finish tier, and room scopes for an instant, real-time budget forecast.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Controls Side */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-[#EAE4DA] space-y-6">
            
            {/* 1. Property Type */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#6B665E] block mb-2">
                1. Property Configuration
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
                    className={`py-2.5 rounded-xl text-xs sm:text-sm font-medium border transition-all ${
                      propertyType === p
                        ? 'bg-[#191816] text-white border-[#191816] shadow-xs'
                        : 'bg-white text-[#191816] border-[#EAE4DA] hover:border-[#C5A880]'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Carpet Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#6B665E]">
                  2. Approximate Area (Sq.Ft)
                </label>
                <span className="font-serif-heading font-bold text-lg text-[#191816]">
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
                className="w-full h-2 bg-[#EAE4DA] rounded-lg appearance-none cursor-pointer accent-[#C5A880]"
              />
              <div className="flex justify-between text-[11px] text-[#948E85] mt-1">
                <span>500 sq.ft</span>
                <span>3,000 sq.ft</span>
                <span>6,000 sq.ft+</span>
              </div>
            </div>

            {/* 3. Design Finish Tier */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#6B665E] block mb-2">
                3. Design & Material Finish Tier
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { tier: 'Essential', desc: 'Laminates & Standard Hardware' },
                  { tier: 'Premium', desc: 'Veneers, Acrylics & Blum German Tech' },
                  { tier: 'Luxury', desc: 'Italian Marble, Brass & Automation' }
                ].map((t) => (
                  <button
                    key={t.tier}
                    onClick={() => setDesignTier(t.tier as any)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      designTier === t.tier
                        ? 'bg-[#191816] text-white border-[#191816] shadow-md'
                        : 'bg-white text-[#191816] border-[#EAE4DA] hover:border-[#C5A880]'
                    }`}
                  >
                    <div className="font-semibold text-xs">{t.tier}</div>
                    <div className={`text-[10px] mt-0.5 line-clamp-1 ${designTier === t.tier ? 'text-[#D5CCC0]' : 'text-[#948E85]'}`}>
                      {t.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Scope Selection Checkboxes */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#6B665E] block mb-2">
                4. Select Required Room Components
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {scopeItems.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => toggleScope(item.key)}
                    className={`p-2.5 rounded-xl text-xs font-medium border text-left transition-all flex items-center justify-between ${
                      scope[item.key]
                        ? 'bg-white text-[#191816] border-[#C5A880] shadow-xs'
                        : 'bg-white/50 text-[#948E85] border-[#EAE4DA]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                      scope[item.key] ? 'bg-[#C5A880] border-[#C5A880] text-white' : 'border-[#D5CCC0]'
                    }`}>
                      {scope[item.key] && <Check className="w-3 h-3" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Card Side */}
          <div className="lg:col-span-5 sticky top-28 bg-[#191816] text-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-[#2F2C28] space-y-6">
            
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-1">
                ESTIMATED INVESTMENT RANGE
              </span>
              <div className="font-serif-heading text-3xl sm:text-4xl font-bold text-white mt-1">
                ₹{estimatedCost.minLakhs}L – ₹{estimatedCost.maxLakhs} Lakhs
              </div>
              <p className="text-xs text-neutral-400 mt-1">
                For a {propertyType} ({areaSqFt} sq.ft) with {designTier} finish specifications.
              </p>
            </div>

            {/* Summary Breakdown */}
            <div className="bg-[#22201D] p-5 rounded-2xl border border-[#2F2C28] text-xs space-y-2.5">
              <div className="flex justify-between text-neutral-300">
                <span>Selected Scope Modules:</span>
                <span className="font-semibold text-white">
                  {Object.values(scope).filter(Boolean).length} of {scopeItems.length} items
                </span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Estimated Execution Time:</span>
                <span className="font-semibold text-white">45–60 Working Days</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Warranty Assurance:</span>
                <span className="font-semibold text-[#C5A880]">10-Year Comprehensive</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <Link
                href={`/quote?type=${encodeURIComponent(propertyType)}&area=${areaSqFt}&tier=${designTier}`}
                className="w-full bg-[#C5A880] hover:bg-[#9E8159] text-white py-4 px-6 rounded-full text-xs font-semibold uppercase tracking-widest transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Get Detailed Itemized BOQ</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => {
                  if (onOpenConsultation) {
                    onOpenConsultation();
                  } else {
                    window.location.href = '/consultation';
                  }
                }}
                className="w-full border border-white/20 hover:border-white text-white py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-widest transition-all text-center block"
              >
                Discuss Quote with Architect
              </button>
            </div>

            <p className="text-[10px] text-[#948E85] text-center leading-relaxed">
              * Final cost depends on site conditions, structural alterations, exact material approvals, and brand specifications.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
