export interface SiteImage {
  src: string
  alt: string
}

const boreholeFieldImage1: SiteImage = {
  src: '/borehole-field-1.jpg',
  alt: 'Field collage showing borehole casing, water discharge and pump equipment.',
}

const boreholeFieldImage2: SiteImage = {
  src: '/borehole-field-2.jpg',
  alt: 'Drilling crews handling borehole casing beside a rig, with solar pump installations.',
}

const unsplashImage = (photoId: string, alt: string): SiteImage => ({
  src: `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1400&q=85`,
  alt,
})

const solarArrayImage = unsplashImage(
  'photo-1509391366360-2e959784a276',
  'High-resolution view of a solar panel array in an open field.',
)
const waterTowerImage = unsplashImage(
  'photo-1642873965182-b95cb8184c12',
  'Elevated steel water storage tank supported above the ground.',
)
const irrigationImage = unsplashImage(
  'photo-1655048425771-daa9087aaa00',
  'Center-pivot irrigation system watering a broad agricultural field.',
)
const waterDischargeImage = unsplashImage(
  'photo-1696371269814-ae41fc67cf03',
  'Water flowing from a pipe during a field pumping and discharge operation.',
)
const waterTestingImage = unsplashImage(
  'photo-1527066236128-2ff79f7b9705',
  'Laboratory glassware and analysis charts for water quality testing.',
)
const handPumpImage = unsplashImage(
  'photo-1607113208903-6855b60ad046',
  'Hand-operated water pump serving a rural borehole water point.',
)

const imageCredits: {
  label: string
  source: string
  license: string
  licenseUrl: string
}[] = [
  solarArrayImage,
  waterTowerImage,
  irrigationImage,
  waterDischargeImage,
  waterTestingImage,
  handPumpImage,
].map((image) => ({
  label: image.alt,
  source: image.src,
  license: 'Unsplash License',
  licenseUrl: 'https://unsplash.com/license',
}))

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
    image: boreholeFieldImage1,
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
      image: {
        src: 'https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Industrial borehole drilling rig operating on site',
      },
    },
    {
      title: 'Borehole Camera',
      description:
        'Down-hole camera inspections provide a visual assessment of borehole condition to inform maintenance, rehabilitation and equipping decisions.',
      icon: 'survey',
      image: {
        src: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Technical borehole inspection and down-hole assessment equipment',
      },
    },
    {
      title: 'Borehole Equipping',
      description:
        'Complete borehole equipping with a correctly selected submersible pump, rising main, control panel and connection to storage or distribution.',
      icon: 'equipment',
      image: {
        src: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Professional water piping and borehole pump equipping installation',
      },
    },
    {
      title: 'Solar Borehole Equipping',
      description:
        'Solar-powered borehole pumping systems designed around the tested yield, pumping head and daily demand, with controls and storage integration.',
      icon: 'solar',
      image: {
        src: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Solar panel array powering a clean water pumping system',
      },
    },
    {
      title: 'Borehole Rehabilitation',
      description:
        'Assessment and rehabilitation work to address reduced performance, accumulated deposits or other borehole operating issues.',
      icon: 'treatment',
      image: {
        src: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Engineers performing borehole flushing and well rehabilitation',
      },
    },
    {
      title: 'Borehole Test Pumping',
      description:
        'Controlled pumping tests help establish borehole yield and water-level response, providing useful data for pump selection and system planning.',
      icon: 'equipment',
      image: {
        src: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Water yield and discharge test pumping monitoring',
      },
    },
    {
      title: 'Pumps',
      description:
        'Submersible and surface pump options selected to suit the source, tested yield, delivery head and required flow.',
      icon: 'equipment',
      image: {
        src: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'High-capacity submersible and surface water pumps',
      },
    },
    {
      title: 'Accessories',
      description:
        'Pumping-system accessories include rising mains, cables, control panels, protection devices and connection components.',
      icon: 'equipment',
      image: {
        src: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Electrical control panels, inverters, and borehole accessories',
      },
    },
    {
      title: 'Towers and Steel Tanks',
      description:
        'Water storage options, including steel tanks and supporting towers, are planned to suit demand, site conditions and distribution requirements.',
      icon: 'equipment',
      image: {
        src: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Elevated steel water storage tower and pressed tank installation',
      },
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
    image: boreholeFieldImage2,
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
        title: 'Drilling equipment',
        description:
          'Drilling rigs and supporting tools create and advance a borehole through subsurface formations. The appropriate setup depends on geology, access and the planned borehole design.',
        image: boreholeFieldImage2,
      },
      {
        title: 'Borehole pumps',
        description:
          'A submersible pump lifts water from a borehole into a delivery system. Pump selection is informed by borehole depth, tested yield, water levels and required flow.',
        image: handPumpImage,
      },
      {
        title: 'Solar pumping systems',
        description:
          'Solar modules, a controller and a compatible pump can supply power for water pumping. System sizing depends on the water demand, pumping head and available sunlight.',
        image: solarArrayImage,
      },
      {
        title: 'Water storage equipment',
        description:
          'Storage tanks hold water between pumping cycles and demand periods. Capacity, materials and installation requirements depend on the intended use and site.',
        image: waterTowerImage,
      },
      {
        title: 'Water treatment equipment',
        description:
          'Treatment equipment addresses water-quality needs identified through testing. The treatment stages and equipment should be selected for the water source and intended end use.',
        image: waterTestingImage,
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
      image: {
        src: '/rig-casing.jpg',
        alt: 'Borehole drilling rig and casing equipment at a field site.',
      },
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
      image: irrigationImage,
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
      image: waterTowerImage,
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
