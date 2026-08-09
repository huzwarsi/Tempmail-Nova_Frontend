import React from 'react';
import { ShieldCheck, Zap, Clock, Sparkles } from 'lucide-react';
import GeneratorCard from '../inbox/GeneratorCard';

export default function Hero() {
  return (
    <div className="relative pt-4 sm:pt-6 pb-6 overflow-hidden font-manrope">
      {/* Ambient Green Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold font-mono mb-5 sm:mb-6">
          <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 animate-pulse" />
          <span>INSTANT DISPOSABLE MAILBOX GENERATOR</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 mb-4 leading-tight max-w-4xl mx-auto">
          Free Temporary Email Generator
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-semibold leading-relaxed">
          Protect your personal email address from spam, newsletters, and online trackers with our instant, zero-registration disposable inbox.
        </p>

        {/* Generator Card Widget */}
        <div className="mt-4 sm:mt-6 mb-6">
          <GeneratorCard />
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 text-xs text-slate-600 dark:text-slate-400 font-semibold font-mono">
          <div className="flex items-center space-x-1.5 bg-slate-200/80 dark:bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-300 dark:border-emerald-500/20">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>100% Free & Secure</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-slate-200/80 dark:bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-300 dark:border-emerald-500/20">
            <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Real-time Live Mail</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-slate-200/80 dark:bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-300 dark:border-emerald-500/20">
            <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>24h Auto-Purge</span>
          </div>
        </div>
      </div>
    </div>
  );
}
