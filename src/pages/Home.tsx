import { motion } from 'motion/react';
import { Navbar, Hero, TrustBar, FeaturedProducts, Collections, HowItWorks, ProductDemo, Results, About as AboutSection, InstagramStrip, Signup } from '../App';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedProducts />
      <Collections />
      <HowItWorks />
      <ProductDemo />
      <Results />
      <AboutSection />
      <InstagramStrip />
      <Signup />
    </>
  );
};

export default Home;
