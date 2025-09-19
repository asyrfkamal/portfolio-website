import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import './Header.css';

// Import any assets
import githubIcon from "../../assets/github-fill.svg";
import linkedlnIcon from "../../assets/linkedin-box-fill.svg";

import { Container, Nav, Navbar } from 'react-bootstrap';


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
          <Nav className='header__menu mx-auto'>
            <Nav.Link href='#about-me' className='header__link'>About Me</Nav.Link>
            <Nav.Link href='#skills' className='header__link'>Skills</Nav.Link>
            <Nav.Link href='#projects' className='header__link'>Projects</Nav.Link>
            <Nav.Link href='#others' className='header__link'>Others</Nav.Link>
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
