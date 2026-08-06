import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Alex Rivera',
    role: 'QA Engineer',
    text: 'TempMail makes testing user signups effortless. Real-time message reception saves me tons of time during sprint testing.',
    stars: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Privacy Advocate',
    text: 'Whenever a site asks for an email address just to read an article, I generate a temporary address. Keeps my real inbox spam-free.',
    stars: 5,
  },
  {
    name: 'Marcus Vance',
    role: 'Full Stack Developer',
    text: 'The clean interface and instant API make this the best temporary mail tool I have used.',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white dark:bg-[#06090e] border-t border-slate-200 dark:border-emerald-500/20 transition-colors font-manrope">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-widest font-mono mb-2">
            USER FEEDBACK
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white">Trusted by Developers & Everyday Users</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-slate-50 dark:bg-[#080d16]/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-200 dark:border-emerald-500/25 flex flex-col justify-between shadow-sm dark:shadow-lg">
              <div>
                <div className="flex space-x-1 mb-4">
                  {[...Array(r.stars)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-emerald-500 text-emerald-500 dark:fill-emerald-400 dark:text-emerald-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">"{r.text}"</p>
              </div>
              <div>
                <div className="font-extrabold text-sm text-slate-900 dark:text-white">{r.name}</div>
                <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-mono-code font-bold">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
