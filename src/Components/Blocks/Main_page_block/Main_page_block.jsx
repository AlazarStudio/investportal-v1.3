import React, { useEffect, useState } from "react";
import classes from "./Main_page_block.module.css";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import RowBlock from "../../Standart/RowBlock/RowBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import H2 from "../../Standart/H2/H2";
import Button from "../../Standart/Button/Button";
import { Link } from "react-router-dom";
import serverConfig from "../../../serverConfig";

import { getProjects } from "../../GetData/GetData";

import { newsArray } from "../../../news_data";
import uploadsConfig from "../../../uploadsConfig";

const fetchNews = async () => {
  try {
    const response = await axios.get(`${serverConfig}/news`);
    return response.data;
  } catch (error) {
    console.error("Error fetching contractors:", error);
    return [];
  }
};

function Main_page_block({ children, ...props }) {
  let projects = getProjects();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchNews();
      setNews(news);
    };
    getNews();
  }, []);

  const formatDate = (dateString) => {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      // hour: '2-digit',
      // minute: '2-digit'
    };
    return new Date(dateString).toLocaleString("ru-RU", options);
  };
  return (
    <>
      <ColumnBlock gap="80px">
        <div className={classes.mainslider}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
                className={classes.mainslider_slide}
                style={{ backgroundImage: `url('/main_slide3.png')` }}
              >
                <WidthBlock>
                  <RowBlock justifyContent="space-between">
                    <div className={classes.mainslider_slide__item}>
                      <div className={classes.mainslider_slide__item___text}>
                        Объем инвестиций в основной капитал за 2023-2024 годы
                        более
                      </div>
                      <Link
                        to={"/projects"}
                        className={classes.mainslider_slide__item___button}
                      >
                        Узнать больше
                      </Link>
                    </div>
                    <div className={classes.mainslider_slide__item}>
                      <div className={classes.mainslider_slide__item___large}>
                        70
                      </div>
                      <div className={classes.mainslider_slide__item___text}>
                        млрд. рублей
                      </div>
                    </div>
                  </RowBlock>
                </WidthBlock>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={classes.mainslider_slide}
                style={{ backgroundImage: `url('/main_slide2-new.jpg')` }}
              >
                <WidthBlock>
                  <RowBlock justifyContent="space-between">
                    <div className={classes.mainslider_slide__item}>
                      <div className={classes.mainslider_slide__item___text}>
                        В 2024 году туристический поток в Карачаево-Черкесскую
                        Республику превысил
                      </div>
                    </div>
                    <div className={classes.mainslider_slide__item}>
                      <div className={classes.mainslider_slide__item___large}>
                        2,2 <br /> млн чел
                      </div>
                      <div className={classes.mainslider_slide__item___text}>
                        {/* 200 тыс. туристов <br /> */}+ 10% к 2023 году
                      </div>
                    </div>
                  </RowBlock>
                </WidthBlock>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={classes.mainslider_slide}
                style={{ backgroundImage: `url('/main_slide6.jpg')` }}
              >
                <WidthBlock>
                  <RowBlock justifyContent="space-between">
                    <div className={classes.mainslider_slide__item}>
                      <div className={classes.mainslider_slide__item___text}>
                        {/* По итогам 2022 года в хозяйствах всех категорий Карачаево-Черкесской Республики имеется более */}
                        Площадь высаженных садов интенсивного типа более
                      </div>
                    </div>
                    <div className={classes.mainslider_slide__item}>
                      <div className={classes.mainslider_slide__item___large}>
                        {/* 149,8 */}1 тыс. га
                      </div>
                      <div className={classes.mainslider_slide__item___text}>
                        Валовый сбор яблок за 2024 год - 32 тыс. тонн
                        {/* тыс. голов крупного рогатого скота. */}
                        {/* тыс. га */}
                      </div>
                    </div>
                  </RowBlock>
                </WidthBlock>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={classes.mainslider_slide}
                style={{ backgroundImage: `url('/main_slide7.jpg')` }}
              >
                <WidthBlock>
                  <RowBlock justifyContent="space-between">
                    <div className={classes.mainslider_slide__item}>
                      <div className={classes.mainslider_slide__item___text}>
                        Темп роста объема производства в обрабатывающих отраслях
                        за 2024 год
                      </div>
                    </div>
                    <div className={classes.mainslider_slide__item}>
                      <div className={classes.mainslider_slide__item___large}>
                        135,3 %
                      </div>
                      <div
                        className={classes.mainslider_slide__item___text}
                      ></div>
                    </div>
                  </RowBlock>
                </WidthBlock>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <CenterBlock>
          <WidthBlock className="MainPageWidthBlock">
            <a
              href="/catalog_prom_product_2024_razvoroty.pdf"
              target="_blank"
              className={classes.catalog_banner}
            >
              <img src="/catalog_banner.png" alt="" />
            </a>

            <a
              href="https://map.investkchr.ru"
              target="_blank"
              className={classes.map}
            >
              <div className={classes.map_left}>
                <div className={classes.map_left__title}>
                  ИНВЕСТИЦИОННАЯ КАРТА
                </div>
                <div className={classes.map_left__colorBlock}></div>
                <div className={classes.map_left__desc}>
                  Интерактивный каталог инвестиционных предложений
                </div>
              </div>
              <div className={classes.map_right}>
                <img src="/map.png" alt="" />
              </div>
            </a>

            <H2
              text_align="center"
              text_transform="uppercase"
              color="var(--blue_color)"
            >
              Ресурсы
            </H2>

            <div className={classes.resourses}>
              <a
                href="https://kchr.ru"
                target="_blank"
                className={classes.resourses_item}
              >
                <div className={classes.resourses_item__title}>
                  Глава и Правительство
                </div>
                <div className={classes.resourses_item__linkName}>kchr.ru</div>
              </a>
              <a
                href="https://economykchr.ru"
                target="_blank"
                className={classes.resourses_item}
              >
                <div className={classes.resourses_item__title}>
                  Минэкономразвития
                </div>
                <div className={classes.resourses_item__linkName}>
                  economykchr.ru
                </div>
              </a>
              <a
                href="https://kchr-invest.ru"
                target="_blank"
                className={classes.resourses_item}
              >
                <div className={classes.resourses_item__title}>
                  Корпорация развития
                </div>
                <div className={classes.resourses_item__linkName}>
                  kchr-invest.ru
                </div>
              </a>
              <a
                href="https://moibiz09.ru"
                target="_blank"
                className={classes.resourses_item}
              >
                <div className={classes.resourses_item__title}>
                  Поддержка МСП
                </div>
                <div className={classes.resourses_item__linkName}>
                  moibiz09.ru
                </div>
              </a>
            </div>

            <H2
              text_align="center"
              text_transform="uppercase"
              color="var(--blue_color)"
            >
              Реализованные и реализуемые проекты
            </H2>

            <CenterBlock>
              <Button link={"projects"}>Все проекты</Button>
            </CenterBlock>

            <div className={classes.projects}>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                navigation={true}
                loop={true}
                modules={[Pagination, Navigation]}
                className="projectsSlider"
              >
                {projects.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Link
                      to={"/projects/" + item.link.replace(/\s+/g, "_")}
                      className={classes.projects_slide}
                    >
                      <div className={classes.projects_slide__left}>
                        <div className={classes.projects_slide__left___img}>
                          {item.img[0] ? (
                            <img src={`/${item.img[0]}`} alt="" />
                          ) : (
                            "Нет картинки"
                          )}
                        </div>
                      </div>
                      <div className={classes.projects_slide__right}>
                        <div className={classes.projects_slide__right___title}>
                          {item.title}
                        </div>
                        <div className={classes.projects_slide__right___desc}>
                          {item.text}
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* <div className={classes.project_links}>
                            <Link to={"investor/investicionnye_proekty"} className={classes.project_links__item}>
                                <div className={classes.project_links__item___img}>
                                    <img src="/invest_1.png" alt="" />
                                </div>
                                <div className={classes.project_links__item___title}>
                                    Инвестиционные предложения
                                    <img src="/Arrow 1.png" alt="" />
                                </div>
                            </Link>
                            <Link to={"#"} className={classes.project_links__item}>
                                <div className={classes.project_links__item___img}>
                                    <img src="/invest_2.png" alt="" />
                                </div>
                                <div className={classes.project_links__item___title}>
                                    Приоритетные инвестиционные проекты
                                    <img src="/Arrow 1.png" alt="" />
                                </div>
                            </Link>
                            <Link to={"/projects"} className={classes.project_links__item}>
                                <div className={classes.project_links__item___img}>
                                    <img src="/invest_3.png" alt="" />
                                </div>
                                <div className={classes.project_links__item___title}>
                                    База инвестиционных проектов
                                    <img src="/Arrow 1.png" alt="" />
                                </div>
                            </Link>
                        </div> */}

            <H2
              text_align="center"
              text_transform="uppercase"
              color="var(--blue_color)"
            >
              Новости
            </H2>

            <CenterBlock>
              <Button link={"/news"}>Все новости</Button>
            </CenterBlock>

            <div className={classes.news}>
              {news.slice(0, 6).map((newsItem, index) => (
                <Link
                  to={`/news/${newsItem.id}`}
                  className={classes.news_item}
                  key={index}
                >
                  <div className={classes.news_item__img}>
                    <img src={`${uploadsConfig}${newsItem.images[0]}`} alt="" />
                  </div>
                  <div className={classes.news_item__desc}>
                    <div className={classes.news_item__desc___separate}>
                      <div className={classes.news_item__desc___date}>
                        {formatDate(newsItem.date)}
                      </div>
                      <div className={classes.news_item__desc___title}>
                        {newsItem.title}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              {/* {newsArray.slice(0, 6).map((newsItem, index) => (
                <Link
                  to={`/news/${newsItem.link}`}
                  className={classes.news_item}
                  key={index}
                >
                  <div className={classes.news_item__img}>
                    <img src={`/${newsItem.image[0]}`} alt="" />
                  </div>
                  <div className={classes.news_item__desc}>
                    <div className={classes.news_item__desc___separate}>
                      <div className={classes.news_item__desc___date}>
                        {newsItem.date}
                      </div>
                      <div className={classes.news_item__desc___title}>
                        {newsItem.title}
                      </div>
                    </div>
                  </div>
                </Link>
              ))} */}
            </div>
          </WidthBlock>
        </CenterBlock>
      </ColumnBlock>
    </>
  );
}

export default Main_page_block;
