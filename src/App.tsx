import "./App.css";
import Navbar from "./components/ui/Navbar";
import HeroSection from "./sections/HeroSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
import Service from "./sections/Service";
import HowItWorks from "./sections/HowItWorks";
import SupportedCoins from "./sections/SupportedCoins";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="space-y-28 py-12">
        <HeroSection />
        <WhyChooseUsSection />
        <Service />
        <HowItWorks />
        <SupportedCoins />
      </main>
      <Footer />
    </>
  );
}

export default App;
