import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RK AirSystems | Professional HVAC Solutions in Barrie, Ontario',
  description: 'Expert HVAC installation, repair & maintenance services in Barrie and surrounding areas. 24/7 emergency service, competitive rates, and professional solutions. Call us today!',
  keywords: 'HVAC Barrie, air conditioning repair, furnace repair, heat pump installation, HVAC maintenance, air quality, Barrie HVAC contractor, heating and cooling, emergency HVAC service',
  openGraph: {
    title: 'RK AirSystems | Professional HVAC Solutions in Barrie, Ontario',
    description: 'Expert HVAC installation, repair & maintenance services in Barrie and surrounding areas. 24/7 emergency service available.',
    url: 'https://www.rkairsystems.ca',
    siteName: 'RK AirSystems',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RK AirSystems - Professional HVAC Services in Barrie',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RK AirSystems | Professional HVAC Solutions in Barrie, Ontario',
    description: 'Expert HVAC installation, repair & maintenance services in Barrie and surrounding areas.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.rkairsystems.ca',
  },
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
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
