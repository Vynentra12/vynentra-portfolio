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
    slug: "5kw-vawt-mandvi-beach-gujarat",
    title: "5 kW VAWT Installation at Mandvi Beach, Gujarat",
    displayTitleLines: ["5 kW VAWT Installation at", "Mandvi Beach, Gujarat"],
    subtitle: "Exploring distributed small-scale vertical-axis wind turbine deployment, coastal wind patterns and performance factors at Mandvi Beach in Gujarat.",
    category: "Wind",
    badge: "COASTAL • WIND",
    client: "Mandvi Coastal Site",
    company: "Vynentra",
    technology: "5 kW Vertical Axis Wind Turbine (VAWT)",
    projectLocation: "Mandvi Beach, Gujarat, India",
    clientLocation: "Mandvi Beach, Gujarat",
    location: "Mandvi Beach, Gujarat",
    planOrSolution: "Distributed wind energy generation",
    date: "October 09, 2026",
    image: "/case-studies/case-study-1-surat.webp",
    stats: [
      {
        value: "5 kW",
        label: "By Vynentra",
      },
      {
        value: "5 kW",
        label: "Distributed Wind Application",
      },
    ],
    articleSections: [
      {
        heading: "Project Overview",
        blocks: [
          {
            type: "paragraph",
            text: "India's renewable energy transition is creating opportunities to explore wind power across a wider range of locations and applications. While large wind farms account for much of the country's installed capacity, smaller distributed [wind energy systems](/services/end-to-end-project-development) offer another area of development, particularly for locations where local wind resources and energy requirements justify their deployment.",
          },
          {
            type: "paragraph",
            text: "At Mandvi Beach in Gujarat, Vynentra explored this opportunity through the installation of a 5 kW Vertical Axis Wind Turbine (VAWT). The project examines the application of small-scale wind technology in a coastal environment and provides a practical reference for evaluating distributed wind energy generation.",
          },
        ],
      },
      {
        heading: "India's Long History with Wind Energy",
        blocks: [
          {
            type: "paragraph",
            text: "Wind energy has been part of [India's wind energy history](https://www.orfonline.org/expert-speak/wind-energy-in-india-112109) and renewable energy development for decades. The country's first grid-connected wind turbine was commissioned in Gujarat in 1984, marking an early step towards commercial wind power generation.",
          },
          {
            type: "paragraph",
            text: "Over the following decades, wind energy developed into a significant part of India's electricity infrastructure. Government policies, wind-resource assessments, private-sector investment and improvements in turbine technology contributed to the expansion of the sector.",
          },
          {
            type: "paragraph",
            text: "According to the Ministry of New and Renewable Energy report on [India's installed wind capacity](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2287725&lang=1&reg=3), Gujarat had approximately 16.09 GW of installed wind power capacity as of June 2026. The state also generated approximately 33.71 billion units of wind electricity during FY 2025-26.",
          },
          {
            type: "paragraph",
            text: "Gujarat's position in India's wind energy landscape makes it an important location for exploring further applications of wind technology.",
          },
        ],
      },
      {
        heading: "Why Coastal Locations Matter for Wind Energy",
        blocks: [
          {
            type: "paragraph",
            text: "Coastal environments offer specific conditions for exploring wind power generation. Their exposure to marine wind patterns makes them relevant for wind-resource assessment and the development of suitable wind energy systems.",
          },
          {
            type: "paragraph",
            text: "However, the presence of coastal winds alone does not establish the commercial viability of a project. Wind speed, seasonal variation, turbulence, surrounding structures, installation conditions and equipment requirements all influence the performance of a turbine.",
          },
          {
            type: "paragraph",
            text: "The National Institute of Wind Energy (NIWE), through [India's Wind Potential Atlas](https://niwe.res.in/Open_data_Set/technical_report/19/), identifies Gujarat among India's states with significant onshore wind potential, alongside broader coastal studies such as the [Gujarat offshore wind feasibility study](https://niwe.res.in/Open_data_Set/technical_report/5/). These assessments provide an important resource-planning reference for wind energy development across the state.",
          },
          {
            type: "paragraph",
            text: "At the project level, however, actual wind measurements remain essential to determine whether a particular location can support reliable electricity generation.",
          },
        ],
      },
      {
        heading: "Understanding Vertical Axis Wind Turbines (VAWT)",
        blocks: [
          {
            type: "paragraph",
            text: "Wind turbines generally operate through two primary configurations: Horizontal Axis Wind Turbines (HAWT) and Vertical Axis Wind Turbines (VAWT).",
          },
          {
            type: "paragraph",
            text: "Horizontal-axis turbines have blades that rotate around a horizontal shaft, typically requiring the rotor to face the incoming wind direction.",
          },
          {
            type: "paragraph",
            text: "Vertical-axis turbines rotate around a vertical shaft. Their configuration allows them to accept wind from different directions without the same yaw-orientation mechanism used by conventional horizontal-axis turbines.",
          },
          {
            type: "paragraph",
            text: "As highlighted in a [technical review of vertical-axis wind turbines](https://www.sciencedirect.com/science/article/pii/S0029801819302124), VAWT technology offers an alternative configuration for certain distributed wind energy applications. Its suitability depends on turbine design, operating conditions, structural requirements, maintenance considerations and the wind characteristics of the installation site.",
          },
          {
            type: "paragraph",
            text: "For smaller installations, evaluating these factors is important before determining the appropriate technology and system capacity, including whether [wind-solar hybrid systems](/insights/wind-vs-solar-vs-hybrid-energy-businesses) could complement local demand.",
          },
        ],
      },
      {
        heading: "The Mandvi Beach Installation",
        blocks: [
          {
            type: "paragraph",
            text: "Vynentra installed a 5 kW Vertical Axis Wind Turbine at Mandvi Beach, Gujarat.",
          },
          {
            type: "paragraph",
            text: "The project brings small-scale wind energy technology into a coastal setting, with the turbine designed to convert locally available wind energy into electricity.",
          },
          {
            type: "paragraph",
            text: "The installation provides an opportunity to examine the practical deployment of VAWT technology under site-specific conditions. It also creates a basis for evaluating how turbine performance varies with wind availability, operating conditions and seasonal changes.",
          },
          {
            type: "paragraph",
            text: "Rather than assessing the installation only by its rated capacity, the project requires a closer examination of actual electricity generation and operational performance.",
          },
        ],
      },
      {
        heading: "Key Project Specifications",
        blocks: [
          {
            type: "specs",
            items: [
              { label: "Location", value: "Mandvi Beach, Gujarat, India" },
              { label: "Technology", value: "Vertical Axis Wind Turbine (VAWT)" },
              { label: "Installed capacity", value: "5 kW" },
              { label: "Application", value: "Distributed wind energy generation" },
              { label: "Site environment", value: "Coastal" },
            ],
          },
        ],
      },
      {
        heading: "What Determines the Performance of a Small Wind Turbine?",
        blocks: [
          {
            type: "paragraph",
            text: "A turbine's rated capacity represents its maximum designed electrical output under specified operating conditions. It does not indicate the amount of electricity the turbine generates continuously.",
          },
          {
            type: "paragraph",
            text: "Actual energy generation depends on several variables.",
          },
          { type: "subheading", text: "1. Wind speed and availability" },
          {
            type: "paragraph",
            text: "Wind speed directly influences turbine output. Measurements across different periods help establish the site's wind-resource characteristics and the turbine's operating profile.",
          },
          { type: "subheading", text: "2. Seasonal wind patterns" },
          {
            type: "paragraph",
            text: "Wind availability changes throughout the year. Seasonal monitoring helps determine whether a location provides sufficiently consistent wind resources for the intended application.",
          },
          { type: "subheading", text: "3. Turbine performance" },
          {
            type: "paragraph",
            text: "The turbine's operating characteristics, including its cut-in speed, rated wind speed and cut-out speed, influence how effectively it converts wind energy into electricity.",
          },
          { type: "subheading", text: "4. Operational reliability" },
          {
            type: "paragraph",
            text: "Downtime, maintenance requirements, component performance and environmental exposure all influence the long-term operation of a wind energy system.",
          },
          { type: "subheading", text: "5. Energy generation and utilisation" },
          {
            type: "paragraph",
            text: "Actual electricity generation, measured in kilowatt-hours (kWh), provides a more meaningful indication of system performance than installed capacity alone.",
          },
          {
            type: "paragraph",
            text: "These parameters form the basis for assessing the technical and commercial feasibility of distributed wind installations.",
          },
        ],
      },
      {
        heading: "What the Project Means for Future Wind Energy Applications",
        blocks: [
          {
            type: "paragraph",
            text: "The Mandvi Beach installation provides a reference point for exploring the application of small-scale VAWT technology in coastal environments.",
          },
          {
            type: "paragraph",
            text: "Further monitoring can help establish the turbine's actual generation profile, operating reliability and maintenance requirements. These findings can inform future decisions about similar installations in locations with suitable wind resources.",
          },
          {
            type: "paragraph",
            text: "For distributed wind energy projects, the broader consideration is not simply whether a turbine can be installed, but whether the available wind resource, system design and energy requirements align to support a viable application through structured [renewable energy project development](/services/end-to-end-project-development).",
          },
        ],
      },
      {
        heading: "Looking Ahead",
        blocks: [
          {
            type: "paragraph",
            text: "Wind energy development requires a combination of resource assessment, appropriate technology selection and project execution, guided by [Vynentra's approach to energy development](/about).",
          },
          {
            type: "paragraph",
            text: "Through its Mandvi Beach installation, Vynentra explores one application of distributed wind energy and the considerations involved in deploying turbine technology across different environments.",
          },
          {
            type: "paragraph",
            text: "As India's renewable energy infrastructure expands, evaluating technologies across different project scales and site conditions remains important to developing practical energy systems.",
          },
          {
            type: "paragraph",
            text: "The next step for the Mandvi installation lies in continued performance monitoring, using recorded generation and operational data to establish its long-term potential. Contact our team to [discuss a wind energy project](/contact#contact-form) tailored to your site conditions.",
          },
        ],
      },
    ],
    problem: [
      "Exploring distributed small-scale wind energy deployment where local wind resources and site energy requirements justify practical field evaluation.",
    ],
    solution: [
      "Vynentra installed a 5 kW Vertical Axis Wind Turbine (VAWT) at Mandvi Beach, Gujarat, to examine distributed wind energy generation in a coastal setting.",
    ],
    resultsAndFindings: [
      "Actual performance depends on measured wind speed, seasonal availability, turbine cut-in and rated speeds, operational reliability, and delivered kilowatt-hour generation.",
    ],
    conclusionAndRecommendation: [
      "Continued performance monitoring using recorded generation and operational data will establish long-term feasibility for similar coastal distributed wind applications.",
    ],
  },
  {
    slug: "wind-energy-mandvi-gujarat-vawt",
    title: "Wind Energy in Mandvi, Gujarat: Inside Vynentra's 5 kW Vertical Axis Wind Turbine Installation",
    displayTitleLines: ["Wind Energy in Mandvi, Gujarat:", "5 kW VAWT Installation"],
    subtitle: "From India's early wind energy experiments to modern small-scale turbine installations, Mandvi continues to offer a setting for exploring the potential of coastal wind power.",
    category: "Wind",
    badge: "COASTAL • WIND",
    client: "Mandvi Coastal Site",
    company: "Vynentra",
    technology: "5 kW Vertical Axis Wind Turbine (VAWT)",
    projectLocation: "Mandvi Beach, Kutch, Gujarat",
    clientLocation: "Mandvi Beach, Kutch, Gujarat",
    location: "Mandvi Beach, Kutch, Gujarat",
    planOrSolution: "5 kW Vertical Axis Wind Turbine",
    date: "October 24, 2026",
    image: "/case-studies/case-study-2-madhavpur.webp",
    stats: [
      {
        value: "5 kW",
        label: "By Vynentra",
      },
      {
        value: "5 kW",
        label: "Mandvi Coastal VAWT",
      },
    ],
    articleSections: [
      {
        heading: "Project Overview",
        blocks: [
          {
            type: "paragraph",
            text: "India's wind energy story has deep roots in Gujarat. Long before renewable energy became central to the country's power infrastructure, the state's coastal regions were already being explored for electricity generation through wind.",
          },
          {
            type: "paragraph",
            text: "In 1986, a 1.1 MW demonstration wind project was established in Mandvi, Gujarat. Nearly four decades later, the same region continues to provide opportunities to examine how wind energy can be developed at different scales.",
          },
          {
            type: "paragraph",
            text: "Vynentra's installation of a 5 kW Vertical Axis Wind Turbine (VAWT) at Mandvi Beach, Kutch, represents a small-scale application of wind energy technology in a coastal environment.",
          },
          {
            type: "paragraph",
            text: "The project focuses on harnessing locally available wind resources and assessing the turbine's generation potential, operational reliability and suitability for similar coastal installations.",
          },
        ],
      },
      {
        heading: "Mandvi's Place in India's Wind Energy History",
        blocks: [
          {
            type: "paragraph",
            text: "India began systematically exploring wind energy during the 1980s, when government agencies and research institutions started identifying suitable locations for wind power development.",
          },
          {
            type: "paragraph",
            text: "According to the [National Institute of Wind Energy (NIWE)](https://maps.niwe.res.in/media/150m-report.pdf), India's wind power development programme began in 1983-84. A grid-connected modern wind turbine was commissioned at Veraval, Gujarat, in 1985.",
          },
          {
            type: "paragraph",
            text: "In 1986, Mandvi became the site of a 1.1 MW demonstration wind project, developed through a collaboration involving the Natural Energy Processing Company and the Department for Non-conventional Energy Sources, as recorded in [IRENA's wind policy review](https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2013/GWEC_WindReport_All_web-display.pdf).",
          },
          {
            type: "paragraph",
            text: "These early projects helped establish the technical and commercial foundations for India's wind energy industry.",
          },
          {
            type: "paragraph",
            text: "Today, the question extends beyond where wind energy can be generated to how different turbine technologies can serve different energy requirements.",
          },
          {
            type: "paragraph",
            text: "While utility-scale wind farms remain important to India's renewable energy infrastructure, smaller turbines offer opportunities for distributed electricity generation at suitable sites.",
          },
        ],
      },
      {
        heading: "Why Gujarat's Coastal Regions Matter for Wind Energy",
        blocks: [
          {
            type: "paragraph",
            text: "Gujarat is among India's most significant states for wind energy development.",
          },
          {
            type: "paragraph",
            text: "According to the [Ministry of New and Renewable Energy's wind resource assessment](https://ccdcwind.gov.in/), Gujarat has an estimated 180.79 GW of wind power potential at 150 metres above ground level.",
          },
          {
            type: "paragraph",
            text: "This figure reflects the state's broader wind resource potential, not the generation potential of an individual coastal site or a small turbine installed closer to ground level.",
          },
          {
            type: "paragraph",
            text: "The distinction is important.",
          },
          {
            type: "paragraph",
            text: "Wind conditions vary according to location, elevation, terrain, nearby structures and seasonal weather patterns. A coastal site may offer favourable exposure to prevailing winds, but its suitability for electricity generation must be established through site-specific assessment.",
          },
          {
            type: "paragraph",
            text: "For smaller wind energy installations, the quality and consistency of the available wind resource can be as important as the turbine's rated capacity.",
          },
          {
            type: "quote",
            attribution: "As the National Institute of Wind Energy explains:",
            text: "\"Wind is an intermittent and site-specific source of energy.\"",
          },
          {
            type: "paragraph",
            text: "This makes wind resource assessment and [NIWE wind resource maps](https://maps.niwe.res.in/) a fundamental part of turbine selection and project planning.",
          },
        ],
      },
      {
        heading: "The Project: Installing a 5 kW VAWT at Mandvi Beach",
        blocks: [
          {
            type: "specs",
            items: [
              { label: "Location", value: "Mandvi Beach, Kutch, Gujarat" },
              { label: "Technology", value: "Vertical Axis Wind Turbine (VAWT)" },
              { label: "Installed Capacity", value: "5 kW" },
              { label: "Project Developer", value: "Vynentra" },
            ],
          },
          {
            type: "paragraph",
            text: "Vynentra installed a 5 kW Vertical Axis Wind Turbine at Mandvi Beach to explore the application of small-scale wind energy generation in a coastal setting.",
          },
          {
            type: "paragraph",
            text: "The turbine is designed to convert the kinetic energy of moving air into mechanical rotation, which is then converted into electrical energy through a generator.",
          },
          {
            type: "paragraph",
            text: "Unlike conventional Horizontal Axis Wind Turbines (HAWTs), which typically rotate around a horizontal shaft, vertical-axis turbines rotate around a vertical shaft.",
          },
          {
            type: "paragraph",
            text: "Depending on their design, VAWTs can accept wind from multiple directions without requiring the same active yaw alignment used by many horizontal-axis turbines.",
          },
          {
            type: "paragraph",
            text: "However, turbine performance depends on several factors, including rotor design, aerodynamic efficiency, wind speed distribution and installation conditions.",
          },
          {
            type: "paragraph",
            text: "The Mandvi project provides an opportunity to evaluate these characteristics in a coastal environment.",
          },
        ],
      },
      {
        heading: "What Determines the Performance of a 5 kW Wind Turbine?",
        blocks: [
          {
            type: "paragraph",
            text: "A turbine's rated capacity describes its electrical power output under specified operating conditions. It does not represent the amount of electricity generated continuously.",
          },
          {
            type: "paragraph",
            text: "For example, a 5 kW turbine operating at its full rated output for one hour would generate 5 kWh of electricity.",
          },
          {
            type: "paragraph",
            text: "Actual generation varies with wind conditions and turbine performance.",
          },
          {
            type: "paragraph",
            text: "The [US Department of Energy's Small Wind Guidebook](https://www.energy.gov/cmei/systems/windexchange/small-wind-guidebook) explains that annual energy output is a more useful measure of a turbine's contribution to electricity requirements than rated capacity alone.",
          },
          {
            type: "paragraph",
            text: "Several factors influence the performance of a small wind turbine:",
          },
          {
            type: "list",
            items: [
              "**Wind speed and consistency:** Electricity generation depends on the frequency and duration of suitable wind conditions.",
              "**Turbine power curve:** Each turbine produces different levels of electrical output at different wind speeds.",
              "**Site conditions:** Nearby obstacles, terrain and turbulence influence the wind reaching the rotor.",
              "**Seasonal variation:** Wind resources can change significantly throughout the year.",
              "**Maintenance and availability:** Mechanical condition, electrical components and system downtime affect long-term generation.",
            ],
          },
          {
            type: "paragraph",
            text: "At coastal locations, exposure to salt-laden air, moisture and corrosion can introduce additional maintenance considerations.",
          },
          {
            type: "paragraph",
            text: "These factors make long-term monitoring particularly important when evaluating a turbine's commercial and operational viability.",
          },
        ],
      },
      {
        heading: "What the Mandvi Installation Helps Evaluate",
        blocks: [
          {
            type: "paragraph",
            text: "The Mandvi Beach installation establishes a practical setting for assessing how a 5 kW VAWT operates under coastal conditions.",
          },
          {
            type: "paragraph",
            text: "The project creates opportunities to study three important areas.",
          },
          { type: "subheading", text: "1. Electricity generation potential" },
          {
            type: "paragraph",
            text: "Monitoring the turbine's actual electrical output can establish how much energy the installation produces across different wind conditions.",
          },
          {
            type: "paragraph",
            text: "This information is necessary to assess whether the turbine can make a meaningful contribution to local electricity requirements.",
          },
          { type: "subheading", text: "2. Operational reliability" },
          {
            type: "paragraph",
            text: "Coastal environments present specific engineering considerations, including exposure to humidity, salt and changing weather conditions.",
          },
          {
            type: "paragraph",
            text: "Tracking turbine availability, component performance and maintenance requirements can help establish long-term reliability.",
          },
          { type: "subheading", text: "3. Replicability at other coastal sites" },
          {
            type: "paragraph",
            text: "Performance findings from Mandvi can inform the assessment of similar installations in Gujarat and other coastal regions.",
          },
          {
            type: "paragraph",
            text: "However, successful deployment at one location does not automatically establish feasibility elsewhere. Each prospective site requires its own wind resource, engineering and financial assessment.",
          },
        ],
      },
      {
        heading: "The Larger Opportunity for Distributed Wind Energy in India",
        blocks: [
          {
            type: "paragraph",
            text: "India's wind energy sector has historically been shaped by large-scale projects, but distributed generation presents a different set of opportunities.",
          },
          {
            type: "paragraph",
            text: "Smaller wind turbines can be considered for suitable commercial properties, institutional sites, remote facilities and other locations where local wind conditions justify installation.",
          },
          {
            type: "paragraph",
            text: "Their economic viability depends on electricity demand, turbine performance, installation costs, maintenance requirements and the value of the electricity generated.",
          },
          {
            type: "paragraph",
            text: "The National Institute of Wind Energy provides [wind resource maps](https://maps.niwe.res.in/) to support preliminary project assessment. These maps are useful for identifying potential regions, although measurements at the proposed turbine height remain important for smaller installations.",
          },
          {
            type: "paragraph",
            text: "The opportunity is not simply to install smaller turbines. It is to identify the locations and applications where they can generate measurable long-term value.",
          },
          {
            type: "paragraph",
            text: "For Vynentra, the Mandvi project forms part of this broader exploration of wind energy systems across different capacities and applications.",
          },
        ],
      },
      {
        heading: "Conclusion: From Coastal Wind Potential to Measurable Performance",
        blocks: [
          {
            type: "paragraph",
            text: "Mandvi's association with wind energy dates back to India's earliest demonstration projects.",
          },
          {
            type: "paragraph",
            text: "Vynentra's 5 kW VAWT installation brings a smaller-scale application of wind technology into that established coastal setting.",
          },
          {
            type: "paragraph",
            text: "The installation demonstrates the deployment of a vertical-axis turbine, while its long-term contribution to electricity generation and grid consumption requires measured performance data.",
          },
          {
            type: "paragraph",
            text: "Wind speeds, energy output, turbine availability and maintenance records will be essential to assessing its technical and commercial viability.",
          },
          {
            type: "paragraph",
            text: "As India's renewable energy infrastructure continues to develop, projects like Mandvi can contribute practical insights into where small-scale wind generation makes engineering and economic sense.",
          },
          {
            type: "paragraph",
            text: "Explore Vynentra's [wind, solar and hybrid energy solutions](/services/end-to-end-project-development) to understand how renewable energy systems can be developed around site conditions, technical requirements and long-term performance, or view [related coastal projects](/case-studies) across our portfolio.",
          },
        ],
      },
    ],
    problem: [
      "Assessing how small-scale wind technology can complement utility-scale wind development in Gujarat's coastal regions through site-specific evaluation.",
    ],
    solution: [
      "Vynentra installed a 5 kW Vertical Axis Wind Turbine (VAWT) at Mandvi Beach, Kutch, to evaluate local coastal wind generation and operational reliability.",
    ],
    resultsAndFindings: [
      "Long-term viability depends on wind speed and consistency, turbine power curve, site terrain and turbulence, seasonal variation, and coastal maintenance requirements.",
    ],
    conclusionAndRecommendation: [
      "Measured performance data across wind speeds, energy output, turbine availability and maintenance records will establish technical and commercial viability.",
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
    date: "November 12, 2026",
    image: "/case-studies/case-study-3-mandvi.webp",
    stats: [
      {
        value: "5 kW",
        label: "By Vynentra",
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
  if (slug === "commercial-solar-plants" || slug === "hybrid-wind-turbine-surat") {
    return CASE_STUDIES[0];
  }
  if (slug === "vawt-madhavpur-beach") {
    return CASE_STUDIES[1];
  }
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
