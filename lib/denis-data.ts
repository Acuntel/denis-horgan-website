// All facts about Denis Horgan, sourced from his Redfin profile.
// Single source of truth for homepage, chatbot system prompt, and SEO meta.

export const DENIS = {
  name: "Denis Horgan",
  title: "Redfin Principal Agent",
  tagline: "House Hunt With Horgan",
  market: "Western Chicago Suburbs",
  primaryCity: "Downers Grove, IL",
  phone: "(630) 870-1800",
  phoneHref: "tel:+16308701800",
  email: "denis.horgan@redfin.com",
  redfinProfile: "https://www.redfin.com/real-estate-agents/denis-horgan",
  redfinReviews:
    "https://www.redfin.com/real-estate-agents/denis-horgan/reviews",
  headshot:
    "https://ssl.cdn-redfin.com/system_files/images/15673/500x500/8_0.jpg",
  hashtag: "#HouseHuntWithHorgan",
  licenseNumber: "475174979",
  licenseState: "Illinois",
  licenseTitle: "Managing Broker",
  office: "Redfin Corporation, 112 S. Sangamon St. #400, Chicago, IL 60607",
  brokerage: "Redfin Corporation",
};

// Structured NAP + geo for schema.org / local SEO. Office is the Redfin Chicago
// branch; geo points at the heart of the western-suburbs service area.
export const OFFICE_ADDRESS = {
  streetAddress: "112 S. Sangamon St. #400",
  addressLocality: "Chicago",
  addressRegion: "IL",
  postalCode: "60607",
  addressCountry: "US",
};

export const SERVICE_GEO = {
  // Downers Grove, IL — center of Denis's market
  latitude: 41.8089,
  longitude: -88.0112,
  // ~30 mi radius covers DuPage + western Cook + northern Will
  radiusMeters: 48000,
};

export const RATING = { value: "4.9", count: 185 };

export const STATS = [
  { value: "359+", label: "Homes Sold" },
  { value: "$144M", label: "Total Sales Volume" },
  { value: "4.9★", label: "185 Client Reviews" },
  { value: "8+", label: "Years at Redfin" },
];

export const BIO = {
  short:
    "Top-producing Redfin agent in the western Chicago suburbs. 8+ years, 359 homes sold, $144M closed.",
  long: `Moving to the U.S.A from Ireland, and then from Chicago to the Western Suburbs, I can relate to my clients' unique buying and selling needs. My number one goal is to provide you with the professional experience I would want shown to my family and me. With my background in hospitality and management, I bring a lifelong experience of working with a diverse clientele. My extensive knowledge of today's market and relentless desire to achieve your goals and satisfaction makes me the agent to best represent you.`,
};

export const TEAM = [
  { name: "Michael Podolak", role: "Transaction Coordinator" },
  { name: "Carolynn Ramey", role: "Listing Coordinator" },
  { name: "Adrienne Flowers", role: "Sales Advisor" },
];

export const NEIGHBORHOODS = [
  {
    slug: "downers-grove",
    name: "Downers Grove",
    blurb:
      "Denis's home market, with 48 closed deals and counting. Tree-lined streets, top schools, and an easy Metra ride to the Loop.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
  },
  {
    slug: "naperville",
    name: "Naperville",
    blurb:
      "One of the most sought-after suburbs in the country. World-class schools, the Riverwalk, and homes from craftsman cottages to estates.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80",
  },
  {
    slug: "wheaton",
    name: "Wheaton",
    blurb:
      "Historic charm, strong schools, and walkable downtown. Denis currently has active inventory here.",
    image:
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=1200&q=80",
  },
  {
    slug: "glen-ellyn",
    name: "Glen Ellyn",
    blurb:
      "Lake-side living minutes from a vibrant Main Street. Denis has helped repeat clients buy and sell here for years.",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=80",
  },
  {
    slug: "lombard",
    name: "Lombard",
    blurb:
      "The Lilac Village. Value, location, and Yorktown Center at your doorstep. A favorite for first-time buyers.",
    image:
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&q=80",
  },
  {
    slug: "westmont",
    name: "Westmont",
    blurb:
      "Approachable price points, a walkable downtown, and an underrated dining scene. A consistent seller's market.",
    image:
      "https://images.unsplash.com/photo-1592595896616-c37162298647?w=1200&q=80",
  },
  {
    slug: "darien",
    name: "Darien",
    blurb:
      "Quiet streets and Hinsdale South schools. Denis has guided sellers to multiple over-ask closings here.",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=80",
  },
  {
    slug: "clarendon-hills",
    name: "Clarendon Hills",
    blurb:
      "Tight inventory, beautiful trees, and one of the area's most charming downtowns. A true buyer's negotiation market.",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&q=80",
  },
  {
    slug: "lisle",
    name: "Lisle",
    blurb:
      "The Arboretum Village. Green space, top-rated schools, and access to I-88 and Metra. Repeat business is the norm.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
  },
];

