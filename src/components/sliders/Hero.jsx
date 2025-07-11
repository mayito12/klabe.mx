import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import Data from "@data/sliders/hero";
import Link from "next/link";

const HeroSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className="featured-slider-one"
      style={{ background: "#fff", minHeight: "100vh" }}
    >
      <div className="containe">
        <Swiper
          {...sliderProps.heroSlider}
          className="swiper-container ro f-slider-one"
        >
          {Data.items.map((item, key) => (
            <SwiperSlide key={`hs-slide-${key}`} className="swiper-slide">
              <div className="f-slider-layer">
                <img
                  src={
                    isMobile && item.imageMobile ? item.imageMobile : item.image
                  }
                  alt={item.title}
                />
                <div className="f-slider-one-data">
                  <h1>{item.title}</h1>
                  <p>{item.text}</p>
                  <Link href={item.button.link} className="theme-btn">
                    {item.button.label}
                    <i className="fa-solid fa-angles-right" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSlider;
