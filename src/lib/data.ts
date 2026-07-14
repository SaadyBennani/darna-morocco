export type Experience = {
  id: string;
  merchantId: string;
  title: string;
  description: string;
  price: number;
  location: string;
  imageUrl: string;
  durationHours: number;
  category: string;
  rating: number;
  reviewCount: number;
};

export type Booking = {
  id: string;
  experienceId: string;
  travelerId: string;
  date: string;
  status: "pending" | "confirmed";
};

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    merchantId: "m1",
    title: "Sahara Desert Glamping",
    description: "Spend a night under the stars in a luxury desert camp near Merzouga. Ride camels at sunset, enjoy a traditional Berber dinner, and wake up to a breathtaking sunrise over the dunes.",
    price: 280,
    location: "Merzouga, Sahara",
    imageUrl: "https://images.unsplash.com/photo-1559586616-361e18714958?w=800&q=80",
    durationHours: 24,
    category: "Adventure",
    rating: 4.9,
    reviewCount: 148,
  },
  {
    id: "2",
    merchantId: "m2",
    title: "Fes Medina Walking Tour",
    description: "Navigate the labyrinthine alleyways of Fes el-Bali, the world's largest car-free urban area. Visit the famous Chouara tannery, ancient madrasas, and hidden souks with a local guide.",
    price: 65,
    location: "Fes, Morocco",
    imageUrl: "https://images.unsplash.com/photo-1585213303814-2ca9c6bcb400?w=800&q=80",
    durationHours: 4,
    category: "Cultural",
    rating: 4.8,
    reviewCount: 312,
  },
  {
    id: "3",
    merchantId: "m3",
    title: "Atlas Mountains Hike",
    description: "Trek through the stunning High Atlas mountains with a Berber guide. Visit traditional villages, learn about local culture, and enjoy panoramic views of the valleys below.",
    price: 95,
    location: "Imlil, Atlas Mountains",
    imageUrl: "https://images.unsplash.com/photo-1659510759065-22b209fa5710?w=800&q=80",
    durationHours: 8,
    category: "Hiking",
    rating: 4.7,
    reviewCount: 89,
  },
  {
    id: "4",
    merchantId: "m4",
    title: "Marrakech Cooking Class",
    description: "Learn to prepare a traditional Moroccan feast in a beautiful riad kitchen. Shop for spices in the Mellah, then cook tagine, couscous, and pastilla under the guidance of a local chef.",
    price: 75,
    location: "Marrakech, Morocco",
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    durationHours: 5,
    category: "Culinary",
    rating: 4.9,
    reviewCount: 203,
  },
  {
    id: "5",
    merchantId: "m5",
    title: "Chefchaouen Blue City Tour",
    description: "Explore the magical blue-washed streets of Chefchaouen nestled in the Rif Mountains. Discover the story behind the iconic blue paint, visit the kasbah, and photograph the most photogenic city in Morocco.",
    price: 55,
    location: "Chefchaouen, Morocco",
    imageUrl: "https://images.unsplash.com/photo-1553523291-7b1c1d73710f?w=800&q=80",
    durationHours: 3,
    category: "Cultural",
    rating: 4.8,
    reviewCount: 176,
  },
  {
    id: "6",
    merchantId: "m6",
    title: "Essaouira Coastal Adventure",
    description: "Discover the wind-swept Atlantic coast of Essaouira. Walk the ramparts, visit the historic medina, enjoy fresh seafood at the port, and watch kite surfers on Morocco's windiest beach.",
    price: 80,
    location: "Essaouira, Morocco",
    imageUrl: "https://images.unsplash.com/photo-1565985482571-03a42ea59d80?w=800&q=80",
    durationHours: 6,
    category: "Adventure",
    rating: 4.6,
    reviewCount: 94,
  },
];

export const CATEGORIES = ["All", "Adventure", "Cultural", "Hiking", "Culinary"];

export const MOCK_BOOKINGS: Booking[] = [
  { id: "b1", experienceId: "1", travelerId: "t1", date: "2026-08-15", status: "confirmed" },
  { id: "b2", experienceId: "3", travelerId: "t1", date: "2026-08-22", status: "pending" },
];
