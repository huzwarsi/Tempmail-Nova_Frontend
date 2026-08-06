import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: '1. What is a temporary disposable email address and how does it work?',
    a: 'A temporary disposable email address is an automatically generated, short-lived mailbox that lets you receive emails without revealing your primary personal email. It operates without passwords or registration, receiving incoming messages in real-time while automatically purging old data after 24 hours.',
  },
  {
    q: '2. Why should I use TempMail Nova instead of my personal email address?',
    a: 'Using TempMail Nova prevents unwanted spam, marketing newsletters, and trackers from clogging your personal inbox. It also protects your identity when signing up for temporary services, downloading ebooks, or testing web applications.',
  },
  {
    q: '3. Is TempMail Nova completely free to use?',
    a: 'Yes! TempMail Nova is 100% free for all web visitors. You can generate unlimited temporary email addresses, create custom username aliases, receive real-time messages, and download attachments with no hidden fees or subscriptions.',
  },
  {
    q: '4. How long do received emails stay in my inbox?',
    a: 'Received messages and parsed attachments remain active in your temporary inbox for 24 hours. After 24 hours, our automated system permanently deletes all inbox data to guarantee data privacy.',
  },
  {
    q: '5. Can I receive verification codes, OTPs, and password reset links?',
    a: 'Yes! TempMail Nova processes incoming messages immediately via WebSockets. As soon as an email with an OTP or confirmation link is sent to your temporary address, it appears right in your inbox list.',
  },
  {
    q: '6. Can I create custom email usernames and select different domain names?',
    a: 'Yes! Click the "Custom Address" button on the main generator card to specify your preferred username alias and select from available domain extensions.',
  },
  {
    q: '7. Are file attachments supported, and can I download them safely?',
    a: 'Yes. TempMail Nova parses all standard email attachments, including PDF documents, images, text files, and ZIP archives. You can safely preview message text and download attachments directly.',
  },
  {
    q: '8. Can I send outgoing emails from my temporary inbox?',
    a: 'No. To prevent abuse, outbound spam dissemination, and keep our email domains clean and trusted across global mail servers, TempMail Nova is strictly designed for receiving incoming mail only.',
  },
  {
    q: '9. Do I need to create an account or sign up to use the inbox?',
    a: 'No registration or personal signup is required. You can instantly generate an email address and read messages right away without handing over any personal information.',
  },
  {
    q: '10. How does TempMail Nova protect user privacy and handle data security?',
    a: 'TempMail Nova adheres to strict privacy standards. We do not require personal signups for guest users, we use end-to-end TLS encryption, and we never sell or share user data with third parties. All messages are automatically purged after 24 hours.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-[#05080e] transition-colors font-manrope">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xs font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-widest font-mono mb-2">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white">Everything You Need to Know</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#080d16]/90 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-emerald-500/25 overflow-hidden transition shadow-sm dark:shadow-lg"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full p-5 text-left flex items-center justify-between font-extrabold text-slate-900 dark:text-white text-sm hover:text-emerald-600 dark:hover:text-emerald-400 transition"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-emerald-500/15 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
