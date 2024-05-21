import React from "react";
import classes from './MyButton.module.css';
import { Link } from "react-router-dom";

const MyButton = ({ children, ...props }) => {
    return (
        props.linkpage
            ?
            <Link to={`${props.linkpage}`} {...props} className={classes.MyButton} style={{ width: props.width, cursor: props.cursor, height: props.height }}>{children}</Link>
            : (
                props.link
                    ?
                    <a href={props.link} target="_blank" {...props} className={classes.MyButton} style={{ width: props.width, cursor: props.cursor, height: props.height }}>{children}</a>
                    :
                    <a {...props} className={classes.MyButton} style={{ width: props.width, cursor: props.cursor, height: props.height }}>{children}</a>
            )

    )
}

export default MyButton;