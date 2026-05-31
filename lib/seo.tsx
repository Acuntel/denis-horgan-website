// Centralized SEO helpers: canonical URLs + schema.org JSON-LD generators.
// Every listing/neighborhood page renders the relevant blocks so Google and
// AI answer engines (ChatGPT, Claude, Perplexity, Gemini) can read the site.
import {
  DENIS,
  OFFICE_ADDRESS,
  SERVICE_GEO,
  RATING,
  ALL_AREAS_SERVED,
  BIO,
  type Listing,
} from "./denis-data";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://denishorgan.com"
).replace(/\/$/, "");

export function canonical(path = "/"): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

/** Server component that injects a JSON-LD <script> block. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; escape the closing-tag edge case.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

const AGENT_ID = `${SITE_URL}/#agent`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: OFFICE_ADDRESS.streetAddress,
  addressLocality: OFFICE_ADDRESS.addressLocality,
  addressRegion: OFFICE_ADDRESS.addressRegion,
  postalCode: OFFICE_ADDRESS.postalCode,
  addressCountry: OFFICE_ADDRESS.addressCountry,
};

/** Site-wide agent identity. Rendered once in the root layout. */
export function realEstateAgentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": AGENT_ID,
    name: DENIS.name,
    description: BIO.short,
    url: SITE_URL,
    image: DENIS.headshot,
    logo: DENIS.headshot,
    telephone: DENIS.phone,
    email: DENIS.email,
    priceRange: "$$",
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: SERVICE_GEO.latitude,
      longitude: SERVICE_GEO.longitude,
    },
    areaServed: ALL_AREAS_SERVED.map((city) => ({
      "@type": "City",
      name: `${city}, IL`,
    })),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: SERVICE_GEO.latitude,
        longitude: SERVICE_GEO.longitude,
      },
      geoRadius: SERVICE_GEO.radiusMeters,
    },
    knowsAbout: [
      "Residential real estate",
      "Home buying",
      "Home selling",
      "Listing pricing and comparative market analysis",
      "Western Chicago suburbs housing market",
      "DuPage County real estate",
    ],
    memberOf: { "@type": "Organization", name: DENIS.brokerage },
    worksFor: { "@type": "Organization", name: DENIS.brokerage },
    hasCredential: `${DENIS.licenseState} Managing Broker #${DENIS.licenseNumber}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING.value,
      reviewCount: RATING.count,
      bestRating: "5",
    },
    sameAs: [DENIS.redfinProfile, DENIS.redfinReviews],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: `${DENIS.name} — ${DENIS.title}`,
    publisher: { "@id": AGENT_ID },
  };
}

const STATUS_TO_AVAILABILITY: Record<string, string> = {
  "For Sale": "https://schema.org/InStock",
  "Coming Soon": "https://schema.org/PreOrder",
  Pending: "https://schema.org/LimitedAvailability",
  Sold: "https://schema.org/SoldOut",
  "Off Market": "https://schema.org/Discontinued",
};

/** Per-listing structured data — this is what earns added properties rich results. */
export function realEstateListingSchema(listing: Listing) {
  const url = canonical(`/listings/${listing.id}`);
  const name = `${listing.address}, ${listing.city}, ${listing.state}`;
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "@id": `${url}#listing`,
    url,
    name,
    datePosted: listing.created_at,
    ...(listing.description ? { description: listing.description } : {}),
    ...(listing.photos?.length ? { image: listing.photos } : {}),
    ...(listing.price > 0
      ? {
          offers: {
            "@type": "Offer",
            price: listing.price,
            priceCurrency: "USD",
            availability:
              STATUS_TO_AVAILABILITY[listing.status] ??
              "https://schema.org/InStock",
            seller: { "@id": AGENT_ID },
          },
        }
      : {}),
    about: {
      "@type": "SingleFamilyResidence",
      name,
      address: {
        "@type": "PostalAddress",
        streetAddress: listing.address,
        addressLocality: listing.city,
        addressRegion: listing.state,
        ...(listing.zip ? { postalCode: listing.zip } : {}),
        addressCountry: "US",
      },
      ...(listing.beds != null ? { numberOfBedrooms: listing.beds } : {}),
      ...(listing.baths != null
        ? { numberOfBathroomsTotal: listing.baths }
        : {}),
      ...(listing.sqft != null
        ? {
            floorSize: {
              "@type": "QuantitativeValue",
              value: listing.sqft,
              unitCode: "FTK",
            },
          }
        : {}),
    },
    broker: { "@id": AGENT_ID },
  };
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: canonical(it.path),
    })),
  };
}
