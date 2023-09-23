import styled from '@emotion/styled';

interface ImageGalleryProps {
    src: string;
    caption: string;
}

// Styled components
const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 20px;
  position: relative;
`;

const ImageCard = styled.div`
  width: calc(33.33% - 16px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:hover img {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  transition: transform 0.3s ease-in-out;
`;

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  padding: 8px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${ImageCard}:hover & {
    opacity: 1;
  }
`;

const Gallery = ({ images }: { images: ImageGalleryProps[] }) => {
  return (
    <GalleryContainer>
      {images.map((image: ImageGalleryProps, index) => (
        <ImageCard key={index}>
          <Image src={image.src} alt={image.caption} />
        </ImageCard>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
