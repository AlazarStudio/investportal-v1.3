import React from "react";
import classNames from 'classnames';
import classes from './ColumnBlock.module.css';

function ColumnBlock({ children, className, ...props }) {
    return (
        <>
            <div className={classNames(classes.ColumnBlock, className)} style={{
                width: props.width,
                height: props.height,
                padding: props.padding,
                gap: props.gap,
                background: `url(${props.background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                justifyContent: props.justifyContent,
                borderRadius: props.borderRadius,
                overflow: props.overflow
            }}>
                {children}
            </div>
        </>
    );
}

export default ColumnBlock;