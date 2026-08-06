import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function ExpirationTimer({ expiresAt }) {
  const [timeLeft, setTimeLeft] = useState('23:59:59');
  const [progressPercent, setProgressPercent] = useState(100);

  useEffect(() => {
    if (!expiresAt) {
      setTimeLeft('23:59:59');
      return;
    }

    const targetDate = new Date(expiresAt).getTime();
    const totalLifetimeMs = 24 * 60 * 60 * 1000; // 24 hours baseline

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft('Expired');
        setProgressPercent(0);
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      );
      const percent = Math.max(0, Math.min(100, (diff / totalLifetimeMs) * 100));
      setProgressPercent(percent);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [expiresAt]);

  return (
    <div className="w-full space-y-1.5 bg-slate-100 dark:bg-slate-950/80 p-2 sm:p-2.5 rounded-xl border border-slate-200 dark:border-emerald-500/20 shadow-sm">
      <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
        <div className="flex items-center space-x-1.5 font-bold">
          <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Expires In:</span>
        </div>
        <span className="font-mono-code text-emerald-700 dark:text-emerald-400 font-extrabold">{timeLeft}</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-900 rounded-full h-1.5 overflow-hidden border border-slate-300 dark:border-emerald-500/10">
        <div
          className="bg-gradient-to-r from-emerald-600 via-teal-500 to-green-500 dark:from-emerald-500 dark:via-teal-400 dark:to-green-400 h-1.5 rounded-full transition-all duration-1000"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
