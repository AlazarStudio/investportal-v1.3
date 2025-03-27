import React from "react";
import classes from './SlideBlock.module.css';
import { Link } from "react-router-dom";

function SlideBlock({ children, ...props }) {
    let link = '/projects/' + props.link.replace(/\s+/g, "_");

    console.log(props.img)
    return (
        <>
            <Link to={link} className={classes.SlideBlock}>
                <div className={classes.SlideBlock_left}>
                    {props.img ?
                        <img src={`/${props.img}`} alt="" />
                        :
                        'Нет картинки'
                    }
                </div>
                <div className={classes.SlideBlock_right}>
                    <div className={classes.SlideBlock_right__title}>{props.title}</div>
                    <div className={classes.SlideBlock_right__text}>{props.text}</div>
                </div>
            </Link>
        </>
    );
}

export default SlideBlock;