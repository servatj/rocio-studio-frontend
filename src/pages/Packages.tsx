import Header from "../components/Header";
import Package from "../components/Package";
import Footer from "../components/Footer";
import { ContentWrap, Container } from "../components/ContentWrap";

const Packages = () => {
	// Sample package data
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
			<Header isMain={false} />
			<Container>
				<ContentWrap>
					<h1>Packages</h1>
					<p>
						We offer a variety of packages to suit your needs. If you have any
						questions, please feel free to contact us.
					</p>
					<Package packages={packages} />
				</ContentWrap>
			</Container>
			<Footer />
		</>
	);
};

export default Packages;
