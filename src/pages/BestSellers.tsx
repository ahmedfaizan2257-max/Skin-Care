import { motion } from 'motion/react';
import { ProductCard } from '../App';

const BestSellers = () => {
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
      name: "Calm + Clear Serum",
      price: "$42.00",
      description: "High-potency serum that targets redness and post-acne marks.",
      image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dcab5b?q=80&w=600&auto=format&fit=crop",
      tag: "Best Seller",
      rating: 4.9
    },
    {
       name: "Barrier Balm",
       price: "$38.00",
       description: "Intensive repair cream for compromised skin barriers.",
       image: "https://images.unsplash.com/photo-1601049541289-9b1b7abe71a0?q=80&w=600&auto=format&fit=crop",
       tag: "Best Seller",
       rating: 5.0
    }
  ];

  return (
    <div className="pt-40 md:pt-48 pb-24 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="max-w-2xl mb-16">
          <span className="text-brand-rose uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Proven Favorites</span>
          <h1 className="text-5xl md:text-6xl font-serif leading-tight">The <br/><span className="italic">Best Sellers</span></h1>
        </header>

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
      </div>
    </div>
  );
};

export default BestSellers;
