'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Users, 
  Calendar, 
  Briefcase, 
  TrendingUp, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Search, 
  Filter, 
  Plus, 
  Edit3,
  Building2,
  DollarSign,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { db } from '@/lib/supabase/client';
import { Lead, LeadStatus } from '@/types';
import { PROJECTS } from '@/lib/data/projects';

export default function AdminDashboardPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'leads' | 'projects' | 'analytics'>('leads');
  const [isUpdating, setIsUpdating] = useState(false);

  const statuses: (LeadStatus | 'All')[] = [
    'All',
    'New',
    'Contacted',
    'Consultation Scheduled',
    'Design Discussion',
    'Proposal Sent',
    'Negotiation',
    'Won',
    'Lost'
  ];

  const fetchLeads = async () => {
    const data = await db.getLeads();
    setLeads(data);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id: string, newStatus: LeadStatus) => {
    setIsUpdating(true);
    await db.updateLeadStatus(id, newStatus);
    await fetchLeads();
    setIsUpdating(false);
  };

  const filteredLeads = leads.filter((lead) => {
    const matchStatus = selectedStatus === 'All' || lead.status === selectedStatus;
    const matchQuery = !searchQuery ||
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchStatus && matchQuery;
  });

  const metrics = {
    totalLeads: leads.length,
    newLeads: leads.filter(l => l.status === 'New').length,
    consultations: leads.filter(l => l.status === 'Consultation Scheduled' || l.status === 'Design Discussion').length,
    wonProjects: leads.filter(l => l.status === 'Won').length + 500,
    estimatedPipelineValue: '₹4.85 Cr',
    conversionRate: '28.4%'
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#EAE4DA]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block">
              STUDIO CRM & MANAGEMENT PORTAL
            </span>
            <h1 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#191816]">
              Atelier Command Center
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className="px-4 py-2 rounded-full border border-[#EAE4DA] bg-white text-xs font-semibold text-[#191816] hover:bg-[#FAF8F5]"
            >
              View Live Website
            </Link>
            <Link
              href="/consultation"
              className="bg-[#C5A880] hover:bg-[#9E8159] text-white px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider shadow-xs"
            >
              + New Walk-in Lead
            </Link>
          </div>
        </div>

        {/* Top 6 KPI Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-10">
          <div className="bg-white p-5 rounded-2xl border border-[#EAE4DA] shadow-xs">
            <span className="text-[10px] uppercase font-semibold text-[#948E85] block">Total Leads</span>
            <div className="font-serif-heading text-2xl font-bold text-[#191816] mt-1">{metrics.totalLeads}</div>
            <span className="text-[10px] text-[#2E7D32] font-semibold mt-1 block">Live CRM State</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#EAE4DA] shadow-xs">
            <span className="text-[10px] uppercase font-semibold text-[#948E85] block">New Inquiries</span>
            <div className="font-serif-heading text-2xl font-bold text-[#C5A880] mt-1">{metrics.newLeads}</div>
            <span className="text-[10px] text-[#C5A880] font-semibold mt-1 block">Pending Action</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#EAE4DA] shadow-xs">
            <span className="text-[10px] uppercase font-semibold text-[#948E85] block">Consultations</span>
            <div className="font-serif-heading text-2xl font-bold text-[#191816] mt-1">{metrics.consultations}</div>
            <span className="text-[10px] text-blue-600 font-semibold mt-1 block">Scheduled</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#EAE4DA] shadow-xs">
            <span className="text-[10px] uppercase font-semibold text-[#948E85] block">Active Pipeline</span>
            <div className="font-serif-heading text-2xl font-bold text-[#191816] mt-1">{metrics.estimatedPipelineValue}</div>
            <span className="text-[10px] text-[#2E7D32] font-semibold mt-1 block">Estimated BOQ</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#EAE4DA] shadow-xs">
            <span className="text-[10px] uppercase font-semibold text-[#948E85] block">Delivered Homes</span>
            <div className="font-serif-heading text-2xl font-bold text-[#191816] mt-1">{metrics.wonProjects}</div>
            <span className="text-[10px] text-[#2E7D32] font-semibold mt-1 block">Historical</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#EAE4DA] shadow-xs">
            <span className="text-[10px] uppercase font-semibold text-[#948E85] block">Win Rate</span>
            <div className="font-serif-heading text-2xl font-bold text-[#191816] mt-1">{metrics.conversionRate}</div>
            <span className="text-[10px] text-[#2E7D32] font-semibold mt-1 block">Industry Leading</span>
          </div>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center space-x-3 mb-6 border-b border-[#EAE4DA] pb-3">
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center space-x-2 ${
              activeTab === 'leads' ? 'bg-[#191816] text-white' : 'text-[#6B665E] hover:text-[#191816]'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Lead & Consultation CRM</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center space-x-2 ${
              activeTab === 'projects' ? 'bg-[#191816] text-white' : 'text-[#6B665E] hover:text-[#191816]'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Projects CMS ({PROJECTS.length})</span>
          </button>
        </div>

        {/* Tab 1: Leads Pipeline */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            
            {/* Search & Status Pills */}
            <div className="bg-white p-5 rounded-2xl border border-[#EAE4DA] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-80">
                <input
                  type="text"
                  placeholder="Search lead by name, phone, city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-xs px-4 py-2.5 rounded-xl focus:outline-hidden focus:border-[#C5A880] text-[#191816]"
                />
              </div>

              <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto w-full md:w-auto">
                {statuses.map((st) => (
                  <button
                    key={st}
                    onClick={() => setSelectedStatus(st)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      selectedStatus === st
                        ? 'bg-[#191816] text-white shadow-xs'
                        : 'bg-[#FAF8F5] text-[#6B665E] hover:bg-[#EAE4DA]'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Leads Table */}
            <div className="bg-white rounded-2xl border border-[#EAE4DA] shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[#EAE4DA] bg-[#FAF8F5] text-[#191816]">
                      <th className="p-4 font-bold uppercase tracking-wider text-[10px]">Client / Contact</th>
                      <th className="p-4 font-bold uppercase tracking-wider text-[10px]">City / Property</th>
                      <th className="p-4 font-bold uppercase tracking-wider text-[10px]">Budget Scope</th>
                      <th className="p-4 font-bold uppercase tracking-wider text-[10px]">Source</th>
                      <th className="p-4 font-bold uppercase tracking-wider text-[10px]">Stage Status</th>
                      <th className="p-4 font-bold uppercase tracking-wider text-[10px]">Assigned Designer</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EAE4DA]">
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-[#FAF8F5]/50 transition-colors">
                        <td className="p-4">
                          <div className="font-bold text-sm text-[#191816]">{lead.name}</div>
                          <div className="text-xs text-[#6B665E] flex items-center space-x-3 mt-0.5">
                            <a href={`tel:${lead.phone}`} className="hover:text-[#C5A880] flex items-center">
                              <Phone className="w-3 h-3 mr-1 text-[#C5A880]" />
                              {lead.phone}
                            </a>
                            <a href={`mailto:${lead.email}`} className="hover:text-[#C5A880] flex items-center">
                              <Mail className="w-3 h-3 mr-1 text-[#C5A880]" />
                              {lead.email}
                            </a>
                          </div>
                          {lead.notes && (
                            <div className="text-[11px] text-[#948E85] mt-1 line-clamp-1 italic">
                              &ldquo;{lead.notes}&rdquo;
                            </div>
                          )}
                        </td>

                        <td className="p-4">
                          <div className="font-semibold text-[#191816] flex items-center">
                            <MapPin className="w-3 h-3 text-[#C5A880] mr-1" />
                            {lead.city}
                          </div>
                          <div className="text-[#6B665E] text-[11px]">
                            {lead.propertyType} {lead.areaSqFt ? `(${lead.areaSqFt} sq.ft)` : ''}
                          </div>
                        </td>

                        <td className="p-4 font-semibold text-[#191816]">
                          {lead.budget}
                        </td>

                        <td className="p-4">
                          <span className="bg-[#FAF8F5] border border-[#EAE4DA] text-[10px] font-semibold px-2 py-0.5 rounded-md text-[#6B665E]">
                            {lead.source}
                          </span>
                        </td>

                        <td className="p-4">
                          <select
                            value={lead.status}
                            onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                            className={`text-xs font-semibold px-2.5 py-1 rounded-lg border focus:outline-hidden ${
                              lead.status === 'Won' 
                                ? 'bg-[#E8F5E9] text-[#2E7D32] border-[#C8E6C9]'
                                : lead.status === 'New'
                                ? 'bg-[#FFF3E0] text-[#E65100] border-[#FFE0B2]'
                                : 'bg-white text-[#191816] border-[#EAE4DA]'
                            }`}
                          >
                            {(['New', 'Contacted', 'Consultation Scheduled', 'Design Discussion', 'Proposal Sent', 'Negotiation', 'Won', 'Lost'] as LeadStatus[]).map((st) => (
                              <option key={st} value={st}>{st}</option>
                            ))}
                          </select>
                        </td>

                        <td className="p-4 text-[#6B665E]">
                          {lead.assignedDesigner || 'Unassigned'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Projects CMS */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="bg-white rounded-2xl border border-[#EAE4DA] overflow-hidden p-5 shadow-xs space-y-3">
                <div
                  className="w-full h-44 rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${proj.coverImage})` }}
                />
                <div>
                  <span className="text-[10px] font-semibold uppercase text-[#C5A880] block">
                    {proj.propertyType} • {proj.location}
                  </span>
                  <h3 className="font-serif-heading text-lg font-bold text-[#191816]">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#6B665E] mt-1 font-semibold">
                    Budget: {proj.budgetRange}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#FAF8F5] flex justify-between items-center">
                  <span className="text-xs text-[#2E7D32] font-semibold">● Published</span>
                  <Link
                    href={`/projects/${proj.slug}`}
                    className="text-xs font-semibold text-[#191816] hover:text-[#C5A880] flex items-center"
                  >
                    View Page <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
