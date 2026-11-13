import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, ChevronRight } from 'lucide-react';
import FAQ from '../../components/landing/FAQ';
import { FAQ_LIST } from '../../lib/faq-data';
import { FAQPageJsonLd, BreadcrumbListJsonLd } from '../../lib/structured-data';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ)',
  description:
    'Answers to common questions regarding disposable email addresses, 24-hour message retention, WebSockets, custom domains, and privacy.',
  alternates: {
    canonical: 'https://tempmailnova.com/faq',
  },
  openGraph: {
    type: 'website',
    url: 'https://tempmailnova.com/faq',
    title: 'Frequently Asked Questions (FAQ) | TempMail Nova',
    description:
      'Answers to common questions regarding disposable email addresses, 24-hour message retention, WebSockets, custom domains, and privacy.',
    siteName: 'TempMail Nova',
    images: [{ url: 'https://tempmailnova.com/logo.png', width: 512, height: 512, alt: 'TempMail Nova FAQ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions (FAQ) | TempMail Nova',
    description:
      'Answers to common questions regarding disposable email addresses, 24-hour message retention, WebSockets, custom domains, and privacy.',
    images: ['https://tempmailnova.com/logo.png'],
  },
};

export default function FAQPage() {
  const formattedFaqs = FAQ_LIST.map((f) => ({ question: f.q, answer: f.a }));

  return (
    <>
      <FAQPageJsonLd faqs={formattedFaqs} />
      <BreadcrumbListJsonLd
        items={[
          { name: 'Home', item: 'https://tempmailnova.com' },
          { name: 'FAQ', item: 'https://tempmailnova.com/faq' },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 font-manrope">
        {/* Visual Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 font-mono mb-6">
          <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-900 dark:text-white font-semibold">FAQ</span>
        </nav>

        <div className="text-center max-w-2xl mx-auto mb-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 text-xs font-bold mb-3 font-mono">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>KNOWLEDGE BASE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 font-medium">
            Everything you need to know about disposable email addresses, privacy security, and message storage.
          </p>
        </div>
      </div>

      <div className="pb-8">
        <FAQ />
      </div>
    </>
  );
}
