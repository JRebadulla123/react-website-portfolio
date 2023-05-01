import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Ransomware1 from "../../img/rasomware1.png";
import Ransomware2 from "../../img/rasomware2.png";
import Ransomware3 from "../../img/ransomware3.png";
import Ransomware4 from "../../img/ransomware4.png";
import Ransomware5 from "../../img/ransomware5.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>About</span>
      <span>Ransomware</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Ransomware1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ransomware2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ransomware3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ransomware4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ransomware5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
