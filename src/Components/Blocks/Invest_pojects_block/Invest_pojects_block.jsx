import React from "react";
import classes from './Invest_pojects_block.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import Button from "../../Standart/Button/Button";


function Invest_pojects_block({ children, ...props }) {
    return (
        <>
            <CenterBlock>
                <WidthBlock>
                    <div className={classes.projects}>
                        <Swiper navigation={true} modules={[Navigation]} loop={true} className={`${classes.projects_slider} projects_slider`}>
                            <SwiperSlide>
                                <div className={classes.projects_slide} style={{ backgroundImage: `url('/investProject_1.png')` }} >
                                    <div className={classes.projects_slide__title}>
                                        ВЫСОКОТЕХНОЛОГИЧНОЕ ПРОИЗВОДСТВО РАСХОДНЫХ МАТЕРИАЛОВ  ДЛЯ МЕДИЦИНСКИХ ЛАБОРАТОРИЙ
                                    </div>
                                    <div className={classes.projects_slide__price}>362 500 000 ₽</div>
                                    <div className={classes.projects_slide__text}>
                                        Проект импортозамещения по расходным материалам для медицинских лабораторий.  Производство одноразовых наконечников для дозаторов пипеточных без фильтра и с фильтром для проведения медицинских лабораторных исследований.
                                    </div>
                                    <Button>Узнать больше</Button>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </WidthBlock>
            </CenterBlock>
        </>
    );
}

export default Invest_pojects_block;