'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setSubmitted(false);
    }, 4000);
  };

  if (submitted) {
    return (
      <div className="p-8 text-center space-y-3" role="status" aria-live="polite">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto animate-bounce" />
        <h2 className="text-base font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h2>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          Thank you for reaching out. Our support team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase mb-1">
            Your Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-slate-50 dark:bg-[#04070d] border border-slate-300 dark:border-emerald-500/40 rounded-xl p-3 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono-code"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase mb-1">
            Email Address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-50 dark:bg-[#04070d] border border-slate-300 dark:border-emerald-500/40 rounded-xl p-3 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono-code"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase mb-1">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          placeholder="e.g. Inquiry about temporary mail services"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full bg-slate-50 dark:bg-[#04070d] border border-slate-300 dark:border-emerald-500/40 rounded-xl p-3 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase mb-1">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-slate-50 dark:bg-[#04070d] border border-slate-300 dark:border-emerald-500/40 rounded-xl p-3 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-gradient-to-r dark:from-emerald-500 dark:to-teal-400 font-bold text-white dark:text-slate-950 transition text-xs shadow-lg shadow-emerald-500/25 flex items-center justify-center space-x-2"
      >
        <Send className="w-4 h-4" />
        <span>Send Message</span>
      </button>
    </form>
  );
}

