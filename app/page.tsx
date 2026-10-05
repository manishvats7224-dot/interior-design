'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/home/HeroSection';
import DiscoverySearch from '@/components/home/DiscoverySearch';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ServicesGrid from '@/components/home/ServicesGrid';
import PopularStyles from '@/components/home/PopularStyles';
import BeforeAfterSection from '@/components/home/BeforeAfterSection';
import PackagesSection from '@/components/home/PackagesSection';
import CostCalculatorSection from '@/components/home/CostCalculatorSection';
import DesignProcessSection from '@/components/home/DesignProcessSection';
import DesignersShowcase from '@/components/home/DesignersShowcase';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import AIConceptSection from '@/components/home/AIConceptSection';
import InspirationPreview from '@/components/home/InspirationPreview';
import BlogPreview from '@/components/home/BlogPreview';
import FAQSection from '@/components/home/FAQSection';
import FinalCTASection from '@/components/home/FinalCTASection';
import ConsultationModal from '@/components/layout/ConsultationModal';

export default function HomePage() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const openConsultation = () => {
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection onOpenConsultation={openConsultation} />

      {/* 2. Search / Discovery */}
      <DiscoverySearch />

      {/* 3. Featured Projects Case Studies */}
      <FeaturedProjects />

      {/* 4. Specialized Services Grid */}
      <ServicesGrid />

      {/* 5. Popular Interior Architectural Styles */}
      <PopularStyles />

      {/* 6. Interactive Before & After Transformation Slider */}
      <BeforeAfterSection />

      {/* 7. Interior Packages (Essential, Premium, Luxury) */}
      <PackagesSection onOpenConsultation={openConsultation} />

      {/* 8. Interactive Interior Cost Calculator */}
      <CostCalculatorSection onOpenConsultation={openConsultation} />

      {/* 9. 8-Step Design Process Timeline */}
      <DesignProcessSection />

      {/* 10. Principal Interior Architects */}
      <DesignersShowcase onOpenConsultation={openConsultation} />

      {/* 11. Client Stories & Testimonials */}
      <TestimonialsSection />

      {/* 12. AI Room Concept Generator */}
      <AIConceptSection />

      {/* 13. Curated Moodboard & Ideas Preview */}
      <InspirationPreview />

      {/* 14. Editorial Journal & Design Guides */}
      <BlogPreview />

      {/* 15. FAQs */}
      <FAQSection />

      {/* 16. High-Conversion Final CTA */}
      <FinalCTASection onOpenConsultation={openConsultation} />

      {/* Direct Page-level Consultation Modal Trigger */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </div>
  );
}
