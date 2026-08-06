import React from 'react';
import Pricing from '../components/landing/Pricing';
import FAQ from '../components/landing/FAQ';

export default function PricingPage() {
  return (
    <div className="py-8 space-y-12">
      <Pricing />
      <FAQ />
    </div>
  );
}
