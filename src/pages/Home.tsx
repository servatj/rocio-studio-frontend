import Header from "../components/Header";
import Hero from "../components/Hero";
import StrongPointsSection from "../components/StrongPointsSection";
import ImageSection from "../components/ImageSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header isMain={true}/>
      <Hero />
      <StrongPointsSection />
      <ImageSection />
      <Footer />
    </>
  );
}

export default Home;
