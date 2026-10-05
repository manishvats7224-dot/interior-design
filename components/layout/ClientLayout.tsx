'use client';

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';
import ConsultationModal from './ConsultationModal';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <Header onOpenConsultation={() => setIsConsultationOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
    </>
  );
}
