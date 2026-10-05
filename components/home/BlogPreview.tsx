'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Clock, User, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/data/blog';

export default function BlogPreview() {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-t border-[#EAE4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
              THE ATELIER JOURNAL
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#191816] tracking-tight">
              Architectural Insights & Design Guides
            </h2>
            <p className="text-sm sm:text-base text-[#6B665E] max-w-2xl mt-2 font-light">
              Deep dives into material chemistry, ergonomic kitchen standards, Vastu spatial planning, and global luxury trends.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#191816] hover:text-[#C5A880] transition-colors self-start sm:self-auto"
          >
            <span>View All Articles</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="group bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#EAE4DA] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Cover Image */}
                <Link href={`/blog/${post.slug}`} className="relative h-60 overflow-hidden block">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${post.coverImage})` }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#191816]/90 text-[#C5A880] text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                      {post.category}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-4 text-xs text-[#948E85]">
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-[#C5A880]" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.publishedAt}</span>
                  </div>

                  <h3 className="font-serif-heading text-xl font-bold text-[#191816] group-hover:text-[#C5A880] transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-[#6B665E] font-light line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Read More */}
              <div className="p-6 pt-0 border-t border-[#FAF8F5] flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div
                    className="w-7 h-7 rounded-full bg-cover bg-center border border-[#EAE4DA]"
                    style={{ backgroundImage: `url(${post.author.avatar})` }}
                  />
                  <span className="text-xs font-semibold text-[#191816]">{post.author.name}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="w-8 h-8 rounded-full bg-white border border-[#EAE4DA] flex items-center justify-center text-[#191816] group-hover:bg-[#C5A880] group-hover:text-white transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
