import { Property, Advisor, Article, Testimonial, Office } from '../types';

export const PROPERTIES: Property[] = [
  {
    id: 'obsidian-estate',
    title: 'The Obsidian Estate',
    location: 'BEVERLY HILLS, CA',
    price: '$32,500,000',
    numericPrice: 32500000,
    beds: 6,
    baths: 8,
    sqft: 12400,
    statusTag: 'NEW LISTING',
    category: 'Estates',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A monument to contemporary architectural mastery positioned on a private promontory in Trousdale Estates. Features double-height motor court, zero-edge reflection pools, custom Italian marble finishes, and panoramic views stretching from Downtown Los Angeles to the Pacific Ocean.',
    features: ['Infinity Edge Pool', 'Subterranean 8-Car Gallery', 'Wellness Spa & Sauna', 'Bespoke Wine Cellar (1,200 bottles)', 'Private Screening Room', 'Smart Home Automation'],
    yearBuilt: 2024,
    architect: 'Olson & Vance Architects'
  },
  {
    id: 'villa-lhorizon',
    title: "Villa L'Horizon",
    location: "SAINT-TROPEZ, FRANCE",
    price: 'Price on Request',
    numericPrice: 45000000,
    beds: 5,
    baths: 6,
    sqft: 8900,
    statusTag: 'OFF-MARKET',
    category: 'Coastal',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: "Nestled in the exclusive enclave of Les Parcs de Saint-Tropez, Villa L'Horizon offers direct sea access, private helicopter helipad access, and serene teak terraces overlooking the Gulf of Saint-Tropez.",
    features: ['Direct Private Beach Access', 'Helipad Access', 'Teak Poolside Lounges', 'Staff Quarters', 'Commercial Grade Kitchen', 'Private Mooring Rights'],
    yearBuilt: 2023,
    architect: 'Studio Jean-Michel Garthy'
  },
  {
    id: 'belvedere-penthouse',
    title: 'Belvedere Penthouse',
    location: 'LONDON, UK',
    price: '£18,950,000',
    numericPrice: 24000000,
    beds: 4,
    baths: 5,
    sqft: 6200,
    statusTag: 'FEATURED',
    category: 'Penthouses',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Occupying the entire top two floors of a historic Belgravia building, the Belvedere Penthouse seamlessly blends 19th-century crown moldings with high-concept modern art galleries and 360-degree skyline views of Big Ben and the Thames.',
    features: ['Private Direct Elevator Access', 'Wrap-around Sky Terrace', '24/7 White Glove Concierge', 'Climate Controlled Art Storage', 'Direct Thames Views'],
    yearBuilt: 2022,
    architect: 'Foster & Partners Interior Design'
  },
  {
    id: 'solstice-ridge',
    title: 'Solstice Ridge Villa',
    location: 'ASPEN, COLORADO',
    price: '$28,000,000',
    numericPrice: 28000000,
    beds: 7,
    baths: 9,
    sqft: 14200,
    statusTag: 'NEW LISTING',
    category: 'Villas',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An alpine architectural triumph featuring reclaimed timber beams, frameless heated glass walls, heated driveway, ski-in/ski-out convenience, and indoor thermal hot springs overlooking Red Mountain.',
    features: ['Ski-in / Ski-out Access', 'Heated Outdoor Infinity Pool', 'Indoor Thermal Hot Springs', 'Custom Firepit & Heated Patio', 'Oxygen-Enriched Master Suite'],
    yearBuilt: 2024,
    architect: 'Charles Cunniffe Architects'
  },
  {
    id: 'palazzo-miramar',
    title: 'Palazzo Miramar',
    location: 'CAP D’ANTIBES, FRANCE',
    price: '€38,000,000',
    numericPrice: 41000000,
    beds: 8,
    baths: 10,
    sqft: 16500,
    statusTag: 'OFF-MARKET',
    category: 'Estates',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A neo-classical waterfront domain standing amidst 4 acres of manicured Mediterranean gardens with century-old olive groves, private dock, and grand marble colonnades.',
    features: ['Private Waterfront Dock', '4 Acres of Private Park', 'Olympic Length Pool', 'Guest House (3 Bedrooms)', 'Tennis Court & Pavilion'],
    yearBuilt: 2021,
    architect: 'Alberto Pinto Studio'
  },
  {
    id: 'the-dune-residence',
    title: 'The Dune Sanctuary',
    location: 'MALIBU, CALIFORNIA',
    price: '$21,500,000',
    numericPrice: 21500000,
    beds: 5,
    baths: 6,
    sqft: 7800,
    statusTag: 'FEATURED',
    category: 'Coastal',
    image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Positioned right on the sand of Broad Beach, featuring polished white concrete, floor-to-ceiling glass doors that open to ocean breezes, and a private rooftop lounge.',
    features: ['Direct Beach Access', 'Rooftop Lounge with Firepit', 'Outdoor Kitchen & Dining', 'Solar Kinetic Architecture', 'Integrated Sound System'],
    yearBuilt: 2023,
    architect: 'Kappe Architects'
  }
];

