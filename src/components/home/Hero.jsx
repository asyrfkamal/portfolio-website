import "./Hero.css";

import heroImage from "../../assets/me3.jpg";
import SplitText from "../SplitText";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__upper" data-aos='fade-down'>
        <div className="hero__upper-overlay"></div>
        <div className="hero__upper-bg-image"></div>

        <div className="profile-container">
          <div className="profile-image">
            <img src={heroImage} alt="" loading="lazy"/>
          </div>
          {/* <p>Hi, my name is</p> */}
          <SplitText 
            text="Hi, my name is"
            className="profile-text"
            delay={100}
            duration={0.4}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity:1, y: 0 }}
            textAlign="center"
          />
        </div>

      </div>

      <div className="hero__lower">
        <div className="hero__lower-content">
          <h2 data-aos='zoom-in'>Asyraf Kamal</h2>
          <p>
            I'm a computer science student studying in University of Warwick.{" "}
            <br /> Welcome to my portfolio.
          </p>
        </div>
        <div className="hero__button-container">
          <a className="hero__button-contact" href="#contact-me">Contact Me</a>

          <a className="hero__button-resume" href="">My Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
