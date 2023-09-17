import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import Navbar from "./Navbar";
import HorizontalSwiper from "./HorizonalSwiper";

export default function SwiperComponent() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      speed={700}
      pagination={{ clickable: true, type: "progressbar" }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={false}
      className="h-full w-full"
      direction={"vertical"}
      mousewheel={true}
      parallax={true}
    >
      <SwiperSlide>
        <Navbar />
        <div className="z-10 relative h-full w-full flex flex-col px-6 sm:px-8 items-center justify-center bg-zinc-900 text-white bg-white text-center lg:items-start lg:text-left sm:px-20 lg:px-20 overflow-hidden">
          <div className="z-10 relative ">
            <div className="max-w-3xl">
              <h1 className="text-8xl font-bold">
                Front-End React
                <br></br>
                Developer{" "}
                <img
                  src="/react.svg"
                  style={{ width: "5rem", display: "inline" }}
                  className="logo"
                />
              </h1>

              <h3 className="text-4xl mt-6">
                Hi my name is Gabriel, im a Front-End developer based in
                Hermosillo, Mexico
              </h3>
            </div>
            <div className="flex justify-center gap-6 lg:justify-start">
              <li className="hover:scale-125 duration-500 ease-in-out cursor-pointer">
                <a href="https://www.linkedin.com/in/gabriel-armando-ferrales-ruedaflores-362649236/">
                  <img src="/linkedin.svg" style={{ width: "4rem" }} />
                </a>
              </li>
              <li className="hover:scale-125 duration-500 ease-in-out cursor-pointer">
                <a href="https://github.com/Gabriel-Ferrales">
                  <img src="/github.svg" style={{ width: "4rem" }} />
                </a>
              </li>
            </div>
          </div>
          <div className="waves"></div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        {({ isActive }) => (
          <div className="h-full w-full flex flex-col px-6 items-center pt-8 sm:justify-start sm:pt-12 bg-white bg-zinc-900 text-white text-center lg:items-start lg:text-left sm:px-20 lg:px-20">
            <h2 className={isActive ? "" : ""}>
              My work
            </h2>

            <div className={isActive ? "active reveal fade-left w-full" : ""}>
              <HorizontalSwiper />
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div className="h-full w-full flex flex-col px-6 items-center pt-8 sm:justify-start sm:pt-12 bg-white bg-zinc-900 text-white text-center sm:items-start sm:text-left sm:px-20">
            <h2>
              About me
            </h2>

            <div className={isActive ? " w-full" : ""}>
              <div className="about__content">
                <div className="about__text">
                  {/* Replace the below paragraph with info about yourself */}
                  <p>
                    I am a Front-End developer, based in Hermosillo, Sonora. I
                    enjoy developing apps that provide solutions to real world
                    problems. My specialities include React with Javascript, Tailwind CSS,
                    and also i have knowledge in SQL databases and development
                    of API's with Python using the Flask library.
                  </p>
                  <p>
                    I have a bachelors degree in Finance from UNISON. There I
                    learned the basics in R and Python, which aroused my
                    interest in continuing to learn programming, transitioning
                    from data analysis to web development.{" "}
                  </p>
                  {/* Provide a link to your resume */}
                  <a href="/gabriel-ferrales-cv.pdf" className="btn z-10">
                    My Resume
                  </a>
                </div>
                <div className="about__photo-container">
                  {/* Add a nice photo of yourself */}
                  <img
                    className="about__photo rounded-lg"
                    src="/images/myprofile.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div className="h-full w-full flex flex-col px-6 items-center pt-8 sm:justify-start sm:pt-12 bg-white bg-zinc-900 text-white text-center lg:items-start lg:text-left sm:px-20 lg:px-20">
            <h2 className={isActive ? "" : ""}>
              Contact me
            </h2>

            <div className={isActive ? " w-full" : ""}>
              <div className="contact__info">
                <p className="mx-auto">
                  Hello there! Whether you're seeking a website for your
                  project, need some guidance, or just want to connect, I'm all
                  ears! Don't hesitate to drop me a line for a chat or any
                  inquiries. Your message means a lot, and I'll make sure to get
                  back to you ASAP. The easiest way to get in touch is by email.
                  Looking forward to hearing from you!
                </p>

                <a href="mailto:gabriel.ferrales.97@gmail.com" className="btn z-10">
                  gabriel.ferrales.97@gmail.com
                </a>
              </div>
              <div className="flex justify-center gap-6 lg:justify-start mt-8">
              <li className="hover:scale-125 duration-500 ease-in-out cursor-pointer">
                <a href="https://www.linkedin.com/in/gabriel-armando-ferrales-ruedaflores-362649236/">
                  <img src="/linkedin.svg" style={{ width: "4rem" }} />
                </a>
              </li>
              <li className="hover:scale-125 duration-500 ease-in-out cursor-pointer">
                <a href="https://github.com/Gabriel-Ferrales">
                  <img src="/github.svg" style={{ width: "4rem" }} />
                </a>
              </li>
            </div>

            </div>
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
}
