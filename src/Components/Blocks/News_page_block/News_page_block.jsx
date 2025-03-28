import React from "react";
import classes from './News_page_block.module.css';
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import H2 from "../../Standart/H2/H2";
import { Link } from "react-router-dom";
import { newsArray } from '../../../news_data';

function News_page_block({ children, ...props }) {

    return (
        <>
            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock className="MspWidthBlock">
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Новости</H2>

                        <div className={classes.news}>
                            {newsArray.map((newsItem, index) => (
                                <Link key={index} to={`/news/${newsItem.link}`} className={classes.news_item}>
                                    <div className={classes.news_item__img}>
                                        <img src={`/${newsItem.image[0]}`} alt="" />
                                    </div>
                                    <div className={classes.news_item__desc}>
                                        <div className={classes.news_item__desc___separate}>
                                            <div className={classes.news_item__desc___date}>{newsItem.date}</div>
                                            <div className={classes.news_item__desc___title}>{newsItem.title}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default News_page_block;