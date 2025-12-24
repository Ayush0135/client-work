import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileFloatingCTA from '@/components/layout/MobileFloatingCTA';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'A&N Enterprise | Reliable AC Repair & Installation Services | Patna',
  description: 'Expert AC repair, installation, and maintenance services by A&N Enterprise in Patna, Bihar. Fast, affordable, and trusted by locals. Call Mr. Neyaj today!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased text-gray-900 bg-white`}>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <MobileFloatingCTA />
      </body>
    </html>
  );
}
