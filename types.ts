export enum UserRole {
  RENTER = 'RENTER',
  LANDLORD = 'LANDLORD',
  HOST = 'HOST'
export enum UserRole {
  export enum UserRole {
RENTER = 'RENTER',
  LANDLORD = 'LANDLORD',
  HOST = 'HOST'
}

}

export interface TrustScore {
  score: number;
  level: 'Elite' | 'Gold' | 'Verified' | 'Unverified';
  factors: string[];
}

export interface Listing {
  id: string;
  title: string;
  type: 'Full Property' | 'Room';
  price: number;
  location: string;
  images: string[];
  beds: number;
  baths: number;
  isVerified: boolean;
  trustScore: number;
  responseTime: string;
  availableFrom: string;
  amenities: string[];
  vibes?: string[]; // Neighborhood vibe tags
  ownerId: string;
}

export interface RenterPassport {
  id: string;
  name: string;
  isVerified: boolean;
  affordabilityStatus: 'High' | 'Medium' | 'Low';
  trustScore: number;
  completedDocs: string[];
  employmentStatus: string;
}
