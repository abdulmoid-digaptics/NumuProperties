export type NavLink = { label: string; href: string };

export const servicesMenu: NavLink[] = [
  { label: "All Services", href: "/services" },
  { label: "Property Management", href: "/services#property-management" },
  { label: "Investor Services", href: "/investors" },
  { label: "Short Term Rentals", href: "/short-term-rentals" },
  { label: "Our Partners", href: "/partners" },
];

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "For Owners", href: "/owners" },
  { label: "For Tenants", href: "/tenants" },
  { label: "Investors", href: "/investors" },
  { label: "About", href: "/about" },
  { label: "Markets", href: "/#markets" },
  { label: "Contact", href: "/contact" },
];

/** Header call-to-action per route, matching each mockup. */
export const headerCta: Record<string, { label: string; href?: string }> = {
  "/": { label: "Schedule a Consultation" },
  "/owners": { label: "Get a Quote" },
  "/tenants": { label: "Request a Rental", href: "/contact" },
  "/investors": { label: "Get a Consultation" },
  "/partners": { label: "Get in Touch", href: "/contact" },
  "/about": { label: "Get in Touch", href: "/contact" },
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  focus: string;
  email: string;
};

/** Leadership team: About page uses `bio`, Contact page uses `focus`. */
export const team: TeamMember[] = [
  {
    name: "Ali Madni",
    role: "Co-Founder & COO",
    image: "/img/team-ali.jpg",
    bio: "Real estate and operations expert focused on strategic growth, asset management, and investor success.",
    focus: "Operations, partnerships, and investor relations.",
    email: "ali@numupropertymgmt.com",
  },
  {
    name: "Samira Ghaniwala, MD",
    role: "Partner",
    image: "/img/team-samira.jpg",
    bio: "Healthcare leader and community advocate bringing strategic insight, partnership development, and people-centered leadership.",
    focus: "Community partnerships, healthcare real estate, and strategic development.",
    email: "samira@numupropertymgmt.com",
  },
  {
    name: "John",
    role: "Partner",
    image: "/img/team-john.jpg",
    bio: "Brings operational leadership and business development expertise to drive growth and build strategic partner relationships.",
    focus: "Business development and operational growth.",
    email: "john@numupropertymgmt.com",
  },
  {
    name: "Steve Glowinsky",
    role: "Partner",
    image: "/img/team-steve.jpg",
    bio: "Seasoned real estate professional with deep market knowledge and a track record of successful investments and asset management.",
    focus: "Investment strategy, market expertise, and asset management.",
    email: "steve@numupropertymgmt.com",
  },
];

export const contact = {
  email: "info@numupropertymgmt.com",
  hours: "Mon – Fri, 9AM – 5PM CT",
  address: ["17W574 Butterfield Road", "Suite 100", "Oakbrook Terrace, IL 60181"],
};
