'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles, 
  Send,
  Building2 
} from 'lucide-react';
import { db } from '@/lib/supabase/client';
import { LOCATIONS } from '@/lib/data/locations';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Gurgaon',
    service: 'Turnkey Interiors',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await db.createLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        propertyType: 'General Enquiry',
        budget: 'To be discussed',
        requirements: [formData.service],
        status: 'New',
        source: 'Website Form',
        notes: `Contact message: ${formData.message}`
      });

      setIsSuccess(true);
    } catch {
      alert('Could not send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
            EXPERIENCE STUDIOS & CONCIERGE
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold text-[#191816] tracking-tight">
            Connect With Our Design Studios
          </h1>
          <p className="text-sm sm:text-base text-[#6B665E] mt-3 font-light leading-relaxed">
            Visit our experience studios in Gurgaon, Mumbai, and Bangalore, or schedule an on-site consultation with our architectural team.
          </p>
        </div>

        {/* Contact Form & Main Office Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-[#EAE4DA] shadow-xl space-y-6">
            <div>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#191816]">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-[#6B665E] mt-1 font-light">
                Our design concierge typically replies within 1 business hour.
              </p>
            </div>

            {isSuccess ? (
              <div className="p-8 bg-[#FAF8F5] rounded-2xl border border-[#EAE4DA] text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#C5A880] mx-auto" />
                <h3 className="font-serif-heading text-2xl font-bold text-[#191816]">
                  Message Received
                </h3>
                <p className="text-xs text-[#6B665E] max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. A Senior Architect from our <strong>{formData.city}</strong> studio will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-xs font-semibold uppercase tracking-wider text-[#C5A880] underline pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-[#6B665E] block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Singhania"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm px-4 py-3 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#6B665E] block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm px-4 py-3 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-[#6B665E] block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm px-4 py-3 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#6B665E] block mb-1">City Studio *</label>
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
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#6B665E] block mb-1">Service Required</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm px-3.5 py-3 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                  >
                    <option value="Turnkey Interiors">Complete Turnkey Interiors</option>
                    <option value="Modular Kitchen">Modular Kitchen & Dining</option>
                    <option value="Wardrobes">Walk-in Wardrobes</option>
                    <option value="Living Room">Living Room & Acoustic Panelling</option>
                    <option value="Renovation">Complete Home Renovation</option>
                    <option value="Office">Commercial & Office Fitouts</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#6B665E] block mb-1">Message / Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your space (flat configuration, square footage, possession date, or preferred aesthetic)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm p-4 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#191816] hover:bg-[#C5A880] text-white py-4 px-6 rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Submit Message to Design Desk'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Quick Contact & Studio Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Line Card */}
            <div className="bg-[#191816] text-white p-8 sm:p-10 rounded-3xl border border-[#2F2C28] shadow-xl space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block">
                DIRECT CONCIERGE HOTLINE
              </span>
              <div className="space-y-4 text-xs text-neutral-300">
                <a href="tel:+919810088234" className="flex items-center space-x-3 text-white hover:text-[#C5A880] transition-colors text-sm font-bold">
                  <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>+91 98100 88234</span>
                </a>
                <a href="mailto:hello@atelieraura.com" className="flex items-center space-x-3 text-white hover:text-[#C5A880] transition-colors text-sm font-bold">
                  <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>hello@atelieraura.com</span>
                </a>
                <div className="flex items-start space-x-3 pt-2">
                  <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <span>Studio Hours: Mon – Sat (10:00 AM – 8:00 PM)</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href="https://wa.me/919810088234?text=Hi%2C%20I%20would%20like%20to%20discuss%20an%20interior%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1EBE5B] text-white py-3.5 px-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all flex items-center justify-center space-x-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Guarantee Badge */}
            <div className="bg-white p-6 rounded-3xl border border-[#EAE4DA] shadow-xs space-y-2 text-xs text-[#6B665E]">
              <div className="font-bold text-sm text-[#191816] flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-[#C5A880]" />
                <span>Complimentary 1-on-1 Studio Sessions</span>
              </div>
              <p className="font-light">
                Our initial 60-minute spatial planning session is completely complimentary. Bring your floor plan to view physical stone samples and 3D concept possibilities.
              </p>
            </div>

          </div>

        </div>

        {/* Multi-City Studio Locations Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-1">
              STUDIO NETWORK
            </span>
            <h2 className="font-serif-heading text-3xl font-bold text-[#191816]">
              Our Metro Experience Centers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <div key={loc.slug} className="bg-white p-6 rounded-2xl border border-[#EAE4DA] shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-heading text-xl font-bold text-[#191816]">
                    {loc.cityName}
                  </h3>
                  <span className="text-[10px] uppercase font-semibold text-[#948E85] bg-[#FAF8F5] px-2 py-0.5 rounded-md border border-[#EAE4DA]">
                    {loc.homesDesigned}+ Delivered
                  </span>
                </div>
                <div className="space-y-1.5 text-xs text-[#6B665E]">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{loc.studioAddress}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-[#FAF8F5]">
                  <Link
                    href={`/interior-designers/${loc.slug}`}
                    className="text-xs font-semibold text-[#C5A880] hover:underline"
                  >
                    View {loc.cityName} City Projects →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
