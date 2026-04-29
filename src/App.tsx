/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Search, 
  CheckCircle2, 
  Star, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useLayoutEffect } from 'react';

// --- Pages ---
import { PRODUCTS } from './data/products';
import { ChatBox } from './components/ChatBox';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import Bundles from './pages/Bundles';
import HelpCenter from './pages/HelpCenter';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';
import SkinConcierge from './pages/SkinConcierge';
import BestSellers from './pages/BestSellers';
import NewArrivals from './pages/NewArrivals';
import TrackOrder from './pages/TrackOrder';
import Blogs from './pages/Blogs';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Quiz from './pages/Quiz';
import Science from './pages/Science';
import Manifesto from './pages/Manifesto';
import ProductDetail from './pages/ProductDetail';
import CollectionDetail from './pages/CollectionDetail';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Components ---

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b bg-white/95 backdrop-blur-md border-brand-mocha/10 shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-brand-mocha">
        
        {/* Top Row: Mobile Menu (Left), Logo (Center), Actions (Right) */}
        <div className="w-full flex justify-between items-center mb-4">
          <div className="flex-1 flex justify-start">
            <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>

          <Link to="/" className="flex-1 text-center text-xl md:text-3xl font-serif font-bold tracking-[0.2em] hover:opacity-80 transition-opacity">
            SKINRISE COLLECTIVE
          </Link>

          <div className="flex-1 flex justify-end items-center gap-6">
            <button className="hover:text-brand-rose transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative hover:text-brand-rose transition-colors text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden lg:inline opacity-40 text-[9px]">(0)</span>
            </button>
          </div>
        </div>

        {/* Bottom Row: Desktop Navigation Links */}
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.25em] font-bold border-t border-brand-mocha/5 w-full justify-center pt-6">
          <Link to="/" className="hover:text-brand-rose transition-all hover:tracking-[0.3em]">Home</Link>
          <Link to="/shop" className="hover:text-brand-rose transition-all hover:tracking-[0.3em]">Shop</Link>
          <Link to="/blogs" className="hover:text-brand-rose transition-all hover:tracking-[0.3em]">Blog</Link>
          <Link to="/track-order" className="hover:text-brand-rose transition-all hover:tracking-[0.3em]">Track Order</Link>
          <Link to="/about" className="hover:text-brand-rose transition-all hover:tracking-[0.3em]">About</Link>
          <Link to="/contact" className="hover:text-brand-rose transition-all hover:tracking-[0.3em]">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif text-xl border-b border-brand-mocha pb-1">Skinrise Collective</span>
              <button onClick={() => setMobileMenuOpen(false)}><X className="w-6 h-6" /></button>
            </div>
            <div className="flex flex-col gap-8 text-2xl font-serif italic text-brand-mocha">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop Collections</Link>
              <Link to="/blogs" onClick={() => setMobileMenuOpen(false)}>The Journal</Link>
              <Link to="/track-order" onClick={() => setMobileMenuOpen(false)}>Track Order</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>Our Story</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32 md:pt-44">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1600&auto=format&fit=crop" 
          alt="Skinrise hero"
          className="w-full h-full object-cover brightness-[0.7] contrast-[1.1]" 
        />
        <div className="absolute inset-0 bg-brand-mocha/30 mix-blend-multiply" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto flex flex-col items-center">
        <div className="text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 text-brand-sage text-[11px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            <CheckCircle2 className="w-4 h-4" /> Dermatologist Recommended
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl text-white font-serif mb-8 leading-[1.05] font-light"
          >
            Finally. Skincare That Actually Works For Acne-Prone Skin
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/80 text-base md:text-lg font-light mb-10 max-w-lg leading-relaxed"
          >
            Gentle, effective formulas designed to clear, calm and protect your skin — without harsh ingredients or broken promises.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/shop" className="w-full sm:w-auto bg-brand-mocha text-white px-10 py-5 font-bold tracking-[0.2em] uppercase text-[11px] rounded-[2px] hover:bg-brand-rose transition-all transform hover:-translate-y-0.5 text-center">
              Shop The Routine
            </Link>
            <Link to="/quiz" className="w-full sm:w-auto border border-white text-white px-10 py-5 font-bold tracking-[0.2em] uppercase text-[11px] rounded-[2px] backdrop-blur-sm hover:bg-white hover:text-brand-mocha transition-all transform hover:-translate-y-0.5 text-center">
              Take Skin Quiz
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-60">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
           <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
           />
        </div>
      </motion.div>
    </section>
  );
};

