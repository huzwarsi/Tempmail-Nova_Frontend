'use client';

import React from 'react';
import Hero from '../../components/landing/Hero';
import Features from '../../components/landing/Features';
import ArticleSection from '../../components/landing/ArticleSection';
import InboxList from '../../components/inbox/InboxList';
import EmailViewer from '../../components/inbox/EmailViewer';
import { useInbox } from '../../context/InboxContext';

export default function TemporaryEmailPage() {
  const { selectedEmail, setSelectedEmail } = useInbox();

  return (
    <div className="space-y-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Free Temporary Disposable Email Generator
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mt-3 font-semibold leading-relaxed">
          Generate instant throwaway mailboxes, receive verification links in real-time, and protect your privacy from unwanted internet spam.
        </p>
      </div>

      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl sm:max-w-4xl mx-auto">
          {selectedEmail ? (
            <EmailViewer
              email={selectedEmail}
              onBack={() => setSelectedEmail(null)}
              onDelete={() => setSelectedEmail(null)}
            />
          ) : (
            <InboxList />
          )}
        </div>
      </div>

      <Features />
      <ArticleSection />
    </div>
  );
}