// Richer content for the /neighborhoods/[slug] local-SEO landing pages.
// Keyed by the same slug used in NEIGHBORHOODS above.
export type NeighborhoodContent = {
  county: string;
  intro: string;
  highlights: string[];
  faqs: { q: string; a: string }[];
};

export const NEIGHBORHOOD_CONTENT: Record<string, NeighborhoodContent> = {
  "downers-grove": {
    county: "DuPage County",
    intro:
      "Downers Grove is Denis Horgan's home market and where he's closed the most deals. From the historic homes near the downtown Metra station to newer construction on the south side, Denis knows these streets house-by-house. Whether you're buying your first place or selling a family home, you get an agent who actually lives and works this market every day.",
    highlights: [
      "BNSF Metra line — roughly a 35-minute express ride to Chicago Union Station",
      "Highly rated District 58 (elementary) and District 99 (high school)",
      "Walkable downtown with restaurants, the Tivoli Theatre, and a weekly farmers market",
      "Mix of vintage character homes, mid-century ranches, and new builds",
    ],
    faqs: [
      {
        q: "What's the housing market like in Downers Grove right now?",
        a: "Downers Grove stays competitive thanks to its schools and Metra access. Well-priced, move-in-ready homes still draw multiple offers. Denis will run a full comparative market analysis so you're pricing or offering based on real numbers, not guesswork.",
      },
      {
        q: "How far is Downers Grove from downtown Chicago?",
        a: "About 22 miles. The BNSF Metra express gets you to Union Station in roughly 35 minutes, which is a big reason demand here holds up.",
      },
    ],
  },
  naperville: {
    county: "DuPage & Will County",
    intro:
      "Naperville is consistently ranked among the best places to live in the country, and for good reason — top-tier schools, the Riverwalk, and a downtown that rivals the suburbs around it. Denis helps buyers compete in Naperville's fast-moving market and helps sellers position homes to stand out, from craftsman cottages near downtown to estates on the west side.",
    highlights: [
      "Nationally ranked District 203 and District 204 schools",
      "The Naperville Riverwalk and a vibrant, walkable downtown",
      "Strong resale demand across a wide range of price points",
      "Easy access to I-88 and two Metra stations",
    ],
    faqs: [
      {
        q: "Why is Naperville real estate so competitive?",
        a: "Schools and lifestyle. Families move here for the districts and the downtown, which keeps demand high and inventory tight. Getting pre-approved and moving quickly with a sharp offer matters — Denis will make sure you're ready before the right home hits.",
      },
    ],
  },
  wheaton: {
    county: "DuPage County",
    intro:
      "Wheaton blends historic charm with strong schools and a genuinely walkable downtown. Denis currently has active inventory here and has guided plenty of buyers and sellers through this market. From the tree-lined streets near the college to newer subdivisions, he knows where the value is.",
    highlights: [
      "Top-rated District 200 schools",
      "Historic downtown Wheaton with Metra access on the UP-West line",
      "Wheaton College and abundant parks and forest preserves",
      "A range of housing from vintage homes to newer construction",
    ],
    faqs: [
      {
        q: "Does Denis have listings in Wheaton?",
        a: "Yes — Wheaton is an active market for Denis. Check the Listings page for current inventory, or call (630) 870-1800 and he'll tell you what's coming on the market before it's public.",
      },
    ],
  },
  "glen-ellyn": {
    county: "DuPage County",
    intro:
      "Glen Ellyn offers lake-side living minutes from a vibrant Main Street. Denis has helped repeat clients buy and sell here for years and understands what drives value in this market — proximity to Lake Ellyn, the downtown, and the strong school district.",
    highlights: [
      "Lake Ellyn Park and a charming, walkable downtown",
      "Well-regarded District 41 and District 87 schools",
      "UP-West Metra line into the city",
      "Established neighborhoods with mature trees and character homes",
    ],
    faqs: [
      {
        q: "Is Glen Ellyn a good place to buy a home?",
        a: "It's one of the most desirable western suburbs — great schools, a walkable downtown, and Metra access. Inventory can be tight, so working with an agent who knows the market like Denis gives you an edge.",
      },
    ],
  },
  lombard: {
    county: "DuPage County",
    intro:
      "Known as the Lilac Village, Lombard offers real value, a central location, and Yorktown Center at your doorstep. It's a favorite for first-time buyers, and Denis is great at helping people get their footing in this market without overpaying.",
    highlights: [
      "Strong value relative to neighboring suburbs",
      "Yorktown Center shopping and dining",
      "UP-West Metra access and quick I-355 / I-88 connections",
      "Annual Lilac Festival and Lilacia Park",
    ],
    faqs: [
      {
        q: "Is Lombard good for first-time buyers?",
        a: "Absolutely. Lombard tends to offer more home for the money than some neighboring towns while keeping great access to transit and shopping. Denis works with a lot of first-time buyers and will walk you through the whole process.",
      },
    ],
  },
  westmont: {
    county: "DuPage County",
    intro:
      "Westmont features approachable price points, a walkable downtown, and an underrated dining scene. It's a consistent seller's market, and Denis helps both sellers maximize their sale and buyers find value here.",
    highlights: [
      "Approachable pricing for the western suburbs",
      "Walkable downtown with a strong local dining scene",
      "BNSF Metra line into Chicago",
      "Cream of the Crop Days and a tight-knit community feel",
    ],
    faqs: [
      {
        q: "What kind of market is Westmont?",
        a: "Westmont has been a steady seller's market, with solid demand at approachable price points. If you're selling, Denis will help you capitalize on that; if you're buying, he'll help you move decisively.",
      },
    ],
  },
  darien: {
    county: "DuPage County",
    intro:
      "Darien offers quiet streets and access to the Hinsdale South school district. Denis has guided sellers to multiple over-ask closings here and knows how to price and position homes in this market.",
    highlights: [
      "Hinsdale South High School (District 86)",
      "Quiet, established residential neighborhoods",
      "Easy I-55 and I-355 access",
      "Parks, trails, and the Darien Swim & Racquet Club",
    ],
    faqs: [
      {
        q: "Can Denis help me sell my Darien home for top dollar?",
        a: "That's his specialty — Denis has taken Darien sellers to multiple over-ask closings. He'll do a room-by-room walkthrough and tell you exactly what's worth updating before listing.",
      },
    ],
  },
  "clarendon-hills": {
    county: "DuPage County",
    intro:
      "Clarendon Hills is one of the area's most charming small towns — tight inventory, beautiful trees, and a walkable downtown. It's a true negotiation market, and having Denis on your side makes a real difference here.",
    highlights: [
      "Charming, walkable downtown and Prospect Park",
      "BNSF Metra line into the city",
      "Highly sought-after, low-inventory market",
      "Access to Hinsdale-area schools",
    ],
    faqs: [
      {
        q: "Why is inventory so tight in Clarendon Hills?",
        a: "It's a small, highly desirable town, so homes don't come up often and they move fast. Denis keeps a pulse on what's coming and can often get you in early — call (630) 870-1800.",
      },
    ],
  },
  lisle: {
    county: "DuPage County",
    intro:
      "Lisle, the Arboretum Village, offers green space, top-rated schools, and access to I-88 and Metra. Repeat business is the norm for Denis here — clients come back because he knows the market and delivers.",
    highlights: [
      "The Morton Arboretum and abundant green space",
      "Well-regarded District 202 schools",
      "BNSF Metra line and I-88 access",
      "A mix of single-family homes and townhomes",
    ],
    faqs: [
      {
        q: "What makes Lisle appealing to buyers?",
        a: "Green space, good schools, and an easy commute. The Morton Arboretum and parks give it a distinct feel, and the Metra/I-88 access makes it practical. Denis has a lot of repeat clients in Lisle for those reasons.",
      },
    ],
  },
};

