import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data/products';
import { Star, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ProductCard } from '../App';
import { useEffect } from 'react';

const CollectionDetail = () => {
  const { id } = useParams();
  const categoryProducts = PRODUCTS.filter(p => p.category === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  const categoryInfo = {
    'cleansers': {
        title: 'The Cleanse Ritual',
        subtitle: 'Foundation of Radiance',
        desc: 'Gentle, pH-balanced formulas designed to remove impurities while respecting your skin barrier. Our cleansers use biomimetic lipids to ensure your skin feels soft, never stripped.',
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop"
    },
    'serums': {
        title: 'Targeted Treatments',
        subtitle: 'Cellular Innovation',
        desc: 'Potent concentrations of active ingredients to repair, calm, and brighten. Our serums use encapsulated delivery systems to penetrate deeper without surface irritation.',
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop"
    },
    'moisturizers': {
        title: 'Barrier Protection',
        subtitle: 'Restorative Seal',
        desc: 'Advanced hydration that shields your skin from environmental stress and moisture loss. Formulated to mimic the skin\'s natural sebum for a breathable, protective layer.',
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1200&auto=format&fit=crop"
    }
  };

  const info = categoryInfo[id as keyof typeof categoryInfo] || { 
    title: 'Our Collection', 
    subtitle: 'Curated Skincare',
    desc: 'Curated products for healthy, radiant skin.',
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1200&auto=format&fit=crop"
  };

  return (
    <div className="pt-32 md:pt-48 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-brand-mocha/40 hover:text-brand-rose transition-colors mb-12">
            <ArrowLeft className="w-3 h-3" /> All Collections
        </Link>

        {/* Hero Banner */}
        <header className="relative w-full aspect-[21/9] md:aspect-[21/7] rounded-sm overflow-hidden mb-24 group">
            <img 
               src={info.image} 
               alt={info.title} 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" 
            />
            <div className="absolute inset-0 bg-brand-mocha/20 flex flex-col justify-center p-8 md:p-16">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="max-w-2xl text-white"
               >
                  <span className="uppercase tracking-[0.3em] text-[10px] font-bold block mb-4 italic text-brand-sage">{info.subtitle}</span>
                  <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">{info.title}</h1>
                  <p className="text-white/80 text-lg font-light leading-relaxed max-w-xl italic">{info.desc}</p>
               </motion.div>
            </div>
        </header>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {categoryProducts.map((p, i) => (
            <ProductCard 
               key={p.id}
               id={p.id}
               name={p.name}
               price={p.price}
               description={p.description}
               image={p.image}
               rating={p.rating}
               tag={p.tag}
            />
          ))}
        </div>

        {categoryProducts.length === 0 && (
           <div className="text-center py-40 border border-brand-mocha/5 bg-brand-cream/30 rounded-sm">
              <p className="text-brand-mocha/40 uppercase tracking-widest text-xs font-bold">No products found in this collection.</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default CollectionDetail;
