import Hero from "./sections/Hero";
import ServicesAccordion from "./sections/ServicesAccordion";
import Diferenciadores from "./sections/Diferenciadores";
import Entregables from "./sections/Entregables";
import ComoTrabajamos from "./sections/ComoTrabajamos";
import Casos from "./sections/Casos";
import Technologies from "./sections/Technologies";
import FAQ from "./sections/FAQ";
import Footer from "../../../components/layout/Footer";

export default function WebMobilePage() {
  return (
    <>
      <Hero />
      <ServicesAccordion />
      <Diferenciadores />
      <Entregables />
      <ComoTrabajamos />
      <Casos />
      <Technologies />
      <FAQ />
      <Footer />
    </>
  );
}
