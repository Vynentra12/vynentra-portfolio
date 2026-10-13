export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudyChallenge {
  title: string;
  description: string;
}

export interface CaseStudyFeature {
  title: string;
  description: string;
}

export interface CaseStudyResult {
  title: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: "Solar" | "Wind" | "Hybrid";
  badge: string;
  client: string;
  planOrSolution: string;
  location: string;
  timeline: string;
  image: string;
  stats: [CaseStudyStat, CaseStudyStat];
  overview: string;
  companyBackground: string;
  challenges: CaseStudyChallenge[];
  solution: string;
  features: CaseStudyFeature[];
  results: CaseStudyResult[];
  conclusion: string;
  ctaText?: string;
  ctaLink?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "novatech-higher-conversions",
    title: "How NovaTech Successfully Achieved 42% Higher Conversions with Qarin",
    subtitle: "By automating lead assignments and follow-ups, NovaTech’s sales team reduced manual work and improved response times — turning missed opportunities into measurable growth.",
    category: "Hybrid",
    badge: "AUTOMATION & CONVERSIONS",
    client: "SkyReach",
    planOrSolution: "Growth",
    location: "Global Operations",
    timeline: "3 Months Deployment",
    image: "/novatech-case-study.jpg",
    stats: [
      {
        value: "248%",
        label: "Revenue Boost in Last 30 Days",
      },
      {
        value: "15X",
        label: "Team Efficiency",
      },
    ],
    overview: "SkyReach, a fast-growing digital agency, struggled with disjointed communication and manual workflows that slowed down client projects. To overcome these challenges, they turned to Qarin, an intelligent CRM and automation platform designed to streamline collaboration, automate processes, and provide full visibility into performance.",
    companyBackground: "SkyReach delivers high-impact marketing and technology solutions for global clients. As their team expanded, managing leads, tracking progress, and maintaining smooth collaboration became increasingly complex. They needed a single system that could simplify daily operations and scale with their growth.",
    challenges: [
      {
        title: "Fragmented Processes",
        description: "The team used multiple tools for communication, task tracking, and reporting — resulting in lost time and inconsistent updates.",
      },
      {
        title: "Manual Workflows",
        description: "Repetitive data entry and follow-up tasks limited productivity and caused project delays.",
      },
      {
        title: "Lack of Visibility",
        description: "Managers struggled to get a real-time overview of team activity, making it difficult to prioritize resources efficiently.",
      },
      {
        title: "Scalability Concerns",
        description: "As client volume increased, SkyReach’s existing setup couldn’t keep up with the growing workload.",
      },
    ],
    solution: "SkyReach adopted Qarin to unify operations across sales, projects, and communication. The platform’s automation engine and analytics dashboard helped the team eliminate redundancy and gain total visibility into performance.",
    features: [
      {
        title: "Automated Workflows",
        description: "Qarin automated recurring tasks, client follow-ups, and lead assignments, freeing the team to focus on high-value work.",
      },
      {
        title: "Unified Dashboard",
        description: "A single workspace allowed SkyReach to monitor leads, projects, and conversations in real time.",
      },
      {
        title: "Smart Reporting",
        description: "With Qarin’s analytics tools, team leaders could instantly track performance metrics and project health.",
      },
      {
        title: "Seamless Integrations",
        description: "Qarin connected with SkyReach’s existing apps, ensuring a smooth transition without disrupting ongoing projects.",
      },
    ],
    results: [
      {
        title: "Productivity Doubled",
        description: "Automated workflows reduced manual effort by 50%, allowing teams to deliver faster and handle more projects simultaneously.",
      },
      {
        title: "Improved Collaboration",
        description: "Centralized communication brought every department onto the same page, reducing delays and miscommunication.",
      },
      {
        title: "Data-Driven Insights",
        description: "Real-time analytics empowered leaders to make smarter, faster decisions.",
      },
      {
        title: "Scalable Growth",
        description: "Qarin’s flexible infrastructure supported SkyReach’s rapid expansion without system slowdowns.",
      },
    ],
    conclusion: "By implementing Qarin, SkyReach transformed its workflow into a seamless, automated ecosystem. Manual tasks were replaced by intelligent automation, communication improved across departments, and productivity soared. With Qarin, SkyReach not only doubled efficiency but built a scalable foundation for continued growth in the digital era.",
    ctaText: "Use for Free",
    ctaLink: "/contact",
  },
  {
    slug: "commercial-solar-plants",
    title: "Designed for Commercial Solar Plants & Utility Infrastructure",
    subtitle: "Turnkey delivery of a utility-scale solar facility, completed 2 months ahead of schedule despite complex terrain challenges.",
    category: "Solar",
    badge: "COMMERCIAL / ROOFTOP",
    client: "SunPeak Infra & SolarTech",
    planOrSolution: "Commercial Solar EPC & Grid Tie",
    location: "Gujarat, India",
    timeline: "8 Months Delivery",
    image: "/solar_panels.jpg",
    stats: [
      {
        value: "42%",
        label: "Energy Cost Reduction",
      },
      {
        value: "2.4 MW",
        label: "Peak Capacity Installed",
      },
    ],
    overview: "SunPeak Infra required a high-capacity turnkey solar facility to power heavy industrial manufacturing across three clusters, eliminating dependence on costly peak grid tariffs and high-emission peaker plants.",
    companyBackground: "Operating round-the-clock manufacturing plants, SunPeak needed clean baseload energy that would comply with state carbon reduction mandates while improving overall operating margins.",
    challenges: [
      {
        title: "Complex Topography",
        description: "Uneven terrain and varied ground composition required customized piling and structural load analysis.",
      },
      {
        title: "Strict Interconnection Schedule",
        description: "Tight deadlines to secure statutory feed-in permissions without interrupting active manufacturing operations.",
      },
      {
        title: "Harsh Climate Conditions",
        description: "Extreme ambient summer temperatures that historically degraded standard photovoltaic efficiency.",
      },
      {
        title: "Grid Balancing Compliance",
        description: "Demanding utility specifications for reactive power compensation and zero-export fail-safes.",
      },
    ],
    solution: "Vynentra designed and deployed a custom commercial solar installation featuring high-efficiency bifacial monocrystalline arrays, smart string inverters, and high-voltage transmission tie-ins.",
    features: [
      {
        title: "Bifacial PV Modules",
        description: "Generating supplementary yield from ground albedo reflection even under harsh arid conditions.",
      },
      {
        title: "Cloud SCADA Telemetry",
        description: "Real-time string-level analytics for proactive fault detection and remote string isolation.",
      },
      {
        title: "Automated Cleaning Architecture",
        description: "Waterless robotic cleaning arrays minimizing soiling loss in dusty industrial zones.",
      },
      {
        title: "Substation Intertie Engineering",
        description: "Turnkey 33kV outdoor switchyard built to statutory national utility standards.",
      },
    ],
    results: [
      {
        title: "Delivered 60 Days Early",
        description: "Commissioned two months ahead of contractual schedule with zero lost-time accidents.",
      },
      {
        title: "Immediate Cost Reduction",
        description: "Lowered monthly plant power costs by 42% from the very first month of commercial operation.",
      },
      {
        title: "3,100 Tons CO2 Abated",
        description: "Eliminating 3,100 metric tons of carbon emissions annually across industrial facilities.",
      },
      {
        title: "Overperforming Output",
        description: "Exceeded year-one yield projections by 7.3% through precision bifacial alignment.",
      },
    ],
    conclusion: "Through meticulous engineering and turnkey management, Vynentra delivered an industrial solar solution that gives SunPeak permanent cost predictability and verified clean energy leadership.",
    ctaText: "Request Site Assessment",
    ctaLink: "/contact",
  },
  {
    slug: "wind-farm-grid-integration",
    title: "High-Altitude Wind Farm Grid Integration & Micro-Siting",
    subtitle: "Maximizing aerodynamic efficiency and transmission synchronization across challenging mountainous wind corridors.",
    category: "Wind",
    badge: "UTILITY WIND",
    client: "Apex Clean Energy",
    planOrSolution: "Turnkey Wind EPC & SCADA Synchronization",
    location: "Tamil Nadu, India",
    timeline: "14 Months",
    image: "/wind_farm_sunset.jpg",
    stats: [
      {
        value: "99.8%",
        label: "Grid Availability & Uptime",
      },
      {
        value: "150 GWh",
        label: "Annual Clean Energy Generated",
      },
    ],
    overview: "Apex Clean Energy aimed to develop a utility-scale wind corridor across high-elevation ridgelines subject to complex micro-climates, wind shear, and strict grid connectivity codes.",
    companyBackground: "An independent renewable energy developer operating wind and hybrid assets across southern India with aggressive multi-gigawatt expansion goals.",
    challenges: [
      {
        title: "Turbulent Airflow",
        description: "Extreme wind shear and topographical turbulence risking premature component fatigue.",
      },
      {
        title: "Heavy Haul Logistics",
        description: "Navigating oversized 75-meter turbine blades and heavy nacelles up steep mountain hairpin turns.",
      },
      {
        title: "Grid Code Compliance",
        description: "Strict Central Electricity Authority requirements for Low Voltage Ride Through (LVRT) and frequency damping.",
      },
      {
        title: "Environmental Safeguards",
        description: "Ensuring zero disruption to local seasonal avian migratory routes.",
      },
    ],
    solution: "Vynentra executed high-resolution CFD micro-siting, custom turbine placement, heavy haul civil routing, and advanced substation harmonic engineering.",
    features: [
      {
        title: "LIDAR & CFD Micro-Siting",
        description: "Precision positioning of turbines to virtually eliminate downstream wake interference.",
      },
      {
        title: "Smart Pitch & Yaw Telemetry",
        description: "Dynamic rotor adjustment algorithms responding to micro-gusts within milliseconds.",
      },
      {
        title: "Substation Protection",
        description: "Custom STATCOM and harmonic filtering guaranteeing grid stabilization.",
      },
      {
        title: "Predictive Monitoring",
        description: "Vibration sensors on gearboxes and main bearings to forecast preventative maintenance.",
      },
    ],
    results: [
      {
        title: "18% Extra Yield",
        description: "Micro-siting precision unlocked 18% greater generation than original feasibility models.",
      },
      {
        title: "Flawless Grid Tie",
        description: "Achieved statutory grid compliance on initial testing with zero curtailment penalties.",
      },
      {
        title: "150 GWh Annual Output",
        description: "Powering over 120,000 households with reliable clean energy every year.",
      },
      {
        title: "Unmatched Reliability",
        description: "99.8% availability throughout peak southwest monsoon wind seasons.",
      },
    ],
    conclusion: "By combining advanced computational fluid dynamics with precision field engineering, Vynentra turned complex terrain into one of the country's most productive wind assets.",
    ctaText: "Consult Our Wind Team",
    ctaLink: "/contact",
  },
  {
    slug: "hybrid-industrial-microgrid",
    title: "Zero-Downtime Hybrid Solar-Wind Microgrid with BESS",
    subtitle: "Combining solar PV, wind turbines, and containerized BESS for 24/7 round-the-clock resilient industrial operations.",
    category: "Hybrid",
    badge: "HYBRID BESS",
    client: "Bharat Heavy Industries",
    planOrSolution: "Hybrid Microgrid & Energy Storage Architecture",
    location: "Maharashtra, India",
    timeline: "10 Months",
    image: "/hybrid-wind-solar.jpg",
    stats: [
      {
        value: "78%",
        label: "Diesel Generator Reduction",
      },
      {
        value: "4.8 MWh",
        label: "Energy Storage Capacity",
      },
    ],
    overview: "Bharat Heavy Industries suffered from frequent regional grid voltage dips that halted automated precision manufacturing lines, burning thousands of liters of diesel fuel each day.",
    companyBackground: "A leading industrial component manufacturer operating sensitive CNC production lines with zero tolerance for power interruptions.",
    challenges: [
      {
        title: "Costly Production Halts",
        description: "Voltage drops lasting under 500 milliseconds caused millions in scrapped tooling and restart time.",
      },
      {
        title: "Extreme Carbon Footprint",
        description: "Heavy reliance on 1,500 kVA diesel gensets during peak afternoon load shedding.",
      },
      {
        title: "Resource Balancing",
        description: "Balancing solar peak during noon and wind peak during night without overloading plant transformers.",
      },
      {
        title: "Thermal Management",
        description: "Extreme summer ambient heat demanding liquid-cooled battery thermal regulation.",
      },
    ],
    solution: "Vynentra integrated a 3.2 MW solar array, 1.8 MW wind capacity, and a 4.8 MWh containerized liquid-cooled LFP battery storage system managed by an intelligent microgrid EMS.",
    features: [
      {
        title: "Sub-Cycle Islanding",
        description: "Seamless automatic transfer from grid to battery in under 12 milliseconds without CNC disruption.",
      },
      {
        title: "Predictive AI EMS",
        description: "Automated dispatch optimization matching plant load schedules with renewable forecast models.",
      },
      {
        title: "Liquid-Cooled LFP BESS",
        description: "Tier-1 battery containers with aerosol suppression and thermal runaway protection.",
      },
      {
        title: "Dual-Feed Switchgear",
        description: "Redundant busbar architecture preventing single-point electrical failures.",
      },
    ],
    results: [
      {
        title: "Zero Tooling Downtime",
        description: "100% elimination of equipment trips due to grid transients across two full years.",
      },
      {
        title: "78% Diesel Cost Slash",
        description: "Reduced diesel fuel expenses by over ₹3.4 Crores annually.",
      },
      {
        title: "4,200 MT Carbon Cut",
        description: "Abated 4,200 metric tons of carbon emissions in the first twelve months.",
      },
      {
        title: "Peak Shaving ROI",
        description: "Reduced plant peak demand utility charges by 34%.",
      },
    ],
    conclusion: "The hybrid installation delivers uninterrupted manufacturing uptime while serving as a proof-of-concept for industrial sustainability and independence from fossil fuels.",
    ctaText: "Explore Hybrid Solutions",
    ctaLink: "/contact",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
