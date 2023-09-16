import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";

export default function HorizontalSwiper() {
  return (
    <Swiper
      // install Swiper modules
      slidesPerView={1}
      spaceBetween={30}
      freeMode={true}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      direction="horizontal"
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Navigation, Pagination]}
      className="max-h-[90rem] mr-auto w-full shadow-lg shadow-[#007aff]  rounded-xl px-12 py-8 mt-8"
    >
      <SwiperSlide className="rounded-lg py-12">
        <div className="h-full w-full ">
          <div className="work__box">
            <div className="work__text ">
              <h3>Quizzical App</h3>
              <p className="sm:mx-auto">
                Quizzical is a multipage React.js application designed to engage
                users with trivia questions. Users can choose the number of
                questions, category, and difficulty level before being presented
                with trivia questions to answer.
              </p>
              <ul className="work__list sm:max-lg:flex sm:max-lg:gap-4 sm:max-lg:justify-center">
                <li>React-Router</li>
                <li>Fetch API</li>
                <li>Vanilla CSS</li>
              </ul>
              <div className="work__links justify-center lg:justify-start">
                <a
                  href="https://quizzicalgf.netlify.app/"
                  className="link__text"
                >
                  Visit Site <span>→</span>
                </a>
                <a href="https://github.com/Gabriel-Ferrales/Quizzical-V2">
                  <img
                    src="/github.svg"
                    className="work__code"
                    title="View Source Code"
                    alt="GitHub"
                    style={{ width: "4rem" }}
                  />
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img
                src="/projects/quizzical.png"
                className="work__image rounded-lg"
                alt="Project 1"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="rounded-lg py-12">
        <div className="h-full w-full">
          <div className="work__box">
            <div className="work__text">
              <h3>Flixx App</h3>
              <p className="sm:mx-auto">
                Flixx is a multipage React App that showcases the most popular
                TV Shows and Movies, and also enables users to search for their
                favorite titles in a smooth and compelling navigation
                experience.
              </p>
              <ul className="work__list sm:max-lg:flex sm:max-lg:gap-4 sm:max-lg:justify-center">
                <li>React-Router</li>
                <li>Fetch API</li>
                <li>Pagination</li>
                <li>Swipper Library</li>
              </ul>
              <div className="work__links justify-center lg:justify-start">
                <a
                  href="https://flixxmoviesgfr.netlify.app/"
                  className="link__text"
                >
                  Visit Site <span>→</span>
                </a>
                <a href="https://github.com/Gabriel-Ferrales/Flixx-Movies-React">
                  <img
                    src="/github.svg"
                    className="work__code"
                    title="View Source Code"
                    alt="GitHub"
                    style={{ width: "4rem" }}
                  />
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img
                src="/projects/flixx.png"
                className="work__image rounded-lg"
                alt="Project 2"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="rounded-lg py-12">
        <div className="h-full w-full">
          <div className="work__box">
            <div className="work__text">
              <h3>Wheater App</h3>
              <p className="sm:mx-auto">
                Based on a challenge from devChallenges.io, uses data from
                openweather API, providing a forecast for the next five days,
                users can choose from imperial or metric units, search for a city or get their location.
              </p>
              <ul className="work__list sm:max-lg:flex sm:max-lg:gap-4 sm:max-lg:justify-center">
                <li>React</li>
                <li>Fetch API</li>
                <li>Tailwind CSS</li>
                <li>Figma</li>
              </ul>
              <div className="work__links justify-center lg:justify-start">
                <a href="https://weathergf.netlify.app/" className="link__text">
                  Visit Site <span>→</span>
                </a>
                <a href="https://github.com/Gabriel-Ferrales/Weather-App">
                  <img
                    src="/github.svg"
                    className="work__code"
                    title="View Source Code"
                    alt="GitHub"
                    style={{width: "4rem"}}
                  />
                </a>
              </div>
            </div>
            <div className="work__image-box ">
              <img
                src="/projects/weather-app.png"
                className="work__image rounded-lg"
                alt="Project 3"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="rounded-lg py-12">
        <div className="h-full w-full">
          <div className="work__box">
            <div className="work__text">
              <h3>Audiophile</h3>
              <p className="sm:mx-auto">
                Based on maximum difficulty challenge from Frontend Mentor, this project emulates an e-commerce website, and implents features as a cart and checkout process all made from scratch.  
              </p>
              <ul className="work__list sm:max-lg:flex sm:max-lg:gap-4 sm:max-lg:justify-center">
                <li>React Router</li>
                <li>Tailwind CSS</li>
                <li>Local Storage State</li>
                <li>Figma</li>
              </ul>
              <div className="work__links justify-center lg:justify-start">
                <a href="https://audiophile-gf.netlify.app/" className="link__text">
                  Visit Site <span>→</span>
                </a>
                <a href="https://github.com/Gabriel-Ferrales/audiophile">
                  <img
                    src="/github.svg"
                    className="work__code"
                    title="View Source Code"
                    alt="GitHub"
                    style={{width: "4rem"}}
                  />
                </a>
              </div>
            </div>
            <div className="work__image-box ">
              <img
                src="/projects/audiophile.png"
                className="work__image rounded-lg"
                alt="Project 4"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
