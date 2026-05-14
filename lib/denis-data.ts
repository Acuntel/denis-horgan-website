// All facts about Denis Horgan, sourced from his Redfin profile.
// Single source of truth — homepage, chatbot system prompt, SEO meta all read from here.

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
};

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
      "Denis's home market — 48 closed deals and counting. Tree-lined streets, top schools, and an easy Metra ride to the Loop.",
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
      "The Lilac Village — value, location, and Yorktown Center at your doorstep. A favorite for first-time buyers.",
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
      "The Arboretum Village — green space, top-rated schools, and access to I-88 and Metra. Repeat business is the norm.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
  },
];

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
      "Denis is an extraordinary person, an excellent communicator who went beyond the norm. I'm 82 and he was reassuring as this was rather overwhelming at times. I have the utmost respect for him. The world is a better place with Denis in it — we need more like him.",
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
    a: "I work all over the western Chicago suburbs — Downers Grove, Naperville, Wheaton, Glen Ellyn, Lombard, Westmont, Darien, Clarendon Hills, Lisle, and plenty more. If it's in DuPage, western Cook, or Will County, I likely know it well.",
  },
  {
    q: "Do you work with both buyers and sellers?",
    a: "Yes — I work both sides, and I've closed 359 transactions doing so. Many of my sellers were past buyers, and many of my buyers were past sellers. I bring the same hands-on service either way.",
  },
  {
    q: "How long does a typical Illinois closing take?",
    a: "Most residential transactions go from accepted contract to closing in 30–45 days. Cash deals can be faster, financed deals can stretch longer if the appraisal or inspection adds complications. I'll set realistic expectations on day one.",
  },
  {
    q: "Should I get pre-approved before we look at homes?",
    a: "Absolutely — and it's free. A pre-approval tells you exactly what you can afford and tells sellers you're serious. I can connect you with several lenders I trust if you don't have one yet.",
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

export const SEED_LISTINGS = [
  {
    id: "seed-1",
    address: "836 Lyford Lane",
    city: "Wheaton",
    state: "IL",
    zip: "60189",
    price: 335000,
    beds: 2,
    baths: 1,
    sqft: 1050,
    status: "Pending" as const,
    featured: true,
    description:
      "Beautifully updated 2-bed, 1-bath in a quiet Wheaton neighborhood. Walk to Metra, downtown Wheaton, and top-rated District 200 schools.",
    photos: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=85",
    ],
    redfin_url: "https://www.redfin.com/real-estate-agents/denis-horgan",
    listing_type: "Listing",
    mls_number: null,
    created_at: new Date().toISOString(),
  },
  {
    id: "seed-2",
    address: "9815 Lawrence Court, Unit 3AF",
    city: "Schiller Park",
    state: "IL",
    zip: "60176",
    price: 275000,
    beds: 3,
    baths: 2.5,
    sqft: 2200,
    status: "Pending" as const,
    featured: true,
    description:
      "Spacious 3-bed townhome with attached garage, finished basement, and easy access to O'Hare. 3D walkthrough available — ask for the tour link.",
    photos: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=85",
    ],
    redfin_url: "https://www.redfin.com/real-estate-agents/denis-horgan",
    listing_type: "Listing",
    mls_number: null,
    created_at: new Date().toISOString(),
  },
];

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
