export interface CaseStudyStat {
  value: string;
  label: string;
}

export type CaseStudyContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "list"; items: string[] }
  | { type: "specs"; items: { label: string; value: string }[] };

export interface CaseStudyArticleSection {
  heading: string;
  blocks: CaseStudyContentBlock[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  displayTitleLines?: string[];
  subtitle: string;
  category: "Solar" | "Wind" | "Hybrid";
  badge: string;
  client: string;
  company: string;
  technology: string;
  projectLocation: string;
  clientLocation?: string;
  location: string;
  planOrSolution: string;
  timeline?: string;
  date?: string;
  image: string;
  stats: [CaseStudyStat, CaseStudyStat];
  articleSections?: CaseStudyArticleSection[];
  problem: string[];
  solution: string[];
  resultsAndFindings: string[];
  conclusionAndRecommendation: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "hybrid-wind-turbine-surat",
    title: "Hybrid Wind Turbine Installation by Vynentra",
    displayTitleLines: ["Hybrid Wind Turbine", "Installation by Vynentra"],
    subtitle: "Evaluating dual renewable generation from a 5 kW vertical-axis wind turbine and solar integration in Surat, Gujarat.",
    category: "Hybrid",
    badge: "HYBRID • SURAT",
    client: "Urban Commercial Client",
    company: "Vynentra",
    technology: "5 kW Hybrid Wind–Solar Energy System",
    projectLocation: "Surat, Gujarat",
    clientLocation: "Surat, Gujarat",
    location: "Surat, Gujarat",
    planOrSolution: "5 kW Hybrid VAWT & Solar Generation System",
    date: "October 09, 2026",
    image: "/case-studies/case-study-1-surat.webp",
    stats: [
      {
        value: "5 kW",
        label: "Hybrid System Capacity",
      },
      {
        value: "Dual",
        label: "Solar & Wind Harvest",
      },
    ],
    articleSections: [
      {
        heading: "Project Overview",
        blocks: [
          {
            type: "paragraph",
            text: "In urban and semi-industrial commercial hubs like Surat, energy-intensive businesses face escalating grid tariffs and power demand charges. Vynentra evaluated a dual renewable generation architecture combining a 5 kW Vertical Axis Wind Turbine (VAWT) with on-site solar power.",
          },
          {
            type: "paragraph",
            text: "The installation examines how hybrid wind-solar systems perform within built-up urban topographies, assessing power curves, seasonal irradiation, and local wind turbulence.",
          },
        ],
      },
      {
        heading: "Key Project Specifications",
        blocks: [
          {
            type: "specs",
            items: [
              { label: "Location", value: "Surat, Gujarat, India" },
              { label: "Technology", value: "Hybrid VAWT & Solar PV Array" },
              { label: "Installed Capacity", value: "5 kW (Dual Generation)" },
              { label: "Application", value: "Urban Commercial Power Diversification" },
              { label: "Site Environment", value: "Built-up Commercial Corridor" },
            ],
          },
        ],
      },
      {
        heading: "Dual Generation Dynamics in Built Environments",
        blocks: [
          {
            type: "paragraph",
            text: "Solar energy delivers predictable generation during daylight hours, while wind power offers the potential for generation during evening and transition hours. However, in urban built environments, surrounding structures create wind turbulence that directly influences turbine performance.",
          },
          {
            type: "paragraph",
            text: "The project demonstrated that while solar output remained steady, wind generation in dense urban zones varied significantly by season and obstacle proximity. Detailed site assessment and measured anemometry remain paramount before sizing hybrid installations.",
          },
        ],
      },
      {
        heading: "Key Takeaways & Recommendations",
        blocks: [
          {
            type: "list",
            items: [
              "**Solar reliability:** Rooftop solar provides the most predictable baseload for urban commercial entities with unshaded roof space.",
              "**Site-specific aerodynamics:** Urban wind systems require elevated masts and clearance from adjacent multi-storey structures to avoid wind shadow.",
              "**Integrated energy management:** Combining solar with battery storage or hybrid inverters optimizes self-consumption and mitigates peak grid charges.",
            ],
          },
        ],
      },
    ],
    problem: [
      "The client in Surat was facing high electricity bills and was looking for an alternative renewable energy solution to reduce dependence on conventional grid electricity.",
      "The challenge was to identify a suitable renewable energy system that could generate electricity using both solar energy and wind power in an urban built environment."
    ],
    solution: [
      "Vynentra proposed a 5 kW hybrid vertical-axis wind turbine (VAWT) integrated with solar power generation.",
      "The hybrid system was designed to harness two complementary renewable energy sources: Solar energy to generate electricity during daylight hours, and Wind energy to supplement solar generation whenever suitable wind conditions were available.",
      "The core objective was to diversify on-site renewable energy generation and lower grid electricity consumption."
    ],
    resultsAndFindings: [
      "The installation and subsequent observations highlighted the importance of local wind conditions in determining the performance of a hybrid renewable energy system.",
      "Lower than expected wind generation: Wind energy output was low during the summer season due to insufficient wind speeds at the installation site.",
      "Solar energy remained the more suitable option: In densely built-up areas, rooftop solar generally offers a more predictable generation opportunity, subject to available roof space and shading.",
      "Emerging technology: VAWT technology is still at an early stage of adoption in the Indian market, and further field testing and performance validation are important for wider deployment.",
      "Site-specific feasibility is essential: Wind speed, turbulence, installation height and surrounding buildings significantly influence turbine performance."
    ],
    conclusionAndRecommendation: [
      "The project demonstrated that a hybrid wind–solar system must be evaluated against the actual environmental conditions of its installation site.",
      "For densely populated urban areas with limited and inconsistent wind resources, a solar-only system may be the more practical and cost-effective choice. VAWT systems may be considered where measured wind conditions and site characteristics support viable generation.",
      "Vynentra recommends conducting a detailed site assessment and reviewing actual generation data before selecting a wind–solar hybrid system for future projects."
    ],
  },
  {
    slug: "vawt-madhavpur-beach",
    title: "VAWT Installation Near Madhavpur Beach, Gujarat",
    displayTitleLines: ["VAWT Installation Near", "Madhavpur Beach, Gujarat"],
    subtitle: "Turnkey installation of a 3 kW vertical-axis wind turbine harnessing consistent coastal winds for clean local power generation.",
    category: "Wind",
    badge: "COASTAL • WIND",
    client: "Coastal Facility Client",
    company: "Vynentra",
    technology: "3 kW Vertical Axis Wind Turbine (VAWT)",
    projectLocation: "Near Madhavpur Beach, Gujarat",
    clientLocation: "Madhavpur Coast, Gujarat",
    location: "Near Madhavpur Beach, Gujarat",
    planOrSolution: "3 kW Vertical Axis Wind Turbine",
    date: "October 24, 2026",
    image: "/case-studies/case-study-2-madhavpur.webp",
    stats: [
      {
        value: "3 kW",
        label: "Rated VAWT Capacity",
      },
      {
        value: "100%",
        label: "Coastal Wind Generation",
      },
    ],
    articleSections: [
      {
        heading: "Project Overview",
        blocks: [
          {
            type: "paragraph",
            text: "Madhavpur Beach on Gujarat's Arabian Sea coastline provides an ideal coastal testing ground for distributed wind energy systems. Vynentra executed the turnkey installation of a 3 kW Vertical Axis Wind Turbine (VAWT) designed to harness consistent maritime breezes.",
          },
          {
            type: "paragraph",
            text: "Unlike inland or urban installations, coastal environments deliver laminar wind corridors with higher average velocity, providing favorable conditions for small-scale decentralized power generation.",
          },
        ],
      },
      {
        heading: "Key Project Specifications",
        blocks: [
          {
            type: "specs",
            items: [
              { label: "Location", value: "Near Madhavpur Beach, Gujarat, India" },
              { label: "Technology", value: "Vertical Axis Wind Turbine (VAWT)" },
              { label: "Installed Capacity", value: "3 kW" },
              { label: "Application", value: "Decentralized Coastal Clean Energy" },
              { label: "Site Environment", value: "Open Coastal Corridor" },
            ],
          },
        ],
      },
      {
        heading: "Coastal Wind Resource Assessment",
        blocks: [
          {
            type: "paragraph",
            text: "According to the National Institute of Wind Energy (NIWE), Gujarat's coastline ranks among the highest onshore and offshore wind resource zones in South Asia. At Madhavpur, constant seasonal sea breezes provide the aerodynamic force needed to sustain continuous rotation.",
          },
          {
            type: "paragraph",
            text: "The 3 kW VAWT utilizes an omnidirectional rotor design that captures shifting onshore-offshore thermal winds without requiring complex mechanical yaw drives or directional repositioning.",
          },
        ],
      },
      {
        heading: "Performance & Operational Reliability",
        blocks: [
          {
            type: "list",
            items: [
              "**Laminar coastal flow:** The absence of tall inland obstacles allows smooth airflow, minimizing turbulence-induced mechanical strain.",
              "**Marine corrosion protection:** Specialized coatings and sealed generator enclosures guard critical electrical components against saline coastal humidity.",
              "**Silent operation:** The vertical airfoil geometry minimizes aerodynamic blade tip noise, making it suitable for hospitality and community coastal facilities.",
            ],
          },
        ],
      },
    ],
    problem: [
      "The client wanted to reduce electricity bills and explore renewable energy as an alternative source of power.",
      "Given the site’s coastal location, wind energy was considered a promising option for generating clean electricity and reducing dependence on grid power."
    ],
    solution: [
      "Vynentra installed a 3 kW Vertical Axis Wind Turbine (VAWT) near Madhavpur Beach, where local wind conditions were suitable for wind energy generation.",
      "The system was selected to harness the consistent coastal winds and convert wind energy into electricity for the client’s power requirements."
    ],
    resultsAndFindings: [
      "Favourable wind conditions: The site experiences suitable wind conditions for the installed turbine.",
      "Successful operation: The 3 kW VAWT is reported to be operating well under the site’s coastal wind conditions.",
      "Renewable energy generation: The installation provides an opportunity to generate electricity from locally available wind resources.",
      "Electricity bill reduction objective: The project aims to reduce grid electricity consumption and associated operating costs.",
      "Location advantage: Coastal sites can offer favourable wind resources, although generation varies with wind speed, season and turbine operating conditions."
    ],
    conclusionAndRecommendation: [
      "The Madhavpur Beach installation demonstrates the potential of VAWT technology at locations with favourable wind resources.",
      "Compared with densely built-up urban sites, suitable coastal locations may offer better conditions for wind energy generation.",
      "Actual electricity savings should be evaluated using recorded energy production and electricity bills before and after installation."
    ],
  },
  {
    slug: "vawt-mandvi-beach",
    title: "5 kW VAWT Installation at Mandvi Beach, Gujarat",
    displayTitleLines: ["5 kW VAWT Installation at", "Mandvi Beach, Gujarat"],
    subtitle: "From India's early 1986 wind demonstration projects to modern small-scale turbine deployment: evaluating coastal wind dynamics, technical performance, and operational reliability of Vynentra's 5 kW Vertical Axis Wind Turbine.",
    category: "Wind",
    badge: "COASTAL • WIND",
    client: "Mandvi Coastal Site",
    company: "Vynentra",
    technology: "5 kW Vertical Axis Wind Turbine (VAWT)",
    projectLocation: "Mandvi Beach, Kutch, Gujarat",
    clientLocation: "Mandvi Beach, Gujarat",
    location: "Mandvi Beach, Kutch, Gujarat",
    planOrSolution: "5 kW Vertical Axis Wind Turbine",
    date: "November 12, 2026",
    image: "/case-studies/case-study-3-mandvi.webp",
    stats: [
      {
        value: "5 kW",
        label: "Installed VAWT Capacity",
      },
      {
        value: "24/7",
        label: "Coastal Corridor Harvest",
      },
    ],
    articleSections: [
      {
        heading: "Project Overview",
        blocks: [
          {
            type: "paragraph",
            text: "India's renewable energy transition is creating opportunities to explore wind power across a wider range of locations and applications. While large utility-scale wind farms account for much of the country's installed capacity, smaller distributed [wind energy systems](/services/end-to-end-project-development) offer another area of development, particularly for locations where local wind resources and on-site energy requirements justify deployment.",
          },
          {
            type: "paragraph",
            text: "At Mandvi Beach in Gujarat's Kutch district, Vynentra explored this opportunity through the installation of a 5 kW Vertical Axis Wind Turbine (VAWT). The project brings small-scale wind technology into an active coastal setting, providing an empirical reference for evaluating distributed generation, operational reliability, and environmental durability.",
          },
        ],
      },
      {
        heading: "Mandvi's Place in India's Wind Energy History",
        blocks: [
          {
            type: "paragraph",
            text: "Wind energy has been an integral part of [India's wind energy history](https://www.orfonline.org/expert-speak/wind-energy-in-india-112109) and renewable energy development for decades. According to the [National Institute of Wind Energy (NIWE)](https://maps.niwe.res.in/media/150m-report.pdf), India's wind power development programme began in 1983–84, with the country's first grid-connected modern wind turbine commissioned at Veraval, Gujarat, in 1985.",
          },
          {
            type: "paragraph",
            text: "In 1986, Mandvi itself became the historic site of a 1.1 MW demonstration wind project, developed through a collaborative effort involving the Natural Energy Processing Company and the Department for Non-conventional Energy Sources (DNES), as documented in [IRENA's wind policy archives](https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2013/GWEC_WindReport_All_web-display.pdf). Nearly four decades later, Mandvi continues to provide an essential setting for exploring how modern distributed wind energy can serve site-specific requirements.",
          },
          {
            type: "paragraph",
            text: "According to the Ministry of New and Renewable Energy's published data on [India's installed wind capacity](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2287725&lang=1&reg=3), Gujarat possesses over 16.09 GW of installed wind power capacity, having generated approximately 33.71 billion units of clean electricity during FY 2025–26 alone. Gujarat's leadership position makes it the premier proving ground for advancing novel wind configurations.",
          },
        ],
      },
      {
        heading: "Why Coastal Locations Matter for Wind Energy",
        blocks: [
          {
            type: "paragraph",
            text: "Coastal environments offer unique conditions for exploring wind power generation. Continuous thermal gradients between sea and land create predictable wind currents. However, the presence of coastal breezes alone does not establish project viability. Wind speed, seasonal variation, turbulence, surrounding structures, installation conditions and equipment requirements all influence the performance of a turbine.",
          },
          {
            type: "paragraph",
            text: "The National Institute of Wind Energy (NIWE), through [India's Wind Potential Atlas](https://niwe.res.in/Open_data_Set/technical_report/19/) and offshore evaluations such as the [Gujarat offshore wind feasibility study](https://niwe.res.in/Open_data_Set/technical_report/5/), identifies Gujarat as having an estimated 180.79 GW of wind power potential at 150 metres above ground level, alongside detailed [NIWE Wind Resource Maps](https://maps.niwe.res.in/). However, this macro-level potential reflects utility heights; for distributed installations positioned closer to ground level, micro-siting, surface roughness, nearby terrain, and seasonal variations dictate actual energy generation.",
          },
          {
            type: "quote",
            attribution: "National Institute of Wind Energy (NIWE)",
            text: "\"Wind is an intermittent and site-specific source of energy.\"",
          },
        ],
      },
      {
        heading: "Understanding Vertical Axis Wind Turbines (VAWT)",
        blocks: [
          {
            type: "paragraph",
            text: "Wind turbines operate predominantly under two mechanical configurations: Horizontal Axis Wind Turbines (HAWT) and Vertical Axis Wind Turbines (VAWT).",
          },
          {
            type: "paragraph",
            text: "Horizontal-axis turbines feature blades that rotate around a horizontal shaft, requiring a motorized yaw-orientation drive to keep the rotor facing the incoming wind. By contrast, vertical-axis turbines rotate around a vertical shaft, allowing them to accept omnidirectional wind from any compass heading without yaw adjustments.",
          },
          {
            type: "paragraph",
            text: "As noted in technical literature on [vertical-axis wind turbine engineering](https://www.sciencedirect.com/science/article/pii/S0029801819302124), VAWT designs offer compact form factors and lower acoustic emissions, making them suitable for coastal public zones and distributed installations where directional wind shifting is common.",
          },
        ],
      },
      {
        heading: "The Mandvi Beach Installation & Key Project Specifications",
        blocks: [
          {
            type: "paragraph",
            text: "Vynentra deployed a 5 kW Vertical Axis Wind Turbine directly at Mandvi Beach. The turbine converts kinetic energy from coastal air streams into rotational mechanical force, driving a synchronous permanent magnet generator.",
          },
          {
            type: "specs",
            items: [
              { label: "Location", value: "Mandvi Beach, Kutch, Gujarat, India" },
              { label: "Technology", value: "Vertical Axis Wind Turbine (VAWT)" },
              { label: "Installed Capacity", value: "5 kW" },
              { label: "Application", value: "Distributed Coastal Power Generation" },
              { label: "Site Environment", value: "High-Salinity Coastal Shoreline" },
              { label: "Developer", value: "Vynentra Energy Solutions" },
            ],
          },
        ],
      },
      {
        heading: "What Determines the Performance of a Small Wind Turbine?",
        blocks: [
          {
            type: "paragraph",
            text: "A turbine's rated nameplate capacity represents its electrical output under specific bench-test conditions, rather than a continuous flatline generation output. As the [US Department of Energy's Small Wind Guidebook](https://www.energy.gov/cmei/systems/windexchange/small-wind-guidebook) emphasizes, annual cumulative energy yield (kWh) is the true metric of system performance.",
          },
          {
            type: "list",
            items: [
              "**Wind speed and consistency:** Energy generation scales with the cube of wind speed; small shifts in average velocity have substantial impacts on output.",
              "**Turbine power curve:** The cut-in speed, rated velocity, and cut-out protection threshold dictate how efficiently kinetic air translates to electricity.",
              "**Site surface roughness:** Surrounding coastal dunes, tree lines, and infrastructure influence airflow boundary layer thickness.",
              "**Seasonal wind variation:** Pre-monsoon and monsoon coastal currents yield peak seasonal outputs compared to calm transition months.",
              "**Marine maintenance & corrosion resilience:** Exposure to airborne sea salt, humidity, and sand requires proactive component sealing and protective finishes.",
            ],
          },
        ],
      },
      {
        heading: "What the Mandvi Installation Helps Evaluate",
        blocks: [
          {
            type: "subheading",
            text: "1. Empirical Generation Yield",
          },
          {
            type: "paragraph",
            text: "Continuous logging of kilowatt-hour generation under real marine conditions establishes baseline productivity for small-scale wind assets in Western India.",
          },
          {
            type: "subheading",
            text: "2. Operational Availability in High-Salinity Environments",
          },
          {
            type: "paragraph",
            text: "Coastal sites test mechanical longevity. Tracking inverter uptimes, bearing performance, and protective coating integrity establishes lifecycle operational benchmarks.",
          },
          {
            type: "subheading",
            text: "3. Scalability for Regional Distributed Applications",
          },
          {
            type: "paragraph",
            text: "Data from Mandvi informs site evaluation for ports, coastal resorts, agricultural processing centers, and remote installations seeking distributed renewable power.",
          },
        ],
      },
      {
        heading: "The Larger Opportunity for Distributed Wind in India",
        blocks: [
          {
            type: "paragraph",
            text: "While India's 500 GW non-fossil capacity target by 2030 will rely heavily on utility-scale solar and multi-megawatt wind farms, distributed generation fills an indispensable niche. Commercial entities with 1–3 MW power demands can deploy localized turbines and [wind-solar hybrid configurations](/services/end-to-end-project-development) to lower energy costs without dedicating vast land parcels.",
          },
        ],
      },
      {
        heading: "Looking Ahead: From Coastal Potential to Measurable Performance",
        blocks: [
          {
            type: "paragraph",
            text: "Mandvi's legacy in Indian wind power spans nearly four decades. Through its 5 kW VAWT installation, Vynentra continues that progression, guided by [Vynentra's approach to energy development](/about) to generate practical, empirical insights into decentralized wind energy deployment.",
          },
          {
            type: "paragraph",
            text: "Explore Vynentra's comprehensive [wind energy systems and renewable energy project development services](/services/end-to-end-project-development), review our [Madhavpur 3 kW VAWT case study](/case-studies/vawt-madhavpur-beach) to see another coastal deployment in action, or [discuss a wind energy project](/contact#contact-form) with our technical team.",
          },
        ],
      },
    ],
    problem: [
      "Exploring distributed small-scale wind energy deployment where local wind resources and site energy requirements justify practical field evaluation in an exposed coastal setting.",
      "Evaluating how small-scale vertical-axis turbines endure marine environmental exposure, salt-laden humidity, and seasonal wind speed swings."
    ],
    solution: [
      "Vynentra installed a 5 kW Vertical Axis Wind Turbine (VAWT) at Mandvi Beach, Gujarat, to examine distributed wind energy generation in a coastal setting.",
      "The turbine was deployed to harness locally available wind energy and evaluate the performance of an omnidirectional VAWT configuration under marine atmospheric conditions."
    ],
    resultsAndFindings: [
      "Installed capacity: A 5 kW VAWT was installed and commissioned at Mandvi Beach.",
      "Coastal wind potential: The location demonstrates strong seasonal wind availability, particularly during pre-monsoon and monsoon corridors.",
      "Empirical generation evaluation: Continuous generation monitoring confirms that energy output depends on measured wind speed distributions rather than nominal rated capacity alone.",
      "Marine durability: Coastal installations require robust corrosion protection and ongoing operational monitoring to maintain component reliability."
    ],
    conclusionAndRecommendation: [
      "The Mandvi Beach project demonstrates the feasibility of small-scale VAWT deployment in coastal environments.",
      "Evaluating long-term performance through recorded wind speeds, kilowatt-hour generation, and maintenance logs provides practical guidance for future distributed wind installations across India's coastline."
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  if (slug === "commercial-solar-plants") {
    return CASE_STUDIES[0];
  }
  if (
    slug === "5kw-vawt-mandvi-beach-gujarat" ||
    slug === "wind-energy-mandvi-gujarat-vawt"
  ) {
    return CASE_STUDIES.find((cs) => cs.slug === "vawt-mandvi-beach") || CASE_STUDIES[2];
  }
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
