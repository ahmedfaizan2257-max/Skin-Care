const Shipping = () => {
  return (
    <div className="pt-32 md:pt-48 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <header className="mb-20">
          <span className="text-brand-rose uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">Logistics</span>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1]">Shipping <span className="italic">& Delivery</span></h1>
        </header>

        <div className="space-y-12 text-brand-mocha/80">
          <section>
            <h2 className="text-3xl font-serif text-brand-mocha mb-6">Processing Times</h2>
            <p className="leading-loose">
              Orders are typically processed within 1-2 business days. During peak seasons (launches and holidays), processing may take up to 3-4 business days. You will receive a tracking number via email as soon as your order ships.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-brand-mocha mb-6">Domestic Shipping (USA)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-brand-cream border-l-4 border-brand-rose">
                <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Standard Shipping</h4>
                <p className="text-sm">3-5 business days. Free for orders over $75.</p>
              </div>
              <div className="p-8 bg-brand-cream border-l-4 border-brand-mocha">
                <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Express Shipping</h4>
                <p className="text-sm">1-2 business days. Calculated at checkout.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-brand-mocha mb-6">International Shipping</h2>
            <p className="leading-loose">
              We ship to over 50 countries. International rates and shipping times vary by location. Please note that customs duties and taxes are the responsibility of the recipient and will be calculated by your local customs office.
            </p>
          </section>

          <section className="bg-brand-mocha text-white p-12">
            <h3 className="text-2xl font-serif mb-4">Our Commitment</h3>
            <p className="opacity-70 italic">
              "We treat every order with the same care we put into our formulas. If your package arrives damaged or is delayed beyond our estimates, we will make it right."
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
