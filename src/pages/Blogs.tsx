import { motion } from 'motion/react';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const posts = [
    {
      title: "The Science of Barrier Repair: Why Ceramide Content Matters",
      excerpt: "Understanding the lipid structure of your skin is the first step towards a healthy glow that lasts through seasons.",
      category: "Skin Science",
      date: "Oct 24, 2025",
      author: "Dr. Elena Rossi",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "5 Morning Rituals for Naturally Radiant Morning Skin",
      excerpt: "Beyond products, how you wake up your body dictates how your skin responds to the day's environmental stressors.",
      category: "Wellness",
      date: "Oct 18, 2025",
      author: "Sarah Jenkins",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Clean Beauty vs. Conscious Beauty: Which Path is Yours?",
      excerpt: "We dive deep into the terminology of the industry to help you make informed decisions about what you put on your body.",
      category: "Industry",
      date: "Oct 12, 2025",
      author: "Marcus Thorne",
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Winter Hydration: The Ultimate Guide to Cold Weather Skin",
      excerpt: "How to pivot your routine when the humidity drops and the wind picks up. Tips from our lead esthetician.",
      category: "Guides",
      date: "Oct 05, 2025",
      author: "Dr. Elena Rossi",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-32 md:pt-48 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <header className="max-w-3xl mb-20">
          <span className="text-brand-rose uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">The Journal</span>
          <h1 className="text-6xl md:text-8xl font-serif leading-tight">Stories <br/><span className="italic">from the Lab</span></h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {posts.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i % 2 * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-cream mb-8">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6 bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-brand-mocha">
                  {post.category}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest font-bold text-brand-mocha/40">
                  <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-2"><User className="w-3 h-3" /> {post.author}</span>
                </div>
                <h2 className="text-3xl font-serif leading-tight group-hover:text-brand-rose transition-colors">{post.title}</h2>
                <p className="text-brand-mocha/60 leading-relaxed font-light line-clamp-2">{post.excerpt}</p>
                <Link to="#" className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest group-hover:gap-5 transition-all">
                  Read Article <ArrowRight className="w-4 h-4 text-brand-rose" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 pt-24 border-t border-brand-mocha/10 text-center">
           <button className="border border-brand-mocha px-12 py-5 uppercase text-[11px] tracking-widest font-bold hover:bg-brand-mocha hover:text-white transition-all">
              Load More Articles
           </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
