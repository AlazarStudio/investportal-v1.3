import React from "react";
import classes from './Export_block.module.css';
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import H2 from "../../Standart/H2/H2";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import { Link } from "react-router-dom";

function Export_block({ children, ...props }) {
    return (
        <>
            <ColumnBlock className="InvestorPageColumnBlock" gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Экспорт</H2>

                        <div className={classes.investor}>
                            <Link to={'/export_kchr'} className={classes.investor_element}>
                                <div className={classes.investor_element__title}>Экспорт в КЧР</div>
                                <div className={classes.investor_element__img}>
                                    <img src="/exp.png" alt="" />
                                </div>
                            </Link>
                            <Link to={'/regionalniy_exportniy_standart'} className={classes.investor_element}>
                                <div className={classes.investor_element__title}>Региональный экспортный стандарт</div>
                                <div className={classes.investor_element__img}>
                                    <img src="/invest_icon_2.png" alt="" />
                                </div>
                            </Link>

                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default Export_block;