export const ALL_AREAS_SERVED = [
  "Downers Grove",
  "Naperville",
  "Wheaton",
  "Glen Ellyn",
  "Lombard",
  "Westmont",
  "Darien",
  "Clarendon Hills",
  "Lisle",
  "Burr Ridge",
  "Warrenville",
  "Aurora",
  "Arlington Heights",
  "Wood Dale",
  "Plainfield",
  "Bolingbrook",
  "Carol Stream",
  "Hoffman Estates",
  "La Grange",
  "Schiller Park",
  "Woodridge",
  "Itasca",
  "Elmhurst",
  "Glendale Heights",
  "Winfield",
  "Lockport",
];

export type Testimonial = {
  quote: string;
  city: string;
  role: string;
  date: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Denis is an extraordinary person, an excellent communicator who went beyond the norm. I'm 82 and he was reassuring as this was rather overwhelming at times. I have the utmost respect for him. The world is a better place with Denis in it. We need more like him.",
    city: "Aurora, IL",
    role: "Seller",
    date: "2026",
  },
  {
    quote:
      "Trustworthy, professional, and very personable. He offers direction balanced with excellent listening. We were working mostly from a distance and he played many roles for us.",
    city: "Woodridge, IL",
    role: "Seller",
    date: "April 2026",
  },
  {
    quote:
      "Denis was incredible at every step. We were moving from North Carolina to Illinois, and his honesty and sense of humor made the move across the country easier. His ability to understand what we wanted helped us feel comfortable making offers without seeing anything in person.",
    city: "Wood Dale, IL",
    role: "Buyer",
    date: "December 2025",
  },
  {
    quote:
      "2nd home purchase with Denis! He is very knowledgeable and an excellent agent. He goes above and beyond for his clients. Would highly recommend!",
    city: "Itasca, IL",
    role: "Buyer (repeat)",
    date: "January 2026",
  },
  {
    quote:
      "Denis was wonderful to work with. We had a long home buying process but Denis was extremely patient and supportive throughout, and he always kept a positive outlook. Never once did we feel rushed.",
    city: "Elmhurst, IL",
    role: "Buyer",
    date: "January 2026",
  },
  {
    quote:
      "He had feedback on things to improve in the house to sell at above market price. He followed up, checked on updates and listed the house for sale.",
    city: "Arlington Heights, IL",
    role: "Seller",
    date: "April 2026",
  },
  {
    quote:
      "Working with Denis Horgan was a great experience. He is professional, responsive, and knowledgeable.",
    city: "Carol Stream, IL",
    role: "Buyer",
    date: "October 2025",
  },
  {
    quote:
      "Denis is professional, responsive and very friendly! It's been a pleasure working with him. I highly recommend him.",
    city: "Naperville, IL",
    role: "Buyer",
    date: "December 2025",
  },
];

