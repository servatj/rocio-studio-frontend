import styled from "@emotion/styled";
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

type PackageProps = {
  packages: {
    title: string;
    price: string;
    features: string[];
  }[];
};

const Package = ({ packages }: PackageProps) => {
  return (
    <>
      <PackagesContainer>
        {packages.map((pkg: {title: string, price: string, features: string[]}, index: number) => (
          <PackageCard key={index}>
            <PackageTitle>{pkg.title}</PackageTitle>
            <PackagePrice>{pkg.price}</PackagePrice>
            <PackageFeatures>
              {pkg.features.map((feature: string, i: number) => (
                <Feature key={i}>{feature}</Feature>
              ))}
            </PackageFeatures>
          </PackageCard>
        ))}
      </PackagesContainer>
    </>
  );
};

export default Package;
