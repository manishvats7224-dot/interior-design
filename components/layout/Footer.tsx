import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Clock, 
  ArrowRight 
} from 'lucide-react';
import { LOCATIONS } from '@/lib/data/locations';

export default function Footer() {
  return (
    <footer className="bg-[#191816] text-[#FAF8F5] pt-16 pb-12 border-t border-[#2A2825]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Studio Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[#2A2825]">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 border border-[#C5A880] flex items-center justify-center text-[#C5A880] font-serif-heading font-semibold text-lg">
                A
              </div>
              <span className="font-serif-heading text-2xl font-bold tracking-wider uppercase text-white">
                ATELIER AURA
              </span>
            </div>
            <p className="text-[#948E85] text-sm leading-relaxed max-w-lg">
              Atelier Aura is a full-service Interior Architecture and Turnkey Design studio. We combine architectural rigor, Italian stone craftsmanship, and factory-precision modular joinery to craft residences that endure for generations.
            </p>
            <div className="flex items-center space-x-6 pt-2">
              <div className="flex items-center space-x-2 text-xs text-[#D5CCC0]">
                <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                <span>10-Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-[#D5CCC0]">
                <Award className="w-4 h-4 text-[#C5A880]" />
                <span>500+ Luxury Homes</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-[#D5CCC0]">
                <Clock className="w-4 h-4 text-[#C5A880]" />
                <span>45-Day Delivery</span>
              </div>
            </div>
          </div>

          {/* Editorial Newsletter Subscription */}
          <div className="lg:col-span-6 bg-[#22201D] p-6 sm:p-8 rounded-2xl border border-[#2F2C28]">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-1">
              THE ATELIER DISPATCH
            </span>
            <h3 className="font-serif-heading text-xl text-white font-medium mb-2">
              Architectural Trends & Material Forecasts
            </h3>
            <p className="text-xs text-[#948E85] mb-4">
              Join 18,000+ architects, connoisseurs and homeowners receiving our bi-monthly editorial on design concepts, floor plan layouts, and Italian stone palettes.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to The Atelier Dispatch.'); }} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="bg-[#191816] border border-[#3E3A34] text-sm text-white px-4 py-3 rounded-lg focus:outline-hidden focus:border-[#C5A880] flex-1"
              />
              <button
                type="submit"
                className="bg-[#C5A880] hover:bg-[#9E8159] text-white px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center whitespace-nowrap"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Multi-Column Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-b border-[#2A2825] text-xs">
          
          {/* Col 1: Projects & Styles */}
          <div>
            <h4 className="font-semibold uppercase tracking-widest text-[#D5CCC0] mb-4 text-[11px]">
              Projects & Styles
            </h4>
            <ul className="space-y-2.5 text-[#948E85]">
              <li><Link href="/projects" className="hover:text-[#C5A880] transition-colors">All Architecture Projects</Link></li>
              <li><Link href="/projects?type=Penthouse" className="hover:text-[#C5A880] transition-colors">Penthouse & Duplex</Link></li>
              <li><Link href="/projects?type=Villa" className="hover:text-[#C5A880] transition-colors">Luxury Villas</Link></li>
              <li><Link href="/projects?style=Japandi" className="hover:text-[#C5A880] transition-colors">Japandi Sanctuaries</Link></li>
              <li><Link href="/projects?style=Modern+Contemporary" className="hover:text-[#C5A880] transition-colors">Modern Contemporary</Link></li>
              <li><Link href="/inspiration" className="hover:text-[#C5A880] transition-colors">Inspiration Moodboards</Link></li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-semibold uppercase tracking-widest text-[#D5CCC0] mb-4 text-[11px]">
              Services & Fitouts
            </h4>
            <ul className="space-y-2.5 text-[#948E85]">
              <li><Link href="/services/turnkey-interiors" className="hover:text-[#C5A880] transition-colors">Turnkey Interior Solutions</Link></li>
              <li><Link href="/services/residential-interior-design" className="hover:text-[#C5A880] transition-colors">Residential Architecture</Link></li>
              <li><Link href="/services/modular-kitchen" className="hover:text-[#C5A880] transition-colors">Modular Kitchens & Islands</Link></li>
              <li><Link href="/services/wardrobe-design" className="hover:text-[#C5A880] transition-colors">Walk-In Glass Wardrobes</Link></li>
              <li><Link href="/services/living-room-design" className="hover:text-[#C5A880] transition-colors">Living & Dining Spaces</Link></li>
              <li><Link href="/services/home-renovation" className="hover:text-[#C5A880] transition-colors">Complete Home Renovation</Link></li>
              <li><Link href="/services/office-interiors" className="hover:text-[#C5A880] transition-colors">Corporate Office Fitouts</Link></li>
            </ul>
          </div>

          {/* Col 3: Resources & Tools */}
          <div>
            <h4 className="font-semibold uppercase tracking-widest text-[#D5CCC0] mb-4 text-[11px]">
              Resources & Tools
            </h4>
            <ul className="space-y-2.5 text-[#948E85]">
              <li><Link href="/calculator" className="hover:text-[#C5A880] transition-colors flex items-center"><Sparkles className="w-3 h-3 mr-1 text-[#C5A880]" /> Cost Calculator</Link></li>
              <li><Link href="/ai-visualizer" className="hover:text-[#C5A880] transition-colors flex items-center"><Sparkles className="w-3 h-3 mr-1 text-[#C5A880]" /> AI Room Visualizer</Link></li>
              <li><Link href="/packages" className="hover:text-[#C5A880] transition-colors">Interior Packages (3.5L–18L+)</Link></li>
              <li><Link href="/process" className="hover:text-[#C5A880] transition-colors">8-Step Execution Process</Link></li>
              <li><Link href="/designers" className="hover:text-[#C5A880] transition-colors">Meet Principal Architects</Link></li>
              <li><Link href="/blog" className="hover:text-[#C5A880] transition-colors">Editorial & Design Guides</Link></li>
              <li><Link href="/faq" className="hover:text-[#C5A880] transition-colors">FAQs & Knowledge Base</Link></li>
            </ul>
          </div>

          {/* Col 4: City Studios (SEO Links) */}
          <div>
            <h4 className="font-semibold uppercase tracking-widest text-[#D5CCC0] mb-4 text-[11px]">
              Studio Locations
            </h4>
            <ul className="space-y-2.5 text-[#948E85]">
              {LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link href={`/interior-designers/${loc.slug}`} className="hover:text-[#C5A880] transition-colors">
                    Interiors in {loc.cityName}
                  </Link>
                </li>
              ))}
              <li><Link href="/contact" className="text-[#C5A880] hover:underline">View All Studio Maps →</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact & Head Office */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-3">
            <h4 className="font-semibold uppercase tracking-widest text-[#D5CCC0] mb-4 text-[11px]">
              Atelier Concierge
            </h4>
            <div className="space-y-2 text-[#948E85]">
              <a href="tel:+919810088234" className="flex items-center hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 mr-2 text-[#C5A880]" />
                +91 98100 88234
              </a>
              <a href="mailto:hello@atelieraura.com" className="flex items-center hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 mr-2 text-[#C5A880]" />
                hello@atelieraura.com
              </a>
              <div className="flex items-start">
                <MapPin className="w-3.5 h-3.5 mr-2 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  Tower B, Horizon Center, Golf Course Rd, Gurgaon & Worli, Mumbai
                </span>
              </div>
            </div>

            <div className="pt-3 flex items-center space-x-3 text-[#D5CCC0]">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#22201D] flex items-center justify-center hover:bg-[#C5A880] hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#22201D] flex items-center justify-center hover:bg-[#C5A880] hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#22201D] flex items-center justify-center hover:bg-[#C5A880] hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B665E] gap-4">
          <div>
            © {new Date().getFullYear()} Atelier Aura Interior Architecture Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-[#948E85] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#948E85] transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-[#948E85] transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
