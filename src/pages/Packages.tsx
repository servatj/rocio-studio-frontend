import styled from "@emotion/styled";
import Header from "../components/Header";
// Styled components
const PackagesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
	padding: 20px;

	@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

`;

const PackageCard = styled.div`
	width: calc(33.33% - 20px);
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 8px;
	text-align: center;
	background-color: black;

	@media (max-width: 768px) {
    width: 90%;
    margin: 10px 0;
  }
`;

const PackageTitle = styled.h3`
	font-size: 24px;
	margin-bottom: 16px;
	color: #f1c40f;
`;

const PackagePrice = styled.p`
	font-size: 32px;
	font-weight: bold;
	margin-bottom: 16px;
	color: white;
`;

const PackageFeatures = styled.ul`
	list-style: none;
	padding: 0;
	margin-bottom: 16px;
	color: white;
`;

const Feature = styled.li`
	margin: 8px 0;
`;

const Packages = () => {
	// Sample package data
	const packages = [
		{
			title: "Basic",
			price: "100 AED",
			features: ["1-hour session", "10 edited photos", "Online gallery"],
		},
		{
			title: "Standard",
			price: "200 AED",
			features: [
				"2-hour session",
				"20 edited photos",
				"Online gallery",
				"1 print",
			],
		},
		{
			title: "Premium",
			price: "500 AED",
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
			<PackagesContainer>
				{packages.map((pkg, index) => (
					<PackageCard key={index}>
						<PackageTitle>{pkg.title}</PackageTitle>
						<PackagePrice>{pkg.price}</PackagePrice>
						<PackageFeatures>
							{pkg.features.map((feature, i) => (
								<Feature key={i}>{feature}</Feature>
							))}
						</PackageFeatures>
					</PackageCard>
				))}
			</PackagesContainer>
		</>
	);
};

export default Packages;
