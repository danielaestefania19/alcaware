import Hero from "./sections/Hero";
import ServicesAccordion from "./sections/ServicesAccordion";
import Entregables from "./sections/Entregables";
import Diferenciadores from "./sections/Diferenciadores";
import HowWeWork from "./sections/HowWeWork";
import Casos from "./sections/Casos";
import Technologies from "./sections/Technologies";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Footer from "../../../components/layout/Footer";

export default function BlockchainPage() {
  return (
    <>
      <Hero />
      <ServicesAccordion />
      <Diferenciadores />
      <Entregables />
      <HowWeWork />
      <Casos/>
      <Technologies />
      <FAQ />
      <Contact />
      <Footer/>

    </>
  );
}
