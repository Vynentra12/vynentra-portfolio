import { ALL_BLOG_POSTS } from "./blog-data";

export interface SearchItem {
  id: string;
  title: string;
  category: "PAGE" | "SECTION" | "BLOG" | "SOLUTION" | "METRIC";
  description: string;
  href: string;
  keywords: string[];
}

export const SEARCH_INDEX: SearchItem[] = [
  // Pages
  {
    id: "page-home",
    title: "Home",
    category: "PAGE",
    description: "Vynentra main landing page and renewable energy overview.",
    href: "/",
    keywords: ["home", "main", "landing", "vynentra", "start"],
  },
  {
    id: "page-blog",
    title: "Blog & News Grid",
    category: "PAGE",
    description: "Explore latest news, engineering insights, and green energy analysis.",
    href: "/blog",
    keywords: ["blog", "news", "articles", "stories", "insights", "grid"],
  },
  {
    id: "page-contact",
    title: "Contact Us & Get In Touch",
    category: "PAGE",
    description: "Reach out for project consultations, site assessments, and partnership inquiries.",
    href: "/contact",
    keywords: ["contact", "email", "touch", "reach", "support", "inquiry", "form"],
  },

  // Sections
  {
    id: "sec-mission",
    title: "Our Mission & Statement",
    category: "SECTION",
    description: "Building modern wind farms that bring long-term value to communities and the planet.",
    href: "/#about",
    keywords: ["mission", "about", "vision", "values", "about us", "who we are"],
  },
  {
    id: "sec-process",
    title: "Process & Carbon Reduction Steps",
    category: "SECTION",
    description: "4-stage process reducing emissions, cutting greenhouse gases, and tackling climate crisis.",
    href: "/#process",
    keywords: ["process", "services", "steps", "carbon", "emissions", "greenhouse", "how it works"],
  },
  {
    id: "sec-impact",
    title: "Impact Metrics & Wind Potential",
    category: "METRIC",
    description: "1,163 GW onshore potential, 58+ GW installed capacity, 500 GW renewable target.",
    href: "/#impact",
    keywords: ["impact", "metrics", "stats", "potential", "capacity", "1163", "58", "80", "500", "gw"],
  },
  {
    id: "sec-solutions",
    title: "Wind Solutions & Engineering",
    category: "SOLUTION",
    description: "Site Assessment, System Design, Installation & Execution, and Operations & Maintenance.",
    href: "/#solutions",
    keywords: ["solutions", "site assessment", "system design", "installation", "execution", "maintenance", "services"],
  },
  {
    id: "sec-cases",
    title: "Case Studies & Deployments",
    category: "SECTION",
    description: "Utility-scale Rajasthan, Captive Gujarat hybrid, and Tamil Nadu repowering.",
    href: "/#case-studies",
    keywords: ["cases", "case study", "deployments", "utility", "captive", "repowering", "results", "portfolio"],
  },
  {
    id: "sec-projects",
    title: "Featured Projects Accordion",
    category: "SECTION",
    description: "Real results powered by wind across commercial and utility installations.",
    href: "/#case-studies",
    keywords: ["projects", "featured", "real results", "accordion"],
  },
  {
    id: "sec-faq",
    title: "Frequently Asked Questions",
    category: "SECTION",
    description: "Common inquiries about wind turbine scalability, site suitability, and custom setups.",
    href: "/#faq",
    keywords: ["faq", "questions", "answers", "help", "queries", "suitability"],
  },

  // Dynamic Blog Posts
  ...ALL_BLOG_POSTS.map((post) => ({
    id: `blog-${post.id}`,
    title: post.title,
    category: "BLOG" as const,
    description: post.excerpt,
    href: `/blog/${post.slug}`,
    keywords: [
      post.title.toLowerCase(),
      post.category.toLowerCase(),
      post.author.toLowerCase(),
      "article",
      "blog",
      "post",
    ],
  })),
];

export function searchItems(query: string): SearchItem[] {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) return [];

  return SEARCH_INDEX.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(cleanQuery);
    const descMatch = item.description.toLowerCase().includes(cleanQuery);
    const categoryMatch = item.category.toLowerCase().includes(cleanQuery);
    const keywordMatch = item.keywords.some((k) => k.includes(cleanQuery));

    return titleMatch || descMatch || categoryMatch || keywordMatch;
  });
}
