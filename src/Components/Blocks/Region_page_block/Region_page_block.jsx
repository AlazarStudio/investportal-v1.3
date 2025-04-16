import React, { useState, useEffect } from "react";
import classes from './Region_page_block.module.css';
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import H2 from "../../Standart/H2/H2";
import Modal from "../Modal/Modal";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

function Region_page_block({ children, ...props }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleOpenModal = (content) => {
        document.body.classList.add('no-scroll');
        setModalContent(content);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        document.body.classList.remove('no-scroll');
        setModalOpen(false);
        setModalContent('');
    };

    function useCountUp(endValue, duration) {
        const [value, setValue] = useState(0);

        useEffect(() => {
            let start = 0;
            const end = endValue;
            const incrementTime = duration / end;

            const timer = setInterval(() => {
                start += 1;
                setValue(start);
                if (start === end) {
                    clearInterval(timer);
                }
            }, incrementTime);

            return () => clearInterval(timer);
        }, [endValue, duration]);

        return value;
    }

    // Using the custom hook for each number
    const num1 = useCountUp(2, 500);
    const num2 = useCountUp(10, 1200);
    const num3 = useCountUp(5, 800);
    const num4 = useCountUp(83, 2000);
    const num5 = useCountUp(4, 600);
    return (
        <>
            <ColumnBlock className="RegionPageColumnBlock" gap="80px" overflow={'hidden'}>
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">о регионе</H2>

                        <div className={classes.region_text}>
                            Карачаево-Черкесия – динамично развивающийся субъект Российской Федерации, входящий в состав Северо-Кавказского федерального округа. Республика показывает устойчивые темпы развития в традиционных промышленном и сельскохозяйственном секторах, а также в отрасли туризма, ставшей за последнее десятилетие новым драйвером развития региональной экономики. Одной из первоочередных задач Правительства Карачаево-Черкесской Республики является формирование благоприятного инвестиционного климата в регионе и создание комфортных условий для привлечения инвестиций и реализации перспективных инвестиционных проектов.
                        </div>

                        <div className={classes.region_nums}>
                            <div className={classes.region_nums__item}>
                                <div className={classes.region_nums__item___num}>{num1}</div>
                                <div className={classes.region_nums__item___desc}>городских округа</div>
                            </div>

                            <div className={classes.region_nums__item}>
                                <div className={classes.region_nums__item___num}>{num5}</div>
                                <div className={classes.region_nums__item___desc}>города</div>
                            </div>

                            <div className={classes.region_nums__item}>
                                <div className={classes.region_nums__item___num}>{num3}</div>
                                <div className={classes.region_nums__item___desc}>городских поселений</div>
                            </div>

                            <div className={classes.region_nums__item}>
                                <div className={classes.region_nums__item___num}>{num2}</div>
                                <div className={classes.region_nums__item___desc}>муниципальных районов</div>
                            </div>


                            <div className={classes.region_nums__item}>
                                <div className={classes.region_nums__item___num}>{num4}</div>
                                <div className={classes.region_nums__item___desc}>сельских поселений</div>
                            </div>

                        </div>

                        <div className={classes.region_video}>
                            <div className={classes.region_video__btn} onClick={() => handleOpenModal('Ролик о регионе')}>
                                <img src="/play.png" alt="" />
                                Ролик о регионе
                            </div>
                        </div>
                    </WidthBlock>
                </CenterBlock>

                <div className={classes.region_glava}>
                    <CenterBlock>
                        <WidthBlock>
                            <div className={classes.region_glava__info}>
                                <div className={classes.region_glava__info___text}>
                                    <div className={classes.region_glava__info___text_____title}>
                                        Рашид Темрезов
                                    </div>
                                    <div className={classes.region_glava__info___text_____desc}>
                                        Глава Карачаево-Черкесской Республики
                                    </div>
                                    <div className={classes.region_glava__info___text_____text}>
                                        «Мы ставим перед собой сугубо практические задачи, которые подчинены одной,
                                        очень важной цели - повышение качества жизни населения Карачаево-Черкесской
                                        Республики. Нужно стремиться к кардинальным переменам, которые должны
                                        вывести экономику региона на качественно новый уровень»
                                    </div>
                                </div>
                                <div className={classes.region_glava__info___img}>
                                    <img src="/glava-Photoroom.png" alt="" />
                                </div>
                            </div>
                        </WidthBlock>
                    </CenterBlock>
                </div>

                <div className="region_slider">
                    <Swiper
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                            },
                            1300: {
                                slidesPerView: 5,
                            }
                        }}
                        slidesPerView={1}
                        spaceBetween={-50}
                        centeredSlides={true}
                        navigation={true}
                        loop={true}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className="region_slider__elements"
                    >
                        <SwiperSlide onClick={() => handleOpenModal('Сельское хозяйство')}>
                            <div className={classes.region_slider__slide}>
                                <div className={classes.region_slider__slide___title}>
                                    Сельское хозяйство
                                </div>
                                <div className={classes.region_slider__slide___img}>
                                    <img src="/regionSlide_1.png" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide onClick={() => handleOpenModal('Промышленность')}>
                            <div className={classes.region_slider__slide}>
                                <div className={classes.region_slider__slide___title}>
                                    ПРОМЫШЛЕННОСТЬ
                                </div>
                                <div className={classes.region_slider__slide___img}>
                                    <img src="/regionSlide_2.png" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide onClick={() => handleOpenModal('Туризм')}>
                            <div className={classes.region_slider__slide}>
                                <div className={classes.region_slider__slide___title}>
                                    туризм
                                </div>
                                <div className={classes.region_slider__slide___img}>
                                    <img src="/regionSlide_3.png" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide onClick={() => handleOpenModal('Строительство')}>
                            <div className={classes.region_slider__slide}>
                                <div className={classes.region_slider__slide___title}>
                                    строительство
                                </div>
                                <div className={classes.region_slider__slide___img}>
                                    <img src="/regionSlide_4.png" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide onClick={() => handleOpenModal('Энергетика')}>
                            <div className={classes.region_slider__slide}>
                                <div className={classes.region_slider__slide___title}>
                                    энергетика
                                </div>
                                <div className={classes.region_slider__slide___img}>
                                    <img src="/regionSlide_5.png" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide onClick={() => handleOpenModal('Рынок труда')}>
                            <div className={classes.region_slider__slide}>
                                <div className={classes.region_slider__slide___title}>
                                    рынок труда и потребительский рынок
                                </div>
                                <div className={classes.region_slider__slide___img}>
                                    <img src="/regionSlide_6.png" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide onClick={() => handleOpenModal('Население')}>
                            <div className={classes.region_slider__slide}>
                                <div className={classes.region_slider__slide___title}>
                                    Население и демография
                                </div>
                                <div className={classes.region_slider__slide___img}>
                                    <img src="/regionSlide_7.png" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide onClick={() => handleOpenModal('Социально-экономическое развитие')}>
                            <div className={classes.region_slider__slide}>
                                <div className={classes.region_slider__slide___title}>
                                    Социально-экономическое развитие
                                </div>
                                <div className={classes.region_slider__slide___img}>
                                    <img src="/regionSlide_8.png" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {modalOpen && <Modal content={modalContent} onClose={handleCloseModal} />}

                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Инвестиционный профиль <br /> Карачаево-Черкесской Республики</H2>

                        <div className={classes.region_presentation}>
                            <div className={classes.region_video__btn} onClick={() => handleOpenModal('Причины инвестировать в Карачаево-Черкесскую Республику')}>
                                <img src="/play.png" alt="" />
                                смотреть  презентацию
                            </div>
                            <a href="/reg prezentation.pdf" target="_blank" className={classes.region_video__btn}>
                                <img src="/download.png" alt="" />
                                скачать  презентацию
                            </a>
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default Region_page_block;