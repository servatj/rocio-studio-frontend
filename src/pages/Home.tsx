import Header from "../components/Header";
import Hero from "../components/Hero";
import StrongPointsSection from "../components/StrongPointsSection";
import ImageSection from "../components/ImageSection";
import Packages from "./Packages";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header isMain={true}/>
      <Hero />
      <StrongPointsSection />
      <Packages />
      <ImageSection />
      <Footer />
    </>
  );
}

export default Home;
