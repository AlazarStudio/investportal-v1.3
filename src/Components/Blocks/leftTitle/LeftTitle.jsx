import React from "react";
import classes from './LeftTitle.module.css';
import MyButton from "../../ui/Button/MyButton";

const LeftTitle = ({ children, ...props }) => {
    const titleBlockClasses = `${classes.titleBlock} ${props.center ? classes.centeredTitleBlock : ''}`;
    return (
        <>
            <div className={titleBlockClasses}>
                <h2 {...props} className={classes.LeftTitle} style={{color: props.color, textAlign: props.textalign, fontSize: props.fontSize}}>{children}</h2>
                {props.button && <MyButton linkpage={props.linkpage} width={"225px"}>{props.buttontitle}</MyButton>}
            </div>
        </>
    )
}

export default LeftTitle;              
