import React, { useState } from "react";
import classes from './Invest_pojects_block.module.css';
import H2 from "../../Standart/H2/H2";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import DocsBlock from "../DocsBlock/DocsBlock";
import Button from "../../Standart/Button/Button";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

function Invest_pojects_block({ children, ...props }) {
    const content = {
        declaration: {
            description: "",
            files: [
                { title: 'РЕЕСТР инвестиционных соглашений 2024', name: "REESTR investicionnyh soglashenij 2024", path: "docx" },
                { title: 'Об утверждении инвестиционного плана Карачаево-Черкесской Республики на 2023 год', name: "Ob utverzhdenii investicionnogo plana Karachaevo-CHerkesskoj Respubliki na 2023 god", path: "pdf" },
            ],
        },
    };

    return (
        <>
            {/* <CenterBlock>
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
            </CenterBlock> */}

            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                            Инвестиционные проекты
                        </H2>

                        <DocsBlock array={content.declaration.files} />
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default Invest_pojects_block;