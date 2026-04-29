import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Bundles = () => {
  const bundles = [
    {
      title: "The Essential Duo",
      price: "$85",
      originalPrice: "$105",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop",
      description: "Our core ritual: The Cleansing Balm and The Repair Serum."
    },
    {
      title: "The Ultimate Ritual",
      price: "$145",
      originalPrice: "$180",
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop",
      description: "The complete 4-step system for maximum skin health."
    },
    {
      title: "The Travel Set",
      price: "$45",
      originalPrice: "$55",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
      description: "Miniature versions of our favorites, perfect for departures."
    }
  ];

  return (
    <div className="pt-32 md:pt-48 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <header className="max-w-3xl mb-16">
          <span className="text-brand-rose uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">Curated Systems</span>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8">The <br/><span className="italic">Bundles</span></h1>
          <p className="text-brand-mocha/70 text-lg leading-relaxed font-light">
            Expertly paired products designed to work in synergy. Save up to 25% when you invest in a complete system.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {bundles.map((bundle, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white p-6 shadow-sm rounded-sm"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-cream mb-6">
                <img src={bundle.image} alt={bundle.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-brand-rose text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">Save</div>
              </div>
              <h3 className="text-2xl font-serif mb-2">{bundle.title}</h3>
              <p className="text-sm text-brand-mocha/60 mb-4 line-clamp-2">{bundle.description}</p>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-lg font-bold">{bundle.price}</span>
                <span className="text-sm line-through opacity-30">{bundle.originalPrice}</span>
              </div>
              <button className="w-full bg-brand-mocha text-white py-5 text-[11px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-brand-rose transition-colors">
                <ShoppingBag className="w-4 h-4" /> Add Set To Bag
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bundles;
