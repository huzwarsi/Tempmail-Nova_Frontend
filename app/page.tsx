import React from 'react';
import type { Metadata } from 'next';
import Hero from '../components/landing/Hero';
import EducationalContent from '../components/landing/EducationalContent';
import FAQ from '../components/landing/FAQ';
import { FAQ_LIST } from '../lib/faq-data';
import InboxSection from '../components/inbox/InboxSection';
import { FAQPageJsonLd, SoftwareApplicationJsonLd } from '../lib/structured-data';

export const metadata: Metadata = {
  title: 'Temp Mail Generator – Free Temporary Email | TempMail Nova',
  description:
    'Generate a free temporary email address instantly with TempMail Nova. Receive verification emails, OTPs, and notifications in a secure 24-hour disposable inbox.',
  alternates: {
    canonical: 'https://tempmailnova.com',
  },
  openGraph: {
    type: 'website',
    url: 'https://tempmailnova.com',
    title: 'Temp Mail Generator – Free Temporary Email | TempMail Nova',
    description:
      'Generate a free temporary email address instantly with TempMail Nova. Receive verification emails, OTPs, and notifications in a secure 24-hour disposable inbox.',
    siteName: 'TempMail Nova',
    images: [{ url: 'https://tempmailnova.com/logo.png', width: 512, height: 512, alt: 'TempMail Nova' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Temp Mail Generator – Free Temporary Email | TempMail Nova',
    description:
      'Generate a free temporary email address instantly with TempMail Nova. Receive verification emails and OTPs without registration.',
    images: ['https://tempmailnova.com/logo.png'],
  },
};

export default function HomePage() {
  const formattedFaqs = FAQ_LIST.map((f) => ({ question: f.q, answer: f.a }));

  return (
    <>
      <SoftwareApplicationJsonLd />
      <FAQPageJsonLd faqs={formattedFaqs} />

      <div className="space-y-12 pb-16">
        {/* Main Hero & Generator Section */}
        <Hero />

        {/* Centered Interactive Inbox Container (Client Component) */}
        <InboxSection />

        {/* Complete Non-Repetitive Educational Content & H2 Hierarchy */}
        <EducationalContent />

        {/* Verified Factual FAQ Accordion */}
        <FAQ />
      </div>
    </>
  );
}
