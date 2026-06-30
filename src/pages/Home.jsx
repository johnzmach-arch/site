import Hero from "../components/Hero.jsx";
import Catalog from "../components/Catalog.jsx";
import BuildPC from "../components/BuildPC.jsx";
import About from "../components/About.jsx";

// Composição da home: hero (slider) → catálogo → monte seu PC → sobre.
export default function Home() {
  return (
    <>
      <Hero />
      <Catalog />
      <BuildPC />
      <About />
    </>
  );
}
