import React from "react";
import classes from './Button.module.css';
import { Link } from "react-router-dom";

function Button({ children, timeLeft, ...props }) {
    // Создаем переменную стилей
    const buttonStyles = {
        width: props.width, 
        height: props.height, 
        cursor: props.cursor, 
        opacity: props.opacity,
        taget: props.target
    };

    return (
        <Link to={props.link} className={classes.Button} style={buttonStyles} {...props}>
            {children}
        </Link>
    );
}

export default Button;
