import styled from "@emotion/styled";

const StrongPointsContainer = styled.section`
  padding: 50px 0;
  background-color: #f4f4f4; // Light gray background for contrast
  text-align: center;
`;

const StrongPoint = styled.div`
  margin: 20px;
  padding: 20px;
  display: inline-block;
  width: calc(33.33% - 40px); // Three items per row
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  @media (max-width: 768px) {
    width: 90%; // On mobile, each item takes up almost the full width
    margin: 10px 0;
  }
`;

const StrongPointTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const StrongPointDescription = styled.p`
  font-size: 16px;
`;

const StrongPointsSection = () => {
  return (
    <StrongPointsContainer>
      <h2>Why Choose Our Studio?</h2>
      <StrongPoint>
        <StrongPointTitle>High-Quality Equipment</StrongPointTitle>
        <StrongPointDescription>
          We use the latest cameras and lenses to ensure top-notch quality.
        </StrongPointDescription>
      </StrongPoint>
      <StrongPoint>
        <StrongPointTitle>Experienced Team</StrongPointTitle>
        <StrongPointDescription>
          Our photographers and editors have years of experience in the industry.
        </StrongPointDescription>
      </StrongPoint>
      <StrongPoint>
        <StrongPointTitle>Customized Packages</StrongPointTitle>
        <StrongPointDescription>
          Tailor-made packages to suit every client's needs and budget.
        </StrongPointDescription>
      </StrongPoint>
      {/* Add more strong points as needed */}
    </StrongPointsContainer>
  );
};

export default StrongPointsSection;