export const TrustBar = () => {
  const trusts = [
    { label: "Non-Comedogenic", icon: "✓" },
    { label: "Cruelty Free", icon: "✓" },
    { label: "Clean Formulas", icon: "✓" },
    { label: "Free Shipping Over $50", icon: "✓" },
  ];

  return (
    <section className="bg-brand-cream h-[60px] flex items-center border-b border-brand-mocha/5">
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-around">
        {trusts.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] text-brand-mocha/70 uppercase">
             <span className="text-brand-sage">✓</span> {item.label}
          </div>
        ))}
      </div>
    </section>
  );
};

interface ProductCardProps {
  key?: any;
  name: string;
  price: string;
  description: string;
  image: string;
  tag?: string;
  rating: number;
}

export const ProductCard = ({ name, price, description, image, tag, rating, id }: ProductCardProps & { id?: string }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group bg-white p-[15px] shadow-sleek rounded-[4px] border border-brand-cream/50"
    >
      <Link to={id ? `/product/${id}` : "/shop"} className="block relative aspect-square bg-[#F2F2F2] overflow-hidden mb-5">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
        />
        {tag && (
          <span className={`absolute top-[10px] left-[10px] text-white text-[8px] uppercase tracking-[0.1em] px-2 py-1 font-bold ${tag.includes('left') ? 'bg-brand-mocha' : 'bg-brand-rose'}`}>
            {tag}
          </span>
        )}
      </Link>
      <div className="space-y-1">
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-[#f59e0b] text-[#f59e0b]" />
          ))}
          <span className="text-[10px] font-bold text-brand-mocha/30 ml-1 uppercase">(128)</span>
        </div>
        <Link to={id ? `/product/${id}` : "/shop"}>
          <h3 className="font-serif text-lg leading-tight hover:text-brand-rose transition-colors">{name}</h3>
        </Link>
        <p className="text-[12px] opacity-70 leading-relaxed max-w-[90%]">{description}</p>
        <div className="flex justify-between items-center pt-3 mt-1">
           <span className="font-bold text-base tracking-tight">{price}</span>
           <button className="bg-brand-sage text-white px-6 py-3 text-[10px] font-bold uppercase rounded-[2px] hover:bg-brand-mocha transition-colors">
              Add To Cart
           </button>
        </div>
      </div>
    </motion.div>
  );
};

