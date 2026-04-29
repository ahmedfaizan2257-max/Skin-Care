import { motion } from 'motion/react';
import { Microscope, Beaker, Shield, Activity, BarChart2, TrendingDown, RefreshCw } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  Cell
} from 'recharts';

const blemishData = [
  { week: 'Day 0', reduction: 0 },
  { week: 'Week 1', reduction: 25 },
  { week: 'Week 2', reduction: 48 },
  { week: 'Week 3', reduction: 72 },
  { week: 'Week 4', reduction: 89 },
];

const moistureData = [
  { week: 'Day 0', level: 40 },
  { week: 'Week 1', level: 55 },
  { week: 'Week 2', level: 68 },
  { week: 'Week 3', level: 75 },
  { week: 'Week 4', level: 82 },
];

const Science = () => {
  const ingredients = [
    {
      name: "Phyto-Ceramides",
      benefit: "Barrier Restoration",
      desc: "Plant-derived lipids that mimic your skin's natural structure to lock in moisture and shield from environmental irritants.",
      icon: Shield
    },
    {
      name: "Encapsulated Salicylic",
      benefit: "Gentle Extraction",
      desc: "Timed-release BHA that penetrates pores to dissolve debris without the surface-level irritation of traditional acids.",
      icon: Beaker
    },
    {
      name: "Custom Peptides",
      benefit: "Cellular Repair",
      desc: "Amino acid chains that signal the skin to produce more collagen and calm inflammation at the source.",
      icon: Activity
    }
  ];

  return (
    <div className="pt-32 md:pt-48 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Hero Section */}
        <header className="max-w-4xl mb-32">
          <span className="text-brand-rose uppercase tracking-[0.3em] text-[10px] font-bold block mb-4 italic">Efficacy Through Innovation</span>
          <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-12">
            The Science of <br/>
            <span className="italic">Gentle Power</span>
          </h1>
          <p className="text-brand-mocha/60 text-xl leading-relaxed font-light max-w-2xl">
            We don't believe in "miracles." We believe in clinical data, ingredient stability, and the physiological needs of the skin barrier.
          </p>
        </header>

        {/* Lab Insight */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
           <div className="relative aspect-square bg-brand-cream rounded-sm overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop" 
               alt="Lab research" 
               className="w-full h-full object-cover grayscale"
             />
             <div className="absolute inset-0 bg-brand-rose/5 mix-blend-overlay" />
           </div>
           <div className="space-y-8">
              <div className="w-12 h-12 bg-brand-mocha flex items-center justify-center text-white rounded-full mb-8">
                <Microscope className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-serif leading-tight">Biomimetic Formulation</h2>
              <p className="text-brand-mocha/70 text-lg leading-relaxed font-light italic">
                Our skin is a living, breathing ecosystem. Most acne treatments approach it like a war zone—using harsh chemicals to "kill" bacteria. <br/><br/>
                We take a different path. Our formulas are designed to work with your skin's natural pH and lipid structure, helping it heal itself from the inside out.
              </p>
              <div className="pt-8 border-t border-brand-mocha/10 grid grid-cols-2 gap-8">
                 <div>
                    <span className="text-3xl font-serif block mb-2">94%</span>
                    <p className="text-[10px] uppercase font-bold tracking-widest opacity-40 leading-relaxed text-balance">Reported clearer skin within 21 days of daily use.</p>
                 </div>
                 <div>
                    <span className="text-3xl font-serif block mb-2">100%</span>
                    <p className="text-[10px] uppercase font-bold tracking-widest opacity-40 leading-relaxed text-balance">Fragrance-free and safe for sensitive skin barriers.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Clinical Data Section */}
        <section className="mb-40">
           <div className="mb-16">
              <span className="text-brand-rose uppercase tracking-[0.3em] text-[10px] font-bold block mb-4 italic">The Evidence</span>
              <h2 className="text-5xl font-serif mb-8">Clinical Trial <span className="italic">Results</span></h2>
              <p className="text-brand-mocha/60 max-w-xl">
                 Based on a 4-week independent clinical study with 50 participants (ages 18-45) using the Skinrise Collective routine twice daily.
              </p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Blemish Reduction Chart */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-cream/30 p-8 md:p-12 rounded-sm border border-brand-mocha/5"
              >
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <TrendingDown className="w-5 h-5 text-brand-rose" />
                   </div>
                   <div>
                      <h3 className="text-lg font-serif">Blemish Reduction %</h3>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Study Participant Average</p>
                   </div>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={blemishData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                      <XAxis 
                        dataKey="week" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fontSize: 10, fill: '#6B7280', fontWeight: 600}} 
                        dy={10}
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fontSize: 10, fill: '#6B7280'}} 
                      />
                      <Tooltip 
                        contentStyle={{ borderRadius: '0px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }}
                      />
                      <Bar 
                        dataKey="reduction" 
                        fill="#A78B7D" 
                        radius={[2, 2, 0, 0]}
                        barSize={40}
                      >
                         {blemishData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={index === blemishData.length - 1 ? '#A78B7D' : '#D1D5DB'} />
                         ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              {/* Moisture Levels Chart */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-brand-mocha p-8 md:p-12 rounded-sm text-white"
              >
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <RefreshCw className="w-5 h-5 text-brand-sage" />
                   </div>
                   <div>
                      <h3 className="text-lg font-serif">Moisture Retention</h3>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-white/40">Corneometer Measurements</p>
                   </div>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={moistureData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                      <XAxis 
                        dataKey="week" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fontSize: 10, fill: 'rgba(255,255,255,0.4)', fontWeight: 600}} 
                        dy={10}
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fontSize: 10, fill: 'rgba(255,255,255,0.4)'}} 
                      />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1F2937', borderRadius: '0px', border: 'none', fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="level" 
                        stroke="#D2B48C" 
                        strokeWidth={3} 
                        dot={{ r: 6, fill: '#D2B48C', strokeWidth: 2, stroke: '#1c1917' }}
                        activeDot={{ r: 8, strokeWidth: 0 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
           </div>
        </section>

        {/* Ingredients Grid */}
        <section className="mb-40">
           <div className="text-center mb-20">
              <h2 className="text-5xl font-serif">Key Ingredients</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {ingredients.map((ing, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-12 bg-white border border-brand-cream hover:shadow-xl transition-shadow group"
                >
                  <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mb-8 group-hover:bg-brand-rose group-hover:text-white transition-colors">
                    <ing.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif mb-2">{ing.name}</h3>
                  <span className="text-brand-rose text-[10px] font-bold uppercase tracking-[0.2em] mb-6 block">{ing.benefit}</span>
                  <p className="text-brand-mocha/60 text-sm leading-relaxed">{ing.desc}</p>
                </motion.div>
              ))}
           </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-mocha py-24 px-12 text-center text-white rounded-sm">
           <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready To See The <span className="italic text-brand-sage">Evidence?</span></h2>
           <p className="text-white/60 mb-12 max-w-xl mx-auto uppercase text-[11px] tracking-[0.3em] font-bold">Start your personalized routine today and track your progress.</p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <button className="bg-brand-rose text-white px-12 py-5 font-bold uppercase text-[11px] tracking-widest hover:bg-white hover:text-brand-mocha transition-all">
                Shop The Collection
             </button>
             <button className="border border-white/30 text-white px-12 py-5 font-bold uppercase text-[11px] tracking-widest hover:bg-white hover:text-brand-mocha transition-all">
                Take Skin Quiz
             </button>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Science;
