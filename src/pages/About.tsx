import Header from "../components/Header";
import styled from '@emotion/styled';

// Styled components
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  text-align: justify;
  max-width: 800px;
  margin-bottom: 20px;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: black;
`;

const About = () => {
  return (
    <>
      <Header isMain={false} />
      <AboutContainer>
        <ProfileImage src="about.png" alt="Your Name" />
        <AboutText>
          Hello, I'm <Highlight>Rocio Alvarenga</Highlight>, a professional photographer with over
          <Highlight> 2 years</Highlight> of experience in the field. My journey began when...
          {/* Add more about your career here */}
        </AboutText>
        <AboutText>
        Over the years, I've specialized in various types of photography, including <Highlight>wedding photography</Highlight>,
        <Highlight>real estate photography</Highlight>, and capturing <Highlight>activity memories</Highlight>. Each of these
        specializations has allowed me to explore different aspects of photography and hone my skills.
      </AboutText>
        <AboutText>
          What I bring to the table is <Highlight>unique vision</Highlight>, <Highlight>technical expertise</Highlight>,
          and a <Highlight>passion for storytelling</Highlight> through my photographs.
          {/* Add more about what you offer here */}
        </AboutText>

        <AboutText>
          In wedding photography, I focus on capturing the raw emotions and beautiful moments that make each wedding unique.
          For real estate, my aim is to showcase properties in their best light, highlighting features that make them special.
          When it comes to capturing activity memories, I strive to freeze the most dynamic and joyful moments, creating lasting
          memories for everyone involved.
       </AboutText>
      </AboutContainer>
    </>
  );
};

export default About;
