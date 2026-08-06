import React from 'react';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import ArticleSection from '../components/landing/ArticleSection';
import StatsSection from '../components/landing/StatsSection';
import FAQ from '../components/landing/FAQ';
import Testimonials from '../components/landing/Testimonials';
import InboxList from '../components/inbox/InboxList';
import EmailViewer from '../components/inbox/EmailViewer';
import { useInbox } from '../context/InboxContext';

export default function Home() {
  const { selectedEmail, setSelectedEmail } = useInbox();

  return (
    <div className="space-y-12 pb-16">
      {/* Main Hero & Generator Section */}
      <Hero />

      {/* Centered Inbox Container (Leaves Left & Right Empty Margins for Future AdSense Ads) */}
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

      {/* Features Grid */}
      <Features />

      {/* Educational Article Section (Monetization & AdSense Content) */}
      <ArticleSection />

      {/* Live System Stats Counter */}
      <StatsSection />

      {/* Testimonials */}
      <Testimonials />

      {/* 10 FAQ Accordion */}
      <FAQ />
    </div>
  );
}
