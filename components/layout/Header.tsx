'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Sparkles, 
  Heart, 
  Compass, 
  Calculator, 
  Calendar,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { db } from '@/lib/supabase/client';

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [savedCount, setSavedCount] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const updateSaved = () => {
      const items = db.getSavedItemIds();
      setSavedCount(items.length);
    };

    window.addEventListener('scroll', handleScroll);
    updateSaved();
    window.addEventListener('storage', updateSaved);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', updateSaved);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { 
      label: 'Projects', 
      href: '/projects',
      sublinks: [
        { label: 'All Projects', href: '/projects', desc: 'Explore our complete architectural portfolio' },
        { label: 'Penthouse & Luxury', href: '/projects?style=Luxury+Neoclassical', desc: 'Opulent multi-level residences' },
        { label: 'Japandi & Minimalist', href: '/projects?style=Japandi', desc: 'Calming, serene Scandinavian-Zen spaces' },
        { label: 'Modern Contemporary', href: '/projects?style=Modern+Contemporary', desc: 'Sleek urban residences with smart tech' }
      ]
    },
    { 
      label: 'Services', 
      href: '/services',
      sublinks: [
        { label: 'Turnkey Interiors', href: '/services/turnkey-interiors', desc: 'End-to-end design & execution' },
        { label: 'Residential Design', href: '/services/residential-interior-design', desc: 'Apartments, duplexes & villas' },
        { label: 'Modular Kitchens', href: '/services/modular-kitchen', desc: 'German precision & Dekton stone' },
        { label: 'Custom Wardrobes', href: '/services/wardrobe-design', desc: 'Tinted glass walk-in closets' },
        { label: 'Home Renovation', href: '/services/home-renovation', desc: 'Full structural & aesthetic revamps' },
        { label: 'View All Services', href: '/services', desc: 'Explore all 10 specialized offerings' }
      ]
    },
    { label: 'Packages', href: '/packages' },
    { label: 'Ideas & Boards', href: '/inspiration' },
    { label: 'Cost Calculator', href: '/calculator' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const headerBgClass = isScrolled || !isHomePage
    ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE4DA] text-[#191816] shadow-xs'
    : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent text-white';

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#191816] text-[#EAE4DA] text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="inline-flex items-center text-[#C5A880] font-medium">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              10-Year Warranty on Modular Joinery | 45-Day Move-In Guarantee
            </span>
            <span className="text-[#948E85]">|</span>
            <span className="text-[#D5CCC0]">Studios in Gurgaon • Mumbai • Bangalore • Delhi • Noida • Pune</span>
          </div>
          <div className="flex items-center space-x-5">
            <Link href="/ai-visualizer" className="hover:text-[#C5A880] transition-colors flex items-center">
              <Sparkles className="w-3 h-3 mr-1 text-[#C5A880]" />
              AI Room Visualizer
            </Link>
            <Link href="/admin" className="hover:text-[#C5A880] text-[#948E85] transition-colors">
              Studio Portal
            </Link>
            <a href="tel:+919810088234" className="flex items-center hover:text-[#C5A880] transition-colors font-medium">
              <Phone className="w-3 h-3 mr-1.5 text-[#C5A880]" />
              +91 98100 88234
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${headerBgClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-9 h-9 border border-[#C5A880] flex items-center justify-center bg-[#191816] text-[#C5A880] font-serif-heading font-semibold text-lg group-hover:scale-105 transition-transform">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-serif-heading text-xl md:text-2xl font-bold tracking-wider uppercase">
                  ATELIER AURA
                </span>
                <span className={`text-[9px] tracking-[0.25em] uppercase font-light -mt-1 ${isScrolled || !isHomePage ? 'text-[#6B665E]' : 'text-neutral-300'}`}>
                  Interior Architecture
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <div 
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => link.sublinks && setActiveDropdown(link.label)}
                  onMouseLeave={() => link.sublinks && setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium tracking-wide flex items-center transition-colors rounded-md ${
                      pathname === link.href
                        ? 'text-[#C5A880] font-semibold'
                        : isScrolled || !isHomePage
                        ? 'text-[#191816] hover:text-[#C5A880]'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {link.sublinks && (
                      <ChevronDown className="w-3.5 h-3.5 ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </Link>

                  {/* Mega Dropdown Menu */}
                  {link.sublinks && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 w-72 bg-white text-[#191816] rounded-lg shadow-xl border border-[#EAE4DA] p-3 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="space-y-1">
                        {link.sublinks.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block p-2.5 rounded-md hover:bg-[#FAF8F5] transition-colors group/sub"
                          >
                            <div className="text-sm font-medium text-[#191816] group-hover/sub:text-[#C5A880] flex items-center justify-between">
                              {sub.label}
                              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                            </div>
                            <div className="text-xs text-[#6B665E] mt-0.5 line-clamp-1">
                              {sub.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side CTAs */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Saved Board Heart Indicator */}
              <Link 
                href="/inspiration?saved=true" 
                className={`relative p-2 rounded-full transition-colors ${
                  isScrolled || !isHomePage 
                    ? 'hover:bg-[#EAE4DA] text-[#191816]' 
                    : 'hover:bg-white/10 text-white'
                }`}
                title="My Saved Boards"
              >
                <Heart className="w-5 h-5" />
                {savedCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#C5A880] text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                    {savedCount}
                  </span>
                )}
              </Link>

              {/* Get Quote Secondary Button */}
              <Link
                href="/quote"
                className={`text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-full border transition-all ${
                  isScrolled || !isHomePage
                    ? 'border-[#191816] text-[#191816] hover:bg-[#191816] hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-[#191816]'
                }`}
              >
                Get Quote
              </Link>

              {/* Book Consultation Primary CTA */}
              <button
                onClick={() => {
                  if (onOpenConsultation) {
                    onOpenConsultation();
                  } else {
                    window.location.href = '/consultation';
                  }
                }}
                className="bg-[#C5A880] hover:bg-[#9E8159] text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center space-x-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-3 lg:hidden">
              <Link 
                href="/inspiration?saved=true"
                className={`p-2 rounded-full ${isScrolled || !isHomePage ? 'text-[#191816]' : 'text-white'}`}
              >
                <Heart className="w-5 h-5" />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md ${isScrolled || !isHomePage ? 'text-[#191816]' : 'text-white'}`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F5] lg:hidden flex flex-col pt-24 px-6 pb-8 overflow-y-auto animate-in slide-in-from-right duration-300 text-[#191816]">
          <div className="space-y-4 flex-1">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-[#EAE4DA] pb-3">
                <Link
                  href={link.href}
                  className="text-lg font-serif-heading font-medium text-[#191816] flex items-center justify-between"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                  <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
                </Link>
                {link.sublinks && (
                  <div className="mt-2 pl-3 space-y-2">
                    {link.sublinks.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block text-sm text-[#6B665E] hover:text-[#C5A880]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        • {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-2 space-y-2">
              <Link
                href="/ai-visualizer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg bg-[#F4ECE1] text-[#9E8159] font-medium text-sm"
              >
                <span className="flex items-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI Room Visualizer
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg bg-[#FAF8F5] border border-[#EAE4DA] text-[#191816] font-medium text-sm"
              >
                <span className="flex items-center">
                  <Calculator className="w-4 h-4 mr-2 text-[#C5A880]" />
                  Interior Cost Calculator
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="pt-6 space-y-3 border-t border-[#EAE4DA]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenConsultation) {
                  onOpenConsultation();
                } else {
                  window.location.href = '/consultation';
                }
              }}
              className="w-full bg-[#C5A880] text-white py-3 rounded-full font-medium text-sm tracking-wider uppercase flex items-center justify-center space-x-2 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Consultation</span>
            </button>

            <Link
              href="/quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center border border-[#191816] text-[#191816] py-3 rounded-full font-medium text-sm tracking-wider uppercase"
            >
              Get Instant Quotation
            </Link>

            <div className="text-center pt-2">
              <a href="tel:+919810088234" className="text-xs text-[#6B665E] flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 mr-1 text-[#C5A880]" />
                Call Design Desk: +91 98100 88234
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
