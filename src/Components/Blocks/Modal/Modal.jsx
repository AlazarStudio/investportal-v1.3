import React from "react";
import classes from './Modal.module.css';

import SER_modal from "../Modal_blocks/SER_modal/SER_modal";
import SH_modal from "../Modal_blocks/SH_modal/SH_modal";
import Prom_modal from "../Modal_blocks/Prom_modal/Prom_modal";
import Tur_modal from "../Modal_blocks/Tur_modal/Tur_modal";
import Stroi_modal from "../Modal_blocks/Stroi_modal/Stroi_modal";
import Energ_modal from "../Modal_blocks/Energ_modal/Energ_modal";
import Nasel_modal from "../Modal_blocks/Nasel_modal/Nasel_modal";
import Rinok_modal from "../Modal_blocks/Rinok_modal/Rinok_modal";
import RES_modal from "../Modal_blocks/RES_modal/RES_modal";
import PIVKCHR_modal from "../Modal_blocks/PIVKCHR_modal/PIVKCHR_modal";
import Rolik_modal from "../Modal_blocks/Rolik_modal/Rolik_modal";

function Modal({ children, content, onClose, ...props }) {
    return (
        <>
            <div className={classes.modal}>
                <div className={classes.modal_content}>
                    {content=='Социально-экономическое развитие' ? <SER_modal onClose={onClose}/> : null}
                    {content=='Сельское хозяйство' ? <SH_modal onClose={onClose}/> : null}
                    {content=='Промышленность' ? <Prom_modal onClose={onClose}/> : null}
                    {content=='Туризм' ? <Tur_modal onClose={onClose}/> : null}
                    {content=='Строительство' ? <Stroi_modal onClose={onClose}/> : null}
                    {content=='Энергетика' ? <Energ_modal onClose={onClose}/> : null}
                    {content=='Рынок труда' ? <Rinok_modal onClose={onClose}/> : null}
                    {content=='Население' ? <Nasel_modal onClose={onClose}/> : null}
                    {content=='РЕГИОНАЛЬНЫЙ ЭКСПОРТНЫЙ СТАНДАРТ' ? <RES_modal onClose={onClose}/> : null}
                    {content=='Причины инвестировать в Карачаево-Черкесскую Республику' ? <PIVKCHR_modal onClose={onClose}/> : null}
                    {content=='Ролик о регионе' ? <Rolik_modal onClose={onClose}/> : null}
                </div>
            </div>
        </>
    );
}

export default Modal;