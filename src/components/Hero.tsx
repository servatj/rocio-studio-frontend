import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const HeroContainer = styled.section`
	position: relative;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #f1c40f;
	text-align: center;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url("/mosque.jpg");
		background-size: cover;
		background-position: center;
		filter: brightness(0.6); // Lower values darken the image
		z-index: -1; // Place it behind the content
	}

	@media (max-width: 768px) {
    text-align: left;
		position: relative;
		height: auto;
		z-index: auto;
    padding: 20px;
  }
`;

const HeroTitle = styled.h1`
	font-size: 4rem;
	margin-bottom: 20px;

	@media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
	font-size: 1.5rem;
	margin-bottom: 30px;

	@media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SquareContainer = styled.div`
	display: flex;
	align-items: left;
  margin-top: 20px;
	flex-wrap: wrap;

	@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SquareContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
	background-color: rgba(0, 0, 0, 0.5);
	padding: 20px;
`;

const Square = styled.div`
	width: 200px;
	height: 200px;
	background-color: black;
	color: yelloy;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 10px;
	padding: 20px;
	cursor: pointer;

	&:hover {
		background-color: rgba(0, 0, 0, 0.7);
		font-size: 1.1rem;
	}

  a {
    text-decoration: none;  // Remove underline
    color: inherit;  // Inherit color from parent
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

	@media (max-width: 768px) {
    width: 90%; // On mobile, each item takes up almost the full width
    margin: 10px 0;
  }
`;

// const Image = styled.img`
// 	width: 150px;
// 	object-fit: cover;
// 	padding-right: 20px;
// `;

const Hero = () => {
	return (
		<HeroContainer>
			<SquareContainerText>
				<HeroTitle>YOUR LIFE IS OUR FOCUS</HeroTitle>
				<HeroSubtitle>picture-perfect memories, every time</HeroSubtitle>
			</SquareContainerText>
			<SquareContainer>
				<Square>
					<Link to="/gallery">
						<h3>Gallery</h3>
						<p>Explore our stunning photo collections.</p>
					</Link>
				</Square>
				<Square>
					<Link to="/packages">
						<h3>Packages</h3>
						<p>Choose the perfect package for your special moments.</p>
					</Link>
				</Square>
				<Square>
					<Link to="/about">
						<h3>About</h3>
						<p>Learn more about our journey and mission.</p>
					</Link>
				</Square>
			</SquareContainer>
		</HeroContainer>
	);
};

export default Hero;
