import styled from "@emotion/styled";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const Title = styled.h1`
	color: black;
	font-size: 2rem;
	text-align: center;
	margin: 20px;
`;

function Showroom() {
	const weddingImages = [
		{ src: "/image1.jpeg", caption: "dessert" },
		{ src: "/image2.jpg", caption: "garden" },
		{ src: "/image3.jpg", caption: "Caption 3" },
	];

	const realStateImages = [
		{ src: "/image4.jpg", caption: "realState" },
		{ src: "/image5.jpg", caption: "garden" },
		{ src: "/image6.jpg", caption: "Caption 3" },
	];

	return (
		<div>
			<Header isMain={false} />
			<Title>Wedding</Title>
			<Gallery images={weddingImages} />
			<Title>Real Estate</Title>
			<Gallery images={realStateImages} />
			<Footer />
		</div>
	);
}

export default Showroom;
