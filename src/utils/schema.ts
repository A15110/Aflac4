export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  '@id': 'https://markmikko-aflac.com',
  name: 'Mark Mikko - Aflac Insurance Agent',
  image: '/src/logoAF.png',
  address: {
    '@type': 'PostalAddress',
   streetAddress: '1415 Victor Av. Suite B',
    addressLocality: 'Redding',
    addressRegion: 'CA',
   postalCode: '96003',
    addressCountry: 'US'
  },
  telephone: '530.945.7035',
  faxNumber: '530.215.3141',
  email: 'mark_mikko@us.aflac.com',
  license: 'CA Insurance License #0809825',
  areaServed: {
    '@type': 'City',
    name: 'Redding',
    '@id': 'https://www.wikidata.org/wiki/Q49290'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Aflac Insurance Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Accident Insurance'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Short-Term Disability Insurance'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cancer Insurance'
        }
      }
    ]
  }
});