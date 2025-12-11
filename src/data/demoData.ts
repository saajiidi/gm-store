export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Aero Speed Helmet",
    price: 3500,
    image: "https://images.unsplash.com/photo-1557004396-66e4174d7bf6?auto=format&fit=crop&q=80&w=800",
    description: "Aerodynamic design for maximum speed and ventilation. Perfect for road racing.",
    category: "Safety",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "Pro Night Rider Light",
    price: 1200,
    image: "https://images.unsplash.com/photo-1583204797177-3e4b7b5f6bbd?auto=format&fit=crop&q=80&w=800",
    description: "1000 lumen LED headlight with USB-C rechargeable battery. See and be seen.",
    category: "Accessories",
    rating: 4.7,
    reviews: 89,
  },
  {
    id: "3",
    name: "Heavy Duty Chain Lock",
    price: 1500,
    image: "https://images.unsplash.com/photo-1622616233488-662243e86c12?auto=format&fit=crop&q=80&w=800",
    description: "Hardened steel chain link lock with weather-resistant nylon cover.",
    category: "Safety",
    rating: 4.9,
    reviews: 215,
  },
  {
    id: "4",
    name: "Gel Padded Gloves",
    price: 850,
    image: "https://images.unsplash.com/photo-1598517522539-78a0d01d4133?auto=format&fit=crop&q=80&w=800",
    description: "Shock-absorbing gel pads reduce hand fatigue on long rides.",
    category: "Apparel",
    rating: 4.5,
    reviews: 156,
  },
  {
    id: "5",
    name: "Compact Mini Pump",
    price: 650,
    image: "https://images.unsplash.com/photo-1616960867018-8c1050J1a441?auto=format&fit=crop&q=80&w=800",
    description: "Lightweight aluminum mini pump. Fits Presta and Schrader valves.",
    category: "Tools",
    rating: 4.4,
    reviews: 67,
  },
  {
    id: "6",
    name: "Universal Phone Mount",
    price: 450,
    image: "https://images.unsplash.com/photo-1585647346747-07409405F411?auto=format&fit=crop&q=80&w=800",
    description: "Securely holds any smartphone. 360-degree rotation for best viewing angle.",
    category: "Accessories",
    rating: 4.3,
    reviews: 92,
  },
  {
    id: "7",
    name: "Ergo Gel Saddle",
    price: 1800,
    image: "https://images.unsplash.com/photo-1595246140625-573b715d11d3?auto=format&fit=crop&q=80&w=800",
    description: "Memory foam and gel combination for superior riding comfort.",
    category: "Parts",
    rating: 4.6,
    reviews: 143,
  },
  {
    id: "8",
    name: "Insulated Water Bottle",
    price: 550,
    image: "https://images.unsplash.com/photo-1602143407151-011141974719?auto=format&fit=crop&q=80&w=800",
    description: "Keeps your drink cold for hours. BPA-free material.",
    category: "Accessories",
    rating: 4.8,
    reviews: 201,
  },
  {
    id: "9",
    name: "Multi-Tool Kit",
    price: 950,
    image: "https://images.unsplash.com/photo-1584347716616-e5c98d660e18?auto=format&fit=crop&q=80&w=800",
    description: "16-function essential tool for roadside repairs and adjustments.",
    category: "Tools",
    rating: 4.9,
    reviews: 178,
  },
  {
    id: "10",
    name: "Cycling Jersey",
    price: 2200,
    image: "https://images.unsplash.com/photo-1525048596645-ec05d691aa37?auto=format&fit=crop&q=80&w=800",
    description: "Breathable, moisture-wicking fabric with back pockets.",
    category: "Apparel",
    rating: 4.7,
    reviews: 88,
  },
  {
    id: "11",
    name: "Rear Carrier Rack",
    price: 1600,
    image: "https://images.unsplash.com/photo-1544465492-98319688753a?auto=format&fit=crop&q=80&w=800",
    description: "Lightweight alloy rack for carrying panniers or cargo.",
    category: "Accessories",
    rating: 4.5,
    reviews: 56,
  },
  {
    id: "12",
    name: "Bike Pedals - Flat",
    price: 1100,
    image: "https://images.unsplash.com/photo-1579010043940-5e87ba31362e?auto=format&fit=crop&q=80&w=800",
    description: "Durable nylon composite pedals with replaceable pins for grip.",
    category: "Parts",
    rating: 4.6,
    reviews: 112,
  }
];

