import boreholeRigImage from '../assets/images/borehole-rig.jpg'
import borewellSiteImage from '../assets/images/borewell-site.jpg'
import solarIrrigationImage from '../assets/images/solar-irrigation.jpg'
import waterFacilityImage from '../assets/images/water-facility.jpg'

export interface SiteImage {
  src: string
  alt: string
}

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

export const siteContent = {
  brand: {
    name: 'Company Name',
    descriptor: 'Water engineering',
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
    requestQuote: 'Request a Quote',
    exploreServices: 'Explore Our Services',
    learnMore: 'Learn more',
    aboutCompany: 'About the company',
    projectEnquiries: 'Project enquiries',
    contactUs: 'Contact Us',
    imageCredits: 'Image credits',
  },
  hero: {
    eyebrow: 'BOREHOLE DRILLING  /  WATER ENGINEERING',
    title: 'Reliable Borehole Drilling & Sustainable Water Solutions',
    description:
      'Professional drilling, water engineering and sustainable water supply solutions for residential, commercial, agricultural and institutional projects.',
    image: {
      src: boreholeRigImage,
      alt: 'Water well drilling rig being operated on a drilling site',
    } satisfies SiteImage,
  },
  sections: {
    services: {
      eyebrow: 'What we do',
      title: 'Water solutions for every stage of your project.',
      description:
        'Explore the services that may support your water supply requirements. Project scope and capabilities will be confirmed with the company.',
    },
    about: {
      linkLabel: 'About the company',
      profileLabel: 'Company profile',
      profileStatus: 'Details to be confirmed',
    },
    reasons: {
      eyebrow: 'Our approach',
      title: 'Considered work. Clear communication.',
      description:
        'A professional approach is built into the details—from selecting an appropriate scope to keeping clients informed along the way.',
      equipmentNote:
        'Specific equipment, standards and service capabilities will be confirmed with the company before publication.',
    },
    projects: {
      eyebrow: 'Project gallery',
      title: 'A place for work worth sharing.',
      description:
        'These sample cards are layout demonstrations only—not completed client projects.',
      badge: 'Demonstration content',
      imageBadge: 'Illustrative placeholder',
      linkLabel: 'Project enquiries',
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
  statistics: [
    { label: 'Completed projects', value: 'To be confirmed' },
    { label: 'Years of experience', value: 'To be confirmed' },
    { label: 'Counties served', value: 'To be confirmed' },
    { label: 'Customer satisfaction', value: 'To be confirmed' },
  ] satisfies StatisticItem[],
  services: [
    {
      title: 'Borehole Drilling',
      description:
        'Plan drilling scope around site conditions, anticipated water demand and assessment findings. Depth and water availability depend on local geology.',
      icon: 'drilling',
      image: {
        src: boreholeRigImage,
        alt: 'Drilling rig at work; illustrative service image',
      },
    },
    {
      title: 'Hydrogeological Surveys',
      description:
        'Review groundwater information and site factors to inform target selection and practical drilling recommendations.',
      icon: 'survey',
      image: {
        src: borewellSiteImage,
        alt: 'Groundwater investigation setting; illustrative service image',
      },
    },
    {
      title: 'Geophysical Surveys',
      description:
        'Investigate subsurface conditions to help identify promising groundwater targets. Survey findings guide decisions but cannot guarantee a water strike.',
      icon: 'geophysics',
      image: {
        src: waterFacilityImage,
        alt: 'Water and land survey setting; illustrative service image',
      },
    },
    {
      title: 'Borehole Equipping',
      description:
        'Plan pump and associated components around borehole testing, depth, water levels and intended demand.',
      icon: 'equipment',
      image: {
        src: borewellSiteImage,
        alt: 'Borehole site; illustrative service image',
      },
    },
    {
      title: 'Solar Water Pumping',
      description:
        'Consider solar arrays, controllers and pump sizing for site requirements and reduced reliance on grid power.',
      icon: 'solar',
      image: {
        src: solarIrrigationImage,
        alt: 'Solar-powered agricultural water system; illustrative service image',
      },
    },
    {
      title: 'Water Treatment Solutions',
      description:
        'Consider treatment options in line with water-quality results and intended end use; the appropriate system depends on testing.',
      icon: 'treatment',
      image: {
        src: waterFacilityImage,
        alt: 'Water management facility; illustrative service image',
      },
    },
  ] satisfies ServiceItem[],
  about: {
    eyebrow: 'ABOUT THE COMPANY',
    title: 'Water engineering, shaped around your needs.',
    introduction:
      'Company information and an introduction will be added once the client’s approved profile is available.',
    contentStatus:
      'Draft page content: confirm the company overview, mission, vision, values and working approach with the company before publication.',
    overviewTitle: 'Company overview',
    missionTitle: 'Our mission',
    mission:
      'Draft: To support well-planned water access through considered engineering solutions.',
    visionTitle: 'Our vision',
    vision:
      'Draft: To contribute to dependable and sustainable water supply for the communities and organisations served.',
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
      'Service capabilities and qualifications will be confirmed with the client.',
    image: {
      src: solarIrrigationImage,
      alt: 'Solar-powered irrigation panels and water channels at a farm',
    } satisfies SiteImage,
  },
  equipment: {
    eyebrow: 'EQUIPMENT & SYSTEMS',
    title: 'Equipment selected for the water system.',
    description:
      'An overview of equipment types used in water projects. This list describes general purposes only and does not confirm company ownership or availability.',
    note:
      'Equipment examples are illustrative. Specific equipment, specifications, ownership and availability must be confirmed for each project.',
    items: [
      {
        title: 'Drilling equipment',
        description:
          'Drilling rigs and supporting tools create and advance a borehole through subsurface formations. The appropriate setup depends on geology, access and the planned borehole design.',
        image: {
          src: boreholeRigImage,
          alt: 'Drilling rig at a water well site; illustrative equipment image',
        },
      },
      {
        title: 'Borehole pumps',
        description:
          'A submersible pump lifts water from a borehole into a delivery system. Pump selection is informed by borehole depth, tested yield, water levels and required flow.',
        image: {
          src: borewellSiteImage,
          alt: 'Borehole site for a pumping system; illustrative equipment image',
        },
      },
      {
        title: 'Solar pumping systems',
        description:
          'Solar modules, a controller and a compatible pump can supply power for water pumping. System sizing depends on the water demand, pumping head and available sunlight.',
        image: {
          src: solarIrrigationImage,
          alt: 'Solar water pumping installation; illustrative equipment image',
        },
      },
      {
        title: 'Water storage equipment',
        description:
          'Storage tanks hold water between pumping cycles and demand periods. Capacity, materials and installation requirements depend on the intended use and site.',
        image: {
          src: waterFacilityImage,
          alt: 'Water storage and management setting; illustrative equipment image',
        },
      },
      {
        title: 'Water treatment equipment',
        description:
          'Treatment equipment addresses water-quality needs identified through testing. The treatment stages and equipment should be selected for the water source and intended end use.',
        image: {
          src: waterFacilityImage,
          alt: 'Water treatment and management setting; illustrative equipment image',
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
      name: 'Residential water supply',
      location: 'Location to be confirmed',
      category: 'Residential',
      description:
        'Demonstration content only. Replace with an approved project profile.',
      image: {
        src: borewellSiteImage,
        alt: 'Borewell drilling equipment at a residential site; illustrative image',
      },
    },
    {
      name: 'Agricultural water system',
      location: 'Location to be confirmed',
      category: 'Agricultural',
      description:
        'Demonstration content only. Replace with an approved project profile.',
      image: {
        src: solarIrrigationImage,
        alt: 'Solar-powered farm irrigation system; illustrative image',
      },
    },
    {
      name: 'Community water supply',
      location: 'Location to be confirmed',
      category: 'Institutional',
      description:
        'Demonstration content only. Replace with an approved project profile.',
      image: {
        src: waterFacilityImage,
        alt: 'Water resource management facility; illustrative image',
      },
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
    title: 'Feedback from our clients',
    description:
      'Authentic customer feedback will be added here when approved testimonials are available.',
    placeholder: 'Client testimonial pending',
  },
  contact: {
    title: 'Looking for a Reliable Water Solution?',
    description:
      'Share a little about your site and water requirements. Contact details and location below are editable placeholders pending company confirmation.',
    email: 'Placeholder — add approved company email',
    phone: 'Placeholder — add approved company phone',
    location: 'Placeholder — add approved company location or service area',
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
    aboutPlaceholder:
      'Temporary brand identity. Company profile and contact details to be confirmed.',
    pendingApproval: 'Company content pending approval.',
    quickLinksHeading: 'Quick links',
    servicesHeading: 'Services',
    contactHeading: 'Contact',
    socialPlaceholder: 'Social media links to be confirmed',
    imageCredits: [
      {
        label: 'Drilling rig: SCW / U.S. Navy',
        source:
          'https://commons.wikimedia.org/wiki/File:NMCB_25_Kabul_water_well_operations_140413-N-ZZ999-079.jpg',
        license: 'Public domain',
        licenseUrl: 'https://www.usa.gov/government-copyright',
      },
      {
        label: 'Solar irrigation: SMMIMAGES',
        source:
          'https://commons.wikimedia.org/wiki/File:SOLAR_POWER_IRRIGATION_RICE_FARMING.jpg',
        license: 'CC BY-SA 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      },
      {
        label: 'Borewell site: Sri Amman Borewells in Madurai',
        source:
          'https://commons.wikimedia.org/wiki/File:Borewells_in_Madurai_16.jpg',
        license: 'CC BY-SA 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      },
      {
        label: 'Water facility: Lance Cheung / USDA',
        source:
          'https://commons.wikimedia.org/wiki/File:Irrigation_and_Water_(20150827-NRCS-LSC-0171).jpg',
        license: 'Public domain',
        licenseUrl: 'https://www.usa.gov/government-copyright',
      },
    ],
  },
} as const
