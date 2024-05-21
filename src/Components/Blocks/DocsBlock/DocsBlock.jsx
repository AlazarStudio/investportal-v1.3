import React from "react";
import classes from './DocsBlock.module.css';

function DocsBlock({ children, ...props }) {
    return (
        <>
            <div>
                {props.array.map((file, index) => (
                    <div key={index} className={classes.docBlock}>
                        <div className={classes.tabContentInfoElement}>
                            <img src={`/${file.path}.svg`} alt="document icon" />
                            <div className={classes.tabContentInfoElementLine}></div>
                            {file.name}
                        </div>
                        <a href={`/${file.name}.${file.path}`} target="_blank">Скачать</a>
                    </div>
                ))}
            </div>
        </>
    );
}

export default DocsBlock;