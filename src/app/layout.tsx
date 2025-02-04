import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import Banner from '@/components/Banner';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#F59E0B',
};

export const metadata: Metadata = {
  title: "RK AirSystems | Professional HVAC Solutions in Barrie",
  description: "Expert HVAC installation, repair & maintenance services in Barrie and surrounding areas. 24/7 emergency service, competitive rates, and professional solutions by RK AirSystems.",
  manifest: '/site.webmanifest',
  keywords: "HVAC, air conditioning, heating, furnace repair, air quality, Barrie HVAC, HVAC contractor, air systems, heating and cooling, HVAC maintenance",
  authors: [{ name: "Rob Kloepfer" }],
  openGraph: {
    title: "RK AirSystems | Professional HVAC Solutions in Barrie",
    description: "Expert HVAC installation, repair & maintenance services in Barrie and surrounding areas. 24/7 emergency service available.",
    url: 'https://www.rkairsystems.ca',
    siteName: 'RK AirSystems',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RK AirSystems - Professional HVAC Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "RK AirSystems | Professional HVAC Solutions in Barrie",
    description: "Expert HVAC installation, repair & maintenance services in Barrie and surrounding areas.",
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    shortcut: [{ url: '/favicon.ico' }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'RK AirSystems'
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: 'RK AirSystems',
  image: 'https://www.rkairsystems.ca/logo.png',
  '@id': 'https://www.rkairsystems.ca',
  url: 'https://www.rkairsystems.ca',
  telephone: '+1-705-220-5272',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Barrie',
    addressRegion: 'ON',
    addressCountry: 'CA'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 44.3894,
    longitude: -79.6903
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    opens: '00:00',
    closes: '23:59'
  },
  sameAs: [
    'https://www.facebook.com/RKAirSystems',
    'https://www.instagram.com/rk_air_systems/'
  ],
  priceRange: '$$',
  servesCuisine: 'HVAC Services'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Banner />
        <ScrollToTop />
      </body>
    </html>
  );
}
