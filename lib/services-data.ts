export interface ServiceFeature {
  name: string;
  desc: string;
  image?: string;
}

export interface ServiceProcessStep {
  num: string;
  title: string;
  desc: string;
  image?: string;
}

export interface ServiceProcessSection {
  title: string;
  desc: string;
  steps: ServiceProcessStep[];
}

export interface ServiceCTA {
  badge: string;
  title: string;
  desc: string;
  buttonText: string;
  buttonLink: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  scope: string;
  desc: string;
  image: string;
  featuresSectionTitle: string;
  features: ServiceFeature[];
  processSection?: ServiceProcessSection;
  cta: ServiceCTA;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "01",
    slug: "bess-battery-energy-storage-systems",
    title: "BESS: Battery Energy Storage Systems",
    subtitle: "Powering events with flexible energy storage.",
    scope: "Event & Commercial Storage",
    desc: "We are providing battery energy storage solutions for large-scale events, supporting temporary power requirements through energy storage systems designed around event demand, duration and site conditions.",
    image: "/solutions/battery-storage.jpg",
    featuresSectionTitle: "Designed around event requirements.",
    features: [
      {
        name: "Live Events & Concerts",
        desc: "Supporting event power requirements across production, lighting, audio and other connected equipment.",
        image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
      },
      {
        name: "Exhibitions & Conferences",
        desc: "Providing energy storage solutions for temporary venues, exhibition spaces and business events.",
        image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg"
      },
      {
        name: "Large-Scale Gatherings",
        desc: "Evaluating power requirements for festivals, outdoor events and temporary installations.",
        image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
      },
      {
        name: "Hybrid Power Setups",
        desc: "Integrating battery storage with suitable power sources to support event operations and manage energy demand.",
        image: "/why-choose-us/battery-storage.webp"
      }
    ],
    cta: {
      badge: "PROJECT CONSULTATION",
      title: "Have a project in mind?",
      desc: "Share your project location, energy requirements and site details. We are evaluating opportunities across wind, solar and hybrid energy development.",
      buttonText: "Discuss Your Project",
      buttonLink: "/contact#contact-form"
    }
  },
  {
    id: "02",
    slug: "end-to-end-project-development",
    title: "End-To-End Project Development",
    subtitle: "Developing renewable energy projects, end to end.",
    scope: "Turnkey Development",
    desc: "We are developing wind, solar and hybrid energy projects around site conditions, energy requirements and project feasibility, from initial assessment and planning to execution.",
    image: "/solutions/solar-installation.jpg",
    featuresSectionTitle: "Renewable energy, across scales.",
    features: [
      {
        name: "Vertical Axis Wind Turbines (VAWT)",
        desc: "We are exploring vertical axis wind solutions for suitable applications, evaluating site conditions, wind characteristics, installation requirements and system performance.",
        image: "/why-choose-us/hero-windmill.webp"
      },
      {
        name: "Horizontal Axis Wind Turbines (HAWT)",
        desc: "We are developing wind energy opportunities using horizontal axis systems, aligning turbine selection and project design with wind resources, land availability and energy requirements.",
        image: "/wind_farm_sunset.jpg"
      },
      {
        name: "Solar Energy Projects",
        desc: "We are developing solar energy solutions around available space, consumption patterns, installation feasibility and project economics.",
        image: "/solutions/solar-installation.jpg"
      },
      {
        name: "Hybrid Wind & Solar Systems",
        desc: "We are integrating complementary wind and solar resources to develop hybrid configurations suited to local generation patterns and site requirements.",
        image: "/hybrid-wind-solar.jpg"
      },
      {
        name: "Larger Captive Projects",
        desc: "We are developing renewable energy projects for businesses with substantial energy requirements, aligning project configuration with consumption, procurement structure and commercial feasibility.",
        image: "/novatech-case-study.jpg"
      }
    ],
    processSection: {
      title: "From site assessment to project execution.",
      desc: "We are approaching renewable energy development through a structured project process, aligning technical requirements, commercial considerations and execution planning.",
      steps: [
        {
          num: "01",
          title: "Site Assessment",
          desc: "Evaluating location, available space, site access and renewable resource potential.",
          image: "https://images.pexels.com/photos/5520322/pexels-photo-5520322.jpeg"
        },
        {
          num: "02",
          title: "Feasibility & Planning",
          desc: "Assessing energy requirements, system configurations, project costs and implementation considerations.",
          image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
        },
        {
          num: "03",
          title: "Project Design",
          desc: "Developing a project approach around suitable technologies, system sizing and site conditions.",
          image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
        },
        {
          num: "04",
          title: "Approvals & Coordination",
          desc: "Coordinating applicable permissions, connectivity requirements and project stakeholders, as defined by project scope.",
          image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
        },
        {
          num: "05",
          title: "Execution",
          desc: "Managing project implementation, installation coordination and commissioning requirements within the agreed scope.",
          image: "/solutions/solar-installation.jpg"
        }
      ]
    },
    cta: {
      badge: "PROJECT CONSULTATION",
      title: "Have a project in mind?",
      desc: "Share your project location, energy requirements and site details. We are evaluating opportunities across wind, solar and hybrid energy development.",
      buttonText: "Discuss Your Project",
      buttonLink: "/contact#contact-form"
    }
  },
  {
    id: "03",
    slug: "ipp-independent-power-producer",
    title: "IPP: Independent Power Producer",
    subtitle: "Renewable power, without the upfront investment.",
    scope: "IPP & Power Supply",
    desc: "Designed for businesses with energy requirements of up to 3 MW, we are creating opportunities to access renewable power without directly investing in the generation infrastructure.",
    image: "/hybrid-wind-solar.jpg",
    featuresSectionTitle: "Renewable energy for growing businesses.",
    features: [
      {
        name: "Manufacturing & Industrial Units",
        desc: "Supporting businesses with consistent energy requirements and long-term power procurement needs.",
        image: "/solutions/solar-installation.jpg"
      },
      {
        name: "Commercial Establishments",
        desc: "Evaluating renewable power supply opportunities for offices, commercial properties and business facilities.",
        image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
      },
      {
        name: "Warehousing & Logistics",
        desc: "Exploring renewable electricity supply for facilities with substantial operational energy consumption.",
        image: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg"
      },
      {
        name: "Growing MSMEs",
        desc: "Enabling businesses to evaluate renewable energy procurement without taking on direct generation asset investment.",
        image: "/why-choose-us/eco-friendly-impact.jpg"
      }
    ],
    cta: {
      badge: "PROJECT CONSULTATION",
      title: "Have a project in mind?",
      desc: "Share your project location, energy requirements and site details. We are evaluating opportunities across wind, solar and hybrid energy development.",
      buttonText: "Discuss Your Project",
      buttonLink: "/contact#contact-form"
    }
  }
];
