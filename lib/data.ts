// ===============================
// WhatsApp Config
// ===============================
export const WHATSAPP_NUMBER = "919876543210";

// ===============================
// Interfaces
// ===============================
export interface HoneyProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  featured?: boolean;
  benefits?: string[];
}

export interface HoneyBasedProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface BeekeepingMaterial {
  id: string;
  name: string;
  description: string;
  image: string;
}

// ===============================
// Honey Products (FINAL CLEAN)
// ===============================
export const honeyProducts: HoneyProduct[] = [
  {
    id: "mosquito-honey",
    name: "Mosquito Honey",
    description: "Rare honey variety known for strong medicinal value.",
    price: 1600,
    image: "/images/sidr-honey.jpg",
    featured: true,
    benefits: [
      "100% Pure & Natural",
      "No added sugar",
      "Rich in antioxidants",
      "Boosts immunity",
    ],
  },
  {
    id: "mountain-honey",
    name: "Mountain Honey",
    description: "Wild mountain honey rich in minerals.",
    price: 1000,
    image: "/images/forest-honey.jpg",
  },
  {
    id: "comb-honey",
    name: "Comb Honey",
    description: "Pure honey harvested directly from comb.",
    price: 1000,
    image: "/images/honeycomb.jpg",
  },
  {
    id: "layered-honey",
    name: "Layered Honey",
    description: "Traditional layered natural honey.",
    price: 800,
    image: "/images/raw-honey.jpg",
  },
  {
    id: "drumstick-honey",
    name: "Drumstick Flower Honey",
    description: "Honey collected from drumstick tree flowers.",
    price: 800,
    image: "/images/herbal-honey.jpg",
  },
  {
    id: "neem-honey",
    name: "Neem Honey",
    description: "Medicinal honey from neem flowers.",
    price: 800,
    image: "/images/herbal-honey.jpg",
  },
  {
    id: "jamun-honey",
    name: "Jamun (Naval) Honey",
    description: "Honey from Jamun tree flowers.",
    price: 800,
    image: "/images/raw-honey.jpg",
  },
  {
    id: "kurinji-honey",
    name: "Kurinji Honey",
    description: "Rare seasonal honey from Kurinji flowers.",
    price: 1200,
    image: "/images/forest-honey.jpg",
  },
];

// ===============================
// Honey Based Products
// ===============================
export const honeyBasedProducts: HoneyBasedProduct[] = [
  {
    id: "honey-amla",
    name: "Honey Amla (Gooseberry in Honey)",
    description: "Gooseberries soaked in honey for immunity.",
    price: 350,
    image: "/images/honey-syrup.jpg",
  },
  {
    id: "honey-ginger",
    name: "Honey Ginger",
    description: "Ginger infused with honey for digestion.",
    price: 550,
    image: "/images/honey-syrup.jpg",
  },
  {
    id: "rose-gulkand",
    name: "Rose Petal Gulkand",
    description: "Rose petals preserved with honey.",
    price: 600,
    image: "/images/honey-syrup.jpg",
  },
  {
    id: "honey-dates",
    name: "Honey Dates",
    description: "Dates soaked in pure honey.",
    price: 600,
    image: "/images/honey-syrup.jpg",
  },
  {
    id: "dry-fruits-honey",
    name: "Dry Fruits in Honey",
    description: "Mixed dry fruits preserved in honey.",
    price: 800,
    image: "/images/beeswax-candles.jpg",
  },
  {
    id: "fig-honey",
    name: "Fig Honey",
    description: "Nutritious figs blended with honey.",
    price: 800,
    image: "/images/honey-cream.jpg",
  },
  {
    id: "beeswax-cream",
    name: "Beeswax Cream",
    description: "Natural skincare cream made from beeswax.",
    price: 150,
    image: "/images/honey-cream.jpg",
  },
];

// ===============================
// Beekeeping Materials (REQUIRED)
// ===============================
export const beekeepingMaterials: BeekeepingMaterial[] = [
  {
    id: "beehive",
    name: "Wooden Beehive",
    description: "Professional Langstroth wooden beehive.",
    image: "/images/beehive.jpg",
  },
  {
    id: "honey-extractor",
    name: "Honey Extractor",
    description: "Manual stainless steel honey extractor.",
    image: "/images/honey-extractor.jpg",
  },
  {
    id: "bee-smoker",
    name: "Bee Smoker",
    description: "Essential tool for calm hive inspections.",
    image: "/images/bee-smoker.jpg",
  },
  {
    id: "bee-suit",
    name: "Protective Beekeeping Suit",
    description: "Full-body suit with veil and gloves.",
    image: "/images/bee-suit.jpg",
  },
  {
    id: "honey-containers",
    name: "Honey Storage Containers",
    description: "Food-grade containers for safe honey storage.",
    image: "/images/honey-containers.jpg",
  },
];


// ===============================
// Why Choose Us
// ===============================
export const whyChooseUs = [
  {
    title: "100% Organic & Natural",
    description: "Pure honey sourced from pesticide-free environments.",
    icon: "leaf",
  },
  {
    title: "Direct from Beekeepers",
    description: "Fair trade directly with traditional beekeepers.",
    icon: "users",
  },
  {
    title: "Quality Tested",
    description: "Each batch tested for purity and nutrition.",
    icon: "badge-check",
  },
];

// ===============================
// WhatsApp Helpers
// ===============================
export function getWhatsAppUrl(productName: string): string {
  const message = encodeURIComponent(
    `Hello, I would like to buy ${productName}. Please share more details.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function getGeneralWhatsAppUrl(): string {
  const message = encodeURIComponent(
    "Hello, I would like to know more about your honey products."
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
