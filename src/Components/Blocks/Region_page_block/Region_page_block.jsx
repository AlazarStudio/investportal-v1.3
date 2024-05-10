import React, { useState } from "react";
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

    // Функция для закрытия модального окна
    const handleCloseModal = () => {
        document.body.classList.remove('no-scroll');
        setModalOpen(false);
        setModalContent('');
    };
    return (
        <>
            <ColumnBlock gap="80px" overflow={'hidden'}>
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">о регионе</H2>

                        <div className={classes.region_text}>
                            Карачаево-Черкесская Республика — один из наиболее успешных и динамично развивающихся
                            регионов, входящих в состав Северо-Кавказского федерального округа, занимающий
                            лидирующие позиции в Северо-Кавказском федеральном округе по многим
                            социально-экономическим показателям. В Национальном рейтинге состояния инвестиционного
                            климата, представленного на Петербургском международном экономическом форуме
                            Агентством стратегических инициатив Карачаево-Черкесская Республика заняла высокие
                            позиции, уступив только Чеченской Республике.
                        </div>

                        <div className={classes.region_nums}>
                            <div className={classes.region_nums__item}>
                                <div className={classes.region_nums__item___num}>2</div>
                                <div className={classes.region_nums__item___desc}>городских округа</div>
                            </div>

                            <div className={classes.region_nums__item}>
                                <div className={classes.region_nums__item___num}>10</div>
                                <div className={classes.region_nums__item___desc}>муниципальных районов</div>
                            </div>

                            <div className={classes.region_nums__item}>
                                <div className={classes.region_nums__item___num}>5</div>
                                <div className={classes.region_nums__item___desc}>городских поселений</div>
                            </div>

                            <div className={classes.region_nums__item}>
                                <div className={classes.region_nums__item___num}>83</div>
                                <div className={classes.region_nums__item___desc}>сельских поселений</div>
                            </div>

                            <div className={classes.region_nums__item}>
                                <div className={classes.region_nums__item___num}>4</div>
                                <div className={classes.region_nums__item___desc}>города</div>
                            </div>
                        </div>

                        <div className={classes.region_video}>
                            <div className={classes.region_video__btn}>
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
                                    <img src="/galva.png" alt="" />
                                </div>
                            </div>
                        </WidthBlock>
                    </CenterBlock>
                </div>

                <div className="region_slider">
                    <Swiper
                        slidesPerView={5}
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

                {/* Модальное окно */}
                {modalOpen && <Modal content={modalContent} onClose={handleCloseModal} />}

                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Причины инвестировать в <br /> Карачаево-Черкесскую Республику</H2>

                        <div className={classes.region_presentation}>
                            <div className={classes.region_video__btn}>
                                <img src="/play.png" alt="" />
                                смотреть  презентацию
                            </div>
                            <div className={classes.region_video__btn}>
                                <img src="/download.png" alt="" />
                                скачать  презентацию
                            </div>
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default Region_page_block;