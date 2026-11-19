export interface SiteImage {
  src: string
  alt: string
}

const drillingRigImage: SiteImage = {
  src: '/drilling-rig-field.jpg',
  alt: 'Drip Tech Solutions Ltd truck-mounted borehole drilling rig and field crew at work in Kenya.',
}

const solarPumpImage: SiteImage = {
  src: '/drilling-rig-field%20(3).jpg',
  alt: 'Drip Tech Solutions Ltd team inspecting a solar-panel-powered borehole wellhead and pumping setup in Kenya.',
}

const submersiblePumpImage: SiteImage = {
  src: '/drilling-rig-field%20(2).jpg',
  alt: 'Drip Tech Solutions Ltd crew installing a submersible borehole pump beside a truck-mounted rig in Kenya.',
}

const directorSupervisionImage: SiteImage = {
  src: '/drilling-rig-field%20(1).jpg',
  alt: 'Drip Tech Solutions Ltd Director Godfrey Embovo and a colleague beside a borehole drilling rig in Nairobi, Kenya.',
}

const atlasCopcoRigImage: SiteImage = {
  src: '/atlas-copco-rig.jpg',
  alt: 'Drip Tech Solutions Ltd heavy-duty truck-mounted borehole drilling rig in Kenya.',
}

const commercialDrillingImage: SiteImage = {
  src: '/commercial-drilling.jpg',
  alt: 'Borehole drilling crew working with casing at an urban commercial site in Kenya.',
}

const boreholeFieldImage2: SiteImage = {
  src: '/borehole-field-2.jpg',
  alt: 'Drip Tech Solutions Ltd crew installing borehole casing and pump equipment at field sites in Kenya.',
}

const steelTankTowerImage: SiteImage = {
  src: '/steel-tank-tower.jpg',
  alt: 'Elevated pressed-steel water tank on a steel support tower with an access ladder and distribution piping.',
}

const imageCredits: {
  label: string
  source: string
  license: string
  licenseUrl: string
}[] = []

export interface NavigationItem {
  label: string
  href: string
}

export interface ServiceItem {
  title: string
  description: string
  icon: 'drilling' | 'survey' | 'geophysics' | 'equipment' | 'solar' | 'treatment'
  image: SiteImage
}

export interface StatisticItem {
  label: string
  value: string
}

export interface ProjectItem {
  name: string
  location: string
  category: string
  description: string
  specifications: string
  serviceRequired: string
  image: SiteImage
}

export interface ProcessItem {
  title: string
  description: string
}

export interface EquipmentItem {
  title: string
  description: string
  image: SiteImage
}

export interface ValueItem {
  title: string
  description: string
}

const statistics: StatisticItem[] = [
  { value: 'Turnkey', label: 'Drilling, testing and system equipping' },
  { value: 'Solar + grid', label: 'Pumping options matched to site needs' },
  { value: 'Across Kenya', label: 'Residential, commercial and community work' },
  { value: 'WRA & NEMA', label: 'Documentation coordinated as required' },
]

