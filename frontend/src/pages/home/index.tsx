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
        <p id="Header"></p>
      <Header />
      <div className="mx-28 my-20 mt-40 flex flex-col opacity-0 animate-fadeIn delay-500" id="about"
      >
        <IntroSection />
        <AboutSection />
        <ServicesSection />
        <DifferentialsSection />
        <TestimonialsSection />
        <p id="ContactSection"></p>
        <ContactSection/>
      </div>
      <Footer />
    </div>
  );
}
