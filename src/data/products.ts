export interface Product {
    id: string;
    name: string;
    price: string;
    description: string;
    longDescription: string;
    image: string;
    category: 'cleansers' | 'serums' | 'moisturizers' | 'bundles';
    ingredients: string[];
    usage: string[];
    rating: number;
    tag?: string;
}

export const PRODUCTS: Product[] = [
    {
      id: "clarity-cleanser",
      name: "Clarity Cleanser",
      price: "$28.00",
      description: "Deeply cleanses without stripping moisture.",
      longDescription: "Our signature cleanser uses a blend of phyto-ceramides and gentle BHAs to dissolve oil and debris while reinforcing the skin's natural lipid barrier. Perfect for daily use on acne-prone or sensitive skin.",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop",
      category: 'cleansers',
      ingredients: ["Ceramide NP", "Salicylic Acid (0.5%)", "Green Tea Extract", "Glycerin"],
      usage: ["Apply to damp skin", "Massage in circular motions for 60 seconds", "Rinse with lukewarm water"],
      rating: 4.8,
      tag: "Best Seller"
    },
    {
      id: "botanical-oil",
      name: "Botanical Face Oil",
      price: "$45.00",
      description: "A blend of 12 organic oils to restore glow.",
      longDescription: "A powerhouse of antioxidants and essential fatty acids. This lightweight non-comedogenic oil provides deep nourishment and helps regulate sebum production for a balanced complexion.",
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800&auto=format&fit=crop",
      category: 'serums',
      ingredients: ["Jojoba Oil", "Rosehip Seed Oil", "Squalane", "Vitamin E"],
      usage: ["Warm 2-3 drops in palms", "Press gently into skin", "Use as the final step of your evening routine"],
      rating: 4.9
    },
    {
      id: "daily-spf",
      name: "Daily SPF Moisturiser",
      price: "$35.00",
      description: "Broad spectrum protection for sensitive skin.",
      longDescription: "A dual-purpose hydrating sunscreen that leaves no white cast. Formulated with mineral filters and soothing oat extract to protect against both UV damage and urban pollution.",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop",
      category: 'moisturizers',
      ingredients: ["Zinc Oxide", "Colloidal Oatmeal", "Hyaluronic Acid", "Niacinamide"],
      usage: ["Apply liberally as the last step of morning routine", "Reapply every 2 hours if outdoors"],
      rating: 4.7,
      tag: "Featured"
    },
    {
        id: "barrier-rescue",
        name: "Barrier Rescue Serum",
        price: "$42.00",
        description: "Intense repair for compromised skin.",
        longDescription: "A concentrated serum designed to rescue skin that has been over-exfoliated or irritated. Rich in peptides and centella asiatica to instantly calm redness.",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
        category: 'serums',
        ingredients: ["Centella Asiatica", "Copper Peptides", "Panthenol", "Madecassoside"],
        usage: ["Apply after cleansing", "Can be used morning and night", "Follow with moisturizer"],
        rating: 4.9,
        tag: "New Arrival"
    },
    {
        id: "detox-clay-mask",
        name: "Detox Clay Mask",
        price: "$32.00",
        description: "Mineral-rich clay for deep pore detox.",
        longDescription: "A sophisticated blend of French Green Clay and Kaolin that draws out toxins and excess oil without leaving the skin parched. Infused with eucalyptus for a cooling, therapeutic experience.",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop",
        category: 'cleansers',
        ingredients: ["French Green Clay", "Kaolin", "Eucalyptus Oil", "Aloe Vera"],
        usage: ["Apply thin layer to clean skin", "Leave on for 10-15 minutes", "Rinse with cool water"],
        rating: 4.6
    },
    {
        id: "midnight-recovery",
        name: "Midnight Recovery Cream",
        price: "$52.00",
        description: "Overnight peptide-rich hydration.",
        longDescription: "A lush, velvety night cream that works with your skin's circadian rhythm. High concentrations of peptides and bakuchiol help firm and smooth lines while you sleep.",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
        category: 'moisturizers',
        ingredients: ["Peptides", "Bakuchiol", "Shea Butter", "Melatonin"],
        usage: ["Apply after serums", "Massage into face and neck", "Use nightly for best results"],
        rating: 5.0,
        tag: "Best Seller"
    },
    {
        id: "rose-water-mist",
        name: "Phyto-Rose Mist",
        price: "$24.00",
        description: "Hydrating botanical facial mist.",
        longDescription: "A refreshing burst of hydration using steam-distilled rose water and hyaluronic acid. Perfect for setting makeup or refreshing the skin throughout the day.",
        image: "https://images.unsplash.com/photo-1601049541289-9b1b7abe71a0?q=80&w=800&auto=format&fit=crop",
        category: 'moisturizers',
        ingredients: ["Damask Rose Water", "Hyaluronic Acid", "Witch Hazel", "Glycerin"],
        usage: ["Hold 10 inches from face", "Mist liberally", "Use as needed"],
        rating: 4.5
    }
];
