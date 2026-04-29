const Privacy = () => {
  return (
    <div className="pt-32 md:pt-48 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <header className="mb-20">
          <span className="text-brand-rose uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">Legal</span>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1]">Privacy <span className="italic">Policy</span></h1>
        </header>

        <div className="space-y-12 text-brand-mocha/80 leading-loose">
          <section>
            <h2 className="text-3xl font-serif text-brand-mocha mb-6">Information We Collect</h2>
            <p>
              We collect information you provide directly to us when you create an account, make a purchase, or communicate with us. This includes your name, email address, postal address, phone number, and payment information.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-brand-mocha mb-6">How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, process transactions, send technical notices, and communicate with you about products, services, and events offered by Skinrise Collective.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-brand-mocha mb-6">Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
          </section>

          <section className="bg-brand-cream p-12 border-l-4 border-brand-rose">
            <h3 className="text-2xl font-serif mb-4 italic">Security</h3>
            <p className="text-sm">
              The security of your personal information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
