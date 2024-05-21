import React, { useEffect } from "react";

import classes from "./SliderBottomNav.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import CenterBlock from "../../../blocks/centerBlock/CenterBlock";
import SlideBlock from "../../../blocks/SlideBlock/SlideBlock";

import { getProjects } from "../../../blocks/GetData/GetData.js"

function SliderBottomNav({ children, ...props }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let projects = getProjects();
  return (
    <>
      <div className={classes.SliderBottomNav}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          loop={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {projects.map((item, index) => (
            <SwiperSlide
              key={index}>
              <CenterBlock>
                <SlideBlock
                  key={index}
                  img={`${item.img[0]}`}
                  title={item.title}
                  link={item.link}
                  text={item.text}
                />
              </CenterBlock>
            </SwiperSlide>
          ))}


        </Swiper>
      </div>
    </>
  );
}

export default SliderBottomNav;
