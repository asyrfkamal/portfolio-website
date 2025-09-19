import "./Home.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";

// import components
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import AboutMe from "./AboutMe.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Footer from "./Footer.jsx";
import Others from "./Others.jsx";
import ContactMe from "./ContactMe.jsx";

// import icons
import ArrowTop from "../../assets/arrow-up-double-fill.svg";

function App() {
  // init AOS animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  // Scroll to Top Button
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // toggle visibility
    const toggleVisibility = () => {
      if (window.pageYOffset > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Set visibility when scrolling
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* About Me */}
      <AboutMe />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Others */}
      <Others />

      {/* Contact Me */}
      <ContactMe />

      {/* Footer */}
      <Footer />


      {/* Button Scroll Top */}
      {isVisible && (
        <button
          className="scroll-to-top"
          aria-label="Scroll to top"
          onClick={scrollToTop}
        >
          <img src={ArrowTop} alt="arrow" />
        </button>
      )}
    </>
  );
}

export default App;
