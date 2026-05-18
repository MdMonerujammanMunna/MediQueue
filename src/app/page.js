import FAQSection from "./components/FAQ/FAQ";
import Hero from "./components/HeroBanner/Hero";
import MarqueText from "./components/MarqureText/MarqueText";
import Statuse from "./components/Status/Statuse";
import ValuePropositions from "./components/ValuePropositions/ValuePropositions";



export default function Home() {



  return (
    <>
      <Hero />
      <Statuse></Statuse>
      <MarqueText></MarqueText>
      <FAQSection></FAQSection>
      <ValuePropositions></ValuePropositions>
    </>




  );
}

