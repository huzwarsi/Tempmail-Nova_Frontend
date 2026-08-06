import React, { useState, useEffect } from 'react';
import API from '../../services/api';

export default function StatsSection() {
  const [stats, setStats] = useState({
    totalEmailsReceived: 1254300,
    activeInboxesCount: 450,
    availableDomainsCount: 5,
    spamBlockedPercentage: 99.8,
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const { data } = await API.get('/analytics/public');
        setStats(data.stats);
      } catch (err) {
        // Fallback stats retained
      }
    };
    loadStats();
  }, []);

  return (
    <div className="py-12 bg-slate-50 dark:bg-[#05080e] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#080d16]/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 dark:border-emerald-500/25 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-x-0 lg:divide-x divide-slate-200 dark:divide-emerald-500/20 shadow-md dark:shadow-xl">
          <div className="p-4">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-mono">
              {stats.totalEmailsReceived.toLocaleString()}+
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 font-bold mt-1 uppercase tracking-wider">Emails Delivered</div>
          </div>
          <div className="p-4">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
              {stats.activeInboxesCount.toLocaleString()}+
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 font-bold mt-1 uppercase tracking-wider">Active Inboxes</div>
          </div>
          <div className="p-4">
            <div className="text-3xl sm:text-4xl font-black text-teal-600 dark:text-teal-400 font-mono">
              {stats.spamBlockedPercentage}%
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 font-bold mt-1 uppercase tracking-wider">Spam Block Rate</div>
          </div>
          <div className="p-4">
            <div className="text-3xl sm:text-4xl font-black text-emerald-700 dark:text-emerald-300 font-mono">
              Instant
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 font-bold mt-1 uppercase tracking-wider">Real-time Delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
}
