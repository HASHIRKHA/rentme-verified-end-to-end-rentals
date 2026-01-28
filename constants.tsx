import { Listing } from './types';

export const MOCK_LISTINGS: Listing[] = [
  {
    id: '1',
    title: 'Minimalist Penthouse in Shoreditch',
    type: 'Full Property',
    price: 3200,
    location: 'Shoreditch, London',
    images: ['https://picsum.photos/seed/rent1/800/600', 'https://picsum.photos/seed/rent1b/800/600'],
    beds: 2,
    baths: 2,
    isVerified: true,
    trustScore: 98,
    responseTime: '15 mins',
    availableFrom: '2024-05-01',
    amenities: ['Gym', 'Concierge', 'High-speed WiFi'],
    vibes: ['Nightlife', 'Creative', 'Connected'],
    ownerId: 'l1'
  },
  {
    id: '2',
    title: 'Bright Double Room with Garden Access',
    type: 'Room',
    price: 950,
    location: 'Islington, London',
    images: ['https://picsum.photos/seed/room2/800/600', 'https://picsum.photos/seed/room2b/800/600'],
    beds: 1,
    baths: 1,
    isVerified: true,
    trustScore: 92,
    responseTime: '1 hour',
    availableFrom: 'Immediately',
    amenities: ['Bills Included', 'Bike Storage'],
    vibes: ['Quiet', 'Greenery', 'Community'],
    ownerId: 'l2'
  },
  {
    id: '3',
    title: 'Victorian Terrace Near Manchester Piccadilly',
    type: 'Full Property',
    price: 1850,
    location: 'Manchester City Centre',
    images: ['https://picsum.photos/seed/mcr1/800/600'],
    beds: 3,
    baths: 2,
    isVerified: true,
    trustScore: 95,
    responseTime: '3 hours',
    availableFrom: '2024-06-15',
    amenities: ['Parking', 'Pet Friendly'],
    vibes: ['Busy', 'Hub', 'History'],
    ownerId: 'l3'
  }
];

export const TRUST_LEVELS = {
  Elite: { color: '#18B6A4', label: 'Elite Trust' },
  Gold: { color: '#FFD166', label: 'Gold Verified' },
  Verified: { color: '#2D7FF9', label: 'Verified' },
};
