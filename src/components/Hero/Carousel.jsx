// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, EffectCoverflow]}
      // spaceBetween={50}
      slidesPerView={3}
      centeredSlides
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{
        "--swiper-pagination-color": "#1396d7",
        "--swiper-pagination-bullet-inactive-color": "#19376d",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "16px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
      initialSlide={2}
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 1000,
        modifier: 1,
        slideShadows: false,
      }}
    >
      <SwiperSlide>
        <img
          // src="/assets/hero/heroImage.png"
          src="/assets/projects/marketasynkova.png"
          alt="hero-image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          // src="/assets/hero/heroImage.png"
          src="/assets/projects/prachovec.png"
          alt="hero-image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          // src="/assets/hero/heroImage.png"

          src="/assets/projects/r2editor.png"
          alt="hero-image"
        />
      </SwiperSlide>
    </Swiper>
  );
};
