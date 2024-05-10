import React from "react";
import classes from './Footer.module.css';
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";

function Footer({ children, ...props }) {
    return (
        <>
            <div className={classes.footer}>
                <CenterBlock>
                    <WidthBlock>
                        <div className={classes.footer_logoLine}>
                            <div className={classes.footer_logoLine__left}>
                                <div className={classes.footer_logoLine__left___img}>
                                    <img src="/header_logo.png" alt="" />
                                </div>
                                <div className={classes.footer_logoLine__left___title}>
                                    Инвестиционный портал <br />
                                    Карачаево-Черкесской Республики
                                </div>
                            </div>
                            <div className={classes.footer_logoLine__right}>
                                <div className={classes.footer_logoLine__right___text}>
                                    Инвестиционный портал Карачаево-Черкесской Республики ресурс,
                                    созданный специально для помощи предпринимателям и инвесторам.
                                    Здесь можно узнать, куда инвестировать в КЧР, а также о льготах
                                    для малого и среднего предпринимательства.
                                </div>
                            </div>
                        </div>

                        <div className={classes.footer_infoLine}>
                            <div className={classes.footer_infoLine__item}>
                                <div className={classes.footer_infoLine__item___icon}>
                                    <img src="/phone.png" alt="" />
                                </div>
                                <div className={classes.footer_infoLine__item___info}>
                                    <div className={classes.footer_infoLine__item___info____title}>Телефон</div>
                                    <div className={classes.footer_infoLine__item___info____desc}>8 (8782) 25-02-27</div>
                                </div>
                            </div>
                            <div className={classes.footer_infoLine__item}>
                                <div className={classes.footer_infoLine__item___icon}>
                                    <img src="/mail.png" alt="" />
                                </div>
                                <div className={classes.footer_infoLine__item___info}>
                                    <div className={classes.footer_infoLine__item___info____title}>Электронная почта</div>
                                    <div className={classes.footer_infoLine__item___info____desc}>reception@moibiz09.ru</div>
                                </div>
                            </div>
                            <div className={classes.footer_infoLine__item}>
                                <div className={classes.footer_infoLine__item___icon}>
                                    <img src="/place.png" alt="" />
                                </div>
                                <div className={classes.footer_infoLine__item___info}>
                                    <div className={classes.footer_infoLine__item___info____title}>Наш адрес</div>
                                    <div className={classes.footer_infoLine__item___info____desc}>Черкесск, проспект Ленина, 53</div>
                                </div>
                            </div>
                        </div>
                    </WidthBlock>
                </CenterBlock>

                <div className={classes.footer_bottom}>
                    <CenterBlock>
                        <WidthBlock>
                            <div className={classes.footer_makeLine}>
                                <div className={classes.footer_makeLine__left}>
                                    © Инвестиционный портал Карачаево-Черкесской Республики <br />
                                    При использовании материалов ссылка на сайт <span>инвестиционного портала</span> обязательна
                                </div>
                                <a href="https://alazarstudio.ru" target="_blank" className={classes.footer_makeLine__right}>
                                    <img src="/alazar_light.png" alt="" />
                                </a>
                            </div>
                        </WidthBlock>
                    </CenterBlock>
                </div>
            </div>
        </>
    );
}

export default Footer;