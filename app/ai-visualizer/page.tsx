'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  UploadCloud, 
  RefreshCw, 
  ArrowRight, 
  Wand2, 
  CheckCircle2, 
  Download, 
  Calendar,
  Layers,
  Sliders
} from 'lucide-react';
import { DesignStyle, RoomCategory } from '@/types';
import ConsultationModal from '@/components/layout/ConsultationModal';

export default function AIVisualizerPage() {
  const [selectedRoom, setSelectedRoom] = useState<RoomCategory>('Living Room');
  const [selectedStyle, setSelectedStyle] = useState<DesignStyle>('Japandi');
  const [isGenerating, setIsGenerating] = useState(false);
  const [userUploadedImage, setUserUploadedImage] = useState<string | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const styleConcepts: Record<string, string> = {
    'Japandi': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    'Luxury Neoclassical': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    'Modern Contemporary': 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    'Scandinavian': 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85',
    'Minimalist': 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85'
  };

  const [currentRender, setCurrentRender] = useState<string>(styleConcepts['Japandi']);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setUserUploadedImage(url);
    }
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setCurrentRender(styleConcepts[selectedStyle] || styleConcepts['Japandi']);
      setIsGenerating(false);
    }, 1200);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 bg-[#F4ECE1] text-[#9E8159] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3">
            <Wand2 className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>AI ROOM DESIGN ENGINE</span>
          </div>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold text-[#191816] tracking-tight">
            AI Interior Redesign Studio
          </h1>
          <p className="text-sm sm:text-base text-[#6B665E] mt-3 font-light leading-relaxed">
            Upload a photo of your existing room or raw builder apartment, choose an architectural aesthetic, and see your redesigned room rendered instantly.
          </p>
        </div>

        {/* Studio Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Side */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE4DA] shadow-lg space-y-6">
            
            {/* 1. Upload Photo */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#6B665E] block mb-2">
                1. Upload Your Room Photo (Optional)
              </label>
              <div className="border-2 border-dashed border-[#EAE4DA] rounded-2xl p-6 text-center bg-[#FAF8F5] hover:bg-white transition-colors cursor-pointer relative overflow-hidden">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer z-10"
                />
                {userUploadedImage ? (
                  <div className="space-y-2">
                    <div
                      className="w-full h-32 rounded-xl bg-cover bg-center border border-[#EAE4DA]"
                      style={{ backgroundImage: `url(${userUploadedImage})` }}
                    />
                    <span className="text-xs font-bold text-[#2E7D32] flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                      Photo Uploaded • Click to Replace
                    </span>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <UploadCloud className="w-8 h-8 text-[#C5A880] mx-auto mb-1" />
                    <span className="text-xs font-bold text-[#191816] block">
                      Click to upload photo of your room
                    </span>
                    <span className="text-[10px] text-[#948E85] block">
                      Living room, bedroom, kitchen or empty flat
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* 2. Room Type */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#6B665E] block mb-2">
                2. Select Room Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['Living Room', 'Modular Kitchen', 'Master Bedroom', 'Bathroom'] as RoomCategory[]).map((rm) => (
                  <button
                    key={rm}
                    type="button"
                    onClick={() => setSelectedRoom(rm)}
                    className={`p-2.5 rounded-xl text-xs font-medium border transition-all ${
                      selectedRoom === rm
                        ? 'bg-[#191816] text-white border-[#191816]'
                        : 'bg-[#FAF8F5] text-[#191816] border-[#EAE4DA] hover:border-[#C5A880]'
                    }`}
                  >
                    {rm}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Style */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#6B665E] block mb-2">
                3. Choose Architectural Aesthetic
              </label>
              <div className="space-y-2">
                {(['Japandi', 'Luxury Neoclassical', 'Modern Contemporary', 'Scandinavian', 'Minimalist'] as DesignStyle[]).map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setSelectedStyle(st)}
                    className={`w-full p-3 rounded-xl text-xs font-medium border text-left flex items-center justify-between transition-all ${
                      selectedStyle === st
                        ? 'bg-[#191816] text-white border-[#191816] shadow-xs'
                        : 'bg-[#FAF8F5] text-[#191816] border-[#EAE4DA] hover:border-[#C5A880]'
                    }`}
                  >
                    <span>{st}</span>
                    {selectedStyle === st && <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate CTA */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-[#C5A880] hover:bg-[#9E8159] text-white py-4 px-6 rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <Wand2 className="w-4 h-4" />
              <span>{isGenerating ? 'Generating AI Concept...' : 'Generate Redesigned Concept'}</span>
            </button>

          </div>

          {/* Render Output Side */}
          <div className="lg:col-span-7 bg-[#191816] text-white p-6 sm:p-8 rounded-3xl border border-[#2F2C28] shadow-2xl space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block">
                  AI RENDERING PREVIEW
                </span>
                <h3 className="font-serif-heading text-2xl font-bold mt-0.5">
                  {selectedStyle} {selectedRoom} Concept
                </h3>
              </div>
              <span className="bg-[#22201D] text-xs px-3 py-1 rounded-full border border-white/10 text-neutral-300">
                8K Photoreal Simulation
              </span>
            </div>

            {/* Render Canvas */}
            <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden border border-white/15 bg-neutral-900">
              {isGenerating ? (
                <div className="w-full h-full flex flex-col items-center justify-center space-y-3">
                  <RefreshCw className="w-10 h-10 text-[#C5A880] animate-spin" />
                  <p className="text-xs text-neutral-300 uppercase tracking-widest font-semibold">
                    Re-architecting Lighting, Textures & Joinery...
                  </p>
                </div>
              ) : (
                <div
                  className="w-full h-full bg-cover bg-center transition-all duration-700 animate-in fade-in"
                  style={{ backgroundImage: `url(${currentRender})` }}
                />
              )}
            </div>

            {/* Execution CTA Banner */}
            <div className="bg-[#22201D] p-5 rounded-2xl border border-[#2F2C28] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-serif-heading text-lg font-bold text-white">
                  Turn This Concept Into Your Real Interior
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Our team can engineer this exact aesthetic for your actual space with a 10-year warranty.
                </p>
              </div>

              <button
                onClick={() => setIsConsultationOpen(true)}
                className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#9E8159] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap flex items-center justify-center space-x-1.5 shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Call with Architect</span>
              </button>
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
