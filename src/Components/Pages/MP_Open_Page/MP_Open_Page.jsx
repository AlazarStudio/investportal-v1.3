import React from "react";
import { useParams } from "react-router-dom";
import classes from './MP_Open_Page.module.css';
import H2 from "../../Standart/H2/H2";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import Header from "../../Blocks/Header/Header";
import Button from "../../Standart/Button/Button";
import { Link } from "react-router-dom";
import { items_region } from '../../../mp_data'; // импорт данных из items.js
import { items_federal } from '../../../mp_data'; // импорт данных из items.js


function MP_Open_Page({ children, ...props }) {
    let { id } = useParams();
    const item_federal = items_federal.find(item => item.link === id);
    const item_region = items_region.find(item => item.link === id);
    let item;

    if (item_region != undefined) {
        item = item_region
    }

    if (item_federal != undefined) {
        item = item_federal
    }

    if (!item) {
        return <div>Запись не найдена</div>;
    }

    return (
        <>
            <Header />

            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                            {item.title}
                        </H2>
                        <div className={classes.description}>
                            <p className={classes.descriptionShort}>{item.desc}</p>

                            <div className={classes.descriptionImg}>
                                <img src={item.imgSrc} alt={item.title} />
                            </div>

                            <p className={classes.descriptionAll} dangerouslySetInnerHTML={{ __html: item.text }} ></p>
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock >
        </>
    );
}

export default MP_Open_Page;
