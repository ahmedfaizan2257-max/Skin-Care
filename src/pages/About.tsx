import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 md:pt-48 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-brand-cream border-b border-brand-mocha/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-brand-rose uppercase tracking-[0.3em] text-[10px] font-bold block">Our Philosophy</span>
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.1]">We Believe Your <br/><span className="italic">Skin Is Not A Problem</span></h1>
              <p className="text-brand-mocha/70 text-lg leading-relaxed font-light max-w-xl">
                The industry has spent decades telling people with acne that their skin is "dirty" or needs to be "corrected." We're here to change that narrative.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop" 
                 alt="Skinrise Vision" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-32">
         <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-12 italic">Built By Those Who Lived It</h2>
            <div className="space-y-8 text-xl text-brand-mocha/80 leading-loose font-light">
               <p>
                 Skinrise Collective was born in a small kitchen in Brooklyn, fueled by years of frustration with clinical products that felt cold, harsh, and frankly, didn't work.
               </p>
               <p>
                 Our founder, Elena, spent her entire 20s hiding from mirrors. She didn't want another 10-step routine; she wanted clarity, both for her skin and the industry.
               </p>
               <p>
                 Today, we collaborate with top-tier dermatologists and chemists to bridge the gap between "clean" and "clinical." We create the stuff we wish we had a decade ago.
               </p>
            </div>
         </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brand-mocha text-white">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-4">
               <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full">
                  <CheckCircle2 className="text-brand-rose w-6 h-6" />
               </div>
               <h3 className="text-2xl font-serif">Radical Transparency</h3>
               <p className="text-white/60 text-sm leading-relaxed">No "secret ingredients." Every component of our formula is listed, explained, and justified. If it's in the bottle, it's there for a reason.</p>
            </div>
            <div className="space-y-4">
               <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full">
                  <CheckCircle2 className="text-brand-rose w-6 h-6" />
               </div>
               <h3 className="text-2xl font-serif">Kindness First</h3>
               <p className="text-white/60 text-sm leading-relaxed">Your skin barrier is sacred. Our products prioritize repair and protection over aggressive "curing," leading to long-term health, not short-term fixes.</p>
            </div>
            <div className="space-y-4">
               <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full">
                  <CheckCircle2 className="text-brand-rose w-6 h-6" />
               </div>
               <h3 className="text-2xl font-serif">Low Waste</h3>
               <p className="text-white/60 text-sm leading-relaxed">Sustainability isn't a marketing buzzword. We use recycled glass and post-consumer plastics, minimizing our footprint while maximizing your glow.</p>
            </div>
         </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-white text-center">
         <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-serif mb-8">Join The Collective</h2>
            <p className="mb-12 text-brand-mocha/60">Be the first to hear about new launches, clinical data releases, and community stories.</p>
            <button className="bg-brand-rose text-white px-12 py-5 font-bold uppercase text-[11px] tracking-widest rounded-[2px] transition-all transform hover:-translate-y-1">
               Subscribe To Our Newsletter <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </button>
         </div>
      </section>
    </div>
  );
};

export default About;
