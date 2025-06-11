// import React from "react";
// import classes from './News_page_block.module.css';
// import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
// import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
// import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
// import H2 from "../../Standart/H2/H2";
// import { Link } from "react-router-dom";
// import { newsArray } from '../../../news_data';

// function News_page_block({ children, ...props }) {

//     return (
//         <>
//             <ColumnBlock gap="80px">
//                 <CenterBlock>
//                     <WidthBlock className="MspWidthBlock">
//                         <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Новости</H2>

//                         <div className={classes.news}>
//                             {newsArray.map((newsItem, index) => (
//                                 <Link key={index} to={`/news/${newsItem.link}`} className={classes.news_item}>
//                                     <div className={classes.news_item__img}>
//                                         <img src={`/${newsItem.image[0]}`} alt="" />
//                                     </div>
//                                     <div className={classes.news_item__desc}>
//                                         <div className={classes.news_item__desc___separate}>
//                                             <div className={classes.news_item__desc___date}>{newsItem.date}</div>
//                                             <div className={classes.news_item__desc___title}>{newsItem.title}</div>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             ))}
//                         </div>
//                     </WidthBlock>
//                 </CenterBlock>
//             </ColumnBlock>
//         </>
//     );
// }

// export default News_page_block;


import React, { useEffect, useState } from "react";
import classes from './News_page_block.module.css';
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import H2 from "../../Standart/H2/H2";
import { Link } from "react-router-dom";
import { newsArray } from '../../../news_data';
import serverConfig from "../../../serverConfig";
import getToken from "../../../getToken";
import axios from "axios";
import uploadsConfig from "../../../uploadsConfig";

const fetchNews = async () => {
	try {
		const response = await axios.get(`${serverConfig}/news?all=true`, {
			headers: { Authorization: `Bearer ${getToken()}` },
		})
		return response.data
	} catch (error) {
		console.error('Error fetching contractors:', error)
		return []
	}
}

function News_page_block({ children, ...props }) {
    const [news, setNews] = useState([])

	useEffect(() => {
		const getNews = async () => {
			const news = await fetchNews()
			setNews(news)
		}
		getNews()
	}, [])

    const formatDate = dateString => {
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            // hour: '2-digit',
            // minute: '2-digit'
        }
	    return new Date(dateString).toLocaleString('ru-RU', options)
	}


    return (
        <>
            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock className="MspWidthBlock">
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Новости</H2>

                        <div className={classes.news}>
                            {news.map((newsItem, index) => (
                                <Link key={index} to={`/news/${newsItem.id}`} className={classes.news_item}>
                                    <div className={classes.news_item__img}>
                                        <img src={`${uploadsConfig}${newsItem?.images[0]}`} alt="" />
                                    </div>
                                    <div className={classes.news_item__desc}>
                                        <div className={classes.news_item__desc___separate}>
                                            <div className={classes.news_item__desc___date}>{formatDate(newsItem.date)}</div>
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

