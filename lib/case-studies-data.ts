export interface CaseStudyStat {
  value: string;
  label: string;
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
  image: string;
  stats: [CaseStudyStat, CaseStudyStat];
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
    subtitle: "Evaluating performance and operational reliability of a 5 kW vertical-axis wind turbine in high-velocity coastal corridors.",
    category: "Wind",
    badge: "COASTAL • WIND",
    client: "Mandvi Coastal Site",
    company: "Vynentra",
    technology: "5 kW Vertical Axis Wind Turbine (VAWT)",
    projectLocation: "Mandvi Beach, Kutch, Gujarat",
    clientLocation: "Kutch Coast, Gujarat",
    location: "Mandvi Beach, Kutch, Gujarat",
    planOrSolution: "5 kW Vertical Axis Wind Turbine",
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
    problem: [
      "The project explored the use of renewable wind energy in a coastal location to reduce dependence on conventional grid electricity and support more sustainable power generation.",
      "Mandvi Beach was selected as a potential site for wind energy generation because of its coastal environment and potential wind resource."
    ],
    solution: [
      "Vynentra installed a 5 kW Vertical Axis Wind Turbine (VAWT) at Mandvi Beach, Gujarat.",
      "The turbine was deployed to harness locally available wind energy and convert it into electricity.",
      "The installation provides an opportunity to evaluate the performance of a larger-capacity VAWT in a coastal environment."
    ],
    resultsAndFindings: [
      "Installed capacity: A 5 kW VAWT was installed at the site.",
      "Coastal wind potential: The location offers an opportunity to assess wind energy generation in a coastal environment.",
      "Renewable energy generation: The system is intended to generate electricity from wind and reduce dependence on grid power.",
      "Performance assessment: Monitoring actual generation across different seasons can help establish the turbine’s energy output and operational reliability.",
      "Future deployment potential: The findings can inform decisions about VAWT installations at other suitable coastal locations in Gujarat."
    ],
    conclusionAndRecommendation: [
      "The Mandvi Beach project represents a coastal application of VAWT technology, with a rated capacity of 5 kW.",
      "Evaluating its performance through recorded wind speeds, energy generation, downtime and maintenance data will help determine its practical contribution to electricity savings and the feasibility of similar installations."
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  if (slug === "commercial-solar-plants") {
    return CASE_STUDIES[0];
  }
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
