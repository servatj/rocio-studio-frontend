import { useEffect, useState } from 'react';
import styled from "@emotion/styled";
import { useWindowScroll } from 'react-use';

const ImageSectionContainer = styled.section`
  position: relative;
  height: 100vh; // Adjust the height as needed
  display: flex;
  background-color: black;

  flex-direction: column;
  justify-content: center;
   
  row-gap: 30px;

  @media (max-width: 768px) {
    height: 50vh; // Adjust the height as needed
  }
`;

const AnimatedImage = styled.img<{ animate: boolean }>`
  position: relative;
  width: 600px;
  left: ${(props) => (props.animate ? '50%' : '-50%')};
  transform: translateX(-50%);
  border: 5px solid #f1c40f;
  transition: left 1s ease-in-out; // Adjust the duration and easing function as needed
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5); // Set the color of the overlay

  order: 1;

  @media (max-width: 768px) {
    width: 80%; // On mobile, each item takes up almost the full width
    margin: 10px 0;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;


const HeaderText = styled.h1`
  color: white;
  color: #f1c40f;
`;

const ImageSection = () => {
  const { y } = useWindowScroll();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (y > 400) {
      setAnimate(true);
    }
  }, [y]);

  return (
    <>
      <ImageSectionContainer>
        <HeaderContainer> 
          <HeaderText>We Want to Be in Your Best Moments</HeaderText>
        </HeaderContainer>
        <AnimatedImage src="celebration.jpg" alt="Description of image" animate={animate} />
      </ImageSectionContainer>
    </>
  );
};

export default ImageSection;
