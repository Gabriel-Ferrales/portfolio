import { useSwiper } from "swiper/react";


export default function Navbar() {

  const swiper = useSwiper()

  return ( 
        <nav className="w-full bg-white dark:bg-zinc-900 dark:text-white" >
          <ul className="flex justify-end mr-12">
            <li className="nav__item">
              <button  className="nav__link" onClick={() => swiper.slideTo(1)}>
                Work
              </button>
            </li>
            {/* <li class="nav__item"><a href="#clients" class="nav__link">Clients</a></li> */}
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={() => swiper.slideTo(2)}>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={() => swiper.slideTo(3)}>
                Contact
              </a>
            </li>
            {/* <div class="toggle-switch">
            <label class="switch-label">
                <input type="checkbox" class="checkbox">
                <span class="slider"></span>
            </label>
            </div>   */}
          </ul>
        </nav>
   
     
 
  );
}
