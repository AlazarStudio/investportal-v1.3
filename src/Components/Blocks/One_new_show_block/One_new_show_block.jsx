import React from "react";
import classes from './One_new_show_block.module.css';
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import H2 from "../../Standart/H2/H2";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';


function One_new_show_block({ children, ...props }) {
    return (
        <>
            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                            ПОДПИСАНИЕ ДОРОЖНОЙ КАРТЫ ПО РАЗВИТИЮ СОТРУДНИЧЕСТВА МЕЖДУ КАРАЧАЕВО-ЧЕРКЕССКОЙ РЕСПУБЛИКОЙ И РЕСПУБЛИКОЙ БЕЛАРУСЬ
                        </H2>

                        <div className={classes.new_slider}>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={15}
                                navigation={true}
                                loop={true}
                                modules={[Navigation]}
                                className="newSlider"
                            >
                                <SwiperSlide>
                                    <img src="/new1.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/new2.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/new3.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/new1.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/new2.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/new3.jpg" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <div className={classes.new_desc}>
                            8 февраля состоялась рабочая встреча в формате видеоконференцсвязи по сотрудничеству между Карачаево-Черкесской Республикой и Республикой Беларусь.
                            <br />
                            В рабочей встрече приняли участие представители Правительства КЧР, члены Государственного Комитета по имуществу Республики Беларусь, а также представители бизнес-сообществ.
                            <br />
                            Итогом рабочей встречи стало подписание Дорожной карты по развитию торгово-экономического, научно-технического, социального и культурного сотрудничества,а также обмен опытом в сфере градостроительства и в области легкой промышленности.
                            <br />
                            Заместитель Председателя Правительства КЧР Евгений Поляков поприветствовал гостей и выразил убеждение, что подписание Дорожной карты будет способствовать усилению и укреплению уже существующего взаимодействия и последующему развитию взаимовыгодного сотрудничества двух республик.
                            <br />
                            Министр @economy_kchr Али Накохов в свою очередь отметил , что реализация мероприятий в рамках Дорожной карты внесут свой вклад в дальнейшее укрепление позитивных тенденций и реализацию новых полезных инициатив.
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default One_new_show_block;