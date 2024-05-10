import React from "react";
import classes from './Tur_modal.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css';

function Tur_modal({ children, onClose, ...props }) {
    return (
        <>
            <div className={classes.modal_content}>
                <h2>Туризм</h2>

                <div className={classes.modalSlider}>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="modalSlider"
                    >
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/tur1.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/tur2.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/tur3.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/tur4.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/tur5.png" alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className={classes.modal_close} onClick={onClose}><img src="/close.png" alt="" /></div>
            </div>
        </>
    );
}

export default Tur_modal;