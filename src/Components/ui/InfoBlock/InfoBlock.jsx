import React from "react";
import classes from './InfoBlock.module.css';

const MainBanner = ({ ...props }) => {
    return (
        <>
            <div className={classes.info} style={{ width: props.width, flexDirection: props.row }}>
                <div className={classes.info_num} style={{ fontSize: props.titlesize, width: props.width }}>
                    {props.img ? <img src={props.img} alt='' /> : null}
                    {props.num}
                </div>
                {props.desc ? <div className={classes.info_desc} style={{ fontSize: props.descsize, width: props.width }}>{props.desc}</div> : null}
            </div>
        </>
    )
}

export default MainBanner;