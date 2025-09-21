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
          <img src={aboutImage} alt="pic of me" loading="lazy" />
        </div>

        <div className="about__text">
          <p>
            Hey, I'm Asyraf Kamal, a Computer Science student at the University of Warwick with a strong passion for transforming data 
            into visible insights through data analysis, machine learning and backend development.
            <br />
            <br />
            I actively develop my skills by building hands-on project, including interactice data visualization dashboards and full-stack web applications.  
          
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
