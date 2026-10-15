export interface CompanyInfo {
  name: string;
  legalName: string;
  category: string;
  tagline: string;
  secondaryTagline: string;
  address: {
    line1: string;
    locality: string;
    city: string;
    pin: string;
    state: string;
    country: string;
    full: string;
  };
  phone: string;
  phoneDisplay: string;
  emails: string[];
  primaryEmail: string;
  alternateEmail: string;
  whatsappNumber: string;
  whatsappUrl: string;
  serviceCategories: string[];
  operatingArea: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  iconName: string;
  metaDescription: string;
  heroImage: string;
  overview: string;
  keyFeatures: string[];
  scopeOfService: {
    title: string;
    description: string;
    bullets: string[];
  }[];
  potentialUseCases: {
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  enquiryProcess: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface FleetVehicle {
  id: string;
  title: string;
  plateNumber?: string;
  model: string;
  category: 'patrol' | 'formation' | 'field-unit' | 'lineup';
  description: string;
  image: string;
  thumbnail: string;
  details: {
    role: string;
    area: string;
    features: string[];
  };
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'fleet' | 'operations' | 'team';
  image: string;
  caption: string;
  altText: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon?: string;
  highlights?: string[];
}

export interface ValueCardItem {
  title: string;
  description: string;
  icon: string;
}

export interface IndustryCard {
  title: string;
  description: string;
  icon: string;
}
