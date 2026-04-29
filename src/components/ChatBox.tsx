import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, Loader2, User, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  id: string;
  role: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const SYSTEM_PROMPT = `You are the "Skin Concierge" for Skinrise Collective, a premium skincare brand focused on gentle, dermatologist-backed acne care. 

Your goal is to provide helpful, empathetic, and science-based advice to customers. 
- You should emphasize "Barrier-First Care" and "Ph-balanced" formulas.
- Avoid recommending harsh scrubs or high-concentration acids unless they are part of our specific, balanced formulas.
- Be professional yet warm and encouraging.
- If a user has a severe medical condition, gently suggest they consult a doctor in person.
- You have knowledge of our core products: Clarity Cleanser, Botanical Face Oil, Daily SPF Moisturizer, Detox Clay Mask, and Midnight Recovery Cream.

Keep responses concise and formatted with bullet points if helpful for routines.`;

export const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'bot',
      text: "Hello! I'm your Skin Concierge. How can I help you on your journey to clear, healthy skin today?",
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const aiRef = useRef<any>(null);

  useEffect(() => {
    if (!aiRef.current) {
      aiRef.current = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await aiRef.current.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
            ...messages.map(m => ({ role: m.role === 'bot' ? 'model' : 'user', parts: [{ text: m.text }] })),
            { role: 'user', parts: [{ text: input }] }
        ],
        config: {
          systemInstruction: SYSTEM_PROMPT,
        }
      });

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: response.text || "I'm sorry, I couldn't process that request. How else can I help?",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: "I'm having a bit of trouble connecting right now. Please try again in a moment.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 md:bottom-10 md:right-10 bg-brand-mocha text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center border border-white/20 group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="flex items-center"
            >
              <MessageSquare className="w-6 h-6" />
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest ml-0 group-hover:ml-3">
                Talk to Expert
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 50, scale: 0.9, x: 20 }}
            className="fixed bottom-32 right-6 md:bottom-28 md:right-10 w-[90vw] md:w-[400px] h-[550px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-50 flex flex-col overflow-hidden border border-brand-mocha/10"
          >
            {/* Header */}
            <div className="p-6 bg-brand-mocha text-white flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-rose/20 rounded-full flex items-center justify-center border border-white/10">
                  <Sparkles className="w-5 h-5 text-brand-rose" />
                </div>
                <div>
                  <h3 className="text-lg font-serif">Skin Concierge</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-brand-sage rounded-full animate-pulse" />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-white/50">Online & Ready</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X className="w-5 h-5 opacity-60 hover:opacity-100" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 bg-brand-cream/10"
            >
              {messages.map((m) => (
                <div 
                  key={m.id}
                  className={`flex items-start gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border ${
                    m.role === 'user' ? 'bg-brand-sage border-brand-sage/20' : 'bg-white border-brand-mocha/10'
                  }`}>
                    {m.role === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-brand-mocha" />
                    )}
                  </div>
                  <div className={`max-w-[75%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-brand-mocha text-white rounded-tr-none' 
                      : 'bg-white text-brand-mocha rounded-tl-none border border-brand-mocha/5'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-brand-mocha/10 flex items-center justify-center">
                    <Loader2 className="w-4 h-4 text-brand-mocha animate-spin" />
                  </div>
                  <div className="bg-white border border-brand-mocha/5 p-4 rounded-2xl rounded-tl-none shadow-sm">
                    <div className="flex gap-1">
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-brand-mocha/40 rounded-full" />
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-brand-mocha/40 rounded-full" />
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-brand-mocha/40 rounded-full" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form 
              onSubmit={handleSend}
              className="p-4 bg-white border-t border-brand-mocha/5 flex gap-2"
            >
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about routines or products..."
                className="flex-1 bg-brand-cream/30 border border-brand-mocha/10 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-mocha/20 transition-all"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-11 h-11 bg-brand-mocha text-white rounded-full flex items-center justify-center hover:bg-brand-rose transition-colors disabled:opacity-50 disabled:grayscale"
              >
                <Send className="w-5 h-5 ml-0.5" />
              </button>
            </form>

            <div className="pb-3 px-6 text-center">
              <p className="text-[9px] uppercase tracking-widest font-bold opacity-30">AI Skin Advisor by Skinrise</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