export const ADVISORS: Advisor[] = [
  {
    id: 'alexandra-vance',
    name: 'Alexandra Vance',
    role: 'PRINCIPAL ADVISOR',
    region: 'North America & Luxury Estates',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    bio: 'Over 18 years specializing in high-net-worth real estate transactions in Beverly Hills, Bel Air, and Aspen. Recognized as one of the top 10 luxury brokers worldwide.',
    email: 'a.vance@estate-realty.com',
    phone: '+1 (310) 892-4401',
    dealsCount: '$3.4B+ Closed'
  },
  {
    id: 'julian-brooks',
    name: 'Julian Brooks',
    role: 'EUROPEAN PORTFOLIO',
    region: 'UK, France & Switzerland',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    bio: 'Based in London and Geneva, Julian oversees off-market acquisitions for family offices and institutional private wealth across the French Riviera and Central London.',
    email: 'j.brooks@estate-realty.com',
    phone: '+44 20 7946 0912',
    dealsCount: '$2.8B+ Closed'
  },
  {
    id: 'sofia-moretti',
    name: 'Sofia Moretti',
    role: 'ASIAN MARKETS & MIDDLE EAST',
    region: 'Dubai, Hong Kong & Singapore',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    bio: 'Pioneer in cross-border capital flow between the Middle East and East Asia. Specializes in luxury towers, private islands, and branded penthouses.',
    email: 's.moretti@estate-realty.com',
    phone: '+971 4 312 8090',
    dealsCount: '$2.1B+ Closed'
  },
  {
    id: 'marcus-thorne',
    name: 'Marcus Thorne',
    role: 'ESTATES & RANCHES',
    region: 'Coastal Domains & Legacy Ranches',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    bio: 'Trusted advisor for expansive equestrian estates, vineyard properties in Napa, and secluded coastal sanctuaries along the Pacific Rim.',
    email: 'm.thorne@estate-realty.com',
    phone: '+1 (415) 702-9920',
    dealsCount: '$1.9B+ Closed'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: '"The level of discretion and market intelligence provided by the team was unparalleled. They managed to secure our property off-market, ensuring a seamless transition that protected our privacy throughout."',
    author: 'DR. HENRIK VOGEL',
    title: 'TECH FOUNDER & PHILANTHROPIST',
    location: 'BERLIN',
    rating: 5
  },
  {
    id: '2',
    quote: '"ESTATE doesn\'t just find houses; they curate homes that align with our life\'s philosophy. Their architectural insight helped us see potential in properties we would have otherwise overlooked."',
    author: 'LADY CATHERINE STERLING',
    title: 'ART COLLECTOR & PATRON',
    location: 'LONDON',
    rating: 5
  },
  {
    id: '3',
    quote: '"Navigating cross-border real estate transactions across three continents can be treacherous. Alexandra and Julian made the acquisition of our Cap d\'Antibes estate entirely effortless."',
    author: 'TAKASHI & YUMI OKAMOTO',
    title: 'PRIVATE VENTURE DIRECTORS',
    location: 'TOKYO & MONACO',
    rating: 5
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'quiet-luxury',
    title: "The Rise of 'Quiet Luxury' in Modern Estates",
    category: 'ARCHITECTURE',
    date: 'FEB 14, 2026',
    readTime: '6 MIN READ',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Exploring how the world\'s most affluent are shifting away from ostentatious opulence toward refined, understated craftsmanship and organic materiality.',
    content: [
      'In the domain of ultra-prime residential real estate, a profound philosophical shift is taking place. The era of golden chandeliers and aggressive architectural displays has given way to what designers term "Quiet Luxury"—a design ethos focused on raw tactile materials, seamless natural light, and imperceptible technology.',
      'Discerning buyers today prioritize uncompromised privacy, acoustic isolation, acoustic perfection, and sustainable construction over mere square footage. Earth tones, hand-plastered walls, blackened steel, and unpolished travertine have become the new status symbols of modern prestige.',
      'Our advisors report that properties emphasizing architectural integrity and bio-centric design are commanding up to a 28% premium in key global luxury capitals.'
    ]
  },
  {
    id: 'global-outlook-2026',
    title: 'Global Real Estate Outlook for 2026',
    category: 'MARKET TRENDS',
    date: 'JAN 28, 2026',
    readTime: '8 MIN READ',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Our annual forecast on the most resilient luxury markets, tax-free safe havens, and emerging opportunities for high-net-worth private investors.',
    content: [
      'As geopolitical shifts reshape global capital flows, prime real estate remains the foundational anchor for private family wealth protection.',
      'Dubai, London, and Miami continue to lead capital inflows, driven by favorable tax regimes, world-class infrastructure, and high security standards. Meanwhile, niche markets like Saint-Tropez and Aspen demonstrate unprecedented price resilience due to strict development caps.',
      'Off-market transactions now represent over 42% of all residential acquisitions above $20 million, underscoring the vital importance of private banking partnerships and boutique real estate networks.'
    ]
  },
  {
    id: 'ultimate-amenities',
    title: 'The Ultimate Amenities: Beyond the Infinity Pool',
    category: 'LIFESTYLE',
    date: 'JAN 10, 2026',
    readTime: '5 MIN READ',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'From climate-controlled art vaults to private longevity wellness sanctuaries, discover the new essentials of the world\'s most elite residences.',
    content: [
      'What defines a true luxury residence today? Beyond standard home theaters and wine cellars, modern ultra-luxury estates are being constructed around personal wellness sanctuaries and specialized hobbies.',
      'Current high-demand features include hyperbaric oxygen chambers, cryotherapy installations, Faraday-shielded panic suites, private art gallery restoration studios, and subterranean auto museum galleries with hydraulic vehicle lifts.',
      'Architecture is no longer just shelter; it is an active partner in health, security, and human performance.'
    ]
  }
];

