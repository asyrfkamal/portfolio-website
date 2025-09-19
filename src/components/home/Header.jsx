import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import './Header.css';

// Import any assets
import githubIcon from "../../assets/github-fill.png";
import linkedlnIcon from "../../assets/linkedin-box-fill.png";

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


function Header() {
	
  return (
    <>
    {/* <header id="header">
      <nav className="header__nav">
        <div className="header__logo">
          <h4 className="header__logo-title">asyrfkamal</h4>
        </div>

        <ul className="header__menu">
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#others">Others</a>
          </li>
        </ul>

        <div className="header__button">
          <a href="#">
            <img src={linkedlnIcon} alt="Linkedln" />
          </a>
          <a href="#">
            <img src={githubIcon} alt="Github" />
          </a>
        </div>
      </nav>
    </header> */}

    <Navbar expand="md" className="header__nav">
      <Container>
        <Navbar.Brand href="#">
          <div className="header__logo">
            <h4 className="header__logo-title">asyrfkamal</h4>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='header__menu mx-auto'>
            <Nav.Link href='#about-me' className='header__link'>About Me</Nav.Link>
            <Nav.Link href='#skills' className='header__link'>Skills</Nav.Link>
            <Nav.Link href='#projects' className='header__link'>Projects</Nav.Link>
            <Nav.Link href='#others' className='header__link'>Others</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="header__button">
          <a href="#">
            <img src={linkedlnIcon} alt="Linkedln" />
          </a>
          <a href="#">
            <img src={githubIcon} alt="Github" />
          </a>
        </div>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;
