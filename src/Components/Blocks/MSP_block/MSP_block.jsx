import React from "react";
import classes from './MSP_block.module.css';
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import H2 from "../../Standart/H2/H2";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import { Link } from "react-router-dom";

function MSP_block({ children, ...props }) {
    return (
        <>
            <ColumnBlock className="InvestorPageColumnBlock" gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">МСП</H2>

                        <div className={classes.investor}>
                            <Link to={'/ipb'} className={classes.investor_element}>
                                <div className={classes.investor_element__title}>Инфраструктура поддержки бизнеса</div>
                                <div className={classes.investor_element__img}>
                                    <img src="/ipb.png" alt="" />
                                </div>
                            </Link>
                            <Link to={'/federalniye_mery_podderjki'} className={classes.investor_element}>
                                <div className={classes.investor_element__title}>Меры поддержки</div>
                                <div className={classes.investor_element__img}>
                                    <img src="/mp.png" alt="" />
                                </div>
                            </Link>
                            <Link to={'/documents_msp'} className={classes.investor_element}>
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

export default MSP_block;