import Header from "../components/Header";
import Hero from "../components/Hero";
import StrongPointsSection from "../components/StrongPointsSection";

function Home() {
  return (
    <>
      <Header isMain={true}/>
      <Hero />
      <StrongPointsSection />
    </>
  );
}

export default Home;
