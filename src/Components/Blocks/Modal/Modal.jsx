import React from "react";
import classes from './Modal.module.css';

import SER_modal from "../Modal_blocks/SER_modal/SER_modal";
import SH_modal from "../Modal_blocks/SH_modal/SH_modal";
import Prom_modal from "../Modal_blocks/Prom_modal/Prom_modal";

function Modal({ children, content, onClose, ...props }) {
    return (
        <>
            <div className={classes.modal}>
                <div className={classes.modal_content}>
                    {content=='Социально-экономическое развитие' ? <SER_modal onClose={onClose}/> : null}
                    {content=='Сельское хозяйство' ? <SH_modal onClose={onClose}/> : null}
                    {content=='Промышленность' ? <Prom_modal onClose={onClose}/> : null}
                </div>
            </div>
        </>
    );
}

export default Modal;