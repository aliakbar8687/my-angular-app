export interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
  fullDescription: string;
  category: string;
  country: string;
  website: string;
  partnershipDate: string; // ISO format date string, e.g., '2015-06-01'
  featured: boolean;
}
