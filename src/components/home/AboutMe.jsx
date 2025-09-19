import "./AboutMe.css";

import aboutImage from "../../assets/me4.jpg";

function AboutMe() {
  return (
    <section id="about-me" className="about" data-aos='fade-up'>
      <div className="about__overlay"></div>

      <div className="about__title">
        <h2>About Me</h2>
      </div>

      <div className="about__content">
        <div className="about__image">
          <img src={aboutImage} alt="pic of me" />
        </div>

        <div className="about__text">
          <p>
            I am a Malaysian sophomore computer scientist studying in the
            University of Warwick. I am a Malaysian sophomore computer scientist
            studying in the University of Warwick. I am a Malaysian sophomore
            computer scientist studying in the University of Warwick.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
