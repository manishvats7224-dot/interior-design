'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Phone, 
  Mail, 
  User, 
  ShieldCheck, 
  Award,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { db } from '@/lib/supabase/client';

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Gurgaon',
    propertyType: '3 BHK',
    propertySizeSqFt: 2200,
    budget: '₹20 – 35 Lakhs',
    preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    preferredTime: '11:00 AM',
    consultationType: 'Studio Visit' as 'Online' | 'Phone' | 'Studio Visit' | 'Home Visit',
    requirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await db.createBooking({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        propertyType: formData.propertyType,
        propertySizeSqFt: Number(formData.propertySizeSqFt),
        budget: formData.budget,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        consultationType: formData.consultationType,
        requirements: formData.requirements
      });

      setIsSuccess(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      alert('Could not schedule appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
            DESIGN CONSULTATION
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#191816] tracking-tight">
            Schedule a Design Session
          </h1>
          <p className="text-sm text-[#6B665E] mt-3 font-light leading-relaxed">
            Meet our Principal Architects in person at our experience studios (Gurgaon, Mumbai, Bangalore) or over a 1-on-1 virtual design workshop.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl border border-[#EAE4DA] shadow-xl overflow-hidden">
          
          {isSuccess ? (
            <div className="p-10 sm:p-16 text-center space-y-6">
              <div className="w-20 h-20 bg-[#F4ECE1] text-[#C5A880] rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block">
                CONSULTATION APPOINTMENT CONFIRMED
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#191816]">
                We Look Forward to Designing With You
              </h2>
              <p className="text-sm text-[#6B665E] max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. A confirmation email and calendar invite has been sent to <strong>{formData.email}</strong>.
              </p>

              <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#EAE4DA] text-left text-xs space-y-3 max-w-md mx-auto">
                <div className="flex justify-between py-1 border-b border-[#EAE4DA]">
                  <span className="text-[#948E85]">Mode:</span>
                  <span className="font-bold text-[#191816]">{formData.consultationType}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EAE4DA]">
                  <span className="text-[#948E85]">Date & Time:</span>
                  <span className="font-bold text-[#191816]">{formData.preferredDate} at {formData.preferredTime}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EAE4DA]">
                  <span className="text-[#948E85]">Property Scope:</span>
                  <span className="font-bold text-[#191816]">{formData.propertyType} ({formData.propertySizeSqFt} sq.ft)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#948E85]">Assigned Studio:</span>
                  <span className="font-bold text-[#191816]">{formData.city} Studio</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-4">
                <Link
                  href="/"
                  className="bg-[#191816] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#C5A880] transition-colors"
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          ) : (
            <div className="p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Mode */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#6B665E] block mb-2">
                    1. Consultation Format
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { type: 'Studio Visit', label: 'Studio Visit (Atelier)' },
                      { type: 'Home Visit', label: 'Site / Home Visit' },
                      { type: 'Online', label: 'Video Call (Zoom)' },
                      { type: 'Phone', label: 'Direct Phone Call' }
                    ].map((m) => (
                      <button
                        type="button"
                        key={m.type}
                        onClick={() => setFormData({ ...formData, consultationType: m.type as any })}
                        className={`p-3 rounded-xl text-xs font-medium text-center border transition-all ${
                          formData.consultationType === m.type
                            ? 'bg-[#191816] text-white border-[#191816] shadow-xs'
                            : 'bg-[#FAF8F5] text-[#191816] border-[#EAE4DA] hover:border-[#C5A880]'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Personal Info */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#6B665E] block mb-2">
                    2. Contact Details
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm px-4 py-3 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm px-4 py-3 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm px-4 py-3 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Property Information */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#6B665E] block mb-2">
                    3. Property & Budget Specifications
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm px-3.5 py-3 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                    >
                      <option value="Gurgaon">Gurgaon (DLF & Golf Course)</option>
                      <option value="Delhi">Delhi (South & Central)</option>
                      <option value="Noida">Noida & Greater Noida</option>
                      <option value="Mumbai">Mumbai & MMR</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Pune">Pune</option>
                    </select>

                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm px-3.5 py-3 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                    >
                      <option value="2 BHK">2 BHK Apartment</option>
                      <option value="3 BHK">3 BHK Apartment</option>
                      <option value="4 BHK+">4 BHK+ Luxury Residence</option>
                      <option value="Penthouse">Penthouse / Duplex</option>
                      <option value="Villa">Independent Villa</option>
                      <option value="Office">Commercial Office</option>
                    </select>

                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm px-3.5 py-3 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                    >
                      <option value="₹5 – 10 Lakhs">₹5 – 10 Lakhs</option>
                      <option value="₹10 – 20 Lakhs">₹10 – 20 Lakhs</option>
                      <option value="₹20 – 35 Lakhs">₹20 – 35 Lakhs</option>
                      <option value="₹35 – 60 Lakhs">₹35 – 60 Lakhs</option>
                      <option value="₹60 Lakhs – 1.5 Cr+">₹60 Lakhs – 1.5 Cr+</option>
                    </select>
                  </div>
                </div>

                {/* 4. Date & Time */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#6B665E] block mb-2">
                    4. Select Preferred Date & Slot
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm px-4 py-3 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                    />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm px-3.5 py-3 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                    >
                      <option value="11:00 AM">11:00 AM – 12:30 PM (Morning Slot)</option>
                      <option value="02:30 PM">02:30 PM – 04:00 PM (Afternoon Slot)</option>
                      <option value="05:30 PM">05:30 PM – 07:00 PM (Evening Slot)</option>
                    </select>
                  </div>
                </div>

                {/* 5. Notes */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#6B665E] block mb-2">
                    5. Project Vision or Specific Priorities (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="E.g., We have a possession in DLF Camellias next month. Looking for a modern Japandi aesthetic with acoustic panelling and a chef's island kitchen..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm p-4 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                  />
                </div>

                {/* CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C5A880] hover:bg-[#9E8159] text-white py-4 px-6 rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isSubmitting ? 'Confirming Appointment...' : 'Confirm Consultation Booking'}</span>
                </button>

              </form>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
