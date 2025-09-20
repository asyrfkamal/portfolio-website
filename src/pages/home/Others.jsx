import "./Others.css";

import { NavLink } from "react-router-dom";

import ArrowRightUp from '../../assets/arrow-right-up-line.svg';

function Others() {
  return (
    <section id="others" className="others" data-aos="fade-up-left">
      <div className="others__upper">
        <h3>Want to know more than just my code?</h3>
        <p>
          Check out my travels, hobbies, and what I'm passionate about outside
          of programming
        </p>
      </div>
      <div className="others__lower-container">
        <NavLink to="/more" className="others__lower">
          <p><span>Get to </span>Know Me Better</p>
          <img src={ArrowRightUp} alt="arrow" />
        </NavLink>
      </div>
    </section>
  );
}

export default Others;
