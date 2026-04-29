import { motion } from 'motion/react';
import { ChevronRight, Filter } from 'lucide-react';
import { ProductCard } from '../App';

const Shop = () => {
  const products = [
    {
      name: "Clarity Cleanser",
      price: "$28.00",
      description: "Deeply cleanses without stripping moisture while targeting acne-causing bacteria.",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&auto=format&fit=crop",
      tag: "Best Seller",
      rating: 4.8
    },
    {
      name: "Botanical Face Oil",
      price: "$45.00",
      description: "A blend of 12 organic oils to restore your outer glow and calm inflammation.",
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=600&auto=format&fit=crop",
      rating: 4.9
    },
    {
      name: "Daily SPF Moisturiser",
      price: "$35.00",
      description: "Broad spectrum protection for sensitive skin that doesn't clog pores.",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=600&auto=format&fit=crop",
      rating: 4.7
    },
    {
      name: "Calm + Clear Serum",
      price: "$42.00",
      description: "High-potency serum that targets redness and post-acne marks.",
      image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dcab5b?q=80&w=600&auto=format&fit=crop",
      rating: 4.9
    },
    {
      name: "Detox Mask",
      price: "$32.00",
      description: "Mineral-rich clay mask that pulls impurities from deep within.",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop",
      rating: 4.6
    },
    {
       name: "Barrier Balm",
       price: "$38.00",
       description: "Intensive repair cream for compromised skin barriers.",
       image: "https://images.unsplash.com/photo-1601049541289-9b1b7abe71a0?q=80&w=600&auto=format&fit=crop",
       rating: 5.0
    }
  ];

  return (
    <div className="pt-40 md:pt-48 pb-24 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div className="max-w-2xl">
              <span className="text-brand-rose uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">The Full Collection</span>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight">Rituals For Radical Clarity</h1>
           </div>
           <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 border border-brand-mocha/10 px-6 py-3 text-[10px] uppercase font-bold tracking-widest hover:bg-white transition-colors">
                <Filter className="w-4 h-4" /> Filter
              </button>
              <select className="bg-transparent border border-brand-mocha/10 px-6 py-3 text-[10px] uppercase font-bold tracking-widest outline-none cursor-pointer hover:bg-white transition-colors">
                 <option>Sort By: Featured</option>
                 <option>Price: Low to High</option>
                 <option>Price: High to Low</option>
                 <option>Rating</option>
              </select>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((p, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i}
            >
              <ProductCard {...p} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 border-t border-brand-mocha/5 pt-24 text-center">
           <h2 className="text-3xl font-serif mb-8 italic">Can't decide where to start?</h2>
           <button className="bg-brand-mocha text-white px-12 py-5 font-bold tracking-[0.2em] uppercase text-[11px] hover:bg-brand-rose transition-all">
              Take Our Skin Quiz
           </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
