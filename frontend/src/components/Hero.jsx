import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "../assets/images/slide-1.png";
import Slide2 from "../assets/images/slide-2.png";
import "./Hero.css";
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <Swiper
          className="swiper"
          modules={[Autoplay, Pagination, A11y]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="swiper-slide">
            <a href="#">
              <img src={Slide1} alt="slide-1" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <a href="#" className="hero-slide">
              <img src={Slide2} alt="slide-2" />
              <div className="hero-content">
                <h3 className="sub-title">GIFTING MADE EASIER</h3>
                <div className="title-wrapper">
                  <h1 className="title">
                    Buy A Gift Card,
                    <span>Get Cash Back Rewards</span>
                  </h1>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Hero;
