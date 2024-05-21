import React from "react";
import classes from './Rolik_modal.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css';

function Rolik_modal({ children, onClose, ...props }) {
    return (
        <>
            <div className={classes.modal_content}>
                <video src="/rolik_o_regione.mp4" controls autoplay loop>
                    Ваш браузер не поддерживает видео тег.
                </video>
                <div className={classes.modal_close} onClick={onClose}><img src="/close.png" alt="" /></div>
            </div>
        </>
    )
}

export default Rolik_modal;