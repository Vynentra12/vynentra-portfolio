export interface BlogPostDetail {
  id: number;
  slug: string;
  category: string;
  date: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  authorBio?: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
      keyHighlight?: string;
    }[];
    quote?: {
      text: string;
      author: string;
    };
    takeaways: string[];
  };
}

export const ALL_BLOG_POSTS: BlogPostDetail[] = [
  {
    id: 1,
    slug: "inside-the-engineering-of-wind-turbines",
    category: "WIND ENERGY",
    date: "DECEMBER 10, 2025",
    author: "Harry Wuko",
    authorRole: "Principal Aerodynamics Engineer",
    authorAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    authorBio: "A deep understanding of digital marketing concepts, trends, and strategies is crucial. This includes knowledge of SEO, content marketing, social media marketing.",
    readTime: "5 MIN READ",
    title: "Why wind energy is becoming an important part of India's energy mix",
    excerpt: "Exploring the changing role of wind energy and how it can complement solar generation as India's energy requirements continue to grow.",
    image: "/wind_farm_sunset.jpg",
    content: {
      intro: "Modern wind turbines are marvels of mechanical, aerodynamic, and electrical engineering. What appears as a serene, slow-turning white blade in the landscape is actually an ultra-sophisticated kinetic conversion machine rotating at blade-tip speeds exceeding 290 km/h.",
      sections: [
        {
          heading: "Aerofoil Optimization and Boundary Layer Physics",
          paragraphs: [
            "The aerofoil cross-section of a modern 4MW+ wind turbine blade is engineered to operate efficiently across turbulent wind regimes. By utilizing vortex generators and trailing-edge serrations, engineers reduce acoustic noise while preventing flow separation during steep angle-of-attack shifts.",
            "Advanced carbon-fiber composite layups provide the structural stiffness needed to prevent blade deflection under extreme gale loads while keeping the overall nacelle mass optimized for tower hub heights of 140m to 160m."
          ],
          keyHighlight: "Next-generation aerofoil geometries capture up to 18% more kinetic energy in Class III low-wind sites compared to conventional designs."
        },
        {
          heading: "Direct-Drive Permanent Magnet Generators vs. Geared Nacelles",
          paragraphs: [
            "One of the major debates in wind engineering centers on the drivetrain. While high-speed gearboxes offer compact generator dimensions, direct-drive permanent magnet systems eliminate gearbox failure modes, significantly reducing maintenance downtime in remote and offshore installations.",
            "Integrated predictive vibration sensors and thermal telemetry now allow operations teams to detect bearing anomalies weeks before any operational degradation occurs."
          ]
        }
      ],
      quote: {
        text: "The future of wind turbine design is no longer just about building taller towers it is about intelligent, self-optimizing aerofoils that adapt to micro-gusts in real-time.",
        author: "Harry Wuko, Chief Technology Officer at Vynentra"
      },
      takeaways: [
        "Hub heights above 140m unlock steady, higher-velocity laminar wind streams.",
        "Direct-drive drivetrains cut scheduled mechanical maintenance by over 35%.",
        "Predictive vibration monitoring prevents catastrophic drivetrain failures."
      ]
    }
  },
  {
    id: 2,
    slug: "the-environmental-impact-of-wind-energy",
    category: "PROJECT DEVELOPMENT",
    date: "DECEMBER 10, 2025",
    author: "Harry Wuko",
    authorRole: "Head of Environmental Sustainability",
    authorAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    authorBio: "A deep understanding of digital marketing concepts, trends, and strategies is crucial. This includes knowledge of SEO, content marketing, social media marketing.",
    readTime: "5 MIN READ",
    title: "What actually goes into developing a renewable energy project",
    excerpt: "From understanding the site and assessing energy potential to selecting technology and coordinating execution, we are breaking down what happens behind the project.",
    image: "/why-choose-us/expert-guidance.jpg",
    content: {
      intro: "Wind power produces zero operational emissions during electricity generation. However, a rigorous analysis must account for the full life cycle from steel smelting and composite manufacturing to logistics, foundation pouring, and eventual decommissioning.",
      sections: [
        {
          heading: "Carbon Payback Within 6 to 9 Months",
          paragraphs: [
            "Life cycle assessments (LCAs) conducted by international energy bodies consistently demonstrate that a standard utility-scale turbine offsets the entire carbon footprint of its manufacturing and installation within the first 6 to 9 months of operation.",
            "Over a 25-to-30-year operational lifespan, each turbine produces over 30 times more clean electrical energy than the total energy consumed across its entire manufacturing lifecycle."
          ],
          keyHighlight: "Over its 30-year lifetime, a single 3.5 MW turbine displaces over 120,000 metric tons of thermal coal emissions."
        },
        {
          heading: "Circular Economy: 100% Recyclable Thermoplastic Resins",
          paragraphs: [
            "Historically, thermoset epoxy blades posed end-of-life recycling challenges. Today, new thermoplastic resin matrices allow blades to be dissolved and separated at chemical recycling facilities, reclaiming both the resin polymer and virgin-grade structural fibers.",
            "Dual-use land strategies such as agrivoltaics and agri-wind integration allow agricultural cultivation and grazing right up to the turbine base foundation."
          ]
        }
      ],
      quote: {
        text: "Clean energy must be clean from cradle to grave. Developing circular, recyclable turbine components is our highest environmental mandate.",
        author: "Harry Wuko, Lead Project Engineer"
      },
      takeaways: [
        "Turbines achieve complete carbon neutrality in under 9 months of operation.",
        "New thermoplastic composite matrices enable complete blade circularity.",
        "Over 98% of the turbine footprint allows simultaneous agricultural use."
      ]
    }
  },
  {
    id: 3,
    slug: "the-real-numbers-behind-green-energy",
    category: "RENEWABLE TECHNOLOGY",
    date: "DECEMBER 10, 2025",
    author: "Harry Wuko",
    authorRole: "Senior Energy Economist",
    authorAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop",
    authorBio: "A deep understanding of digital marketing concepts, trends, and strategies is crucial. This includes knowledge of SEO, content marketing, social media marketing.",
    readTime: "5 MIN READ",
    title: "Why the right renewable technology starts with the site",
    excerpt: "Wind speed, available space, energy consumption and surrounding conditions can all influence the right solution. We are looking at why technology selection needs to begin with the site.",
    image: "/solutions/solar-installation.jpg",
    content: {
      intro: "The transition to renewable energy is no longer propelled purely by sustainability mandates it is driven by sheer economic superiority. On a pure Levelized Cost of Energy (LCOE) basis, new-build wind and solar projects outcompete existing coal and gas generators globally.",
      sections: [
        {
          heading: "Levelized Cost of Energy (LCOE) Comparison",
          paragraphs: [
            "Over the last decade, the LCOE of onshore wind has declined by over 68%, making utility-scale wind one of the cheapest power sources in high-yield geographic belts at under $0.035 per kWh.",
            "For corporate consumers, captive renewable power purchase agreements (PPAs) provide a guaranteed, predictable energy price hedge against fluctuating fossil fuel tariffs and carbon border adjustment mechanisms."
          ],
          keyHighlight: "Captive wind-solar hybrid power delivers energy savings of 25% to 40% compared to standard industrial grid tariffs."
        },
        {
          heading: "Mitigating Intermittency via Hybridization",
          paragraphs: [
            "The economic bottleneck of renewable energy has historically been intermittency. By co-locating solar arrays with wind turbines sharing the same grid interconnection, plants achieve continuous complementary generation curves solar peaking at midday and wind peaking during evening and night breezes."
          ]
        }
      ],
      quote: {
        text: "Corporate CFOs are adopting renewable PPAs not just for ESG reporting, but as a critical financial hedge against volatile fuel tariffs.",
        author: "Harry Wuko, Lead Energy Analyst"
      },
      takeaways: [
        "Onshore wind LCOE is now below $0.035 per kWh in high-yield zones.",
        "Hybrid solar-wind installations maximize transmission capacity utilization.",
        "Captive installations yield payback periods under 4.5 years for industrial campuses."
      ]
    }
  },
  {
    id: 4,
    slug: "a-world-powered-by-wind-and-sunlight",
    category: "WIND + SOLAR",
    date: "DECEMBER 10, 2025",
    author: "Harry Wuko",
    authorRole: "Principal Systems Engineer",
    authorAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop",
    authorBio: "A deep understanding of digital marketing concepts, trends, and strategies is crucial. This includes knowledge of SEO, content marketing, social media marketing.",
    readTime: "5 MIN READ",
    title: "Wind and solar are not competing technologies",
    excerpt: "Exploring how different generation profiles can work together through hybrid renewable energy systems and create more effective solutions for different energy requirements.",
    image: "/hybrid-wind-solar.jpg",
    content: {
      intro: "The vision of a zero-carbon electricity grid depends on synchronizing distributed kinetic and photovoltaic generators with national transmission backbones without compromising frequency stability.",
      sections: [
        {
          heading: "Synthetic Inertia & Grid-Forming Inverters",
          paragraphs: [
            "Traditional coal and gas turbines naturally provide mechanical inertia that dampens frequency fluctuations. Modern wind turbines replicate this through advanced pitch controls and grid-forming inverters that inject instantaneous active power during system frequency drops.",
            "This breakthrough allows regional grids to operate securely with over 85% instantaneous renewable penetration without risk of blackout cascade events."
          ]
        }
      ],
      takeaways: [
        "Grid-forming inverters provide synthetic inertia comparable to traditional spinning turbines.",
        "High renewable penetration enhances national energy independence and security."
      ]
    }
  },
  {
    id: 5,
    slug: "the-economic-ripple-of-renewable-energy",
    category: "EQUIPMENT",
    date: "DECEMBER 10, 2025",
    author: "Harry Wuko",
    authorRole: "Head of Environmental Sustainability",
    authorAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop",
    authorBio: "A deep understanding of digital marketing concepts, trends, and strategies is crucial. This includes knowledge of SEO, content marketing, social media marketing.",
    readTime: "6 MIN READ",
    title: "The economic ripple of renewable energy",
    excerpt: "Local job creation, rural infrastructure development, and manufacturing supply chains ignited by wind energy investments.",
    image: "https://images.pexels.com/photos/34727208/pexels-photo-34727208.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content: {
      intro: "The renewable transition is revitalizing rural economies and creating high-skilled technical employment across manufacturing, geotechnical surveying, crane operations, and precision blade maintenance.",
      sections: [
        {
          heading: "Domestic Manufacturing and Supply Chain Sovereignty",
          paragraphs: [
            "Building towers, nacelles, and specialized castings locally creates robust regional economic multipliers. Every 1 GW of deployed wind capacity supports thousands of direct and indirect technical jobs across the value chain."
          ]
        }
      ],
      takeaways: [
        "Wind projects bring long-term lease revenues to rural landowners.",
        "Domestic manufacturing strengthens energy infrastructure resilience."
      ]
    }
  },
  {
    id: 6,
    slug: "building-the-future-of-sustainable-power",
    category: "SOLAR",
    date: "DECEMBER 10, 2025",
    author: "Harry Wuko",
    authorRole: "Senior Energy Economist",
    authorAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop",
    authorBio: "A deep understanding of digital marketing concepts, trends, and strategies is crucial. This includes knowledge of SEO, content marketing, social media marketing.",
    readTime: "5 MIN READ",
    title: "Building the future of sustainable power",
    excerpt: "Architecting decentralized microgrids that combine wind, solar, and battery storage for remote industrial clusters.",
    image: "https://images.pexels.com/photos/7763083/pexels-photo-7763083.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content: {
      intro: "Decentralized microgrids ensure energy continuity for remote mining operations, agricultural processing plants, and critical logistics hubs independent of distant transmission failures.",
      sections: [
        {
          heading: "Modular Energy Storage and Intelligent Dispatch",
          paragraphs: [
            "By pairing localized wind installations with modular Battery Energy Storage Systems (BESS), microgrids maintain 99.99% power uptime with zero fossil diesel generator runtime."
          ]
        }
      ],
      takeaways: [
        "Microgrids provide true energy autonomy for remote commercial operations.",
        "Eliminating diesel generation saves millions in fuel transportation logistics."
      ]
    }
  },
];

export function getBlogPostBySlug(slug: string): BlogPostDetail | undefined {
  return ALL_BLOG_POSTS.find((p) => p.slug === slug);
}
