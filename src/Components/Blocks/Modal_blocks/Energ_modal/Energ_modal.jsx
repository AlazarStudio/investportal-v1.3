import React from "react";
import classes from './Energ_modal.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css';

function Energ_modal({ children, onClose, ...props }) {
    return (
        <>
            <div className={classes.modal_content}>
                {/* <h2>Энергетика</h2> */}

                <div className={classes.modalSlider}>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="modalSlider"
                    >
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/new_energ1.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/new_energ2.png" alt="" />
                            </div>
                        </SwiperSlide>
                        {/* <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/energ1.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.modalSlider_slide}>
                                <img src="/energ2.png" alt="" />
                            </div>
                        </SwiperSlide> */}
                    </Swiper>
                </div>

                <div className={classes.modal_close} onClick={onClose}><img src="/close.png" alt="" /></div>
            </div>
        </>
    );
}

export default Energ_modal;