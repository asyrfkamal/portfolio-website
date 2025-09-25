import "./MoreHeader.css";

import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import HomeIcon from "../assets/home-icon.svg";

function MoreHeader() {
  return (
		<header>
			{/* <Navbar expand="md" className="more-header__nav" variant="dark">
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" className="header__toggle-icon ms-auto"/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="more-header__menu ms-auto">
							<NavLink to="/" className="more-header__link">
								Home
							</NavLink>
							<NavLink to="/places" className="more-header__link">
								Places I've Been
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar> */}

			<nav className="more-header__nav">
				<div className="more-header__wrapper ms-auto">
					<NavLink to='/' className='more-header__link'>
						<img src={HomeIcon} alt="home" />
					</NavLink>
				</div>
			</nav>
		</header>
	);
}

export default MoreHeader;