export const siteContent = {
  brand: {
    name: 'Drip Tech Solutions Ltd',
    descriptor: 'Every Drop Counts',
  },
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Our Projects', href: '/projects' },
    { label: 'Our Equipment', href: '/equipment' },
    { label: 'Contact Us', href: '/contact' },
  ] satisfies NavigationItem[],
  labels: {
    requestQuote: 'Request a Free Quote',
    exploreServices: 'Explore Our Services',
    learnMore: 'Learn more',
    aboutCompany: 'About the company',
    serviceEnquiry: 'Enquire about this service',
    contactUs: 'Contact Us',
    imageCredits: 'Image credits',
  },
  hero: {
    eyebrow: 'BOREHOLE DRILLING  /  WATER ENGINEERING',
    title:
      'Professional Borehole Drilling & Water Engineering Solutions in Kenya',
    description:
      'Professional drilling, water engineering and sustainable water supply solutions for residential, commercial, agricultural and institutional projects.',
    image: drillingRigImage,
  },
  sections: {
    services: {
      eyebrow: 'What we do',
      title: 'Water solutions for every stage of your project.',
      description:
        'From hydrogeological surveys and borehole drilling to pump installation, solar power and water storage, we coordinate the stages of a dependable water supply system.',
    },
    about: {
      linkLabel: 'About the company',
      profileLabel: 'Company profile',
      profileStatus: 'Every Drop Counts',
    },
    reasons: {
      eyebrow: 'Our approach',
      title: 'Considered work. Clear communication.',
      description:
        'A professional approach is built into the details—from selecting an appropriate scope to keeping clients informed along the way.',
      equipmentNote:
        'We plan and deliver water systems around site conditions, project requirements and applicable standards.',
    },
    projects: {
      eyebrow: 'Featured water solutions',
      title: 'Water systems designed around real project needs.',
      description:
        'Explore typical solution profiles for homes and businesses, farms, and institutions. Each project is scoped to site conditions, water demand and the required approvals.',
      linkLabel: 'Request Similar Quote',
    },
    process: {
      eyebrow: 'How we work',
      title: 'A clear path from first conversation to handover.',
      description:
        'Project steps are guided by site conditions, scope and client requirements.',
      stepLabel: 'Step',
    },
    testimonials: {
      eyebrow: 'Client feedback',
    },
    contact: {
      eyebrow: 'Start a conversation',
    },
  },
  statistics,
  services: [
    {
      title: 'Borehole Drilling',
      description:
        'Borehole drilling for residential, commercial, agricultural and institutional water supplies, planned around site access, geological conditions and the intended use.',
      icon: 'drilling',
      image: drillingRigImage,
    },
    {
      title: 'Borehole Camera',
      description:
        'Down-hole camera inspections provide a visual assessment of borehole condition to inform maintenance, rehabilitation and equipping decisions.',
      icon: 'survey',
      image: commercialDrillingImage,
    },
    {
      title: 'Borehole Equipping',
      description:
        'Complete borehole equipping with a correctly selected submersible pump, rising main, control panel and connection to storage or distribution.',
      icon: 'equipment',
      image: submersiblePumpImage,
    },
    {
      title: 'Solar Borehole Equipping',
      description:
        'Solar-powered borehole pumping systems designed around the tested yield, pumping head and daily demand, with controls and storage integration.',
      icon: 'solar',
      image: solarPumpImage,
    },
    {
      title: 'Borehole Rehabilitation',
      description:
        'Assessment and rehabilitation work to address reduced performance, accumulated deposits or other borehole operating issues.',
      icon: 'treatment',
      image: directorSupervisionImage,
    },
    {
      title: 'Borehole Test Pumping',
      description:
        'Controlled pumping tests help establish borehole yield and water-level response, providing useful data for pump selection and system planning.',
      icon: 'equipment',
      image: atlasCopcoRigImage,
    },
    {
      title: 'Pumps',
      description:
        'Submersible and surface pump options selected to suit the source, tested yield, delivery head and required flow.',
      icon: 'equipment',
      image: boreholeFieldImage2,
    },
    {
      title: 'Accessories',
      description:
        'Pumping-system accessories include rising mains, cables, control panels, protection devices and connection components.',
      icon: 'equipment',
      image: {
        src: '/rig-casing.jpg',
        alt: 'Borehole casing pipe being installed at a drilling site in Kenya.',
      },
    },
    {
      title: 'Towers and Steel Tanks',
      description:
        'Elevated pressed-steel tanks on support towers, complete with access ladders and distribution piping, provide practical water storage for site needs.',
      icon: 'equipment',
      image: steelTankTowerImage,
    },
  ] satisfies ServiceItem[],
  about: {
    eyebrow: 'ABOUT THE COMPANY',
    title: 'Water engineering, shaped around your needs.',
    introduction:
      'Drip Tech Solutions Ltd provides end-to-end water engineering services across Kenya. Led by Director Godfrey Embovo and based at Rehema House, Standard Street, Nairobi, we support clients from hydrogeological assessment through drilling, electric and solar pump equipping, and water storage.',
    overviewTitle: 'Company overview',
    missionTitle: 'Our mission',
    mission:
      'To deliver practical, well-planned water supply systems through responsible assessment, professional drilling and reliable project coordination.',
    visionTitle: 'Our vision',
    vision:
      'To be a trusted water engineering partner for homes, businesses, farms and institutions seeking dependable water access throughout Kenya.',
    valuesTitle: 'Core values',
    values: [
      {
        title: 'Responsible planning',
        description:
          'Consider site conditions, intended use and long-term water needs.',
      },
      {
        title: 'Safety',
        description:
          'Keep safe work planning central to site activities and coordination.',
      },
      {
        title: 'Clear communication',
        description:
          'Explain scope, assumptions and next steps in straightforward terms.',
      },
      {
        title: 'Sustainability',
        description:
          'Consider practical options that support responsible water use.',
      },
    ] satisfies ValueItem[],
    capabilitiesTitle: 'Capabilities',
    approachTitle: 'Professional approach',
    approach: [
      'Understand the site, intended water use and project requirements.',
      'Use relevant assessments to help inform the proposed scope.',
      'Explain recommendations, assumptions and limitations clearly.',
      'Coordinate planning, delivery and handover around the agreed scope.',
    ],
    expertiseTitle: 'Our expertise',
    expertise:
      'Our services span hydrogeological surveys, borehole drilling and testing, camera inspection, borehole rehabilitation, electric submersible and solar pump equipping, and water storage solutions. We coordinate project documentation and delivery requirements with the relevant authorities.',
    image: directorSupervisionImage,
    companyDetails: [
      { label: 'Director', value: 'Godfrey Embovo' },
      { label: 'KRA PIN', value: 'P052059474Z' },
      {
        label: 'Location',
        value: 'Rehema House, Standard Street, Nairobi',
      },
    ],
  },
  equipment: {
    eyebrow: 'EQUIPMENT & SYSTEMS',
    title: 'Equipment selected for the water system.',
    description:
      'We specify and integrate drilling, pumping, solar and water storage systems to match each project’s site conditions and operating requirements.',
    items: [
      {
        title: 'Rotary & DTH drilling rigs',
        description:
          'Our heavy-duty rotary and down-the-hole (DTH) drilling rigs and supporting tools advance boreholes through subsurface formations. The appropriate setup depends on geology, access and the planned borehole design.',
        image: drillingRigImage,
      },
      {
        title: 'Borehole pumps',
        description:
          'A submersible pump lifts water from a borehole into a delivery system. Pump selection is informed by borehole depth, tested yield, water levels and required flow.',
        image: submersiblePumpImage,
      },
      {
        title: 'Solar pumping systems',
        description:
          'Solar modules, a controller and a compatible pump can supply power for water pumping. System sizing depends on the water demand, pumping head and available sunlight.',
        image: solarPumpImage,
      },
      {
        title: 'Water storage equipment',
        description:
          'Our field team assesses water storage requirements and coordinates a suitable tank installation with the pumping and distribution system.',
        image: boreholeFieldImage2,
      },
      {
        title: 'Borehole casing & field equipment',
        description:
          'Borehole casing and associated site equipment support a properly constructed and equipped water source.',
        image: {
          src: '/rig-casing.jpg',
          alt: 'Blue borehole casing pipe being installed by drilling equipment at a field site.',
        },
      },
    ] satisfies EquipmentItem[],
  },
  reasons: [
    {
      title: 'Technical expertise',
      description:
        'Thoughtful technical assessment to help align the work with each site and brief.',
      icon: 'expertise',
    },
    {
      title: 'Quality equipment',
      description:
        'Equipment selection considered against the scope and requirements of the project.',
      icon: 'equipment',
    },
    {
      title: 'Safety standards',
      description:
        'Safety-conscious planning and coordination throughout work on site.',
      icon: 'safety',
    },
    {
      title: 'Sustainable solutions',
      description:
        'Water supply options considered with responsible, long-term use in mind.',
      icon: 'sustainability',
    },
    {
      title: 'Project management',
      description:
        'Clear scopes, considered scheduling and communication at each project stage.',
      icon: 'management',
    },
    {
      title: 'Customer support',
      description:
        'A responsive point of contact for questions, planning and next steps.',
      icon: 'support',
    },
  ],
  projects: [
    {
      name: 'Residential & Commercial Borehole Drilling',
      location: 'Homes and businesses',
      category: 'Drilling & water supply',
      description:
        'A complete water-source solution, from hydrogeological survey and drilling through casing, test pumping and pump equipping.',
      specifications:
        'Typical planning depth: 100–250 m. Casing, sanitary seal and submersible pump are specified to suit the encountered geology and tested yield.',
      serviceRequired: 'Borehole Drilling',
      image: commercialDrillingImage,
    },
    {
      name: 'Agricultural Solar Irrigation Systems',
      location: 'Farms and agribusiness',
      category: 'Solar irrigation',
      description:
        'A solar-powered pumping and storage concept for irrigation and farm use, planned around daily demand, water levels and distribution needs.',
      specifications:
        'Typical planning profile: 80–150 m borehole, solar-direct submersible pump and 10,000–30,000 L storage. Final sizing follows yield, head and demand assessment.',
      serviceRequired: 'Solar Borehole Equipping',
      image: solarPumpImage,
    },
    {
      name: 'Institutional & Community Water Supply',
      location: 'Schools and communities',
      category: 'Institutional supply',
      description:
        'A coordinated water supply concept combining a drilled source, pump controls and elevated or ground-level storage for shared use.',
      specifications:
        'Typical planning profile: 100–250 m borehole, submersible pump with solar/grid hybrid provision and 20,000–50,000 L storage, subject to yield and demand.',
      serviceRequired: 'Borehole Equipping',
      image: submersiblePumpImage,
    },
  ] satisfies ProjectItem[],
  process: [
    {
      title: 'Initial consultation',
      description: 'Discuss the site, intended use and project requirements.',
    },
    {
      title: 'Site assessment',
      description: 'Review site conditions and information relevant to planning.',
    },
    {
      title: 'Hydrogeological survey',
      description: 'Assess groundwater prospects to help guide next steps.',
    },
    {
      title: 'Borehole drilling',
      description: 'Plan drilling work around the site assessment and scope.',
    },
    {
      title: 'Testing and equipping',
      description: 'Evaluate the borehole and determine appropriate equipment.',
    },
    {
      title: 'Project handover',
      description: 'Review the completed scope and discuss ongoing requirements.',
    },
  ] satisfies ProcessItem[],
  testimonials: {
    title: 'Why Clients Choose Drip Tech Solutions',
    description:
      'A well-designed water system takes more than drilling. We coordinate the technical work, equipment and documentation needed to move a project from assessment to dependable supply.',
    highlights: [
      {
        title: 'End-to-end turnkey delivery',
        description:
          'Hydrogeological survey, drilling, testing, pump equipping and water storage coordinated as one project.',
      },
      {
        title: 'WRA & NEMA compliance support',
        description:
          'Support with applicable permitting, environmental documentation and coordination with relevant authorities.',
      },
      {
        title: 'Genuine pump & solar equipment',
        description:
          'Genuine submersible pumps, solar components and controls selected to suit site conditions and water demand.',
      },
      {
        title: 'Responsive after-sales support',
        description:
          'A dedicated point of contact for system handover, operational questions and service needs.',
      },
    ],
  },
  contact: {
    title: 'Looking for a Reliable Water Solution?',
    description:
      'Share a little about your site and water requirements. Contact Drip Tech Solutions Ltd using the details below.',
    email: 'DRIPTECHSOLUTIONS@GMAIL.COM',
    phone: '+254 725 248338',
    location: 'Rehema House, Standard Street, P.O. Box 101849 - 00101, Nairobi.',
    contactPageTitle: 'Talk to us about your water requirements.',
    formTitle: 'Quotation enquiry',
    formDescription:
      'Share your contact details and project requirements. We will confirm receipt after your enquiry has been submitted.',
    nameLabel: 'Your name',
    emailLabel: 'Email address',
    phoneLabel: 'Phone number',
    locationLabel: 'Project location',
    serviceLabel: 'Service required',
    servicePlaceholder: 'Select a service',
    messageLabel: 'Project details',
    submitLabel: 'Send enquiry',
  },
  footer: {
    aboutDescription:
      'Drip Tech Solutions Ltd — Every Drop Counts.',
    quickLinksHeading: 'Quick links',
    servicesHeading: 'Services',
    contactHeading: 'Contact',
    socialPlaceholder: '',
    imageCredits,
  },
} as const
