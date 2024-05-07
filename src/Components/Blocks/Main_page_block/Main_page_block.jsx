import React from "react";
import classes from './Main_page_block.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

import WidthBlock from '../../Standart/WidthBlock/WidthBlock'
import RowBlock from '../../Standart/RowBlock/RowBlock'
import CenterBlock from '../../Standart/CenterBlock/CenterBlock'
import ColumnBlock from '../../Standart/ColumnBlock/ColumnBlock'
import H2 from '../../Standart/H2/H2'
import Button from '../../Standart/Button/Button'

function Main_page_block({ children, ...props }) {
    return (
        <>
            <ColumnBlock gap="80px">
                <div className={classes.mainslider}>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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

                <CenterBlock>
                    <WidthBlock>
                        <div className={classes.resourses}>
                            <a href="https://kchr.ru" target="_blank" className={classes.resourses_item}>
                                <div className={classes.resourses_item__title}>Глава и Правительство</div>
                                <div className={classes.resourses_item__linkName}>kchr.ru</div>
                            </a>
                            <a href="https://economykchr.ru" target="_blank" className={classes.resourses_item}>
                                <div className={classes.resourses_item__title}>Минэкономразвития</div>
                                <div className={classes.resourses_item__linkName}>economykchr.ru</div>
                            </a>
                            <a href="https://kchr-invest.ru" target="_blank" className={classes.resourses_item}>
                                <div className={classes.resourses_item__title}>Корпорация развития</div>
                                <div className={classes.resourses_item__linkName}>kchr-invest.ru</div>
                            </a>
                            <a href="https://moibiz09.ru" target="_blank" className={classes.resourses_item}>
                                <div className={classes.resourses_item__title}>Поддержка МСП</div>
                                <div className={classes.resourses_item__linkName}>moibiz09.ru</div>
                            </a>
                        </div>
                    </WidthBlock>
                </CenterBlock>

                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                            Реализованные и реализуемые проекты
                        </H2>
                        <CenterBlock>
                            <Button>Все проекты</Button>
                        </CenterBlock>

                        <div className={classes.projects}>
                            <Swiper
                                pagination={{
                                    dynamicBullets: true,
                                }}
                                navigation={true}
                                loop={true}
                                modules={[Pagination, Navigation]}
                                className="projectsSlider"
                            >
                                <SwiperSlide>
                                    <div className={classes.projects_slide}>
                                        <div className={classes.projects_slide__left}>
                                            <div className={classes.projects_slide__left___img}>
                                                <img src="/projectSlide_1.png" alt="" />
                                            </div>
                                        </div>
                                        <div className={classes.projects_slide__right}>
                                            <div className={classes.projects_slide__right___title}>
                                                ОАО «Хабезский гипсовый завод»
                                            </div>
                                            <div className={classes.projects_slide__right___desc}>
                                                Проект: «Модернизация оборудования ОАО «Хабезский гипсовый завод»
                                                и расширение ассортимента продукции на основе гипсового
                                                вяжущего». В рамках реализации инвестпроекта было создано 150 дополнительных рабочих мест.
                                                Инвестиции в проект составили: 1,35 млрд руб.
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className={classes.projects_slide}>
                                        <div className={classes.projects_slide__left}>
                                            <div className={classes.projects_slide__left___img}>
                                                <img src="/projectSlide_1.png" alt="" />
                                            </div>
                                        </div>
                                        <div className={classes.projects_slide__right}>
                                            <div className={classes.projects_slide__right___title}>
                                                ОАО «Хабезский гипсовый завод»
                                            </div>
                                            <div className={classes.projects_slide__right___desc}>
                                                Проект: «Модернизация оборудования ОАО «Хабезский гипсовый завод»
                                                и расширение ассортимента продукции на основе гипсового
                                                вяжущего». В рамках реализации инвестпроекта было создано 150 дополнительных рабочих мест.
                                                Инвестиции в проект составили: 1,35 млрд руб.
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className={classes.projects_slide}>
                                        <div className={classes.projects_slide__left}>
                                            <div className={classes.projects_slide__left___img}>
                                                <img src="/projectSlide_1.png" alt="" />
                                            </div>
                                        </div>
                                        <div className={classes.projects_slide__right}>
                                            <div className={classes.projects_slide__right___title}>
                                                ОАО «Хабезский гипсовый завод»
                                            </div>
                                            <div className={classes.projects_slide__right___desc}>
                                                Проект: «Модернизация оборудования ОАО «Хабезский гипсовый завод»
                                                и расширение ассортимента продукции на основе гипсового
                                                вяжущего». В рамках реализации инвестпроекта было создано 150 дополнительных рабочих мест.
                                                Инвестиции в проект составили: 1,35 млрд руб.
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <div className={classes.projects_slide}>
                                        <div className={classes.projects_slide__left}>
                                            <div className={classes.projects_slide__left___img}>
                                                <img src="/projectSlide_1.png" alt="" />
                                            </div>
                                        </div>
                                        <div className={classes.projects_slide__right}>
                                            <div className={classes.projects_slide__right___title}>
                                                ОАО «Хабезский гипсовый завод»
                                            </div>
                                            <div className={classes.projects_slide__right___desc}>
                                                Проект: «Модернизация оборудования ОАО «Хабезский гипсовый завод»
                                                и расширение ассортимента продукции на основе гипсового
                                                вяжущего». В рамках реализации инвестпроекта было создано 150 дополнительных рабочих мест.
                                                Инвестиции в проект составили: 1,35 млрд руб.
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </WidthBlock>
                </CenterBlock>


            </ColumnBlock>
        </>
    );
}

export default Main_page_block;