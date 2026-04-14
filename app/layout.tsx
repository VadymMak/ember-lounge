import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { LanguageProvider } from '@/lib/i18n-context';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ember Lounge — Premium Hookah & Cocktail Bar Berlin',
  description: 'Exklusive Hookah Lounge und Cocktailbar in Berlin. Premium Tobacco-Blends, Signature Cocktails und unvergessliche Atmosphäre.',
  keywords: ['hookah', 'lounge', 'berlin', 'cocktails', 'shisha', 'bar'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
