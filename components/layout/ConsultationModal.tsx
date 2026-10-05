'use client';

import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Sparkles, MapPin, Building2, User, Phone, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { db } from '@/lib/supabase/client';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
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

  if (!isOpen) return null;

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
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      alert('There was an issue scheduling your consultation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#EAE4DA] relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white border border-[#EAE4DA] flex items-center justify-center text-[#191816] hover:bg-[#191816] hover:text-white transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="p-8 sm:p-12 text-center space-y-5">
            <div className="w-16 h-16 bg-[#F4ECE1] text-[#9E8159] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9 text-[#C5A880]" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block">
              RESERVATION CONFIRMED
            </span>
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#191816]">
              We Look Forward to Meeting You
            </h3>
            <p className="text-sm text-[#6B665E] max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. A Senior Interior Architect from our <strong>{formData.city}</strong> studio has been assigned to your project.
            </p>
            <div className="bg-white p-5 rounded-xl border border-[#EAE4DA] text-left text-xs space-y-2 max-w-md mx-auto shadow-xs">
              <div className="flex justify-between py-1 border-b border-[#FAF8F5]">
                <span className="text-[#948E85]">Mode:</span>
                <span className="font-semibold text-[#191816]">{formData.consultationType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#FAF8F5]">
                <span className="text-[#948E85]">Date & Time:</span>
                <span className="font-semibold text-[#191816]">{formData.preferredDate} at {formData.preferredTime}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#948E85]">Space:</span>
                <span className="font-semibold text-[#191816]">{formData.propertyType} ({formData.propertySizeSqFt} sq.ft)</span>
              </div>
            </div>
            <div className="pt-3">
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="bg-[#191816] hover:bg-[#C5A880] text-white px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-10">
            {/* Header */}
            <div className="mb-6 text-center sm:text-left">
              <div className="inline-flex items-center space-x-1.5 bg-[#F4ECE1] text-[#9E8159] px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3 text-[#C5A880]" />
                <span>Complimentary 1-on-1 Session</span>
              </div>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#191816]">
                Book an Interior Consultation
              </h2>
              <p className="text-xs sm:text-sm text-[#6B665E] mt-1">
                Review 3D layouts, explore physical stone/veneer samples, and get an itemized budget roadmap with our Principal Architects.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Consultation Type Selector */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#6B665E] block mb-1.5">
                  Consultation Mode
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { type: 'Studio Visit', label: 'Studio Visit (Recommended)' },
                    { type: 'Home Visit', label: 'Site / Home Visit' },
                    { type: 'Online', label: 'Video Call (Zoom)' },
                    { type: 'Phone', label: 'Phone Call' }
                  ].map((m) => (
                    <button
                      type="button"
                      key={m.type}
                      onClick={() => setFormData({ ...formData, consultationType: m.type as any })}
                      className={`p-2.5 rounded-lg text-xs font-medium text-center border transition-all ${
                        formData.consultationType === m.type
                          ? 'bg-[#191816] text-white border-[#191816] shadow-xs'
                          : 'bg-white text-[#191816] border-[#EAE4DA] hover:border-[#C5A880]'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#6B665E] block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-[#EAE4DA] text-xs sm:text-sm px-3.5 py-2.5 rounded-lg focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#6B665E] block mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-[#EAE4DA] text-xs sm:text-sm px-3.5 py-2.5 rounded-lg focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#6B665E] block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#EAE4DA] text-xs sm:text-sm px-3.5 py-2.5 rounded-lg focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                  />
                </div>
              </div>

              {/* Property Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#6B665E] block mb-1">
                    City *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-white border border-[#EAE4DA] text-xs sm:text-sm px-3 py-2.5 rounded-lg focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                  >
                    <option value="Gurgaon">Gurgaon / DLF</option>
                    <option value="Delhi">Delhi (South & Central)</option>
                    <option value="Noida">Noida & Greater Noida</option>
                    <option value="Mumbai">Mumbai & MMR</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Pune">Pune</option>
                    <option value="Other">Other Metro</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#6B665E] block mb-1">
                    Property Type *
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full bg-white border border-[#EAE4DA] text-xs sm:text-sm px-3 py-2.5 rounded-lg focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                  >
                    <option value="2 BHK">2 BHK Apartment</option>
                    <option value="3 BHK">3 BHK Apartment</option>
                    <option value="4 BHK+">4 BHK+ Luxury Residence</option>
                    <option value="Penthouse">Penthouse / Duplex</option>
                    <option value="Villa">Independent Villa</option>
                    <option value="Commercial">Office / Commercial</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#6B665E] block mb-1">
                    Estimated Budget *
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-white border border-[#EAE4DA] text-xs sm:text-sm px-3 py-2.5 rounded-lg focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                  >
                    <option value="₹5 – 10 Lakhs">₹5 – 10 Lakhs</option>
                    <option value="₹10 – 20 Lakhs">₹10 – 20 Lakhs</option>
                    <option value="₹20 – 35 Lakhs">₹20 – 35 Lakhs</option>
                    <option value="₹35 – 60 Lakhs">₹35 – 60 Lakhs</option>
                    <option value="₹60 Lakhs – 1.5 Cr+">₹60 Lakhs – 1.5 Cr+</option>
                  </select>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#6B665E] block mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-white border border-[#EAE4DA] text-xs sm:text-sm px-3.5 py-2.5 rounded-lg focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#6B665E] block mb-1">
                    Preferred Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-white border border-[#EAE4DA] text-xs sm:text-sm px-3 py-2.5 rounded-lg focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                  >
                    <option value="11:00 AM">11:00 AM – 12:30 PM (Morning)</option>
                    <option value="02:30 PM">02:30 PM – 04:00 PM (Afternoon)</option>
                    <option value="05:30 PM">05:30 PM – 07:00 PM (Evening)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="text-xs font-semibold text-[#6B665E] block mb-1">
                  Design Vision or Specific Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your floor plan status, preferred style (Japandi, Modern, Neoclassical), or key priorities..."
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full bg-white border border-[#EAE4DA] text-xs sm:text-sm p-3 rounded-lg focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C5A880] hover:bg-[#9E8159] text-white py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isSubmitting ? 'Confirming Appointment...' : 'Confirm Consultation Booking'}</span>
                </button>
                <p className="text-[11px] text-[#948E85] text-center mt-2">
                  🔒 No spam guarantee. You will receive an instant calendar invite and WhatsApp confirmation.
                </p>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
