import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atelier Aura | Luxury Interior Architecture & Turnkey Design Studio",
  description: "Bespoke interior architecture, modular precision millwork, and turnkey execution for luxury residences across Gurgaon, Delhi NCR, Mumbai, Bangalore, Noida, and Pune.",
  keywords: [
    "Interior Designers Gurgaon",
    "Luxury Interior Architecture",
    "Turnkey Home Interiors",
    "Modular Kitchens",
    "Japandi Interior Design",
    "Villa Interior Designers Bangalore",
    "Interior Designers Mumbai"
  ],
  authors: [{ name: "Atelier Aura Design Studio" }],
  openGraph: {
    title: "Atelier Aura | Luxury Interior Architecture & Turnkey Design",
    description: "Designing Spaces That Feel Like Home. Explore our portfolio of bespoke penthouses, modern residences, and turnkey villas.",
    url: "https://atelieraura.com",
    siteName: "Atelier Aura",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Atelier Aura Luxury Interior Design",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Aura | Luxury Interior Architecture",
    description: "Designing Spaces That Feel Like Home. 500+ Homes Delivered across India.",
    images: ["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body className="font-sans-body bg-[#FAF8F5] text-[#191816] min-h-screen flex flex-col antialiased selection:bg-[#C5A880] selection:text-white">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
