'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, User, ArrowUpRight, Search, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/data/blog';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Interior Design Trends', 'Modular Kitchen', 'Interior Design', 'Vastu & Architecture'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchQuery = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchQuery;
  });

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
            THE ATELIER EDITORIAL
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold text-[#191816] tracking-tight">
            Design Guides & Architectural Journals
          </h1>
          <p className="text-sm sm:text-base text-[#6B665E] mt-3 font-light leading-relaxed">
            Expert insights on stone selection, modular kitchen ergonomics, Vastu spatial planning, and timeless quiet luxury aesthetics.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="bg-white p-6 rounded-3xl border border-[#EAE4DA] shadow-md mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-80">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm px-4 py-2.5 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#191816] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-[#6B665E] hover:text-[#191816]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#EAE4DA] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Link href={`/blog/${post.slug}`} className="relative h-64 overflow-hidden block">
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

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center space-x-3 text-xs text-[#948E85]">
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-[#C5A880]" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.publishedAt}</span>
                  </div>

                  <h2 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#191816] group-hover:text-[#C5A880] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-[#6B665E] font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 border-t border-[#FAF8F5] flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div
                    className="w-8 h-8 rounded-full bg-cover bg-center border border-[#EAE4DA]"
                    style={{ backgroundImage: `url(${post.author.avatar})` }}
                  />
                  <div>
                    <div className="font-bold text-xs text-[#191816]">{post.author.name}</div>
                    <div className="text-[10px] text-[#948E85]">{post.author.role}</div>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#EAE4DA] flex items-center justify-center text-[#191816] group-hover:bg-[#C5A880] group-hover:text-white transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
