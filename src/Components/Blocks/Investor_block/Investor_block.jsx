import React from "react";
import classes from './Investor_block.module.css';
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import H2 from "../../Standart/H2/H2";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import { Link } from "react-router-dom";

function Investor_block({ children, ...props }) {
    return (
        <>
            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Инвестору</H2>

                        <div className={classes.investor}>
                            <Link to={'/projects'} className={classes.investor_element}>
                                <div className={classes.investor_element__title}>Инвестиционные проекты</div>
                                <div className={classes.investor_element__img}>
                                    <img src="/invest_icon_1.png" alt="" />
                                </div>
                            </Link>
                            <Link to={'/investor/regionalnyj_investicionnyj_standart'} className={classes.investor_element}>
                                <div className={classes.investor_element__title}>Региональный инвестиционный стандарт</div>
                                <div className={classes.investor_element__img}>
                                    <img src="/invest_icon_2.png" alt="" />
                                </div>
                            </Link>
                            <Link to={'/investor/dejstvuyushchie_mekhanizmy_gosudarstvennogo_stimulirovaniya_investicionnoj_deyatelnosti'} className={`${classes.investor_element} ${classes.lowerPadding}`}>
                                <div className={`${classes.investor_element__title} ${classes.lowerFont}`}>
                                    Действующие механизмы государственного стимулирования инвестиционной деятельности
                                    </div>
                                <div className={classes.investor_element__img}>
                                    <img src="/invest_icon_3.png" alt="" />
                                </div>
                            </Link>
                            <Link to={'/investor/gis_kapitalovlozheniya'} className={classes.investor_element}>
                                <div className={classes.investor_element__title}>ГИС «Капиталовложения»</div>
                                <div className={classes.investor_element__img}>
                                    <img src="/invest_icon_4.png" alt="" />
                                </div>
                            </Link>
                            <Link to={'/investor/kadrovoe_obespechenie'} className={classes.investor_element}>
                                <div className={classes.investor_element__title}>Кадровое обеспечение</div>
                                <div className={classes.investor_element__img}>
                                    <img src="/invest_icon_5.png" alt="" />
                                </div>
                            </Link>
                            <Link to={'/investor/dokuments'} className={classes.investor_element}>
                                <div className={classes.investor_element__title}>Документы</div>
                                <div className={classes.investor_element__img}>
                                    <img src="/invest_icon_6.png" alt="" />
                                </div>
                            </Link>
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default Investor_block;