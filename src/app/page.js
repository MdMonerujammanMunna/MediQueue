
import FAQSection from "./components/FAQ/FAQ";
import Hero from "./components/HeroBanner/Hero";
import Limited from "./components/LimitedCard/Limited";
import MarqueText from "./components/MarqureText/MarqueText";
import Statuse from "./components/Status/Statuse";
import ValuePropositions from "./components/ValuePropositions/ValuePropositions";



export default function Home() {



  return (
    <>
      <Hero />
      <MarqueText></MarqueText>
      <Limited></Limited>
      <Statuse></Statuse>
      <FAQSection></FAQSection>
      <ValuePropositions></ValuePropositions>
    </>




  );
}

