import "./Header.css";

// Import any assets
import githubIcon from "../../assets/github-fill.svg";
import linkedlnIcon from "../../assets/linkedin-box-fill.svg";

import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-scroll';

function Header() {
  return (
    <>
      <Navbar expand="md" className="header__nav">
        <Container>
          <Navbar.Brand href="#">
            <div className="header__logo">
              <h4 className="header__logo-title">asyrfkamal</h4>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="header__menu mx-auto">
              <Link to="about-me" offset={-120} className="header__link">
                About Me
              </Link>
              <Link to="skills" offset={-10} className="header__link">
                Skills
              </Link>
              <Link to="projects" className="header__link">
                Projects
              </Link>
              <Link to="others" offset={-130} className="header__link">
                Others
              </Link>
            </Nav>
          </Navbar.Collapse>

          <div className="header__button">
            <a href="https://www.linkedin.com/in/asyrfkamal" target="_blank">
              <img src={linkedlnIcon} alt="Linkedln" />
            </a>
            <a href="https://github.com/asyrfkamal" target="_blank">
              <img src={githubIcon} alt="Github" />
            </a>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
