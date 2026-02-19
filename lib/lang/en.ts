export const en = {
  // ===============================
  // Brand
  // ===============================
  brand: {
    name: "AR APIARY",
    tagline: "Honey & Bee Products - 100% Organic",
  },

  // ===============================
  // Navigation
  // ===============================
  nav: {
    home: "Home",
    about: "About",
    products: "Products",
    whyUs: "Why Us",
    contact: "Contact",
  },

  // ===============================
  // Hero Section
  // ===============================
  hero: {
    headline: "Pure • Natural • Organic Honey",
    subtext:
      "Experience the golden goodness of honey harvested through traditional beekeeping methods. Our honey is 100% pure, chemical-free, and sourced directly from the pristine natural environments of Tamil Nadu.",
    viewProducts: "View Products",
    orderWhatsApp: "Order on WhatsApp",
  },

  // ===============================
  // About Section
  // ===============================
  about: {
    label: "Our Story",
    title: "Tradition Meets Purity",
    description:
      "AR Apiary is a traditional honey producer from Tamil Nadu dedicated to preserving authentic beekeeping methods. We work directly with rural beekeepers to ensure every product is pure, natural, and chemical-free.",
    features: {
      organic: {
        title: "Natural Bee Farming",
        description:
          "Our bees forage in pesticide-free, natural environments.",
      },
      traditional: {
        title: "Traditional Harvesting",
        description:
          "Time-honored methods that preserve honey's natural qualities.",
      },
      chemical: {
        title: "Chemical-Free",
        description:
          "No preservatives, additives, or artificial processing involved.",
      },
      sustainable: {
        title: "Rural Beekeepers",
        description:
          "Direct partnership with local farmers for authentic products.",
      },
    },
  },

  // ===============================
  // Products Section
  // ===============================
  products: {
    label: "Our Collection",
    title: "Premium Honey Products",
    description:
      "Discover our range of pure and natural honey varieties carefully harvested to preserve their original taste and benefits.",
    featured: "Featured",
    buyWhatsApp: "Buy on WhatsApp",
    price: "Price",
  },

  // ===============================
  // Product List (UPDATED)
  // ===============================
  productList: {
    mosquito: {
      name: "Mosquito Honey",
      description:
        "A rare honey variety known for strong medicinal value and rich taste.",
    },
    mountain: {
      name: "Mountain Honey",
      description:
        "Wild honey collected from mountain regions, rich in minerals.",
    },
    comb: {
      name: "Comb Honey",
      description:
        "Pure honey harvested directly from natural honeycombs.",
    },
    layered: {
      name: "Layered Honey",
      description:
        "Traditional layered honey with natural aroma and flavor.",
    },
    drumstick: {
      name: "Drumstick Flower Honey",
      description:
        "Honey collected from drumstick tree flowers, known for health benefits.",
    },
    neem: {
      name: "Neem Honey",
      description:
        "Medicinal honey from neem flowers with natural healing properties.",
    },
    jamun: {
      name: "Jamun (Naval) Honey",
      description:
        "Honey from Jamun flowers with a unique taste and nutrition.",
    },
    kurinji: {
      name: "Kurinji Honey",
      description:
        "Rare seasonal honey collected from Kurinji flowers.",
    },
  },

  // ===============================
  // Product Info
  // ===============================
  productInfo: {
    title: "Product Information",
    nutrition: {
      title: "Nutritional Benefits",
      items: [
        "Natural source of energy",
        "Rich in vitamins and minerals",
        "Contains natural antioxidants",
        "Supports digestive health",
      ],
    },
    storage: {
      title: "Storage Instructions",
      items: [
        "Store in a cool, dry place",
        "Keep away from direct sunlight",
        "No refrigeration needed",
        "Best consumed within 2 years",
      ],
    },
    purity: {
      title: "100% Pure Honey",
      items: [
        "No added sugar",
        "No preservatives",
        "No artificial colors",
        "No additives",
      ],
    },
  },

  // ===============================
  // Why Us Section
  // ===============================
  whyUs: {
    label: "Our Promise",
    title: "Why Choose AR Apiary?",
    description:
      "We are committed to delivering the finest quality honey while supporting sustainable and ethical beekeeping practices.",
    features: [
      {
        title: "100% Organic & Natural",
        description:
          "Our honey comes from pesticide-free natural environments.",
        icon: "leaf",
      },
      {
        title: "Direct from Beekeepers",
        description:
          "We work directly with traditional rural beekeepers.",
        icon: "users",
      },
      {
        title: "Quality Tested",
        description:
          "Every batch is tested for purity and nutrition.",
        icon: "badge-check",
      },
      {
        title: "Eco-Friendly Packaging",
        description: "We use sustainable and recyclable packaging.",
        icon: "recycle",
      },
      {
        title: "Traditional Methods",
        description:
          "Harvested using methods that respect bees and nature.",
        icon: "history",
      },
    ],
  },

  // ===============================
  // Contact Section
  // ===============================
  contact: {
    label: "Get in Touch",
    title: "Contact Us",
    description:
      "Have questions? We'd love to hear from you. Send us a message and we'll respond soon.",
    form: {
      name: "Your Name",
      namePlaceholder: "Enter your name",
      email: "Email Address",
      emailPlaceholder: "your@email.com",
      message: "Message",
      messagePlaceholder: "How can we help you?",
      submit: "Send Message",
      success: "Message Sent!",
      successMessage: "We'll get back to you soon.",
    },
    info: {
      visit: "Visit Us",
      address: "Tamil Nadu, India",
      call: "Call Us",
      phone: "+91 81220 01006",
      email: "Email Us",
      emailAddress: "contact@arapiary.com",
      hours: "Hours",
      hoursValue: "Mon-Sat: 9AM - 6PM",
    },
  },

  // ===============================
  // Footer
  // ===============================
  footer: {
    description:
      "Bringing you the finest organic honey harvested using traditional methods that respect both bees and nature.",
    quickLinks: "Quick Links",
    contactUs: "Contact Us",
    copyright: "AR Apiary. All rights reserved.",
  },

  // ===============================
  // WhatsApp
  // ===============================
  whatsapp: {
    buyButton: "Buy on WhatsApp",
    message: (productName: string) =>
      `Hello, I would like to order ${productName} from AR APIARY.`,
    generalMessage:
      "Hello, I'm interested in AR APIARY honey products.",
  },
};
