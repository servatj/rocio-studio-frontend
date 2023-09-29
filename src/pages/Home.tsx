import Header from "../components/Header";
import Hero from "../components/Hero";
import StrongPointsSection from "../components/StrongPointsSection";
import ImageSection from "../components/ImageSection";
import Package from "../components/Package";
import Footer from "../components/Footer";

function Home() {

  const packages = [
		{
			title: "Basic",
			price: "400 AED",
			features: ["1-hour session", "10 edited photos", "Online gallery"],
		},
		{
			title: "Standard",
			price: "600 AED",
			features: [
				"2-hour session",
				"20 edited photos",
				"Online gallery",
				"1 print",
			],
		},
		{
			title: "Premium",
			price: "1000 AED",
			features: [
				"4-hour session",
				"40 edited photos",
				"Online gallery",
				"3 prints",
				"Photo album",
			],
		},
	];

  return (
    <>
      <Header isMain={true}/>
      <Hero />
      <StrongPointsSection />
      <Package packages={packages} />
      <ImageSection />
      <Footer />
    </>
  );
}

export default Home;
