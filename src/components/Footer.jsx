import "./Footer.css";

import { Link } from 'react-scroll';

import GitHubIcon from "../assets/github-fill.svg";
import LinkedinIcon from "../assets/linkedin-box-fill.svg";
import MailIcon from "../assets/mail-line.svg";
import PhoneIcon from "../assets/phone-line.svg";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-upper">
        <div className="footer-upper__left">
          <div className="footer__email">
            <img src={MailIcon} alt="email" />
            <p>asyrfkamal@gmail.com</p>
          </div>
          <div className="footer__phone">
            <img src={PhoneIcon} alt="phone" />
            <p>+6010-8634158</p>
          </div>
        </div>
        <div className="footer-upper__right">
          {/* <a href="https://www.instagram.com/">
            <img src={InstagramIcon} alt="insta" className="insta-img" />
          </a> */}
          <a href="https://www.linkedin.com/in/asyrfkamal" target="_blank">
            <img src={LinkedinIcon} alt="linkedin" className="linkedin-img" />
          </a>
          <a href="https://github.com/asyrfkamal" target="_blank">
            <img src={GitHubIcon} alt="github" className="github-img" />
          </a>
        </div>
      </div>

      <div className="footer-lower">
        <div className="footer-lower__left">
          <Link to="about-me" offset={-120} className="footer__link">
            About Me
          </Link>
          <Link to="skills" offset={-20} className="footer__link">
            Skills
          </Link>
          <Link to="projects" offset={-50} className="footer__link">
            Projects
          </Link>
          <Link to="others" offset={-80} className="footer__link">
            Others
          </Link>
        </div>
        <div className="footer-lower__right">
          <p className="footer__copyright">
            Built from scratch during night owl hours © 2025 Asyraf Kamal
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
