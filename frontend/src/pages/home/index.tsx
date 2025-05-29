import Footer from "../../components/footer";
import Header from "../../components/header";
import IntroSection from "../../sections/IntroSection";
import AboutSection from "./../../sections/AboutSection/index";
import ServicesSection from "../../sections/ServicesSection";
import DifferentialsSection from "../../sections/DifferentialsSection";
import TestimonialsSection from "../../sections/TestimonialsSection";
import ContactSection from './../../sections/ContactSection/index';
export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="mx-28 my-20 flex flex-col">
        <IntroSection />
        <AboutSection />
        <ServicesSection />
        <DifferentialsSection />
        <TestimonialsSection />
        <ContactSection/>
      </div>
      <Footer />
    </div>
  );
}
