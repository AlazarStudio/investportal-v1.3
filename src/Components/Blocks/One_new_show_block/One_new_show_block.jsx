import React from "react";
import { useParams } from "react-router-dom";
import classes from './One_new_show_block.module.css';
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import H2 from "../../Standart/H2/H2";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

import { newsArray } from '../../../news_data';


function One_new_show_block({ children, ...props }) {
    const { id } = useParams();

    const foundNews = newsArray.find(news => news.link === id);
    return (
        <>
            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                            {foundNews.title}
                        </H2>

                        <div className={classes.new_slider}>
                            <Swiper
                                breakpoints={{
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    1300: {
                                        slidesPerView: 3,
                                    }
                                }}
                                slidesPerView={1}
                                spaceBetween={15}
                                navigation={true}
                                loop={true}
                                modules={[Navigation]}
                                className="newSlider"
                            >
                                {foundNews.image.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={`/${image}`} alt={`Slide ${index}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className={classes.new_desc} dangerouslySetInnerHTML={{ __html: foundNews.text }} ></div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default One_new_show_block;