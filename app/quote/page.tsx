'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Check, 
  UploadCloud, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2,
  Calendar,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { db } from '@/lib/supabase/client';
import { PropertyType, DesignStyle } from '@/types';

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Gurgaon',
    propertyType: '3 BHK' as PropertyType,
    areaSqFt: 1850,
    roomsSelected: ['Living Room', 'Modular Kitchen', 'Master Bedroom', 'Bathrooms'],
    stylePreference: 'Modern Contemporary' as DesignStyle,
    budgetRange: '₹20 – 35 Lakhs',
    possessionStatus: 'Ready to Move' as 'Ready to Move' | 'Within 3 Months' | '3-6 Months' | 'Under Construction',
    hasFloorPlan: false,
    floorPlanFileName: ''
  });

  const availableRooms = [
    'Living & Dining Room',
    'Modular Kitchen & Island',
    'Master Bedroom Suite',
    'Guest Bedroom',
    'Kids / Teen Room',
    'Luxury Bathrooms',
    'Balcony / Deck Terrace',
    'Walk-in Wardrobe',
    'Pooja Room',
    'Home Office Pod'
  ];

  const styles: DesignStyle[] = [
    'Modern Contemporary',
    'Luxury Neoclassical',
    'Japandi',
    'Scandinavian',
    'Minimalist',
    'Warm Traditional'
  ];

  const toggleRoom = (room: string) => {
    setFormData(prev => ({
      ...prev,
      roomsSelected: prev.roomsSelected.includes(room)
        ? prev.roomsSelected.filter(r => r !== room)
        : [...prev.roomsSelected, room]
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        hasFloorPlan: true,
        floorPlanFileName: e.target.files![0].name
      }));
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const estimatedCost = `₹${((formData.areaSqFt * 1200) / 100000).toFixed(1)}L – ₹${((formData.areaSqFt * 1700) / 100000).toFixed(1)} Lakhs`;

      await db.createQuoteRequest({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        propertyType: formData.propertyType,
        areaSqFt: formData.areaSqFt,
        roomsSelected: formData.roomsSelected,
        stylePreference: formData.stylePreference,
        budgetRange: formData.budgetRange,
        possessionStatus: formData.possessionStatus,
        estimatedCostRange: estimatedCost,
        hasFloorPlan: formData.hasFloorPlan,
        floorPlanFileName: formData.floorPlanFileName
      });

      setIsSuccess(true);
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 }
      });
    } catch {
      alert('Could not submit quotation request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
            7-STEP CUSTOM QUOTATION WIZARD
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#191816] tracking-tight">
            Get an Itemized Project Estimate
          </h1>
          <p className="text-xs sm:text-sm text-[#6B665E] mt-2 font-light">
            Step {step} of 6 • Takes less than 2 minutes to generate a personalized BOQ scope
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#EAE4DA] h-1.5 rounded-full mb-8 overflow-hidden">
          <div 
            className="bg-[#C5A880] h-full transition-all duration-300"
            style={{ width: `${(step / 6) * 100}%` }}
          />
        </div>

        {/* Wizard Container */}
        <div className="bg-white rounded-3xl border border-[#EAE4DA] shadow-xl p-8 sm:p-12">
          
          {isSuccess ? (
            <div className="text-center space-y-6 py-6">
              <div className="w-20 h-20 bg-[#F4ECE1] text-[#C5A880] rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block">
                QUOTATION SUBMITTED SUCCESSFULLY
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#191816]">
                Your Itemized Scope is Being Prepared
              </h2>
              <p className="text-xs sm:text-sm text-[#6B665E] max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our senior estimator has received your details for <strong>{formData.propertyType}</strong> ({formData.areaSqFt} sq.ft) in <strong>{formData.city}</strong>.
              </p>

              <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#EAE4DA] text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between py-1 border-b border-[#EAE4DA]">
                  <span className="text-[#948E85]">Aesthetic Style:</span>
                  <span className="font-bold text-[#191816]">{formData.stylePreference}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EAE4DA]">
                  <span className="text-[#948E85]">Possession:</span>
                  <span className="font-bold text-[#191816]">{formData.possessionStatus}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#948E85]">Floor Plan:</span>
                  <span className="font-bold text-[#191816]">{formData.hasFloorPlan ? 'Attached (' + formData.floorPlanFileName + ')' : 'None'}</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-4">
                <Link
                  href="/"
                  className="bg-[#191816] hover:bg-[#C5A880] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* STEP 1: Personal Info */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-serif-heading text-xl font-bold text-[#191816]">
                    Step 1: Contact Information
                  </h3>
                  <p className="text-xs text-[#6B665E]">
                    Where should we send your itemized estimate and 3D concept deck?
                  </p>
                  <div className="space-y-3 pt-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm p-3.5 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp / Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm p-3.5 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm p-3.5 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Property Type & Area */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-serif-heading text-xl font-bold text-[#191816]">
                    Step 2: Property Specifications
                  </h3>
                  <p className="text-xs text-[#6B665E]">
                    Select your layout type, city, and approximate area.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                    {(['1 BHK', '2 BHK', '3 BHK', '4 BHK+', 'Villa', 'Penthouse'] as PropertyType[]).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setFormData({ ...formData, propertyType: p })}
                        className={`p-3 rounded-xl text-xs font-semibold border transition-all ${
                          formData.propertyType === p
                            ? 'bg-[#191816] text-white border-[#191816] shadow-xs'
                            : 'bg-[#FAF8F5] text-[#191816] border-[#EAE4DA] hover:border-[#C5A880]'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                    <div>
                      <label className="text-xs text-[#6B665E] block mb-1">City</label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs p-3 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                      >
                        <option value="Gurgaon">Gurgaon / DLF</option>
                        <option value="Delhi">Delhi (South & Central)</option>
                        <option value="Noida">Noida & Greater Noida</option>
                        <option value="Mumbai">Mumbai & MMR</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Pune">Pune</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-[#6B665E] block mb-1">Carpet Area (Sq.Ft)</label>
                      <input
                        type="number"
                        value={formData.areaSqFt}
                        onChange={(e) => setFormData({ ...formData, areaSqFt: Number(e.target.value) })}
                        className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs p-3 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Rooms Required */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="font-serif-heading text-xl font-bold text-[#191816]">
                    Step 3: Rooms & Spaces Required
                  </h3>
                  <p className="text-xs text-[#6B665E]">
                    Check all areas included in your design scope.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {availableRooms.map((room) => {
                      const selected = formData.roomsSelected.includes(room);
                      return (
                        <button
                          key={room}
                          type="button"
                          onClick={() => toggleRoom(room)}
                          className={`p-3 rounded-xl text-xs font-medium border text-left flex items-center justify-between transition-all ${
                            selected
                              ? 'bg-[#FAF8F5] text-[#191816] border-[#C5A880] shadow-xs'
                              : 'bg-white text-[#948E85] border-[#EAE4DA]'
                          }`}
                        >
                          <span>{room}</span>
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                            selected ? 'bg-[#C5A880] border-[#C5A880] text-white' : 'border-[#D5CCC0]'
                          }`}>
                            {selected && <Check className="w-3 h-3" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 4: Design Style Preference */}
              {step === 4 && (
                <div className="space-y-4">
                  <h3 className="font-serif-heading text-xl font-bold text-[#191816]">
                    Step 4: Design Style Preference
                  </h3>
                  <p className="text-xs text-[#6B665E]">
                    Which architectural aesthetic best represents your vision?
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    {styles.map((st) => (
                      <button
                        key={st}
                        type="button"
                        onClick={() => setFormData({ ...formData, stylePreference: st })}
                        className={`p-4 rounded-2xl text-center border transition-all ${
                          formData.stylePreference === st
                            ? 'bg-[#191816] text-white border-[#191816] shadow-md'
                            : 'bg-[#FAF8F5] text-[#191816] border-[#EAE4DA] hover:border-[#C5A880]'
                        }`}
                      >
                        <span className="font-bold text-xs">{st}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 5: Possession Status & Budget */}
              {step === 5 && (
                <div className="space-y-4">
                  <h3 className="font-serif-heading text-xl font-bold text-[#191816]">
                    Step 5: Timeline & Budget Target
                  </h3>
                  <p className="text-xs text-[#6B665E]">
                    When do you expect possession or handover?
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    {(['Ready to Move', 'Within 3 Months', '3-6 Months', 'Under Construction'] as const).map((pos) => (
                      <button
                        key={pos}
                        type="button"
                        onClick={() => setFormData({ ...formData, possessionStatus: pos })}
                        className={`p-3 rounded-xl text-xs font-semibold border transition-all ${
                          formData.possessionStatus === pos
                            ? 'bg-[#191816] text-white border-[#191816] shadow-xs'
                            : 'bg-[#FAF8F5] text-[#191816] border-[#EAE4DA] hover:border-[#C5A880]'
                        }`}
                      >
                        {pos}
                      </button>
                    ))}
                  </div>

                  <div className="pt-3">
                    <label className="text-xs text-[#6B665E] block mb-1">Target Budget Range</label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs p-3 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                    >
                      <option value="₹5 – 10 Lakhs">₹5 – 10 Lakhs</option>
                      <option value="₹10 – 20 Lakhs">₹10 – 20 Lakhs</option>
                      <option value="₹20 – 35 Lakhs">₹20 – 35 Lakhs</option>
                      <option value="₹35 – 60 Lakhs">₹35 – 60 Lakhs</option>
                      <option value="₹60 Lakhs – 1.5 Cr+">₹60 Lakhs – 1.5 Cr+</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 6: Upload Floor Plan (Optional) */}
              {step === 6 && (
                <div className="space-y-4">
                  <h3 className="font-serif-heading text-xl font-bold text-[#191816]">
                    Step 6: Attach Floor Plan (Optional)
                  </h3>
                  <p className="text-xs text-[#6B665E]">
                    Have a PDF or photo of your builder blueprint? Uploading it allows our architects to generate an exact CAD layout before your call.
                  </p>

                  <div className="border-2 border-dashed border-[#EAE4DA] rounded-2xl p-8 text-center bg-[#FAF8F5] hover:bg-white transition-colors cursor-pointer relative">
                    <input
                      type="file"
                      accept=".pdf,.png,.jpg,.jpeg,.dwg"
                      onChange={handleFileUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <UploadCloud className="w-10 h-10 text-[#C5A880] mx-auto mb-2" />
                    <span className="text-xs font-bold text-[#191816] block">
                      {formData.floorPlanFileName ? formData.floorPlanFileName : 'Click to Upload Floor Plan / Blueprint'}
                    </span>
                    <span className="text-[10px] text-[#948E85] mt-1 block">
                      Supports PDF, PNG, JPG (up to 25 MB)
                    </span>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="pt-6 border-t border-[#FAF8F5] flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 rounded-full border border-[#EAE4DA] text-xs font-semibold text-[#191816] hover:bg-[#FAF8F5] transition-colors flex items-center space-x-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>
                ) : <div />}

                {step < 6 ? (
                  <button
                    type="button"
                    onClick={() => {
                      if (step === 1 && (!formData.name || !formData.phone)) {
                        alert('Please enter your name and phone number.');
                        return;
                      }
                      setStep(step + 1);
                    }}
                    className="bg-[#191816] hover:bg-[#C5A880] text-white px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center space-x-1.5"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-[#C5A880] hover:bg-[#9E8159] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-md flex items-center space-x-2 disabled:opacity-50"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isSubmitting ? 'Calculating BOQ...' : 'Generate My Quotation'}</span>
                  </button>
                )}
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
