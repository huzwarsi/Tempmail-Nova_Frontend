import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MessageSquare, PhoneCall, Globe, ChevronRight } from 'lucide-react';
import ContactForm from '../../components/contact/ContactForm';
import { BreadcrumbListJsonLd } from '../../lib/structured-data';

export const metadata: Metadata = {
  title: 'Contact Us & Support',
  description:
    'Contact the TempMail Nova team for support, feature feedback, technical questions, and assistance with our temporary email service.',
  alternates: {
    canonical: 'https://tempmailnova.com/contact',
  },
  openGraph: {
    type: 'website',
    url: 'https://tempmailnova.com/contact',
    title: 'Contact Us & Support | TempMail Nova',
    description:
      'Contact the TempMail Nova team for support, feature feedback, technical questions, and assistance with our temporary email service.',
    siteName: 'TempMail Nova',
    images: [{ url: 'https://tempmailnova.com/logo.png', width: 512, height: 512, alt: 'TempMail Nova Contact' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us & Support | TempMail Nova',
    description: 'Contact the TempMail Nova team for technical questions, feedback, and support.',
    images: ['https://tempmailnova.com/logo.png'],
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: 'Home', item: 'https://tempmailnova.com' },
          { name: 'Contact', item: 'https://tempmailnova.com/contact' },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 font-manrope">
        {/* Visual Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-900 dark:text-white font-semibold">Contact</span>
        </nav>

        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 text-xs font-bold mb-3 font-mono">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Contact Us & Support</h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
            Have questions or feedback? Send us a message below and we will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info Side Cards */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-[#080d16]/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-200 dark:border-emerald-500/25 space-y-2 shadow-md dark:shadow-lg">
              <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              <h2 className="font-bold text-slate-900 dark:text-white text-sm">Email Support</h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-mono-code">support@tempmailnova.com</p>
            </div>

            <div className="bg-white dark:bg-[#080d16]/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-200 dark:border-emerald-500/25 space-y-2 shadow-md dark:shadow-lg">
              <Globe className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              <h2 className="font-bold text-slate-900 dark:text-white text-sm">Help Center</h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-mono-code">help@tempmailnova.com</p>
            </div>

            <div className="bg-white dark:bg-[#080d16]/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-200 dark:border-emerald-500/25 space-y-2 shadow-md dark:shadow-lg">
              <PhoneCall className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              <h2 className="font-bold text-slate-900 dark:text-white text-sm">Response Time</h2>
              <p className="text-xs text-slate-600 dark:text-slate-400">Within 24 Hours</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 bg-white dark:bg-[#080d16]/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-emerald-500/25 shadow-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
