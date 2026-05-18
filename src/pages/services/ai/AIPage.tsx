import Hero from "./sections/Hero";
import ServicesAccordion from "./sections/ServicesAccordion";
import Entregables from "./sections/Entregables";
import Diferenciadores from "./sections/Diferenciadores";
import Casos from "./sections/Casos";
import Technologies from "./sections/Technologies";
import FAQ from "./sections/FAQ";
import Footer from "../../../components/layout/Footer";

export default function AIPage() {
  return (
    <>
      <Hero />
      <ServicesAccordion />
      <Entregables />
      <Diferenciadores />
      <Casos />
      <Technologies />
      <FAQ />
      <Footer/>
    </>
  );
}
