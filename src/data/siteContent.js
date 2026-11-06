/**
 * SIVASHAKTHI POWDER COATING
 * Copy follows the company presentation.
 */

export const siteContent = {
  brand: {
    name: 'Sivashakthi Powder Coating',
    shortName: 'Sivashakthi',
    tagline: 'Hi-Tech Powder Coaters of All Colours',
    gstin: '33AFQFS0271L1ZN',
    phone: '+91 73584 22465',
    phoneDisplay: '73584 22465',
    email: 'sivashakthipc@gmail.com',
    whatsapp: '917358422465',
    whatsappMessage:
      'Hi Sivashakthi Powder Coating, I would like a quote for powder coating. Please share the rate and finish options.',
    address: 'No. 6, Arthi Industrial Estate, Kundrathur Road, Moulivakkam, Chennai - 600 125',
    location: 'Moulivakkam, Chennai',
  },

  nav: {
    links: [
      { label: 'Process', href: '#process' },
      { label: 'Industries', href: '#industries' },
      { label: 'Oven', href: '#oven' },
      { label: 'Contact', href: '#quote' },
    ],
    cta: { label: 'Get a Quote', href: '#quote' },
  },

  hero: {
    eyebrow: 'Hi-Tech Powder Coaters of All Colours',
    headline: 'Sivashakthi Powder Coating',
    subheadline: 'A hard, even finish for metal parts.',
    description:
      'We coat fabricated metal — MS, GI, aluminium and casting — at our plant in Moulivakkam, Chennai. Clean, spray, cure in a 12-foot electric oven, then inspect before it leaves.',
    primaryCta: { label: 'Get a Quote', href: '#quote' },
    secondaryCta: { label: 'Call 73584 22465', href: 'tel:+917358422465' },
  },

  intro: {
    eyebrow: 'What is Powder Coating',
    headline: 'Dry colour. Then heat. Then a finish that stays.',
    points: [
      {
        title: 'Charged powder on metal',
        text: 'Electrostatically charged powder is sprayed onto fabricated work pieces — MS, GI, aluminium and casting.',
      },
      {
        title: 'A dry process',
        text: 'There is no liquid paint, so the coat goes on even, without drips or runs.',
      },
      {
        title: 'Cured with heat',
        text: 'The part is baked between 110°C and 150°C. Time depends on the powder and the size of the part.',
      },
      {
        title: '15 to 20 years',
        text: 'Applied and looked after properly, the finish lasts 15 to 20 years.',
      },
    ],
  },

  process: {
    eyebrow: 'How We Work',
    headline: 'Four steps. Same order, every batch.',
    description: 'Cleaning, coating, curing, inspection.',
    stages: [
      {
        number: '01',
        title: 'Cleaning',
        description: 'Parts are cleaned in a zinc phosphate and FRP tank so rust, grease and dirt are off the metal before any powder goes on.',
      },
      {
        number: '02',
        title: 'Powder coating',
        description: 'Dry powder is sprayed with an electrostatic gun so the colour wraps the part evenly.',
      },
      {
        number: '03',
        title: 'Oven curing',
        description: 'Coated parts go into the electric oven. The powder melts, flows and bonds into a hard skin.',
      },
      {
        number: '04',
        title: 'Inspection',
        description: 'Every part is checked before it is taken down for delivery. Only approved parts leave the plant.',
      },
    ],
  },

  industries: {
    eyebrow: 'Where It Is Used',
    headline: 'Parts we coat.',
    description: 'If it is metal and it needs a lasting colour, we can take it.',
    items: [
      {
        name: 'Appliances',
        parts: 'Microwave ovens, refrigerators, vending machines, panels and components, washers, dryers and cots.',
      },
      {
        name: 'Outdoor products',
        parts: 'Metal furniture, lawn chairs, park and farm equipment, sports equipment, sign-board letters.',
      },
      {
        name: 'Architecture and construction',
        parts: 'Window and door frames, gates, fencing and poles, building facades, rolling shutters.',
      },
      {
        name: 'Automotive',
        parts: 'Door handles, trims and bumpers, shock absorbers, battery trays, alloy wheels and hubcaps, motorbike frames.',
      },
      {
        name: 'Structural and industrial',
        parts: 'Angles, channels, square bar, pipes, poles, frames, ladders, handrails, control panels, switchboards, flanges, elevator springs.',
      },
    ],
  },

  oven: {
    eyebrow: 'Our Equipment',
    headline: 'A 12-foot electric curing oven.',
    description:
      'Powder is cured in the oven so the colour melts, flows and bonds to the metal. The result is a hard, continuous coat.',
    advantages: [
      { title: 'Power source', text: 'Electric heating elements. No combustion and no fuel flame inside the oven.' },
      { title: 'Temperature control', text: 'The set temperature is held through the cure, between 110°C and 150°C.' },
      { title: 'Heat distribution', text: 'Heat is spread so the coat cures evenly, without hot or cold spots.' },
      { title: 'Energy use', text: 'Insulation keeps the heat in and the running cost down.' },
      { title: 'Ventilation', text: 'Airflow clears fumes and keeps the curing space clean.' },
      { title: 'Safety', text: 'Over-temperature protection, emergency shut-off, and alarms.' },
    ],
    how: [
      { title: 'Application', text: 'Powder is sprayed onto the part.' },
      { title: 'Into the oven', text: 'The coated part is placed inside.' },
      { title: 'Heating', text: 'The oven reaches the temperature the powder needs.' },
      { title: 'Curing', text: 'The powder melts and fuses into one coat.' },
      { title: 'Cooling', text: 'The part cools and the coat hardens.' },
    ],
  },

  plant: {
    eyebrow: 'At the Plant',
    headline: 'Coated, cured, and ready to go.',
    description: 'Parts hang on the line after coating, then move out for delivery from Moulivakkam.',
  },

  owner: {
    role: 'Proprietor',
    note: 'Looks after the coating, the oven cure, and your quote.',
  },

  quote: {
    eyebrow: 'Get a Quote',
    headline: 'Tell us what you need coated.',
    description: 'Material, quantity and the finish you want. We reply with the rate and the time.',
    submitLabel: 'Send on WhatsApp',
    disclaimer: 'This opens WhatsApp with your message. Nothing is stored on the website.',
    finishes: ['Matte', 'Satin', 'Gloss', 'Textured', 'Metallic', 'Not sure yet'],
  },

  footer: {
    description: 'Powder coating for metal parts. MS, GI, aluminium and casting. Moulivakkam, Chennai.',
    copyright: `© ${new Date().getFullYear()} Sivashakthi Powder Coating. GSTIN 33AFQFS0271L1ZN`,
  },
}
