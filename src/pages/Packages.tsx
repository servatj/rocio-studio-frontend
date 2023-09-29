import Header from "../components/Header";
import Package from "../components/Package";

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
			<Package packages={packages} />
		</>
	);
};

export default Packages;