export const OFFICES: Office[] = [
  {
    city: 'Los Angeles',
    country: 'United States',
    address: '9570 Wilshire Boulevard, Beverly Hills, CA 90212',
    phone: '+1 (310) 892-4000',
    email: 'la@estate-realty.com',
    timezone: 'PST (UTC-8)',
    image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=800&q=80'
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '14 Berkeley Square, Mayfair, London W1J 6EB',
    phone: '+44 20 7946 0900',
    email: 'london@estate-realty.com',
    timezone: 'GMT (UTC+0)',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80'
  },
  {
    city: 'Paris',
    country: 'France',
    address: '28 Avenue Montaigne, 75008 Paris',
    phone: '+33 1 42 68 55 00',
    email: 'paris@estate-realty.com',
    timezone: 'CET (UTC+1)',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80'
  },
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    address: 'DIFC Gate Precinct Building 4, Level 7, Dubai',
    phone: '+971 4 312 8000',
    email: 'dubai@estate-realty.com',
    timezone: 'GST (UTC+4)',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
  },
  {
    city: 'Hong Kong',
    country: 'Hong Kong SAR',
    address: 'Two International Finance Centre, 8 Finance St, Central',
    phone: '+852 2532 8888',
    email: 'hk@estate-realty.com',
    timezone: 'HKT (UTC+8)',
    image: 'https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&w=800&q=80'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery & Confidential Brief',
    subtitle: 'Understanding your unique lifestyle philosophy',
    description: 'We initiate every partnership with an in-depth private consultation to map your aesthetic preferences, architectural requirements, financial parameters, and privacy needs.'
  },
  {
    number: '02',
    title: 'Off-Market Sourcing & Curation',
    subtitle: 'Access to unlisted architectural treasures',
    description: 'Over 50% of our transactions never reach public listings. Leveraging our global family office network, we present hand-selected off-market opportunities that align with your brief.'
  },
  {
    number: '03',
    title: 'Private Viewings & Due Diligence',
    subtitle: 'Seamless white-glove inspection',
    description: 'We arrange discreet private viewings via luxury chauffeur or private charter, accompanied by structural appraisal experts, architectural historians, and legal counsel.'
  },
  {
    number: '04',
    title: 'Discrete Negotiation & Closing',
    subtitle: 'Masterful deal structuring',
    description: 'Our senior principals personally handle all contract negotiations, tax structuring, asset protection protocols, and post-acquisition concierge management.'
  }
];
