import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const Manifesto = () => {
  return (
    <div className="pt-32 md:pt-48 bg-brand-cream min-h-screen">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
                <header className="mb-20">
                    <span className="text-brand-rose uppercase tracking-[0.3em] text-[10px] font-bold block mb-4 italic">Our Core Philosophy</span>
                    <h1 className="text-6xl md:text-[10rem] font-serif leading-[0.8] mb-12 -ml-2">
                        The <br/>
                        <span className="italic">Manifesto</span>
                    </h1>
                </header>
                <div className="max-w-xl space-y-12 text-brand-mocha leading-relaxed">
                    <p className="text-2xl font-serif italic opacity-80">
                        "Skin is our largest organ, yet we treat its imperfections like a personal failure. We're here to change the narrative."
                    </p>
                    <div className="space-y-8 text-lg font-light opacity-60">
                        <p>
                            We started Skinrise Collective because the beauty industry was loud, aggressive, and obsessed with "fixing" you. We saw products that promised clarity but delivered dryness, redness, and a broken barrier.
                        </p>
                        <p>
                            Our manifesto is simple: We believe in <strong>Barrier-First Care</strong>. Everything we create is designed to protect your skin's fundamental structure while managing acne and inflammation.
                        </p>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-5 relative">
                <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop" 
                      alt="Manifesto detail" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white border border-brand-mocha/5 p-8 flex items-center justify-center transform rotate-3 shadow-lg hidden md:flex">
                   <Quote className="w-8 h-8 text-brand-rose opacity-20 absolute top-4 left-4" />
                   <p className="text-[11px] uppercase font-bold tracking-[0.2em] text-center leading-loose">Truth In Every <br/> Drop.</p>
                </div>
            </div>
        </div>

        {/* The Three Pillars */}
        <section className="mt-48 pt-48 border-t border-brand-mocha/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
                <div className="space-y-6">
                    <span className="text-4xl font-serif text-brand-rose/20">01</span>
                    <h3 className="text-2xl font-serif">Radical Transparency</h3>
                    <p className="text-brand-mocha/60 text-sm leading-loose">We share every ingredient, its concentration, and its purpose. No secret fillers, no marketing puffery. Just clear, clinical reason.</p>
                </div>
                <div className="space-y-6">
                    <span className="text-4xl font-serif text-brand-rose/20">02</span>
                    <h3 className="text-2xl font-serif">In-House Formulation</h3>
                    <p className="text-brand-mocha/60 text-sm leading-loose">Unlike many brands, we don't white-label. Every formula is designed and tested in our New York lab alongside lead dermatologists.</p>
                </div>
                <div className="space-y-6">
                    <span className="text-4xl font-serif text-brand-rose/20">03</span>
                    <h3 className="text-2xl font-serif">Community Driven</h3>
                    <p className="text-brand-mocha/60 text-sm leading-loose">Our products are built for you, with you. We listen to thousands of testimonials to iterate and improve our staples every single season.</p>
                </div>
            </div>
        </section>

        {/* Narrative Section */}
        <section className="mt-48 bg-white p-12 md:p-32 rounded-sm text-center">
             <div className="max-w-3xl mx-auto space-y-12">
                <h2 className="text-4xl md:text-6xl font-serif leading-tight">It's Not About Perfection. <br/> <span className="italic">It's About Confidence.</span></h2>
                <div className="w-16 h-[1px] bg-brand-rose mx-auto" />
                <p className="text-xl font-light text-brand-mocha/70 italic leading-relaxed">
                   "We've spent years hiding under makeup, avoiding mirrors, and feeling less-than. Skinrise is our way of helping people look their reflection in the eye with pride. We don't want you to have 'perfect' skin—we want you to have healthy skin."
                </p>
                <div className="pt-8">
                   <p className="font-bold uppercase tracking-widest text-[10px] text-brand-mocha/40">- Elena Rossi, Founder</p>
                </div>
             </div>
        </section>
      </div>
    </div>
  );
};

export default Manifesto;
