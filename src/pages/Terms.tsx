const Terms = () => {
  return (
    <div className="pt-32 md:pt-48 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <header className="mb-20">
          <span className="text-brand-rose uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">Agreement</span>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1]">Terms of <span className="italic">Service</span></h1>
        </header>

        <div className="space-y-12 text-brand-mocha/80 leading-loose">
          <section>
            <h2 className="text-3xl font-serif text-brand-mocha mb-6">Introduction</h2>
            <p>
              Welcome to Skinrise Collective. These Terms of Service govern your use of our website and our services. By accessing or using our service, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-brand-mocha mb-6">User Accounts</h2>
            <p>
              When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-brand-mocha mb-6">Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of Skinrise Collective and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Skinrise Collective.
            </p>
          </section>

          <section className="bg-brand-cream p-12 border-l-4 border-brand-mocha">
            <h3 className="text-2xl font-serif mb-4 italic">Limitation of Liability</h3>
            <p className="text-sm">
              In no event shall Skinrise Collective, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
