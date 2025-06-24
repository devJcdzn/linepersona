export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Ink - Minimalist Profile Avatars",
    "description": "Transform your photos into stunning minimalist profile avatars in 30 minutes. Perfect for LinkedIn, Twitter/X, GitHub, and professional platforms.",
    "url": "https://ink-avatars.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "provider": {
      "@type": "Organization",
      "name": "Ink",
      "url": "https://ink-avatars.com"
    },
    "featureList": [
      "Photo upload and transformation",
      "Minimalist avatar design",
      "30-minute delivery",
      "High-resolution PNG files",
      "Professional platform optimization",
      "Secure photo processing"
    ],
    "screenshot": [
      "https://ink-avatars.com/screenshot1.jpg",
      "https://ink-avatars.com/screenshot2.jpg"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "Ink Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ink"
    },
    "mainEntity": {
      "@type": "Service",
      "name": "Minimalist Profile Avatar Creation",
      "description": "Professional photo-to-avatar transformation service",
      "serviceType": "Digital Design Service",
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Avatar Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Minimalist Avatar",
              "description": "Hand-drawn minimalist profile avatar"
            }
          }
        ]
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 