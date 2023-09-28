import { useEffect, useState } from 'react';
import styled from "@emotion/styled";
import { useWindowScroll } from 'react-use';

const ImageSectionContainer = styled.section`
  position: relative;
  height: 100vh; // Adjust the height as needed
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const AnimatedImage = styled.img<{ animate: boolean }>`
  position: absolute;
  width: 600px;
  left: ${(props) => (props.animate ? '50%' : '-50%')};
  transform: translateX(-50%);
  border: 5px solid #f1c40f;
  transition: left 1s ease-in-out; // Adjust the duration and easing function as needed
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5); // Set the color of the overlay
`;

const OverlayText = styled.h2`
  position: absolute;
  color: white; // Set the text color to white (or any color that contrasts with your image)
  z-index: 2; // Place the text above the image
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
        <AnimatedImage src="celebration.jpg" alt="Description of image" animate={animate} />
        <OverlayText>We Want to Be in Your Best Moments</OverlayText>
      </ImageSectionContainer>
    </>
  );
};

export default ImageSection;
