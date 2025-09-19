import './Projects.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PlaceholderImage from "../../assets/placeholder-img.png";
import ArrowRightUp from '../../assets/arrow-right-up-line.svg';
import prop1 from "../../assets/me3.jpg";
import prop2 from "../../assets/obersee2.jpg";

function Projects() {
    return(
        <section id="projects" className="projects">
        <div className="projects__title" data-aos='zoom-in'>
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
          data-aos='fade-up'
        >

          <SwiperSlide>
            <article className="project-card">
              <div className='project-card__image'>
                <img
                  src={prop1}
                  alt="project-pic"
                  loading='lazy'
                />
              </div>
              <div className="project-card__content">
                <h4 className="project-card__title">Pixel Art Website </h4>
                <p className="project-card__desc">
                  I am a Malaysian sophomore computer scientist studying in
                  the University of Warwick I am a Malaysian sophomore
                  computer scientist studying in the University of Warwick
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

          <SwiperSlide>
            <article className="project-card">
              <div className='project-card__image'>
                <img
                  src={prop2}
                  alt="project-pic"
                  loading='lazy'
                />
              </div>
              <div className="project-card__content">
                <h4 className="project-card__title">Pixel Art Website</h4>
                <p className="project-card__desc">
                  I am a Malaysian sophomore computer scientist studying in
                  the University of Warwick <br />
                  <br />I am a Malaysian sophomore computer scientist studying
                  in the University of Warwick
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

          <SwiperSlide>
            <article className="project-card">
              <div className='project-card__image'>
                <img
                  src={PlaceholderImage}
                  alt="project-pic"
                  loading='lazy'
                />
              </div>
              <div className="project-card__content">
                <h4 className="project-card__title">Pixel Art Website</h4>
                <p className="project-card__desc">
                  I am a Malaysian sophomore computer scientist studying in
                  the University of Warwick <br />
                  <br />I am a Malaysian sophomore computer scientist studying
                  in the University of Warwick
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

          <SwiperSlide>
            <article className="project-card">
              <div className='project-card__image'>
                <img
                  src={PlaceholderImage}
                  alt="project-pic"
                  loading='lazy'
                />
              </div>
              <div className="project-card__content">
                <h4 className="project-card__title">Pixel Art Website</h4>
                <p className="project-card__desc">
                  I am a Malaysian sophomore computer scientist studying in
                  the University of Warwick <br />
                  <br />I am a Malaysian sophomore computer scientist studying
                  in the University of Warwick
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

          <div className="swiper-button-prev">
          </div>
          <div className="swiper-button-next">
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
        
      </section>
    );
}

export default Projects;