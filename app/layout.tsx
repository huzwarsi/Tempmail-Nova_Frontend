import type { Metadata, Viewport } from 'next';
import { Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import { AuthProvider } from '../context/AuthContext';
import { InboxProvider } from '../context/InboxContext';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { WebSiteJsonLd, OrganizationJsonLd } from '../lib/structured-data';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#05080d',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tempmailnova.com'),
  title: {
    default: 'TempMail Nova - Fast, Secure & Anonymous Disposable Mail Service',
    template: '%s | TempMail Nova',
  },
  description:
    'Generate instant temporary disposable email addresses with TempMail Nova. Protect your personal inbox from spam, bots, phishers, and newsletters.',
  keywords: [
    'temp mail nova',
    'tempmail nova',
    'disposable email',
    'temporary inbox',
    'throwaway mail',
    'anti-spam mail',
    'mail generator',
    'free temp mail',
  ],
  authors: [{ name: 'TempMail Nova Team' }],
  creator: 'TempMail Nova',
  publisher: 'TempMail Nova',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tempmailnova.com',
    siteName: 'TempMail Nova',
    title: 'TempMail Nova - Fast & Anonymous Temporary Disposable Email',
    description:
      'Instant disposable temp mail generator. Protect your real inbox with live WebSocket updates and custom domains.',
    images: [
      {
        url: 'https://tempmailnova.com/logo.png',
        width: 512,
        height: 512,
        alt: 'TempMail Nova Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TempMail Nova - Instant Temporary Disposable Email',
    description: 'Protect your inbox from spam with zero registration temporary email addresses.',
    images: ['https://tempmailnova.com/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        <WebSiteJsonLd />
        <OrganizationJsonLd />
      </head>
      <body className="bg-slate-50 text-slate-900 dark:bg-[#05080d] dark:text-slate-100 font-manrope transition-colors duration-200 selection:bg-emerald-500 selection:text-slate-950 min-h-screen flex flex-col">
        <ThemeProvider>
          <AuthProvider>
            <InboxProvider>
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </InboxProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
