import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import ProductDemo from '@/components/sections/ProductDemo';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CTA />
      <ProductDemo />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
       
    </>
  );
}
