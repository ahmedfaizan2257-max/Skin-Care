import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const steps = [
    {
      question: "How does your skin feel by mid-day?",
      options: [
        { label: "Oily or shiny all over", value: "oily" },
        { label: "Oily in the T-zone, dry elsewhere", value: "combination" },
        { label: "Tight, dry, or flaky", value: "dry" },
        { label: "Comfortable and balanced", value: "normal" }
      ]
    },
    {
      question: "What is your primary skin concern?",
      options: [
        { label: "Acne and breakouts", value: "acne" },
        { label: "Fine lines and aging", value: "aging" },
        { label: "Redness and sensitivity", value: "sensitivity" },
        { label: "Dark spots and dullness", value: "dullness" }
      ]
    },
    {
      question: "How often do you experience sensitivity?",
      options: [
        { label: "Almost always", value: "high" },
        { label: "Sometimes, usually after new products", value: "medium" },
        { label: "Rarely or never", value: "low" }
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [step]: value });
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div className="pt-32 md:pt-48 bg-brand-cream min-h-screen">
        <div className="max-w-2xl mx-auto px-6 text-center pb-24">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-12 shadow-sm rounded-sm"
          >
            <div className="w-16 h-16 bg-brand-rose/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Sparkles className="w-8 h-8 text-brand-rose" />
            </div>
            <h2 className="text-4xl font-serif mb-6">Your Ritual is <span className="italic">Ready</span></h2>
            <p className="text-brand-mocha/60 leading-relaxed mb-10">
              Based on your answers, we've curated a specialized routine targeting {answers[1]} for your {answers[0]} skin.
            </p>
            <Link 
              to="/shop" 
              className="w-full sm:w-auto inline-block bg-brand-mocha text-white px-12 py-5 uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-brand-rose transition-all text-center"
            >
              Shop Your Routine
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 md:pt-48 bg-brand-cream min-h-screen">
      <div className="max-w-xl mx-auto px-6 pb-24">
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
             <span className="text-[10px] uppercase tracking-widest font-bold opacity-30">Step {step + 1} of {steps.length}</span>
             {step > 0 && (
               <button onClick={() => setStep(step - 1)} className="text-[10px] uppercase tracking-widest font-bold hover:text-brand-rose flex items-center gap-2">
                 <ArrowLeft className="w-3 h-3" /> Back
               </button>
             )}
          </div>
          <div className="h-1 bg-brand-mocha/5 overflow-hidden">
             <motion.div 
               className="h-full bg-brand-rose"
               initial={{ width: 0 }}
               animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
             />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-serif mb-12 text-center md:text-left">{steps[step].question}</h2>
            <div className="space-y-4">
              {steps[step].options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full text-left p-6 bg-white border border-transparent hover:border-brand-rose transition-all group flex justify-between items-center"
                >
                  <span className="text-sm font-medium text-brand-mocha/80">{option.label}</span>
                  <ArrowRight className="w-4 h-4 text-brand-mocha/20 group-hover:text-brand-rose group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Quiz;
