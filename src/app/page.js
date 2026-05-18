import FAQSection from "./components/FAQ/FAQ";
import Hero from "./components/HeroBanner/Hero";
import PlatformStats from "./components/Status/Statuse";
import PlatformFeatures from "./components/ValuePropositions/ValuePropositions";


export default function Home() {



  return (
    <>
      <Hero />
      <PlatformStats />
      <FAQSection></FAQSection>
      <PlatformFeatures />
    </>




  );
}

