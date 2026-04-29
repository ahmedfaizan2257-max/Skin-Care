import { motion } from 'motion/react';
import { Search, Mail, MessageCircle, HelpCircle } from 'lucide-react';

const HelpCenter = () => {
  const faqs = [
    {
      q: "How long does shipping take?",
      a: "Domestic orders typically arrive within 3-5 business days. International shipping can take 7-14 days depending on the destination."
    },
    {
      q: "Are your products cruelty-free?",
      a: "Yes, 100%. We never test on animals and we ensure all our ingredient suppliers follow the same strict ethical standards."
    },
    {
      q: "Can I use these products while pregnant?",
      a: "Most of our products are pregnancy-safe, but we always recommend consulting with your doctor regarding specific ingredients like salicylic acid."
    },
    {
      q: "What is your return policy?",
      a: "We offer a 30-day happiness guarantee. If you're not seeing results, we'll give you a full refund, no questions asked."
    }
  ];

  return (
    <div className="pt-32 md:pt-48 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <header className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-rose uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">Customer Support</span>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8">How can we <br/><span className="italic">help you?</span></h1>
          <div className="relative max-w-xl mx-auto">
            <input 
              type="text" 
              placeholder="Search for questions..." 
              className="w-full pl-12 pr-6 py-4 bg-brand-cream border-none rounded-sm text-sm focus:ring-1 focus:ring-brand-rose transition-all outline-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-mocha/40" />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: Mail, title: "Email Us", desc: "Response within 24h", link: "mailto:hello@skinrise.com" },
            { icon: MessageCircle, title: "Live Chat", desc: "Available 9am - 5pm EST", link: "#" },
            { icon: HelpCircle, title: "FAQ", desc: "Commonly asked questions", link: "#faq" }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-brand-cream rounded-sm text-center space-y-4 hover:shadow-lg transition-all duration-500 cursor-pointer">
              <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full mx-auto mb-4">
                <item.icon className="w-5 h-5 text-brand-rose" />
              </div>
              <h3 className="text-xl font-serif">{item.title}</h3>
              <p className="text-sm text-brand-mocha/60">{item.desc}</p>
            </div>
          ))}
        </div>

        <div id="faq" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-b border-brand-mocha/10 pb-8"
              >
                <h4 className="text-lg font-medium mb-3">{faq.q}</h4>
                <p className="text-brand-mocha/60 leading-relaxed text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
