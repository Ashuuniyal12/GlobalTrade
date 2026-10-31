export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  contact: {
    email: string;
    phoneDisplay: string;
    whatsappNumber: string; // international format without spaces or symbols, e.g. "919876543210"
    whatsappPrefill: string;
    address: {
      line1: string;
      line2: string;
      city: string;
      country: string;
      postalCode: string;
    };
    workingHours: string;
  };
  supportedCorridors: {
    region: string;
    description: string;
    keyHubs: string[];
  }[];
  services: {
    title: string;
    slug: string;
    shortDesc: string;
  }[];
  industries: {
    title: string;
    slug: string;
    shortDesc: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Apex Global Trade & Logistics",
  shortName: "Apex Global Trade",
  tagline: "Connecting Global Markets with Confidence",
  description:
    "Cross-border import/export trade coordination, customs documentation support, and international logistics. Serving pharmaceutical, chemical API, textile, and industrial cargo corridors worldwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://apexglobaltrade.com",
  ogImage: "/images/og-apex-global-trade.jpg",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "trade@apexglobaltrade.com",
    phoneDisplay: "+91 (0) 98765 43210", // Client should verify and replace with confirmed number
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210",
    whatsappPrefill: "Hello, I would like to discuss an international shipment / trade enquiry with Apex Global Trade.",
    address: {
      line1: "World Trade Center, Tower B, Level 8", // Client to confirm exact registered office
      line2: "Commercial Logistics District",
      city: "Mumbai",
      country: "India",
      postalCode: "400051",
    },
    workingHours: "Monday – Friday: 09:00 – 18:00 (IST / UTC+5:30) • 24/7 Priority Ops Monitoring",
  },
  supportedCorridors: [
    {
      region: "Middle East & GCC",
      description: "Direct trade routes connecting Dubai (Jebel Ali), Doha, Riyadh, and Muscat.",
      keyHubs: ["Jebel Ali (DXB)", "Dammam", "Hamad Port"],
    },
    {
      region: "Europe & UK",
      description: "Air and sea freight coordination into Rotterdam, Antwerp, Felixstowe, and Frankfurt.",
      keyHubs: ["Rotterdam", "Frankfurt (FRA)", "Antwerp"],
    },
    {
      region: "Southeast & East Asia",
      description: "Fast multi-modal links to Singapore, Klang, Shanghai, and Ho Chi Minh City.",
      keyHubs: ["Singapore", "Port Klang", "Shanghai (PVG)"],
    },
    {
      region: "North America",
      description: "Transatlantic and transpacific routes to New York/New Jersey, Houston, and Los Angeles.",
      keyHubs: ["New York / Newark", "Houston", "Chicago"],
    },
    {
      region: "Africa & Emerging Corridors",
      description: "Dedicated bulk and containerized cargo handling to Mombasa, Durban, and Lagos.",
      keyHubs: ["Mombasa", "Durban", "Lagos (Apapa)"],
    },
  ],
  services: [
    {
      title: "International Trade Coordination",
      slug: "/services/international-trade",
      shortDesc: "End-to-end buyer-supplier transaction facilitation, contract delivery terms (Incoterms 2020), and commercial cargo handling.",
    },
    {
      title: "Customs Procedure & Documentation",
      slug: "/services/customs-documentation",
      shortDesc: "HS code determination, commercial invoicing, COO, phytosanitary, MSDS, and destination regulatory filing support.",
    },
    {
      title: "Freight & Shipping Logistics",
      slug: "/services/freight-logistics",
      shortDesc: "Coordination of ocean FCL/LCL, temperature-controlled air freight, and multi-modal haulage with carrier partners.",
    },
  ],
  industries: [
    {
      title: "Pharmaceuticals",
      slug: "/industries/pharmaceuticals",
      shortDesc: "Compliant cold-chain transit coordination, GDP documentation review, and international medicine consignment logistics.",
    },
    {
      title: "Active Pharmaceutical Ingredients (APIs)",
      slug: "/industries/active-pharmaceutical-ingredients",
      shortDesc: "Specialized chemical and intermediate handling, DMF alignment, COA verification, and Hazmat/non-Hazmat transit protocols.",
    },
    {
      title: "Textiles & Garments",
      slug: "/industries/textiles",
      shortDesc: "Yarn, greige fabric, finished apparel, and synthetic fiber export coordination with duty-drawback documentation.",
    },
    {
      title: "Raw Materials & Industrial Goods",
      slug: "/industries/raw-materials",
      shortDesc: "Minerals, polymers, specialty chemicals, agro-commodities, and industrial machinery dispatch across global trade corridors.",
    },
  ],
};
