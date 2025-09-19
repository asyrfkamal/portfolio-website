import "./App.css";


import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useEffect, useState } from "react";

// import components
import Header from "./components/home/Header.jsx";
import Hero from "./components/home/Hero.jsx";
import AboutMe from "./components/home/AboutMe.jsx";
import Skills from "./components/home/Skills.jsx";
import Projects from "./components/home/Projects.jsx";
import Footer from "./components/home/Footer.jsx";
import Others from "./components/home/Others.jsx";
import ContactMe from "./components/home/ContactMe.jsx";

// import icons
import ArrowTop from "./assets/arrow-up-double-fill.png";

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

  // Swiper JS

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
