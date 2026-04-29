import { motion } from 'motion/react';
import { ChevronRight, Filter } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../App';
import { Link } from 'react-router-dom';

const Shop = () => {
  const products = PRODUCTS;

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
           <Link to="/quiz" className="inline-block bg-brand-mocha text-white px-12 py-5 font-bold tracking-[0.2em] uppercase text-[11px] hover:bg-brand-rose transition-all">
              Take Our Skin Quiz
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;
