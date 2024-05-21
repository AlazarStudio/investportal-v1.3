import classes from './SliderRightNav.module.css';
import MyButton from '../../Button/MyButton';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import mainSliderBackground from '../../../../assets/mainSliderBackground.png';
import mainSliderBackground1 from '../../../../assets/mainSliderBackground1.webp';
import mainSliderBackground2 from '../../../../assets/mainSliderBackground2.webp';
import mainSliderBackground3 from '../../../../assets/mainSliderBackground3.webp';
import BlockWidth from '../../../blocks/BlockWidth/BlockWidth';
import CenterBlock from '../../../blocks/centerBlock/CenterBlock';

const SliderRightNav = () => {
    return (
        <>
            <div className={classes.slider}>
                <Swiper
                    direction={'horizontal'}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    navigation={true}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className={classes.slider_item} style={{
                            background: `url(${mainSliderBackground})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: '50 50'
                        }}>

                            <CenterBlock>
                                <BlockWidth>
                                    <div className={classes.slider_item__left}>
                                        <div className={classes.slider_item__left___title}>
                                            Инвестиционные проекты реализованы на общую сумму
                                        </div>
                                        <MyButton linkpage="projects" width={"225px"}>Узнать больше</MyButton>
                                    </div>
                                    <div className={classes.slider_item__right}>
                                        <div>18,9</div>
                                        <div>млрд. рублей</div>
                                    </div>

                                </BlockWidth>
                            </CenterBlock>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={classes.slider_item} style={{
                            background: `url(${mainSliderBackground1})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: '50 50'
                        }}>

                            <CenterBlock>
                                <BlockWidth>
                                    <div className={classes.slider_item__left}>
                                        <div className={classes.slider_item__left___title}>
                                            В 2022 году туристический поток в Карачаево-Черкесскую Республику вырос на 10%
                                        </div>
                                        {/* <MyButton link={"../src/assets/files/file_65a2c65eaa952.pdf"} width={"225px"}>Узнать больше</MyButton> */}
                                    </div>
                                    <div className={classes.slider_item__right}>
                                        <div>1 млн </div>
                                        <div>923 тыс. туристов</div>
                                    </div>

                                </BlockWidth>
                            </CenterBlock>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={classes.slider_item} style={{
                            background: `url(${mainSliderBackground2})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: '50 50'
                        }}>

                            <CenterBlock>
                                <BlockWidth>
                                    <div className={classes.slider_item__left}>
                                        <div className={classes.slider_item__left___title}>
                                            По итогам 2022 года в хозяйствах всех категорий Карачаево-Черкесской Республики имеется более
                                        </div>
                                        {/* <MyButton link={"../src/assets/files/file_65a2c65eaa952.pdf"} width={"225px"}>Узнать больше</MyButton> */}
                                    </div>
                                    <div className={classes.slider_item__right}>
                                        <div>149,8</div>
                                        <div>тыс. голов крупного рогатого скота. </div>
                                    </div>

                                </BlockWidth>
                            </CenterBlock>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={classes.slider_item} style={{
                            background: `url(${mainSliderBackground3})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: '50 50'
                        }}>

                            <CenterBlock>
                                <BlockWidth>
                                    <div className={classes.slider_item__left}>
                                        <div className={classes.slider_item__left___title}>
                                            <div className={classes.smallText}>Целевая программа «Развитие садоводства в Карачаево-Черкесской Республике»</div>
                                            <div className={classes.largeText}>оказана поддержка 11 </div>
                                            <div className={classes.smallText}>сельскохозяйственным потребительским и перерабатывающим кооперативам</div>
                                        </div>
                                        {/* <MyButton link={"../src/assets/files/file_65a2c65eaa952.pdf"} width={"225px"}>Узнать больше</MyButton> */}
                                    </div>
                                    <div className={classes.slider_item__right}>
                                        <div>138 <span className={classes.smallText}>млн. руб.</span></div>
                                        <div>Было освоено за период реализации данной программы садоводами республики</div>
                                    </div>

                                </BlockWidth>
                            </CenterBlock>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>
        </>
    )
}

export default SliderRightNav;