export const FAQS = [
  {
    q: "What areas do you cover?",
    a: "I work all over the western Chicago suburbs. Downers Grove, Naperville, Wheaton, Glen Ellyn, Lombard, Westmont, Darien, Clarendon Hills, Lisle, and plenty more. If it's in DuPage, western Cook, or Will County, I likely know it well.",
  },
  {
    q: "Do you work with both buyers and sellers?",
    a: "Yes. I work both sides, and I've closed 359 transactions doing so. Many of my sellers were past buyers, and many of my buyers were past sellers. I bring the same hands-on service either way.",
  },
  {
    q: "How long does a typical Illinois closing take?",
    a: "Most residential transactions go from accepted contract to closing in 30 to 45 days. Cash deals can be faster, financed deals can stretch longer if the appraisal or inspection adds complications. I'll set realistic expectations on day one.",
  },
  {
    q: "Should I get pre-approved before we look at homes?",
    a: "Absolutely, and it's free. A pre-approval tells you exactly what you can afford and tells sellers you're serious. I can connect you with several lenders I trust if you don't have one yet.",
  },
  {
    q: "How do you price a listing?",
    a: "I do a full comparative market analysis using both Redfin's data and the MLS, then walk you through it room-by-room with my opinion on what to update (and what not to bother with) to maximize your sale price. No guesswork.",
  },
  {
    q: "Do you have a team supporting you?",
    a: "Yes. Michael Podolak (Transaction Coordinator), Carolynn Ramey (Listing Coordinator), and Adrienne Flowers (Sales Advisor) work with me on every deal. You get my eyes plus full Redfin support staff.",
  },
];

// Listings live in public/data/properties.json and are managed from /admin.
// See lib/properties.ts for the read helpers.

export type ListingStatus =
  | "For Sale"
  | "Pending"
  | "Sold"
  | "Coming Soon"
  | "Off Market";

export type Listing = {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string | null;
  price: number;
  beds: number | null;
  baths: number | null;
  sqft: number | null;
  status: ListingStatus;
  featured: boolean;
  description: string | null;
  photos: string[];
  redfin_url: string | null;
  listing_type: string | null;
  mls_number: string | null;
  created_at: string;
};