export const FeaturedProducts = () => {
  // Use the first 3 products as featured
  const products = PRODUCTS.slice(0, 3);

  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-brand-mocha font-serif">Our Best Sellers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          {products.map((p, i) => (
            <ProductCard 
              key={p.id} 
              id={p.id}
              name={p.name}
              price={p.price}
              description={p.description}
              image={p.image}
              tag={p.tag}
              rating={p.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Collections = () => {
  const collections = [
    {
      title: "The Glass Skin Set",
      subtitle: "Ultimate Radiance",
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop",
      link: "/collection/cleansers",
      color: "bg-[#F9F5F1]"
    },
    {
      title: "The Barrier Rescue",
      subtitle: "Strength & Repair",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
      link: "/collection/serums",
      color: "bg-[#F1F5F9]"
    },
    {
      title: "The Night Ritual",
      subtitle: "Restorative Care",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
      link: "/collection/moisturizers",
      color: "bg-[#F9F1F1]"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-brand-rose uppercase tracking-[0.2em] text-[10px] font-bold mb-4 block">Curated Sets</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">Explore Our Collections</h2>
          </div>
          <Link to="/bundles" className="text-[11px] font-bold uppercase tracking-widest border-b border-brand-mocha pb-1 hover:text-brand-rose hover:border-brand-rose transition-colors">
            View All Bundles
          </Link>
        </div>
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((col, idx) => (
            <Link 
              key={idx}
              to={col.link}
              className="block"
            >
              <motion.div 
                whileHover={{ y: -10 }}
                className={`relative aspect-[4/5] overflow-hidden group cursor-pointer ${col.color}`}
              >
                <img 
                  src={col.image} 
                  alt={col.title} 
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-white/90 via-white/40 to-transparent">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-rose mb-2 block">{col.subtitle}</span>
                  <h3 className="text-2xl font-serif mb-4">{col.title}</h3>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                    Shop Collection <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HowItWorks = () => {
  const steps = [
    { title: "Cleanse", desc: "Remove dirt, oil & impurities gently without stripping natural oils.", idx: "01" },
    { title: "Treat", desc: "Target breakouts with active, dermatologically-proven ingredients.", idx: "02" },
    { title: "Protect", desc: "Lock in moisture & shield from environmental damage daily.", idx: "03" }
  ];

  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl mb-6">Simple Routine. Real Results.</h2>
          <p className="text-brand-mocha/60 max-w-xl mx-auto">Skin care shouldn't be complicated. We focus on the essentials that actually transform your skin.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              <div className="mb-8 relative inline-block">
                <span className="font-serif text-8xl text-brand-rose/20 select-none">{step.idx}</span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                   <CheckCircle2 className="w-6 h-6 text-brand-mocha" />
                </div>
              </div>
              <h3 className="text-2xl mb-4 font-serif">{step.title}</h3>
              <p className="text-brand-mocha/70 text-sm leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Results = () => {
  const testimonials = [
    {
       name: "Sarah J.",
       text: "I've tried everything for my adult cystic acne. After 4 weeks of the Clarity bundle, my skin has never looked more calm.",
       rating: 5
    },
    {
       name: "Elena M.",
       text: "Finally a brand that respects my skin barrier while fighting breakouts. The SPF moisturizer is my holy grail.",
       rating: 5
    },
    {
       name: "Maya W.",
       text: "The Calm + Clear serum reduced my redness overnight. It's gentle but insanely effective. 10/10 recommendation.",
       rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl mb-20">Real Results From Real People</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-10 border border-brand-cream bg-white relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-brand-rose text-brand-rose" />
                ))}
              </div>
              <p className="text-brand-mocha font-serif text-lg italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-brand-sage flex items-center justify-center text-white text-[10px] font-bold">
                    {t.name[0]}
                 </div>
                 <div>
                    <p className="text-xs font-bold uppercase tracking-widest">{t.name}</p>
                    <div className="flex items-center gap-1 text-brand-sage text-[10px] font-bold uppercase tracking-tight">
                       <CheckCircle2 className="w-3 h-3" />
                       Verified Buyer
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section className="py-24 bg-brand-cream">
       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full md:w-1/2 aspect-[4/5] relative">
             <img 
               src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop" 
               alt="Skinrise Founder" 
               className="w-full h-full object-cover"
             />
             <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-sage flex items-center justify-center p-8 text-white hidden lg:flex">
                <p className="font-serif italic text-xl text-center">Built for those who feel overseen by the industry.</p>
             </div>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
             <span className="text-brand-rose uppercase tracking-[0.2em] text-xs font-bold block">Our Story</span>
             <h2 className="text-4xl md:text-5xl lg:text-7xl leading-[1.1]">Born From Frustration.<br/>Built With Purpose.</h2>
             <div className="space-y-6 text-brand-mocha/70 leading-relaxed text-lg italic">
                <p>We spent years searching for products that didn't treat acne-prone skin like a problem to be aggressively scrubbed away.</p>
                <p>Skinrise Collective was founded on the belief that clear skin shouldn't come at the cost of a damaged barrier. We formulated everything in-house with leading dermatologists to ensure efficacy without irritation.</p>
                <p>Our goal is simple: to help you fall in love with your reflection again, one gentle step at a time.</p>
             </div>
             <div className="flex flex-col sm:flex-row gap-6 pt-4 relative z-30">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link to="/manifesto" className="block bg-brand-mocha text-white px-10 py-5 font-bold text-[11px] uppercase tracking-widest hover:bg-brand-rose transition-all text-center rounded-sm shadow-lg">
                       Our Full Manifesto
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link to="/science" className="block border-2 border-brand-mocha px-10 py-5 font-bold text-[11px] uppercase tracking-widest hover:bg-brand-mocha hover:text-white transition-all text-center rounded-sm">
                       View Scientific Data
                    </Link>
                </motion.div>
             </div>
          </div>
       </div>
    </section>
  );
};

export const InstagramStrip = () => {
  const images = [
     "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=300&auto=format&fit=crop",
     "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=300&auto=format&fit=crop",
     "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=400&auto=format&fit=crop",
     "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=300&auto=format&fit=crop",
     "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=300&auto=format&fit=crop"
  ];

  return (
    <section className="bg-white">
       <div className="py-24 text-center">
          <h2 className="text-3xl md:text-5xl mb-4">Community Focused</h2>
          <p className="text-brand-rose font-medium tracking-[0.2em] uppercase text-sm mb-12 flex justify-center items-center gap-2">
            @skinrisecollective <span className="w-8 h-[1px] bg-brand-rose" />
          </p>
          <div className="flex flex-wrap md:flex-nowrap justify-center">
             {images.map((img, i) => (
                <div key={i} className="w-1/2 md:w-1/5 aspect-square overflow-hidden group cursor-pointer border-r border-b border-brand-cream/10">
                   <img src={img} alt="Skin" className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-brand-mocha/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Instagram className="text-white w-6 h-6" />
                   </div>
                </div>
             ))}
          </div>
          <button className="mt-16 bg-brand-mocha text-white px-10 py-4 uppercase text-xs tracking-[0.2em] font-bold hover:bg-brand-rose transition-colors">
            Follow Our Journey
          </button>
       </div>
    </section>
  );
};

export const Signup = () => {
  return (
    <section className="px-6 pb-24">
       <div className="max-w-7xl mx-auto bg-brand-rose h-[150px] md:h-[120px] flex flex-col md:flex-row items-center justify-between px-12 text-white overflow-hidden">
          <div className="text-center md:text-left space-y-1 py-6 md:py-0">
             <h3 className="text-2xl font-serif">Get 15% Off Your First Order</h3>
             <p className="text-xs opacity-90 max-w-sm">Join thousands of women on their journey to clearer, healthier skin.</p>
          </div>
          <form className="flex gap-2 w-full md:w-auto pb-6 md:pb-0" onSubmit={(e) => e.preventDefault()}>
             <input 
               type="email" 
               placeholder="Enter your email address" 
               className="flex-1 md:w-[250px] bg-white text-brand-mocha px-6 py-3 text-xs focus:outline-none rounded-[2px]"
             />
             <button className="bg-brand-mocha text-white px-10 py-4 uppercase font-bold tracking-widest text-[11px] hover:bg-brand-sage transition-all rounded-[2px]">
               Subscribe
             </button>
          </form>
       </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-brand-cream pt-24 pb-12">
       <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
             <div className="space-y-6">
                <h2 className="text-2xl font-serif font-bold">Skinrise Collective</h2>
                <p className="text-brand-mocha/60 text-sm leading-relaxed max-w-[240px]">Redefining confidence through gentle, science-backed acne care. Made for you, with you.</p>
                <div className="flex gap-6 items-center">
                   <a href="#" className="hover:text-brand-rose transition-colors"><Instagram className="w-5 h-5" /></a>
                   <a href="#" className="hover:text-brand-rose transition-colors"><Facebook className="w-5 h-5" /></a>
                   <a href="#" className="hover:text-brand-rose transition-colors font-bold text-sm tracking-tighter italic font-serif">TikTok</a>
                </div>
             </div>
                <div>
                <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] mb-8 opacity-40">Store</h4>
                <ul className="space-y-4 text-sm font-medium">
                   <li><Link to="/shop" className="hover:text-brand-rose transition-colors">Shop All</Link></li>
                   <li><Link to="/bundles" className="hover:text-brand-rose transition-colors">Bundles</Link></li>
                   <li><Link to="/best-sellers" className="hover:text-brand-rose transition-colors">Best Sellers</Link></li>
                   <li><Link to="/new-arrivals" className="hover:text-brand-rose transition-colors">New Arrivals</Link></li>
                   <li><Link to="/blogs" className="hover:text-brand-rose transition-colors">The Journal</Link></li>
                </ul>
             </div>

             <div>
                <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] mb-8 opacity-40">Support</h4>
                <ul className="space-y-4 text-sm font-medium">
                   <li><Link to="/help-center" className="hover:text-brand-rose transition-colors">Help Center</Link></li>
                   <li><Link to="/shipping" className="hover:text-brand-rose transition-colors">Shipping</Link></li>
                   <li><Link to="/returns" className="hover:text-brand-rose transition-colors">Returns</Link></li>
                   <li><Link to="/track-order" className="hover:text-brand-rose transition-colors">Track Order</Link></li>
                   <li><Link to="/skin-concierge" className="hover:text-brand-rose transition-colors">Skin Concierge</Link></li>
                </ul>
             </div>

             <div>
                <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] mb-8 opacity-40">Location</h4>
                <p className="text-sm italic font-serif opacity-60 leading-relaxed max-w-[200px]">
                  Unit 42, The Creative Quarter<br/>
                  New York, NY 10013<br/>
                  hello@skinrisecollective.com
                </p>
             </div>
          </div>
          <div className="border-t border-brand-cream pt-12 text-center">
            <div className="flex justify-center gap-8 text-[10px] uppercase font-bold tracking-[0.2em] text-brand-mocha/40 mb-4">
              <Link to="/privacy" className="hover:text-brand-rose transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-brand-rose transition-colors">Terms of Service</Link>
              <Link to="/shipping" className="hover:text-brand-rose transition-colors">Shipping Info</Link>
            </div>
            <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-mocha/30">
              © 2026 Skinrise Collective. All Rights Reserved. Built with ritual and care.
            </div>
          </div>
       </div>
    </footer>
  );
};

export const ProductDemo = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-brand-rose uppercase tracking-[0.2em] text-xs font-bold block">The Skin Ritual</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">See The Results<br/>In Action</h2>
            <p className="text-brand-mocha/70 text-lg leading-relaxed font-light">
              We believe in transparency. Watch how our Clarity Ritual transforms tired, congested skin into a glowing, calm complexion in real-time.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-brand-sage text-white flex items-center justify-center flex-shrink-0 text-[10px] font-bold mt-1">1</div>
                <div>
                   <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Gentle Extraction</h4>
                   <p className="text-sm opacity-60">Dissolves stubborn debris without irritation.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-brand-sage text-white flex items-center justify-center flex-shrink-0 text-[10px] font-bold mt-1">2</div>
                <div>
                   <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Cellular Repair</h4>
                   <p className="text-sm opacity-60">Peptides work at the source to calm inflammation.</p>
                </div>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative z-30">
              <Link to="/science" className="bg-brand-mocha text-white px-10 py-5 font-bold tracking-[0.2em] uppercase text-[11px] rounded-[2px] transition-all hover:bg-brand-rose flex items-center justify-center text-center cursor-pointer w-full sm:w-auto shadow-xl">
                View Scientific Data
              </Link>
            </motion.div>
          </div>
          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-brand-cream overflow-hidden shadow-2xl rounded-sm">
             <img 
               src="https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=1000&auto=format&fit=crop" 
               alt="Skincare routine application"
               className="w-full h-full object-cover" 
             />
             <div className="absolute inset-0 bg-brand-rose/10 mix-blend-overlay" />
             <div className="absolute bottom-10 left-10 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2">The Ritual</p>
                <h3 className="text-3xl font-serif">4 Minute Transformation</h3>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative selection:bg-brand-rose selection:text-white">
        {/* Scroll progress bar - moved to a component that can use useScroll */}
        <ScrollProgress />

        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/bundles" element={<Bundles />} />
            <Route path="/best-sellers" element={<BestSellers />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/skin-concierge" element={<SkinConcierge />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/science" element={<Science />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/collection/:id" element={<CollectionDetail />} />
          </Routes>
        </main>

        <Footer />

        {/* Mobile Sticky CTA */}
        <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
           <Link to="/shop" className="w-full bg-brand-mocha text-white py-5 shadow-2xl uppercase text-[11px] tracking-[0.2em] font-bold rounded-[100px] flex items-center justify-center">
              Shop Now →
           </Link>
        </div>

        {/* AI Skin Concierge Chatbox */}
        <ChatBox />
      </div>
    </Router>
  );
}

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-brand-rose z-[70] origin-left"
      style={{ scaleX }}
    />
  );
};

