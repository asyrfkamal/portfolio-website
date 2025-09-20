import "./MoreHeader.css";

import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function MoreHeader() {
  return (
		<header>
			<Navbar expand="md" className="more-header__nav" variant="dark">
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" className="header__toggle-icon ms-auto"/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="more-header__menu ms-auto">
							<NavLink to="/" className="more-header__link">
								Home
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}

export default MoreHeader;
