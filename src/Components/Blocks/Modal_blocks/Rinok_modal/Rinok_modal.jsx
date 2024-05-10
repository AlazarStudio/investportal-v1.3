import React from "react";
import classes from './Rinok_modal.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css';

function Rinok_modal({ children, onClose, ...props }) {
    return (
        <>
            <div className={classes.modal_content}>
                <h2>Рынок труда и потребительский рынок</h2>

                <div className={classes.modalSlider}>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="modalSlider"
                    >
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <h3>Рынок труда</h3>
                                <img src="/rinok1.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <h3>Потребительский рынок</h3>
                                <img src="/rinok2.png" alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className={classes.modal_close} onClick={onClose}><img src="/close.png" alt="" /></div>
            </div>
        </>
    );
}

export default Rinok_modal;