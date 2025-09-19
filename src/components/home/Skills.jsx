import "./Skills.css";

import verifiedIcon from '../../assets/verified-badge-fill.png';

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__title" data-aos="fade-right">
        <h2>Skills</h2>
      </div>

      <div className="skills__title-mobile" data-aos='fade-down'>
        <h2>Skills</h2>
      </div>

      <div className="skills__container">
        <div className="skills__card" data-aos="fade-left">
          <h4 className="skills__card-title">Frontend Development</h4>

          <ul className="skills__card-list">
            <li className="skills__item">
              <img src={verifiedIcon} alt="bullets" />
              <p>HTML</p>
            </li>
            <li className="skills__item">
              <img src={verifiedIcon} alt="bullets" />
              <p>CSS</p>
            </li>
            <li className="skills__item">
              <img src={verifiedIcon} alt="bullets" />
              <p>React</p>
            </li>
            <li className="skills__item">
              <img src={verifiedIcon} alt="bullets" />
              <p>JavaScript</p>
            </li>
            <li className="skills__item">
              <img src={verifiedIcon} alt="bullets" />
              <p>Bootstrap</p>
            </li>
          </ul>
        </div>
        <div className="skills__card" data-aos="fade-left">
          <h4 className="skills__card-title">Backend Development</h4>

          <ul className="skills__card-list">
            <li className="skills__item">
              <img src={verifiedIcon} alt="bullets" />
              <p>Python</p>
            </li>
            <li className="skills__item">
              <img src={verifiedIcon} alt="bullets" />
              <p>Java</p>
            </li>
            <li className="skills__item">
              <img src={verifiedIcon} alt="bullets" />
              <p>Flask</p>
            </li>
            <li className="skills__item">
              <img src={verifiedIcon} alt="bullets" />
              <p>PostgreSQL</p>
            </li>
          </ul>
        </div>
        <div className="skills__card" data-aos="fade-left">
          <h4 className="skills__card-title">Tools & Version Control</h4>

          <ul className="skills__card-list">
            <li className="skills__item">
              <img src={verifiedIcon} alt="bullets" />
              <p>Git</p>
            </li>
            <li className="skills__item">
              <img src={verifiedIcon} alt="bullets" />
              <p>Github</p>
            </li>
            <li className="skills__item">
              <img src={verifiedIcon} alt="bullets" />
              <p>Figma</p>
            </li>
            <li className="skills__item">
              <img src={verifiedIcon} alt="bullets" />
              <p>Canva</p>
            </li>
          </ul>
        </div>
        <div className="skills__card" data-aos="fade-left">
          <h4 className="skills__card-title">Data Analysis & Visualization</h4>

          <ul className="skills__card-list">
            <li className="skills__item">
              <img src={verifiedIcon} alt="bullets" />
              <p>Excel</p>
            </li>
            <li className="skills__item">
              <img src={verifiedIcon} alt="bullets" />
              <p>Power BI</p>
            </li>
            <li className="skills__item">
              <img src={verifiedIcon} alt="bullets" />
              <p>Pandas</p>
            </li>
            <li className="skills__item">
              <img src={verifiedIcon} alt="bullets" />
              <p>Matplotlib</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
