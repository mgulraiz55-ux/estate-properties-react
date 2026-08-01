export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  numericPrice: number;
  beds: number;
  baths: number;
  sqft: number;
  statusTag?: 'NEW LISTING' | 'OFF-MARKET' | 'FEATURED' | 'JUST SOLD';
  category: 'Estates' | 'Penthouses' | 'Coastal' | 'Villas';
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  yearBuilt: number;
  architect?: string;
}

export interface Advisor {
  id: string;
  name: string;
  role: string;
  region: string;
  image: string;
  bio: string;
  email: string;
  phone: string;
  dealsCount: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  location: string;
  rating: number;
}

export interface Office {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  timezone: string;
  image: string;
}
