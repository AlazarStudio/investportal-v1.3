import React, { useRef, useState } from "react";

import classes from "./SliderNews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import CenterBlock from "../../../Standart/CenterBlock/CenterBlock";

function SliderBottomNav({ children, ...props }) {
  return (
    <>
      <div className={classes.SliderBottomNav}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          loop={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {props.slides.map((item, index) => (
            <SwiperSlide key={index}>
              <CenterBlock >
                  <img src={`/${item}`} alt="" style={{ width: "100%", height: "400px", objectFit: "cover" }} />
              </CenterBlock>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default SliderBottomNav;