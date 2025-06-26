export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: 'RK AirSystems',
    alternateName: 'RK Air Systems',
    description: 'Professional HVAC installation, repair & maintenance services in Barrie and surrounding areas. 24/7 emergency service available.',
    url: 'https://www.rkairsystems.ca',
    logo: 'https://www.rkairsystems.ca/logo.png',
    image: 'https://www.rkairsystems.ca/logo.png',
    telephone: '+1-705-220-5272',
    email: 'info@rkairsystems.ca',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Barrie',
      addressLocality: 'Barrie',
      addressRegion: 'ON',
      postalCode: 'L4M',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.3894,
      longitude: -79.6903
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Barrie'
      },
      {
        '@type': 'City',
        name: 'Orillia'
      },
      {
        '@type': 'City',
        name: 'Innisfil'
      },
      {
        '@type': 'City',
        name: 'Bradford'
      }
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 44.3894,
        longitude: -79.6903
      },
      geoRadius: '50000'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '16:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '00:00',
        closes: '23:59',
        description: 'Emergency service only'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'HVAC Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Air Conditioning Installation',
            description: 'Professional AC installation services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Furnace Repair',
            description: 'Emergency furnace repair services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HVAC Maintenance',
            description: 'Regular HVAC maintenance and tune-ups'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Heat Pump Installation',
            description: 'Energy-efficient heat pump installation'
          }
        }
      ]
    },
    sameAs: [
      'https://www.facebook.com/RKAirSystems',
      'https://www.instagram.com/rk_air_systems/'
    ],
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
    currenciesAccepted: 'CAD',
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      name: 'Rob Kloepfer'
    },
    employee: {
      '@type': 'Person',
      name: 'Rob Kloepfer',
      jobTitle: 'HVAC Technician',
      worksFor: {
        '@type': 'Organization',
        name: 'RK AirSystems'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah Johnson'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Excellent service! They fixed our furnace quickly and professionally.'
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 