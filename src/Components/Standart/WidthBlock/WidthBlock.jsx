import React from "react";
import classNames from 'classnames';
import classes from './WidthBlock.module.css';

function WidthBlock({ children, className, ...props }) {
    return ( 
        <>
            <div {...props} className={classNames(classes.WidthBlock, className)}>
                {children}
            </div>
        </>
     );
}

export default WidthBlock;