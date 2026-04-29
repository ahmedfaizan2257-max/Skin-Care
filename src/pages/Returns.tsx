const Returns = () => {
  return (
    <div className="pt-32 md:pt-48 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <header className="mb-20">
          <span className="text-brand-rose uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">Refund Policy</span>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1]">Returns <span className="italic">& Exchanges</span></h1>
        </header>

        <div className="space-y-12 text-brand-mocha/80">
          <section>
            <h2 className="text-3xl font-serif text-brand-mocha mb-6">30-Day Happiness Guarantee</h2>
            <p className="leading-loose text-lg font-light">
              We want you to love your skin. If you aren't completely satisfied with your purchase, you can return it within 30 days for a full refund or exchange—no questions asked.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-8">
            <div className="space-y-4">
               <div className="text-4xl font-serif text-brand-rose">01.</div>
               <h4 className="font-bold uppercase tracking-widest text-[10px]">Initiate</h4>
               <p className="text-xs opacity-60">Email hello@skinrise.com with your order number.</p>
            </div>
            <div className="space-y-4">
               <div className="text-4xl font-serif text-brand-rose">02.</div>
               <h4 className="font-bold uppercase tracking-widest text-[10px]">Ship</h4>
               <p className="text-xs opacity-60">We'll send you a prepaid return label to print.</p>
            </div>
            <div className="space-y-4">
               <div className="text-4xl font-serif text-brand-rose">03.</div>
               <h4 className="font-bold uppercase tracking-widest text-[10px]">Refund</h4>
               <p className="text-xs opacity-60">Once received, your refund will process in 5-7 days.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-brand-mocha mb-6">Exchanges</h2>
            <p className="leading-loose">
              Not the right fit for your skin type? We'll happily exchange your product for a different formula that better suits your needs. Our Skin Concierge team can help you find the perfect match.
            </p>
          </section>

          <section className="bg-brand-cream p-12 border-l-4 border-brand-rose">
            <h3 className="text-2xl font-serif mb-4 italic">Exceptions</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Individual items within a Bundle cannot be returned separately; the entire Bundle must be returned.</li>
              <li>Shipping costs are non-refundable.</li>
              <li>Limited edition launches are final sale unless damaged upon arrival.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Returns;
