'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, 
  Clock, 
  Share2, 
  Sparkles, 
  Calendar, 
  Tag, 
  User, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { BLOG_POSTS } from '@/lib/data/blog';
import ConsultationModal from '@/components/layout/ConsultationModal';

export default function BlogPostDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  if (!post) {
    return (
      <div className="py-32 text-center">
        <h2 className="font-serif-heading text-3xl font-bold">Article Not Found</h2>
        <Link href="/blog" className="text-[#C5A880] underline mt-4 inline-block">
          ← Back to all articles
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-[#FAF8F5] min-h-screen pb-24">
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-[#EAE4DA] py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#6B665E] hover:text-[#191816] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            Back to Journal
          </Link>

          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert('Article link copied to clipboard!');
            }}
            className="p-2 rounded-full border bg-white text-[#191816] border-[#EAE4DA] hover:border-[#C5A880] transition-colors"
            title="Share article"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 space-y-6">
        <div className="flex items-center space-x-3">
          <span className="bg-[#191816] text-[#C5A880] text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
            {post.category}
          </span>
          <span className="text-xs text-[#948E85] flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1 text-[#C5A880]" />
            {post.readTime}
          </span>
          <span className="text-xs text-[#948E85]">•</span>
          <span className="text-xs text-[#948E85]">{post.publishedAt}</span>
        </div>

        <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#191816] tracking-tight leading-tight">
          {post.title}
        </h1>

        {/* Author info */}
        <div className="flex items-center space-x-3 pt-2">
          <div
            className="w-12 h-12 rounded-full bg-cover bg-center border border-[#EAE4DA]"
            style={{ backgroundImage: `url(${post.author.avatar})` }}
          />
          <div>
            <div className="font-bold text-sm text-[#191816]">{post.author.name}</div>
            <div className="text-xs text-[#6B665E]">{post.author.role} • Atelier Aura</div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="h-72 sm:h-[450px] rounded-3xl overflow-hidden border border-[#EAE4DA] shadow-xl">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${post.coverImage})` }}
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#EAE4DA] shadow-sm space-y-6 text-[#191816] text-sm sm:text-base font-light leading-relaxed">
          <div className="font-serif-heading text-xl font-bold text-[#C5A880] italic pb-4 border-b border-[#FAF8F5]">
            &ldquo;{post.excerpt}&rdquo;
          </div>

          <div className="space-y-4 whitespace-pre-line">
            {post.content}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-[#FAF8F5] flex flex-wrap gap-2 items-center">
            <span className="text-xs text-[#948E85] font-semibold uppercase mr-1">Tags:</span>
            {post.tags.map((t, idx) => (
              <span key={idx} className="bg-[#FAF8F5] border border-[#EAE4DA] text-xs px-3 py-1 rounded-lg text-[#6B665E]">
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Article FAQ Schema Section */}
        {post.faqSchema && post.faqSchema.length > 0 && (
          <div className="bg-white p-8 rounded-3xl border border-[#EAE4DA] shadow-xs space-y-4">
            <h3 className="font-serif-heading text-xl font-bold text-[#191816]">
              Article FAQs & Answers
            </h3>
            <div className="space-y-3">
              {post.faqSchema.map((faq, fIdx) => (
                <div key={fIdx} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE4DA]">
                  <h4 className="font-bold text-xs sm:text-sm text-[#191816] mb-1">
                    Q: {faq.question}
                  </h4>
                  <p className="text-xs text-[#6B665E] font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Consultation CTA Banner */}
        <div className="bg-[#191816] text-white p-8 sm:p-10 rounded-3xl border border-[#2F2C28] text-center space-y-4 shadow-xl">
          <h3 className="font-serif-heading text-2xl font-bold">
            Looking to Apply These Design Principles to Your Home?
          </h3>
          <p className="text-xs text-neutral-300 max-w-lg mx-auto font-light">
            Book a complimentary 1-on-1 session with our architectural team to discuss your floor plan and finish palette.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="bg-[#C5A880] hover:bg-[#9E8159] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-md"
            >
              Book Free Consultation
            </button>
          </div>
        </div>

      </div>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </article>
  );
}
