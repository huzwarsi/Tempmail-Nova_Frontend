import React from 'react';
import { Check, Sparkles } from 'lucide-react';

export default function Pricing({ onSelectPlan }) {
  return (
    <section className="py-16 bg-slate-50 dark:bg-[#080B12] border-t border-slate-200 dark:border-gray-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest font-mono mb-2">
            PLANS & PRICING
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Simple, Transparent Pricing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="glass-panel rounded-3xl p-8 border border-slate-200 dark:border-gray-800 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Free Guest Plan</h3>
              <p className="text-xs text-slate-600 dark:text-gray-400 mb-6">Ideal for quick disposable mail generation and one-time verification codes.</p>
              <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                $0 <span className="text-xs text-slate-500 dark:text-gray-500 font-normal">/ forever</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-700 dark:text-gray-300 mb-8">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Instant random address generation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>24-Hour Inbox Auto-expiration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Real-time email delivery</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Full attachment download support</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onSelectPlan && onSelectPlan('free')}
              className="w-full py-3 rounded-xl bg-slate-100 dark:bg-gray-800 hover:bg-slate-200 dark:hover:bg-gray-700 font-semibold text-slate-800 dark:text-white transition text-xs border border-slate-200 dark:border-gray-700 shadow-sm"
            >
              Use Free Mode Now
            </button>
          </div>

          {/* Pro Developer Tier */}
          <div className="glass-panel rounded-3xl p-8 border-2 border-brand-500 shadow-xl shadow-brand-500/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-4 right-4 px-3 py-1 bg-brand-600 text-white font-bold text-[10px] uppercase rounded-full tracking-wider">
              POPULAR
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Pro Developer</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-gray-400 mb-6">For power users, QA engineers, and automated testing pipelines.</p>
              <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                $9 <span className="text-xs text-slate-500 dark:text-gray-500 font-normal">/ month</span>
              </div>
              <ul className="space-y-3 text-slate-700 dark:text-gray-300 mb-8">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Custom Username Aliases</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Exclusive Premium Domains</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Developer REST API Access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Extended Inbox Retention</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Clean Ad-Free Interface</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onSelectPlan && onSelectPlan('pro')}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 font-bold text-white transition text-xs shadow-lg shadow-brand-500/25"
            >
              Get Pro Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
