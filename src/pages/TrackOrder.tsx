import { motion } from 'motion/react';
import { Package, Truck, CheckCircle2 } from 'lucide-react';

const TrackOrder = () => {
  return (
    <div className="pt-32 md:pt-48 bg-brand-cream min-h-screen">
      <div className="max-w-xl mx-auto px-6 pb-24">
        <header className="text-center mb-16">
          <span className="text-brand-rose uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">Order Status</span>
          <h1 className="text-5xl font-serif mb-6">Track Your <span className="italic">Order</span></h1>
          <p className="text-brand-mocha/60 font-light">Enter your details below to see the current status of your shipment.</p>
        </header>

        <div className="bg-white p-8 md:p-12 shadow-sm rounded-sm">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-mocha/40">Order Number</label>
              <input 
                type="text" 
                placeholder="e.g. #SR123456" 
                className="w-full px-4 py-4 bg-brand-cream border-none focus:ring-1 focus:ring-brand-rose outline-none transition-all text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-mocha/40">Email Address</label>
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full px-4 py-4 bg-brand-cream border-none focus:ring-1 focus:ring-brand-rose outline-none transition-all text-sm"
              />
            </div>
            <button className="w-full bg-brand-mocha text-white py-5 uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-brand-rose transition-colors">
              Find My Order
            </button>
          </form>
        </div>

        {/* Visual tracking steps (Mockup) */}
        <div className="mt-20 pt-20 border-t border-brand-mocha/10">
           <h3 className="text-center text-xs uppercase tracking-[0.3em] font-bold mb-12 opacity-30">Tracking Journey</h3>
           <div className="flex justify-between items-center relative">
              <div className="absolute left-0 right-0 h-px bg-brand-mocha/10 top-1/2 -z-10" />
              {[
                { icon: CheckCircle2, label: "Confirmed", active: true },
                { icon: Package, label: "Processing", active: true },
                { icon: Truck, label: "Shipped", active: false },
                { icon: CheckCircle2, label: "Delivered", active: false }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${step.active ? 'bg-brand-mocha text-white border-brand-mocha' : 'bg-white text-brand-mocha/20 border-brand-mocha/10'}`}>
                      <step.icon className="w-4 h-4" />
                   </div>
                   <span className={`text-[10px] uppercase tracking-widest font-bold ${step.active ? 'text-brand-mocha' : 'text-brand-mocha/20'}`}>{step.label}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
