import Footer from "../../components/footer";
import Header from "../../components/header";
import IntroSection from "../../sections/IntroSection";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="mx-28 my-20 h-screen">
        <IntroSection/>
      </div>
      <Footer />
    </div>
  );
}
