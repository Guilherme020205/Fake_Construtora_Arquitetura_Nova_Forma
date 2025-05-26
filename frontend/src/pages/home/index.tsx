import Footer from "../../components/footer";
import Header from "../../components/header";
import IntroSection from "../../sections/IntroSection";
import AboutSection from "./../../sections/AboutSection/index";
import ServicesSection from "../../sections/ServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="mx-28 my-20 flex flex-col">
        <IntroSection />
        <AboutSection />
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
}
