import React from "react";
import classes from './RES_modal.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css';

function RES_modal({ children, onClose, ...props }) {
    return (
        <>
            <div className={classes.modal_content}>
                <div className={classes.modalSlider}>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="modalSlider"
                    >
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/Презентация_page-0001.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/Презентация_page-0002.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/Презентация_page-0003.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/Презентация_page-0004.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/Презентация_page-0005.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/Презентация_page-0006.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/Презентация_page-0007.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/Презентация_page-0008.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/Презентация_page-0009.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/Презентация_page-0010.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/Презентация_page-0011.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/Презентация_page-0012.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/Презентация_page-0013.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/Презентация_page-0014.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/Презентация_page-0015.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className={classes.modal_close} onClick={onClose}><img src="/close.png" alt="" /></div>
            </div>
        </>
    );
}

export default RES_modal;