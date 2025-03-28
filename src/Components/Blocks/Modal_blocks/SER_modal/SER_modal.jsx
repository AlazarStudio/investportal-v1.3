import React from "react";
import classes from './SER_modal.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css';

function SER_modal({ children, onClose, ...props }) {
    return (
        <>
            <div className={classes.modal_content}>
                {/* <h2>Социально-экономическое развитие</h2> */}

                <div className={classes.modalSlider}>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="modalSlider"
                    >
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/new_soc1.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/new_soc2.png" alt="" />
                            </div>
                        </SwiperSlide>
                        {/* <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <h3>Валовый региональный продукт</h3>
                                <img src="/soc1.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <h3>Инвестиции в основной капитал</h3>
                                <img src="/soc2.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <h3>Внешнеэкономическая деятельность</h3>
                                <img src="/soc3.png" alt="" />
                            </div>
                        </SwiperSlide> */}
                    </Swiper>
                </div>

                <div className={classes.modal_close} onClick={onClose}><img src="/close.png" alt="" /></div>
            </div>
        </>
    );
}

export default SER_modal;