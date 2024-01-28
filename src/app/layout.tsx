import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bus Tickets Booking Online with Attractive Rates - redBus',
  description: 'Bus Tickets Booking Online with Attractive Rates - redBus',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
