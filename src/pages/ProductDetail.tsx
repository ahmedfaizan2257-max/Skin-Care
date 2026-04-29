import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, ShoppingBag, ArrowLeft, CheckCircle2, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useState, useEffect } from 'react';
import { ProductCard } from '../App';

const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  // Related products: items in the same category, excluding the current product
  const relatedProducts = PRODUCTS
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-48 pb-24 text-center min-h-screen">
        <h2 className="text-4xl font-serif mb-6">Product Not Found</h2>
        <Link to="/shop" className="text-brand-rose font-bold uppercase tracking-widest text-xs border-b border-brand-rose">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 md:pt-48 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Breadcrumb / Back */}
        <div className="mb-12">
           <Link to="/shop" className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-brand-mocha/40 hover:text-brand-rose transition-colors">
              <ArrowLeft className="w-3 h-3" /> Back To Shop
           </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
           {/* Product Image */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             key={product.id}
             className="relative aspect-square bg-brand-cream overflow-hidden rounded-sm group"
           >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              {product.tag && (
                 <span className="absolute top-6 left-6 bg-brand-mocha text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2">
                    {product.tag}
                 </span>
              )}
           </motion.div>

           {/* Product Info */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             key={`info-${product.id}`}
             className="flex flex-col"
           >
              <div className="flex items-center gap-2 mb-6">
                 <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-brand-rose text-brand-rose' : 'text-brand-mocha/10'}`} />
                    ))}
                 </div>
                 <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">(48 Reviews)</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-serif mb-4 leading-tight">{product.name}</h1>
              <p className="text-2xl font-light text-brand-mocha mb-8">{product.price}</p>
              
              <div className="space-y-6 mb-12">
                 <p className="text-brand-mocha/70 leading-relaxed text-lg font-light italic">
                    {product.longDescription}
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-mocha/60">
                       <ShieldCheck className="w-4 h-4 text-brand-sage" /> Sensitive Safe
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-mocha/60">
                       <CheckCircle2 className="w-4 h-4 text-brand-sage" /> Cruelty Free
                    </div>
                 </div>
              </div>

              {/* Purchase Section */}
              <div className="space-y-6 pt-8 border-t border-brand-mocha/10">
                 <div className="flex items-center gap-6">
                    <div className="flex items-center border border-brand-mocha/10 rounded-sm">
                       <button 
                         onClick={() => setQuantity(Math.max(1, quantity - 1))}
                         className="px-4 py-3 hover:bg-brand-cream transition-colors text-lg"
                       >
                         -
                       </button>
                       <span className="px-4 py-3 min-w-[50px] text-center font-bold">{quantity}</span>
                       <button 
                         onClick={() => setQuantity(quantity + 1)}
                         className="px-4 py-3 hover:bg-brand-cream transition-colors text-lg"
                       >
                         +
                       </button>
                    </div>
                    <button className="flex-1 bg-brand-mocha text-white py-5 font-bold uppercase text-[11px] tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-brand-rose transition-all rounded-sm shadow-xl">
                       <ShoppingBag className="w-4 h-4" /> Add To Bag
                    </button>
                    <button className="p-5 border border-brand-mocha/10 hover:bg-brand-cream transition-colors rounded-sm">
                       <Heart className="w-5 h-5" />
                    </button>
                 </div>
                 <p className="text-center text-[10px] uppercase font-bold tracking-widest opacity-30 italic">Free express shipping on orders over $50</p>
              </div>
           </motion.div>
        </div>

        {/* Details Tabs-like structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-brand-mocha/10 pt-20 mb-40">
           <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-8 border-b border-brand-mocha/5 pb-4">Key Ingredients</h3>
              <ul className="space-y-4">
                 {product.ingredients.map((ing, i) => (
                   <li key={i} className="flex items-center gap-3 text-sm text-brand-mocha/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-rose" />
                      {ing}
                   </li>
                 ))}
              </ul>
           </div>
           <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-8 border-b border-brand-mocha/5 pb-4">How To Use</h3>
              <ul className="space-y-6">
                 {product.usage.map((step, i) => (
                   <li key={i} className="flex gap-4">
                      <span className="text-[10px] font-bold text-brand-rose/40 mt-1">0{i+1}</span>
                      <p className="text-sm text-brand-mocha/70 leading-relaxed font-light">{step}</p>
                   </li>
                 ))}
              </ul>
           </div>
           <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-8 border-b border-brand-mocha/5 pb-4">Our Promise</h3>
              <div className="p-8 bg-brand-cream rounded-sm italic text-sm text-brand-mocha/70 leading-relaxed">
                 "Every batch is lab-tested in New York for stability and purity. If you don't love the results within 30 days, we'll give you a full refund—no questions asked."
              </div>
           </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="pt-20 border-t border-brand-mocha/5">
             <div className="flex justify-between items-end mb-12">
                <div>
                   <span className="text-brand-rose uppercase tracking-[0.2em] text-[10px] font-bold mb-4 block">Complete Your Ritual</span>
                   <h2 className="text-4xl font-serif">You May Also Like</h2>
                </div>
                <Link to="/shop" className="text-[10px] font-bold uppercase tracking-widest border-b border-brand-mocha pb-1 hover:text-brand-rose transition-colors">
                   View All
                </Link>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((p, i) => (
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
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
