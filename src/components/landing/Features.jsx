import React from 'react';
import { Zap, Shield, Globe, Clock, QrCode, Download } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Message Delivery',
    description: 'Incoming emails show up immediately in your inbox without needing to refresh the page.',
    color: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    icon: Globe,
    title: 'Multiple Domain Options',
    description: 'Select from available domain options or create custom email addresses on demand.',
    color: 'text-teal-600 dark:text-teal-400',
  },
  {
    icon: Shield,
    title: 'Privacy & Security Guard',
    description: 'Clean HTML rendering and automatic spam filtering keep your device and identity safe.',
    color: 'text-green-600 dark:text-green-400',
  },
  {
    icon: Clock,
    title: 'Auto 24-Hour Expiration',
    description: 'All messages, attachments, and temporary inboxes automatically clean up after 24 hours.',
    color: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    icon: Download,
    title: 'Attachment Downloads',
    description: 'Download PDF files, images, zip files, and attachments directly from your disposable mail.',
    color: 'text-teal-600 dark:text-teal-300',
  },
  {
    icon: QrCode,
    title: 'QR Code Sharing',
    description: 'Instantly generate and scan QR codes to transfer your temporary address to mobile devices.',
    color: 'text-green-600 dark:text-green-300',
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-[#05080e] border-y border-slate-200 dark:border-emerald-500/20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-widest font-mono mb-2">
            100% FREE FEATURES
          </h2>
          <p className="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
            Everything You Need in Temporary Email
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((f, i) => {
            const IconComponent = f.icon;
            return (
              <div
                key={i}
                className="bg-white dark:bg-[#080d16]/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-emerald-500/25 hover:border-emerald-500 transition duration-300 group shadow-md dark:shadow-lg hover:shadow-emerald-500/10"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition transform">
                  <IconComponent className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
