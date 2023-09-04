import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import FirstForm from "./components/FirstForm";
import Result from "./components/Result";
import AdvantageCards from "./components/AdvantageCards";
import AboutKv1 from "./components/AboutKv1";
import Procedure from "./components/Procedure";
import SecondForm from "./components/SecondForm";
import HowToUse from "./components/HowToUse";
import Feedback from "./components/Feedback";
import SecondHero from "./components/SecondHero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Hero />
      <Cards />
      <FirstForm />
      <Result />
      <AdvantageCards />
      <AboutKv1 />
      <Procedure />
      <SecondForm />
      <HowToUse />
      <Feedback />
      <SecondHero />
      <Footer />
    </div>
  );
}

export default App;
