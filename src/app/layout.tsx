import type { Metadata } from 'next';
import type { Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WebSite - Solusi Web Terdepan',
  description: 'Kami menyediakan solusi web terbaik untuk bisnis Anda dengan teknologi terdepan dan tim berpengalaman.',
  keywords: 'web development, mobile apps, UI/UX design, Indonesia',
  authors: [{ name: 'WebSite Team' }],
  other: {
    'X-UA-Compatible': 'IE=edge',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}