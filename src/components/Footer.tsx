// Footer.tsx
import React from 'react';
import styled from '@emotion/styled';

// Styled Components
const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterLink = styled.a`
  color: #fff;
  margin: 0 15px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Footer Component
const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Rocio Studio. All rights reserved.</p>
      <p>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/terms">Terms of Service</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
      </p>
    </FooterContainer>
  );
};

export default Footer;
