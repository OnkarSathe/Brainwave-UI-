import ButtonGradient from "./assets/svg/ButtonGradient";
import  Button  from "./components/Button";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Collaboration } from './components/Collaboration';
import { Pricing } from './components/Pricing'
import { Roadmap } from "./components/Roadmap"; 
import { Benefits } from "./components/Benifits"
import Services from "./components/Services";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header></Header>
        <Hero></Hero>
        <Benefits></Benefits>
        <Collaboration></Collaboration>
        <Services></Services>
        <Pricing></Pricing>
        <Roadmap></Roadmap>
        <Footer></Footer>
      </div>
      <ButtonGradient></ButtonGradient>
    </>
  );
}

export default App;
