import { Lead, ConsultationBooking, QuoteRequest } from '@/types';

// Default initial demo leads for CRM & Admin dashboard testing
const INITIAL_DEMO_LEADS: Lead[] = [
  {
    id: 'lead-101',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    name: 'Sanjeev Goenka',
    email: 'sanjeev.goenka@gmail.com',
    phone: '+91 98112 34567',
    city: 'Gurgaon',
    propertyType: '4 BHK+',
    areaSqFt: 3800,
    budget: '₹45 – 60 Lakhs',
    requirements: ['Turnkey Interiors', 'Modular Kitchen', 'Italian Marble Flooring', 'Smart Home Automation'],
    status: 'Consultation Scheduled',
    assignedDesigner: 'Aarav Sharma',
    source: 'Consultation Booking',
    preferredDate: '2026-10-12',
    preferredTime: '11:00 AM',
    consultationType: 'Studio Visit',
    notes: 'Possession in DLF Phase 5 next month. Looking for ultra-luxury contemporary finishes.'
  },
  {
    id: 'lead-102',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
    name: 'Ritu & Alok Mehra',
    email: 'mehra.ritu@outlook.com',
    phone: '+91 98200 99881',
    city: 'Mumbai',
    propertyType: '3 BHK',
    areaSqFt: 2200,
    budget: '₹30 – 40 Lakhs',
    requirements: ['Living Room', 'Modular Kitchen', 'Master Bedroom Walk-in Wardrobe'],
    status: 'Design Discussion',
    assignedDesigner: 'Vikramaditya Roy',
    source: 'Cost Calculator',
    preferredDate: '2026-10-14',
    preferredTime: '03:00 PM',
    consultationType: 'Online',
    notes: 'Sea-facing high rise flat in Worli. Interested in Japandi minimalist aesthetic.'
  },
  {
    id: 'lead-103',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    name: 'Dr. Vivek Swaminathan',
    email: 'vivek.swami@gmail.com',
    phone: '+91 98801 12233',
    city: 'Bangalore',
    propertyType: 'Villa',
    areaSqFt: 4600,
    budget: '₹70 – 90 Lakhs',
    requirements: ['Turnkey Interiors', 'Biophilic Courtyard', 'Acoustic Home Office', 'Spa Ensuite'],
    status: 'Proposal Sent',
    assignedDesigner: 'Ananya Deshmukh',
    source: 'Quote Request',
    notes: 'Independent villa in Whitefield. Sent preliminary 3D concept layout.'
  },
  {
    id: 'lead-104',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    name: 'Aditi Sharma',
    email: 'aditi.sharma90@gmail.com',
    phone: '+91 98188 77665',
    city: 'Delhi',
    propertyType: '2 BHK',
    areaSqFt: 1400,
    budget: '₹18 – 22 Lakhs',
    requirements: ['Modular Kitchen', 'False Ceiling', 'Storage Optimization'],
    status: 'New',
    assignedDesigner: 'Meera Iyer',
    source: 'Website Form',
    notes: 'New flat possession in Sector 150. Requested morning phone call.'
  }
];

// In-browser / In-memory fallback repository
class DatabaseService {
  private getStorage<T>(key: string, fallback: T[]): T[] {
    if (typeof window === 'undefined') return fallback;
    try {
      const data = localStorage.getItem(`atelier_aura_${key}`);
      return data ? JSON.parse(data) : fallback;
    } catch {
      return fallback;
    }
  }

  private setStorage<T>(key: string, items: T[]): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(`atelier_aura_${key}`, JSON.stringify(items));
    } catch {
      // ignore
    }
  }

  // Leads
  public async getLeads(): Promise<Lead[]> {
    return this.getStorage<Lead>('leads', INITIAL_DEMO_LEADS);
  }

  public async createLead(leadData: Omit<Lead, 'id' | 'createdAt'>): Promise<Lead> {
    const newLead: Lead = {
      ...leadData,
      id: 'lead-' + Date.now(),
      createdAt: new Date().toISOString(),
    };
    const current = await this.getLeads();
    const updated = [newLead, ...current];
    this.setStorage('leads', updated);
    return newLead;
  }

  public async updateLeadStatus(id: string, status: Lead['status'], notes?: string): Promise<boolean> {
    const current = await this.getLeads();
    const updated = current.map(lead => {
      if (lead.id === id) {
        return {
          ...lead,
          status,
          notes: notes !== undefined ? notes : lead.notes
        };
      }
      return lead;
    });
    this.setStorage('leads', updated);
    return true;
  }

  // Bookings
  public async createBooking(booking: Omit<ConsultationBooking, 'id' | 'createdAt' | 'status'>): Promise<ConsultationBooking> {
    const newBooking: ConsultationBooking = {
      ...booking,
      id: 'book-' + Date.now(),
      createdAt: new Date().toISOString(),
      status: 'Pending'
    };

    // Also register as a lead automatically
    await this.createLead({
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
      city: booking.city,
      propertyType: booking.propertyType,
      areaSqFt: booking.propertySizeSqFt,
      budget: booking.budget,
      requirements: [booking.requirements || 'General Design Consultation'],
      status: 'Consultation Scheduled',
      source: 'Consultation Booking',
      preferredDate: booking.preferredDate,
      preferredTime: booking.preferredTime,
      consultationType: booking.consultationType,
      notes: `Booked ${booking.consultationType} consultation for ${booking.preferredDate} at ${booking.preferredTime}.`
    });

    const bookings = this.getStorage<ConsultationBooking>('bookings', []);
    this.setStorage('bookings', [newBooking, ...bookings]);
    return newBooking;
  }

  // Quote Requests
  public async createQuoteRequest(quoteData: Omit<QuoteRequest, 'id' | 'createdAt'>): Promise<QuoteRequest> {
    const newQuote: QuoteRequest = {
      ...quoteData,
      id: 'quote-' + Date.now(),
      createdAt: new Date().toISOString(),
    };

    await this.createLead({
      name: quoteData.name,
      email: quoteData.email,
      phone: quoteData.phone,
      city: quoteData.city,
      propertyType: quoteData.propertyType,
      areaSqFt: quoteData.areaSqFt,
      budget: quoteData.budgetRange,
      requirements: quoteData.roomsSelected,
      status: 'New',
      source: 'Quote Request',
      notes: `Estimated Quote: ${quoteData.estimatedCostRange} | Possession: ${quoteData.possessionStatus} | Floorplan: ${quoteData.hasFloorPlan ? 'Attached (' + quoteData.floorPlanFileName + ')' : 'None'}`
    });

    const quotes = this.getStorage<QuoteRequest>('quotes', []);
    this.setStorage('quotes', [newQuote, ...quotes]);
    return newQuote;
  }

  // Saved Favorites / Inspiration Board
  public getSavedItemIds(): string[] {
    return this.getStorage<string>('saved_items', ['insp-1', 'insp-3', 'proj-1']);
  }

  public toggleSavedItem(id: string): string[] {
    const current = this.getSavedItemIds();
    let updated: string[];
    if (current.includes(id)) {
      updated = current.filter(item => item !== id);
    } else {
      updated = [...current, id];
    }
    this.setStorage('saved_items', updated);
    return updated;
  }
}

export const db = new DatabaseService();
