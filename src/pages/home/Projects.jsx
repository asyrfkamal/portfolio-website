import "./Projects.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ArrowRightUp from "../../assets/arrow-right-up-line.svg";
import PlaceholderImage from "../../assets/placeholder-img.png";
import BudgetPlannerPic from "/budget-planner-pic-1.svg";
import PixelArtPic from "/pixel-art-website-pic-1.svg";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__title" data-aos="zoom-in">
        <h2>Projects</h2>
      </div>

      <Swiper
        loop={true}
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={2}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          el: ".swiper-pagination",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          930: {
            slidesPerView: 2,
          },
          1330: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
        data-aos="fade-up"
      >
        <SwiperSlide>
          <article className="project-card">
            <div className="project-card__image">
              <img src={PixelArtPic} alt="project-pic" loading="lazy" />
            </div>
            <div className="project-card__content">
              <h4 className="project-card__title">MyPixels!</h4>
              <p className="project-card__desc">
                A full-stack web application where users can create pixel art in-browser, share their creations, and engage with a community
                by upvoting their favourites. 
                <br /><br />
                Built with Flask, Bootstrap, and SQLite, featuring
                user authentication, image processing, and a dynamic gallery.
              </p>
            </div>
            <div className="project-card__buttons">
              <a className="project__button" href="https://asyrfkamal.pythonanywhere.com/" target="_blank">
                <p>Live Demo</p>
                <img
                  src={ArrowRightUp}
                  alt="arrow"
                  className="arrow-right-up"
                />
              </a>
              {/* <a className="project__button" href="">
                <p>GitHub</p>
                <img
                  src={ArrowRightUp}
                  alt="arrow"
                  className="arrow-right-up"
                />
              </a> */}
            </div>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="project-card">
            <div className="project-card__image">
              <img src={PlaceholderImage} alt="project-pic" loading="lazy" />
            </div>
            <div className="project-card__content">
              <h4 className="project-card__title">Warwick+ Data Structure</h4>
              <p className="project-card__desc">
                Engineered a custom abstract data type (ADT) to power a movie database, priotizing optimal query performance
                with low time complexity. The design critically balanced the trade-off between time and space efficieny, implementing an 
                algorithmic solution that ensures fast data retrieval while maintaining intelligent memory usage.
              </p>
            </div>
            <div className="project-card__buttons">
              <button className="project__button">
                <p>Live Demo</p>
                <img
                  src={ArrowRightUp}
                  alt="arrow"
                  className="arrow-right-up"
                />
              </button>
              {/* <button className="project__button">
                <p>GitHub</p>
                <img
                  src={ArrowRightUp}
                  alt="arrow"
                  className="arrow-right-up"
                />
              </button> */}
            </div>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="project-card">
            <div className="project-card__image">
              <img src={BudgetPlannerPic} alt="project-pic" loading="lazy" />
            </div>
            <div className="project-card__content">
              <h4 className="project-card__title">Ultimate Budget Planner</h4>
              <p className="project-card__desc">
                A dynamic Excel budget dashboard that automates tracking and planning.
                <br /><br />
                Highlights include an interactive dashboard showcasing target vs. actual percetanges for spending and savings, 
                powered by advanced formulas, pivot tables, and conditional formatting.
              </p>
            </div>
            <div className="project-card__buttons">
              <a 
                href="https://livewarwickac-my.sharepoint.com/:x:/g/personal/u5624289_live_warwick_ac_uk/EdqauEYBLKZNv9-KoDv0iTgBvCF61lxh0prTVqrRaIRb5w?e=zdMh0F" 
                target="_blank"
                className="project__button"
              >
                <p>Live Demo</p>
                <img
                  src={ArrowRightUp}
                  alt="arrow"
                  className="arrow-right-up"
                />
              </a>
              <a className="project__button">
                <p>GitHub</p>
                <img
                  src={ArrowRightUp}
                  alt="arrow"
                  className="arrow-right-up"
                />
              </a>
            </div>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="project-card">
            <div className="project-card__image">
              <img src={PlaceholderImage} alt="project-pic" loading="lazy" />
            </div>
            <div className="project-card__content">
              <h4 className="project-card__title">Job Market Analysis</h4>
              <p className="project-card__desc">
                Conducted a comprehensive analysis of the computer science job market using Python. 
                Leveraged Pandas for data manipulation and Matplotlib for visualization to extract key 
                trends, patterns, and actionable insights from a large dataset, providing a clear overview
                of the market landscape.
              </p>
            </div>
            <div className="project-card__buttons">
              {/* <button className="project__button">
                <p>Live Demo</p>
                <img
                  src={ArrowRightUp}
                  alt="arrow"
                  className="arrow-right-up"
                />
              </button> */}
              <button className="project__button">
                <p>GitHub</p>
                <img
                  src={ArrowRightUp}
                  alt="arrow"
                  className="arrow-right-up"
                />
              </button>
            </div>
          </article>
        </SwiperSlide>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
}

export default Projects;
