import React from 'react';
import { Star, UserCheck } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Alex Rivera',
      role: 'Full-Stack Developer',
      comment: 'TempMail Nova is my go-to tool for testing email signups and webhooks during software development. High-speed WebSocket ingestion makes it effortless.',
      stars: 5,
    },
    {
      name: 'Sarah Chen',
      role: 'Cybersecurity Analyst',
      comment: 'I recommend disposable mail services to all my clients to keep their personal email address safe from dark web leaks and spam lists.',
      stars: 5,
    },
    {
      name: 'Marcus Vance',
      role: 'Digital Marketer',
      comment: 'Super clean, fast interface. Being able to scan a QR code to view emails on mobile is brilliant!',
      stars: 5,
    },
  ];

  return (
    <section className="py-12 bg-slate-50/50 dark:bg-[#06090e] transition-colors font-manrope">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 text-xs font-bold mb-3 font-mono">
            <UserCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>TRUSTED BY USERS WORLDWIDE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved by Developers & Privacy Enthusiasts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#080d16]/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-200 dark:border-emerald-500/25 space-y-4 shadow-sm"
            >
              <div className="flex items-center space-x-1 text-amber-400">
                {[...Array(t.stars)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                "{t.comment}"
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-emerald-500/10">
                <h4 className="font-extrabold text-slate-900 dark:text-white text-xs">{t.name}</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
