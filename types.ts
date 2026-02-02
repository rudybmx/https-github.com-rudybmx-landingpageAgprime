export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  type: 'Sale' | 'Rent';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
  number: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}