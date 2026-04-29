import { motion } from 'motion/react';
import { ProductCard } from '../App';

const NewArrivals = () => {
  const products = [
    {
      name: "Botanical Face Oil",
      price: "$45.00",
      description: "A blend of 12 organic oils to restore your outer glow and calm inflammation.",
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=600&auto=format&fit=crop",
      tag: "New Arrival",
      rating: 4.9
    },
    {
      name: "Daily SPF Moisturiser",
      price: "$35.00",
      description: "Broad spectrum protection for sensitive skin that doesn't clog pores.",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=600&auto=format&fit=crop",
      tag: "New Arrival",
      rating: 4.7
    }
  ];

  return (
    <div className="pt-40 md:pt-48 pb-24 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="max-w-2xl mb-16">
          <span className="text-brand-rose uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Fresh from the Lab</span>
          <h1 className="text-5xl md:text-6xl font-serif leading-tight">The <br/><span className="italic">New Arrivals</span></h1>
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

export default NewArrivals;
