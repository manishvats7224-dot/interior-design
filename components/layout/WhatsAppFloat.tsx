'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, CheckCircle2 } from 'lucide-react';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('New Home Interior Consultation');

  const topics = [
    'New Home Interior Consultation',
    'Get Approximate Cost for 2BHK/3BHK',
    'Book Studio Visit (Gurgaon / Mumbai / Bangalore)',
    'Modular Kitchen & Wardrobes Enquiry'
  ];

  const handleStartWhatsAppChat = () => {
    const message = encodeURIComponent(
      `Hi Atelier Aura Team, I am interested in interior design services for: ${selectedTopic}. Please share the process and available consultation slots.`
    );
    window.open(`https://wa.me/919810088234?text=${message}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Chat Drawer */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-[#EAE4DA] overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#191816] p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="font-medium text-sm text-white flex items-center">
                  Atelier Aura Concierge
                  <span className="w-2 h-2 rounded-full bg-[#25D366] ml-2 animate-pulse" />
                </h4>
                <p className="text-[11px] text-[#D5CCC0]">Usually responds in ~5 minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#FAF8F5] space-y-3">
            <div className="bg-white p-3 rounded-xl border border-[#EAE4DA] text-xs text-[#191816] shadow-xs">
              <p className="leading-relaxed">
                👋 Hello! Welcome to <strong>Atelier Aura</strong>. How can our interior architects assist you with your home today?
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-[#6B665E] uppercase tracking-wider block">
                Select your requirement:
              </label>
              {topics.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSelectedTopic(t)}
                  className={`w-full text-left p-2.5 rounded-lg text-xs transition-all flex items-center justify-between border ${
                    selectedTopic === t
                      ? 'bg-[#191816] text-white border-[#191816] shadow-xs'
                      : 'bg-white text-[#191816] border-[#EAE4DA] hover:border-[#C5A880]'
                  }`}
                >
                  <span className="truncate">{t}</span>
                  {selectedTopic === t && <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 ml-1" />}
                </button>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-3 bg-white border-t border-[#EAE4DA]">
            <button
              onClick={handleStartWhatsAppChat}
              className="w-full bg-[#25D366] hover:bg-[#1EBE5B] text-white py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>Continue on WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center space-x-2 bg-[#25D366] hover:bg-[#1EBE5B] text-white py-3 px-4 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 focus:outline-hidden"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
          Chat With Designer
        </span>
      </button>
    </div>
  );
}
