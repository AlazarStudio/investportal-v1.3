import React from "react";
import classes from './Main_page_block.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import WidthBlock from '../../Standart/WidthBlock/WidthBlock'
import RowBlock from '../../Standart/RowBlock/RowBlock'
import CenterBlock from '../../Standart/CenterBlock/CenterBlock'
import ColumnBlock from '../../Standart/ColumnBlock/ColumnBlock'
import H2 from '../../Standart/H2/H2'

function Main_page_block({ children, ...props }) {
    return (
        <>
            <ColumnBlock gap="80px">
                <div className={classes.mainslider}>
                    <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
                        <SwiperSlide>
                            <div className={classes.mainslider_slide} style={{ backgroundImage: `url('/main_slide1.png')` }} >
                                <WidthBlock>
                                    <RowBlock justifyContent="space-between">
                                        <div className={classes.mainslider_slide__item}>
                                            <div className={classes.mainslider_slide__item___text}>
                                                Инвестиционные
                                                проекты
                                                реализованы на
                                                общую сумму
                                            </div>
                                            <div className={classes.mainslider_slide__item___button}>
                                                Узнать больше
                                            </div>
                                        </div>
                                        <div className={classes.mainslider_slide__item}>
                                            <div className={classes.mainslider_slide__item___large}>
                                                18,9
                                            </div>
                                            <div className={classes.mainslider_slide__item___text}>
                                                млрд. рублей
                                            </div>
                                        </div>
                                    </RowBlock>
                                </WidthBlock>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.mainslider_slide} style={{ backgroundImage: `url('/main_slide2.png')` }} >
                                <WidthBlock>
                                    <RowBlock justifyContent="space-between">
                                        <div className={classes.mainslider_slide__item}>
                                            <div className={classes.mainslider_slide__item___text}>
                                                Инвестиционные
                                                проекты
                                                реализованы на
                                                общую сумму
                                            </div>
                                            <div className={classes.mainslider_slide__item___button}>
                                                Узнать больше
                                            </div>
                                        </div>
                                        <div className={classes.mainslider_slide__item}>
                                            <div className={classes.mainslider_slide__item___large}>
                                                18,9
                                            </div>
                                            <div className={classes.mainslider_slide__item___text}>
                                                млрд. рублей
                                            </div>
                                        </div>
                                    </RowBlock>
                                </WidthBlock>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.mainslider_slide} style={{ backgroundImage: `url('/main_slide3.png')` }} >
                                <WidthBlock>
                                    <RowBlock justifyContent="space-between">
                                        <div className={classes.mainslider_slide__item}>
                                            <div className={classes.mainslider_slide__item___text}>
                                                Инвестиционные
                                                проекты
                                                реализованы на
                                                общую сумму
                                            </div>
                                            <div className={classes.mainslider_slide__item___button}>
                                                Узнать больше
                                            </div>
                                        </div>
                                        <div className={classes.mainslider_slide__item}>
                                            <div className={classes.mainslider_slide__item___large}>
                                                18,9
                                            </div>
                                            <div className={classes.mainslider_slide__item___text}>
                                                млрд. рублей
                                            </div>
                                        </div>
                                    </RowBlock>
                                </WidthBlock>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.mainslider_slide} style={{ backgroundImage: `url('/main_slide4.png')` }} >
                                <WidthBlock>
                                    <RowBlock justifyContent="space-between">
                                        <div className={classes.mainslider_slide__item}>
                                            <div className={classes.mainslider_slide__item___text}>
                                                Инвестиционные
                                                проекты
                                                реализованы на
                                                общую сумму
                                            </div>
                                            <div className={classes.mainslider_slide__item___button}>
                                                Узнать больше
                                            </div>
                                        </div>
                                        <div className={classes.mainslider_slide__item}>
                                            <div className={classes.mainslider_slide__item___large}>
                                                18,9
                                            </div>
                                            <div className={classes.mainslider_slide__item___text}>
                                                млрд. рублей
                                            </div>
                                        </div>
                                    </RowBlock>
                                </WidthBlock>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.mainslider_slide} style={{ backgroundImage: `url('/main_slide5.png')` }} >
                                <WidthBlock>
                                    <RowBlock justifyContent="space-between">
                                        <div className={classes.mainslider_slide__item}>
                                            <div className={classes.mainslider_slide__item___text}>
                                                Инвестиционные
                                                проекты
                                                реализованы на
                                                общую сумму
                                            </div>
                                            <div className={classes.mainslider_slide__item___button}>
                                                Узнать больше
                                            </div>
                                        </div>
                                        <div className={classes.mainslider_slide__item}>
                                            <div className={classes.mainslider_slide__item___large}>
                                                18,9
                                            </div>
                                            <div className={classes.mainslider_slide__item___text}>
                                                млрд. рублей
                                            </div>
                                        </div>
                                    </RowBlock>
                                </WidthBlock>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <CenterBlock>
                    <WidthBlock>
                        <div className={classes.map}>
                            <div className={classes.map_left}>
                                <div className={classes.map_left__title}>ИНВЕСТИЦИОННАЯ КАРТА</div>
                                <div className={classes.map_left__colorBlock}></div>
                                <div className={classes.map_left__desc}>Интерактивный каталог инвестиционных предложений</div>
                            </div>
                            <div className={classes.map_right}>
                                <img src="/map.png" alt="" />
                            </div>
                        </div>
                    </WidthBlock>
                </CenterBlock>


                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Ресурсы</H2>
                    </WidthBlock>
                </CenterBlock>

            </ColumnBlock>
        </>
    );
}

export default Main_page_block;