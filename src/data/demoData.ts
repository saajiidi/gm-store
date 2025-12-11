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
    name: "Aero streamlined Helmet",
    price: 2500,
    image: "https://images.unsplash.com/photo-1557004396-66e4174d7bf6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "High-performance aerodynamic helmet for speed enthusiasts.",
    category: "Helmets",
    rating: 4.8,
    reviews: 120,
  },
  {
    id: "2",
    name: "Night Owl LED Bike Light",
    price: 850,
    image: "https://images.unsplash.com/photo-1583204797177-3e4b7b5f6bbd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Powerful LED light for safe night riding. USB rechargeable.",
    category: "Lights",
    rating: 4.6,
    reviews: 85,
  },
  {
    id: "3",
    name: "Heavy-Duty Chain Lock",
    price: 1200,
    image: "https://images.unsplash.com/photo-1622616233488-662243e86c12?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Secure layout chain lock to keep your bike safe.",
    category: "Locks",
    rating: 4.9,
    reviews: 200,
  },
  {
    id: "4",
    name: "Pro Grip Cycling Gloves",
    price: 650,
    image: "https://images.unsplash.com/photo-1598517522539-78a0d01d4133?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Comfortable and breathable gloves for long rides.",
    category: "Apparel",
    rating: 4.5,
    reviews: 150,
  },
  {
    id: "5",
    name: "Compact Mini Pump",
    price: 450,
    image: "https://images.unsplash.com/photo-1616960867018-8c1050J1a441?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3", 
    description: "Lightweight mini pump that fits in your pocket.",
    category: "Tools",
    rating: 4.3,
    reviews: 60,
  },
  {
    id: "6",
    name: "Smartphone Mount",
    price: 350,
    image: "https://images.unsplash.com/photo-1585647346747-07409405F411?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Secure mount for your smartphone for navigation.",
    category: "Accessories",
    rating: 4.4,
    reviews: 90,
  },
  {
    id: "7",
    name: "Comfy Gel Saddle",
    price: 1500,
    image: "https://images.unsplash.com/photo-1595246140625-573b715d11d3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Ergonomic gel saddle for maximum comfort.",
    category: "Parts",
    rating: 4.7,
    reviews: 180,
  },
  {
    id: "8",
    name: "Water Bottle & Cage",
    price: 300,
    image: "https://images.unsplash.com/photo-1602143407151-011141974719?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Stay hydrated with this bottle and cage combo.",
    category: "Accessories",
    rating: 4.5,
    reviews: 110,
  }
];
