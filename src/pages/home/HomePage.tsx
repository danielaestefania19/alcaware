import Hero from "./sections/Hero";
import Comparison from "./sections/Comparison";
import Services from "./sections/Services";
import WhyAlcaware from "./sections/WhyAlcaware";
import WorkMethodology from "./sections/WorkMethodology";
import SuccessStories from "./sections/SuccessStories";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import LogoMarquee from "./sections/LogoMarquee";
import Footer from "../../components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Comparison />
      <Services />
      <WhyAlcaware />
      <WorkMethodology />
      <SuccessStories />
      <Testimonials />
      <FAQ />
      <LogoMarquee />
      <Contact />
      <Footer />
    </>
  );
}
