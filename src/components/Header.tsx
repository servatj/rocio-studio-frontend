import styled from '@emotion/styled';
import { Link } from "react-router-dom";

interface HeaderProps {
  isMain: boolean;
  // Add other props if needed
}

interface HeaderContainerProps {
  isMain: boolean;
}

// Styled components
const HeaderContainer = styled.header<HeaderContainerProps>`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.isMain ? 'transparent' : 'black')};
  padding: 10px 20px;
  position: ${(props) => (props.isMain ? 'fixed' : 'static')};
  top: 0;
  left: 0;
  right: 0;
  z-index: ${(props) => (props.isMain ? '9999' : 'auto')};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 24px;
  font-weight: bold;
  margin-right: auto;

  img {
    width: 60px;
  }
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
`;

const MenuItem = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  color: #f1c40f;
  position: relative;

  &:not(:last-of-type)::after {
    content: '|';
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover {
    color: white;
  }
`;

const MenuItemWhite = styled.p`
  margin: 0 10px;
  text-decoration: none;
  color: white;
  position: relative;

  &:not(:last-of-type)::after {
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover {
    color: white;
  }
`;

const MenuButton = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  color: #f1c40f;
  position: relative;
  border: 2px solid #f1c40f;

  &:not(:last-of-type)::after {
    content: '|';
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover {
    color: white;
  }

  p {
    padding: 10px;
  }
`;

// Header component
const Header: React.FC<HeaderProps> = ({ isMain }) => {
  return (
    <HeaderContainer isMain={isMain}>
      <Logo>
        <img src="/logo.png" alt="rociologo" width="60" />
        <MenuItem to="/">ROCIO STUDIO 🇦🇪 </MenuItem>
      </Logo>
      {
        !isMain ? (
          <Menu>
            <MenuItem to="/gallery">Gallery</MenuItem>
            <MenuItem to="/packages">Packages</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/contact">Contact</MenuItem>
          </Menu>
        ) : (
          <Menu>
            <MenuItemWhite>CALL: 58-591-7970</MenuItemWhite>
            <MenuButton to="/contact"><p>Let's talk</p></MenuButton>
          </Menu>
        )
      }
    </HeaderContainer>
  );
};

export default Header;
