import "./Footer.css";

import GitHubIcon from "../../assets/github-fill.png";
import LinkedinIcon from "../../assets/linkedin-box-fill.png";
import InstagramIcon from "../../assets/instagram-line.png";
import MailIcon from "../../assets/mail-line.png";
import PhoneIcon from "../../assets/phone-line.png";

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
          <a href="https://www.instagram.com/">
            <img src={InstagramIcon} alt="insta" className="insta-img" />
          </a>
          <a href="">
            <img src={LinkedinIcon} alt="linkedin" className="linkedin-img" />
          </a>
          <a href="">
            <img src={GitHubIcon} alt="github" className="github-img" />
          </a>
        </div>
      </div>

      <div className="footer-lower">
        <div className="footer-lower__left">
          <ul>
            <li>
              <a href="#about-me">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#others">Know More</a>
            </li>
          </ul>
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
