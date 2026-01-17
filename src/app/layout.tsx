import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bota Beach House - Your Coastal Paradise in Cameroon',
  description: 'Experience the beauty of Bota, Cameroon at our stunning beach house. Perfect for vacations, getaways, and creating unforgettable memories by the sea.',
  keywords: 'Bota, Cameroon, beach house, vacation rental, coastal accommodation, Limbe, beach rental',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
