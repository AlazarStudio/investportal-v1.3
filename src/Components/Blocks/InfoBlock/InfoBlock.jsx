import React from "react";
import classes from "./InfoBlock.module.css";

function InfoBlock({ children, ...props }) {

  return (
    <>
      <div
        className={classes.infoBlock}
        style={
          {
            backgroundColor: props.backgroundColor,
            border: props.border,
            padding: props.padding,
            width: props.width,
            height: props.height,
          }
        }
      >
        {/* <div className={classes.infoBlock_title} dangerouslySetInnerHTML={{__html: props.title}}></div> */}
        <div className={classes.infoBlock_title} style={{ color: props.color, textAlign: props.textAlign}}>{props.title}</div>

        <div className={classes.infoBlock_data} style={{ flexDirection: props.column }}>
          {props.img ?
            <span className={classes.infoBlock_data__img}>
              <img src={props.img} />
            </span>
            : null}
          <span className={classes.infoBlock_data__num} style={{ color: props.color }}>{props.num}</span>
          <span className={classes.infoBlock_data__text} style={{ color: props.color }}>{props.text}</span>
        </div>



      </div>
    </>
  );
}

export default InfoBlock;
