import { motion } from 'motion/react';
import { Calendar, MessageSquare, ShieldCheck } from 'lucide-react';

const SkinConcierge = () => {
  return (
    <div className="pt-32 md:pt-48 bg-brand-mocha text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <header>
              <span className="text-brand-rose uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">Personal Consultation</span>
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.2] mb-8">Your Skin <br/><span className="italic">Elevated</span></h1>
              <p className="text-white/60 text-lg leading-relaxed font-light max-w-xl">
                Navigating skincare can be overwhelming. Our Skin Concierge service connects you with experts to build a routine that actually works for your unique biology.
              </p>
            </header>

            <div className="space-y-8">
              {[
                { icon: MessageSquare, title: "1:1 Virtual Chat", desc: "Text our specialists any time for routine adjustments or product questions." },
                { icon: Calendar, title: "Book A Deep Dive", desc: "A 15-minute video call to analyze your current skin state and long-term goals." },
                { icon: ShieldCheck, title: "Expert Vetted", desc: "All advice is backed by our board of clinical dermatologists." }
              ].map((service, i) => (
                <div key={i} className="flex gap-6 items-start">
                   <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 text-brand-rose" />
                   </div>
                   <div>
                      <h4 className="text-xl font-serif mb-2">{service.title}</h4>
                      <p className="text-sm text-white/50">{service.desc}</p>
                   </div>
                </div>
              ))}
            </div>

            <button className="bg-brand-rose text-white px-12 py-5 font-bold uppercase text-[11px] tracking-widest rounded-[2px] transition-all transform hover:scale-105">
              Book Your Appointment Now
            </button>
          </div>

          <div className="relative aspect-square md:aspect-[4/5] rounded-sm overflow-hidden border border-white/10">
             <img 
               src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop" 
               alt="Expert Consultation"
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
             />
             <div className="absolute inset-0 bg-brand-rose/20 mix-blend-overlay" />
             <div className="absolute bottom-8 right-8 bg-white text-brand-mocha p-6 max-w-xs shadow-2xl">
                <p className="text-xs uppercase font-bold tracking-widest mb-2">Member Perk</p>
                <p className="text-sm italic">"The concierge service transformed my skin in 4 weeks. I was using too many actives; they helped me simplify."</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinConcierge;
