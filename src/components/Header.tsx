import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useState } from "react";

interface HeaderProps {
	isMain: boolean;
}

interface HeaderContainerProps {
	isMain: boolean;
}

interface MenuProps {
  menuOpen?: boolean;
  isMain?: boolean;
}

// Styled components
const HeaderContainer = styled.header<HeaderContainerProps>`
	display: flex;
	align-items: center;
	background-color: ${(props) => (props.isMain ? "transparent" : "black")};
	padding: 10px 20px;
	position: ${(props) => (props.isMain ? "fixed" : "static")};
	top: 0;
	left: 0;
	right: 0;
	z-index: ${(props) => (props.isMain ? "9999" : "auto")};

  @media (max-width: 768px) {
    z-index: auto;
    position: static;
    background-color: black;
  }
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

const Menu = styled.nav<MenuProps>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    top: 100%;
    left: 0;
    right: 0;
  }
`;

const MenuItem = styled(Link)`
	margin: 0 10px;
	text-decoration: none;
	color: #f1c40f;
	position: relative;

	&:not(:last-of-type)::after {
		content: "|";
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
		content: "|";
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

const MenuButtonResponsive = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Header component
const Header: React.FC<HeaderProps> = ({ isMain }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<HeaderContainer isMain={isMain}>
			<Logo>
				<img src="/logo.png" alt="rociologo" width="60" />
				<MenuItem to="/">ROCIO STUDIO 🇦🇪 </MenuItem>
			</Logo>
			{!isMain ? (
				<>
          {menuOpen && (
            <Menu>
              <MenuItem to="/gallery">Gallery</MenuItem>
              <MenuItem to="/packages">Packages</MenuItem>
              <MenuItem to="/about">About</MenuItem>
              <MenuItem to="/contact">Contact</MenuItem>
            </Menu>
          )}
					<MenuButtonResponsive onClick={toggleMenu}>
						{menuOpen ? "Close Menu" : "Open Menu"}
					</MenuButtonResponsive>
				</>
			) : (
				<Menu>
					<MenuItemWhite>CALL: 58-591-7970</MenuItemWhite>
					<MenuButton to="/contact">
						<p>Let's talk</p>
					</MenuButton>
				</Menu>
			)}
		</HeaderContainer>
	);
};

export default Header;
