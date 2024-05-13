import React from "react";
import classes from './News_page_block.module.css';
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import H2 from "../../Standart/H2/H2";
import { Link } from "react-router-dom";

function News_page_block({ children, ...props }) {
    return (
        <>
            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Новости</H2>

                        <div className={classes.news}>
                            <Link to={'/news/new1'} className={classes.news_item}>
                                <div className={classes.news_item__img}>
                                    <img src="/new1.jpg" alt="" />
                                </div>
                                <div className={classes.news_item__desc}>
                                    <div className={classes.news_item__desc___separate}>
                                        <div className={classes.news_item__desc___date}>08.02.2022</div>
                                        <div className={classes.news_item__desc___title}>
                                            ПОДПИСАНИЕ ДОРОЖНОЙ КАРТЫ ПО РАЗВИТИЮ СОТРУДНИЧЕСТВА МЕЖДУ КАРАЧАЕВО-ЧЕРКЕССКОЙ
                                            РЕСПУБЛИКОЙ И РЕСПУБ...
                                        </div>
                                        <div className={classes.news_item__desc___hash}>#Кредит #фот 3.0</div>
                                    </div>
                                </div>
                            </Link>

                            <Link to={'/news/new1'} className={classes.news_item}>
                                <div className={classes.news_item__img}>
                                    <img src="/new2.png" alt="" />
                                </div>
                                <div className={classes.news_item__desc}>
                                    <div className={classes.news_item__desc___separate}>
                                        <div className={classes.news_item__desc___date}>08.02.2022</div>
                                        <div className={classes.news_item__desc___title}>
                                            ЛЬГОТНЫЕ КРЕДИТЫ ПО ПРОГРАММЕ
                                            ФОТ 3.0 ПОДДЕРЖАЛИ БОЛЕЕ 26 ТЫС.
                                            КОМПАНИЙ И ПОМОГЛИ СОХРАНИТЬ
                                            ОКОЛО 6...
                                        </div>
                                    </div>
                                    <div className={classes.news_item__desc___hash}>#Кредит #фот 3.0</div>
                                </div>
                            </Link>

                            <Link to={'/news/new1'} className={classes.news_item}>
                                <div className={classes.news_item__img}>
                                    <img src="/new3.jpg" alt="" />
                                </div>
                                <div className={classes.news_item__desc}>
                                    <div className={classes.news_item__desc___separate}>
                                        <div className={classes.news_item__desc___date}>08.02.2022</div>
                                        <div className={classes.news_item__desc___title}>
                                            ЗАСЕДАНИЕ СОВЕТА ПО ПРОЕКТНОИ
                                            ДЕЯТЕЛЬНОСТИ КЧР...
                                        </div>
                                    </div>
                                    <div className={classes.news_item__desc___hash}>#Кредит #фот 3.0</div>
                                </div>
                            </Link>

                            <Link to={'/news/new1'} className={classes.news_item}>
                                <div className={classes.news_item__img}>
                                    <img src="/new1.jpg" alt="" />
                                </div>
                                <div className={classes.news_item__desc}>
                                    <div className={classes.news_item__desc___separate}>
                                        <div className={classes.news_item__desc___date}>08.02.2022</div>
                                        <div className={classes.news_item__desc___title}>
                                            ПОДПИСАНИЕ ДОРОЖНОЙ КАРТЫ ПО РАЗВИТИЮ СОТРУДНИЧЕСТВА МЕЖДУ КАРАЧАЕВО-ЧЕРКЕССКОЙ
                                            РЕСПУБЛИКОЙ И РЕСПУБ...
                                        </div>
                                        <div className={classes.news_item__desc___hash}>#Кредит #фот 3.0</div>
                                    </div>
                                </div>
                            </Link>

                            <Link to={'/news/new1'} className={classes.news_item}>
                                <div className={classes.news_item__img}>
                                    <img src="/new2.png" alt="" />
                                </div>
                                <div className={classes.news_item__desc}>
                                    <div className={classes.news_item__desc___separate}>
                                        <div className={classes.news_item__desc___date}>08.02.2022</div>
                                        <div className={classes.news_item__desc___title}>
                                            ЛЬГОТНЫЕ КРЕДИТЫ ПО ПРОГРАММЕ
                                            ФОТ 3.0 ПОДДЕРЖАЛИ БОЛЕЕ 26 ТЫС.
                                            КОМПАНИЙ И ПОМОГЛИ СОХРАНИТЬ
                                            ОКОЛО 6...
                                        </div>
                                    </div>
                                    <div className={classes.news_item__desc___hash}>#Кредит #фот 3.0</div>
                                </div>
                            </Link>

                            <Link to={'/news/new1'} className={classes.news_item}>
                                <div className={classes.news_item__img}>
                                    <img src="/new3.jpg" alt="" />
                                </div>
                                <div className={classes.news_item__desc}>
                                    <div className={classes.news_item__desc___separate}>
                                        <div className={classes.news_item__desc___date}>08.02.2022</div>
                                        <div className={classes.news_item__desc___title}>
                                            ЗАСЕДАНИЕ СОВЕТА ПО ПРОЕКТНОИ
                                            ДЕЯТЕЛЬНОСТИ КЧР...
                                        </div>
                                    </div>
                                    <div className={classes.news_item__desc___hash}>#Кредит #фот 3.0</div>
                                </div>
                            </Link>
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default News_page_block;