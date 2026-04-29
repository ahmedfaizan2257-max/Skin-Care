import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-40 md:pt-48 pb-24 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div>
              <span className="text-brand-rose uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Get In Touch</span>
              <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">We're Here <br/><span className="italic">For Your Skin</span></h1>
              <p className="text-brand-mocha/70 text-lg font-light leading-relaxed max-w-md">
                Have a question about a product, your order, or just want to talk rituals? Our Skin Concierge team is ready to help.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                 <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-sm">
                    <Mail className="w-5 h-5 text-brand-mocha" />
                 </div>
                 <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-brand-mocha/40 mb-1">Email Us</p>
                    <p className="text-brand-mocha font-medium">hello@skinrisecollective.com</p>
                 </div>
              </div>
              <div className="flex items-center gap-6">
                 <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-sm">
                    <Phone className="w-5 h-5 text-brand-mocha" />
                 </div>
                 <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-brand-mocha/40 mb-1">Call Us</p>
                    <p className="text-brand-mocha font-medium">+1 (555) 0123-4567</p>
                 </div>
              </div>
              <div className="flex items-center gap-6">
                 <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-sm">
                    <MapPin className="w-5 h-5 text-brand-mocha" />
                 </div>
                 <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-brand-mocha/40 mb-1">Studio</p>
                    <p className="text-brand-mocha font-medium">123 Botanical Ave, Brooklyn, NY</p>
                 </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-12 shadow-2xl rounded-sm"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest">First Name</label>
                  <input type="text" className="w-full border-b border-brand-mocha/10 py-3 outline-none focus:border-brand-rose transition-colors" placeholder="Elena" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest">Last Name</label>
                  <input type="text" className="w-full border-b border-brand-mocha/10 py-3 outline-none focus:border-brand-rose transition-colors" placeholder="Rise" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest">Email Address</label>
                <input type="email" className="w-full border-b border-brand-mocha/10 py-3 outline-none focus:border-brand-rose transition-colors" placeholder="hello@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest">Subject</label>
                <select className="w-full border-b border-brand-mocha/10 py-3 outline-none focus:border-brand-rose transition-colors bg-white">
                  <option>Order Inquiry</option>
                  <option>Product Advice</option>
                  <option>Press & Partnerships</option>
                  <option>Wholesale</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest">Message</label>
                <textarea rows={4} className="w-full border-b border-brand-mocha/10 py-3 outline-none focus:border-brand-rose transition-colors resize-none" placeholder="Tell us how we can help..." />
              </div>
              <button className="w-full bg-brand-mocha text-white py-5 font-bold uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-3 hover:bg-brand-rose transition-all">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
