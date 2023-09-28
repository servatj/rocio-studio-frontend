import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface HeaderProps {
	isMain: boolean;
}

interface HeaderContainerProps {
	isMain: boolean;
	isFixed?: boolean;
}

interface MenuProps {
	menuOpen?: boolean;
	isMain?: boolean;
  show?: boolean;
}

// Styled components
const HeaderContainer = styled.header<HeaderContainerProps>`
	display: flex;
	align-items: center;
	background-color: ${(props) => (props.isMain ? "transparent" : "black")};
	padding: 10px 20px;
	position: ${(props) => (props.isMain || !props.isFixed ? "fixed" : "static")};
	top: 0;
	left: 0;
	right: 0;
	z-index: ${(props) => (props.isMain ? "9999" : "auto")};

	@media (max-width: 768px) {
		z-index: auto;
		position:  static;
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

const MenuMain = styled.nav<MenuProps>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    top: 100%;
    left: 0;
    right: 0;
  }
`;

const Menu = styled.div<MenuProps>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	background-color: black;
	position: fixed; // Changed from absolute to fixed
	top: 0;
	right: ${(props) => (props.show ? "0" : "-200px")}; // Adjust as needed
	bottom: 0;
	width: 200px;
	transition: right 0.3s ease; // Added transition
	z-index: 1000; // Ensure it appears above other elements
`;

const MenuItem = styled(Link)`
	margin: 0 10px;
	text-decoration: none;
  color: #f1c40f;
	position: relative;
  margin-top: 10px;
  padding: 10px;

	&:not(:last-of-type)::after {
		position: absolute;
		right: -10px;
		top: 50%;
		transform: translateY(-50%);
	}

  &:hover {
    background-color: #f1f1f1;
  }
`;

const BrandLink = styled(Link)`
	margin: 0 10px;
	text-decoration: none;
	color: #f1c40f;
	position: relative;
	margin-top: 10px;
	padding: 10px;

	&:not(:last-of-type)::after {
		position: absolute;
		right: -10px;
		top: 50%;
		transform: translateY(-50%);
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

`;

const MenuButton = styled(Link)`
	margin: 0 10px;
	text-decoration: none;
	color: #f1c40f;
	position: relative;
	border: 2px solid #f1c40f;

	&:not(:last-of-type)::after {
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

	margin: 0 10px;
	text-decoration: none;
	color: #f1c40f;
	position: relative;
	border: 2px solid #f1c40f;
	padding: 10px 20px;
	font-size: 1.2rem;
	style: bold;

	@media (max-width: 768px) {
		display: block;
	}
`;

// Header component
const Header: React.FC<HeaderProps> = ({ isMain }) => {
	const [scrollY, setScrollY] = useState(0);
	const [isFixed, setIsFixed] = useState(true);
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
		setMenuOpen(!menuOpen);
    console.log(menuOpen);
	};

  const closeMenu = (e: MouseEvent) => {
    if ((e.target as Element).closest('#menu')) return;  // Do nothing if clicking inside the menu
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('click', closeMenu);
    } else {
      document.removeEventListener('click', closeMenu);
    }
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [menuOpen]);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};
	
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	
	useEffect(() => {
		if (scrollY > 400) {
			setIsFixed(false);
		} else {
			setIsFixed(true);
		}
	}, [scrollY]);
	

	return (
		<HeaderContainer isMain={isMain} isFixed={isFixed}>
			<Logo>
				<img src="/logo.png" alt="rociologo" width="60" />
				<BrandLink to="/">ROCIO STUDIO 🇦🇪 </BrandLink>
			</Logo>
			{!isMain ? (
				<>
					<Menu show={menuOpen} id="menu">
						<MenuItem to="/gallery">Gallery</MenuItem>
						<MenuItem to="/packages">Packages</MenuItem>
						<MenuItem to="/about">About</MenuItem>
						<MenuItem to="/contact">Contact</MenuItem>
					</Menu>
					<MenuButtonResponsive onClick={(e) => toggleMenu(e)}>
						{menuOpen ? "X" : "☰"}
					</MenuButtonResponsive>
				</>
			) : (
				<MenuMain>
					<MenuItemWhite>CALL: 58-591-7970</MenuItemWhite>
					<MenuButton to="/contact">
						<p>Let's talk</p>
					</MenuButton>
				</MenuMain>
			)}
		</HeaderContainer>
	);
};

export default Header;
