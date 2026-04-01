import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import WhyAlcaware from "./sections/WhyAlcaware";
import Comparison from "./sections/Comparison";
import Services from "./sections/Services";
import WorkMethodology from "./sections/WorkMethodology";
import SuccessStories from "./sections/SuccessStories";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Comparison />
      <Services />
      <WhyAlcaware />
      <WorkMethodology />
      <SuccessStories />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;