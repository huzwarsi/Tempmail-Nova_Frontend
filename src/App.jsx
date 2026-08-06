import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';
import About from './pages/About';
import Contact from './pages/Contact';
import { InboxProvider } from './context/InboxContext';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  const [authModalState, setAuthModalState] = useState(null);

  return (
    <AuthProvider>
      <InboxProvider>
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 dark:bg-[#05080d] dark:text-slate-100 font-manrope transition-colors duration-200 selection:bg-emerald-500 selection:text-slate-950">
          <Navbar onOpenAuthModal={(type) => setAuthModalState(type)} />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<CookiePolicy />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </InboxProvider>
    </AuthProvider>
  );
}
