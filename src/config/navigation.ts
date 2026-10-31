export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  children?: {
    title: string;
    href: string;
    description: string;
    badge?: string;
  }[];
}

export const navigationConfig: {
  mainNav: NavItem[];
  footerNav: {
    services: { title: string; href: string }[];
    industries: { title: string; href: string }[];
    company: { title: string; href: string }[];
    legal: { title: string; href: string }[];
  };
} = {
  mainNav: [
    {
      title: "Services",
      href: "/services",
      children: [
        {
          title: "International Trade Coordination",
          href: "/services/international-trade",
          description: "End-to-end import/export trade facilitation, cross-border fulfillment, and Incoterms guidance.",
        },
        {
          title: "Customs & Documentation",
          href: "/services/customs-documentation",
          description: "HS classification, consular legalization, certificates of origin, and clearance procedure assistance.",
        },
        {
          title: "Freight & Shipping Logistics",
          href: "/services/freight-logistics",
          description: "Ocean containerized freight, air cargo, and multi-modal transit coordination with vetted partners.",
        },
      ],
    },
    {
      title: "Industries",
      href: "/industries",
      children: [
        {
          title: "Pharmaceuticals",
          href: "/industries/pharmaceuticals",
          description: "GDP-aware pharmaceutical transit, GDP compliance documentation, and cold-chain coordination.",
          badge: "Priority Focus",
        },
        {
          title: "APIs & Intermediates",
          href: "/industries/active-pharmaceutical-ingredients",
          description: "Active pharmaceutical ingredients, chemical intermediates, MSDS and COA protocol coordination.",
          badge: "Specialized",
        },
        {
          title: "Textiles & Apparel",
          href: "/industries/textiles",
          description: "Fabrics, yarns, technical textiles, and ready-made garments cross-border shipping.",
        },
        {
          title: "Raw Materials & Industrial",
          href: "/industries/raw-materials",
          description: "Industrial minerals, polymers, specialty chemicals, and machinery dispatch.",
        },
      ],
    },
    {
      title: "Global Markets",
      href: "/global-markets",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  footerNav: {
    services: [
      { title: "International Trade Coordination", href: "/services/international-trade" },
      { title: "Customs & Documentation Support", href: "/services/customs-documentation" },
      { title: "Freight & Shipping Coordination", href: "/services/freight-logistics" },
      { title: "All Services Overview", href: "/services" },
    ],
    industries: [
      { title: "Pharmaceutical Export Support", href: "/industries/pharmaceuticals" },
      { title: "API Trade & Logistics", href: "/industries/active-pharmaceutical-ingredients" },
      { title: "Textiles & Yarns", href: "/industries/textiles" },
      { title: "Raw Materials & Minerals", href: "/industries/raw-materials" },
      { title: "All Industries Overview", href: "/industries" },
    ],
    company: [
      { title: "About Apex Global Trade", href: "/about" },
      { title: "Global Corridors & Ports", href: "/global-markets" },
      { title: "Request a Quote", href: "/contact#enquiry" },
      { title: "Contact Us", href: "/contact" },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms & Conditions", href: "/terms" },
      { title: "Compliance Notice", href: "/about#compliance" },
    ],
  },
};
