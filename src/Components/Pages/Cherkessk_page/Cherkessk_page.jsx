import React from "react";
import classes from './Cherkessk_page.module.css';
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import H2 from "../../Standart/H2/H2";
import Header from "../../Blocks/Header/Header";

function Cherkessk_page({ children, ...props }) {
    return (
        <>
            <Header />

            <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                г. Черкесск
            </H2>

            <div className={classes.rajon_img}>
                <img src="/cherkessk.webp" alt="" />
            </div>

            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">В ЦИФРАХ</H2>

                        <div className={classes.rajon_info}>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>112,8 тыс. чел.</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>население</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>711,6 тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>площадь территории</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>3 450</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>субъектов малого и среднего предпринимательства</div>
                            </div>
                        </div>

                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">КОНКУРЕНТНЫЕ ПРИЕМУЩЕСТВА</H2>

                        <div className={classes.rajon_konkurent}>
                            <div className={classes.rajon_konkurent__item}>
                                <div className={classes.rajon_konkurent__item___top}>
                                    <div className={classes.rajon_konkurent__item___top____img}>
                                        <img src="/kp1.png" alt="" />
                                    </div>
                                    <div className={classes.rajon_konkurent__item___top____title}>ВНЕШНИЕ СВЯЗИ</div>
                                </div>
                                <div className={classes.rajon_konkurent__item___bottom}>
                                    Черкесск поддерживает торгово-экономические связи с другими регионами России и активно участвует во внешнеэкономической деятельности. Город выгодно расположен с точки зрения транспортной доступности, что обеспечивает легкий доступ к экономическим центрам России и соседним государствам. Инфраструктура включает железнодорожную станцию, автомобильные дороги федерального значения и удобные транспортные узлы, что облегчает логистику и транспортировку товаров
                                </div>
                            </div>
                            <div className={classes.rajon_konkurent__item}>
                                <div className={classes.rajon_konkurent__item___top}>
                                    <div className={classes.rajon_konkurent__item___top____img}>
                                        <img src="/kp2.png" alt="" />
                                    </div>
                                    <div className={classes.rajon_konkurent__item___top____title}>ПРИРОДНЫЕ РЕСУРСЫ И ЭКОЛОГИЯ</div>
                                </div>
                                <div className={classes.rajon_konkurent__item___bottom}>
                                    Водоснабжение и канализация <br />
                                    Газоснабжение <br />
                                    Электроснабжение <br />
                                    Управление отходами
                                </div>
                            </div>
                            <div className={classes.rajon_konkurent__item}>
                                <div className={classes.rajon_konkurent__item___top}>
                                    <div className={classes.rajon_konkurent__item___top____img}>
                                        <img src="/kp3.png" alt="" />
                                    </div>
                                    <div className={classes.rajon_konkurent__item___top____title}>ИНФРАСТРУКТУРА</div>
                                </div>
                                <div className={classes.rajon_konkurent__item___bottom}>
                                    Развитие транспортной, энергетической и информационно-
                                    коммуникационной инфраструктуры
                                </div>
                            </div>
                            <div className={classes.rajon_konkurent__item}>
                                <div className={classes.rajon_konkurent__item___top}>
                                    <div className={classes.rajon_konkurent__item___top____img}>
                                        <img src="/kp4.png" alt="" />
                                    </div>
                                    <div className={classes.rajon_konkurent__item___top____title}>ИНДУСТРИЯ ГОСТЕПРИИМСТВА И ТУРИЗМ</div>
                                </div>
                                <div className={classes.rajon_konkurent__item___bottom}>
                                    Развитие индустрии гостеприимства и туризма. <br />
                                    Развитие этнографического, экологического, лечебно-оздоровительного,
                                    гастрономического и других видов туризма.
                                </div>
                            </div>
                        </div>

                        {/* <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                            ключевые инвестиционные проекты

                            <div className={classes.rajon_subtitle}>
                                реализуемые инвестиционные проекты реализуемых на территории МО
                            </div>
                        </H2>

                        <div className={classes.rajon_table}>
                            <div className={`${classes.rajon_table__row} ${classes.topRow}`}>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock1} `}>Наименование проекта/инициатор</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock2} `}>Объем инвестиций</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock3} `}>Срок реализации</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock4} `}>Описание проекта текущее состояние</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock5} `}>Рабочие места</div>
                            </div>
                            <div className={classes.rajon_table__row}>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock1} `}>
                                ООО «Бумфа Групп» -  Приобретение автоматических линий для производства ватных дисков и палочек
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock2} `}>1788 млн руб.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock3} `}>2027 г.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock4} `}>
                                Приобретение автоматических линий для промышленного производства ватных дисков и ватных палочек.
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock5} `}>14 чел.</div>
                            </div>
                            <div className={classes.rajon_table__row}>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock1} `}>
                                ООО «Бумфа Групп» - Модернизация производственных мощностей
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock2} `}>2092 млн руб.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock3} `}>2023 г.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock4} `}>
                                Технологическое перевооружение для производства полуфабрикатов, используемых для конечной готовой продукции, в частности пластиковых контейнеров и аппликаторов.
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock5} `}>44 чел.</div>
                            </div>
                            <div className={classes.rajon_table__row}>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock1} `}>
                                АО «Холодмаш» - Организация серийного производства микрокомпрессора
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock2} `}>53 млн руб.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock3} `}>2023 г.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock4} `}>
                                Изготовление опытной партии микрокомпрессоров, проведение испытаний и подготовка к серийному производству.
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock5} `}>10 чел.</div>
                            </div>
                            <div className={classes.rajon_table__row}>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock1} `}>
                                ООО «Кавказ Мясо» - Реконструкция мясоперерабатывающего предприятия
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock2} `}>2631 млн руб.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock3} `}>2020-2023 гг.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock4} `}>
                                Строительство современной мясохладобойни с оборудованием для переработки убойных животных и обработки продуктов убоя.
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock5} `}>550 чел.</div>
                            </div>
                        </div> */}

                        {/* <div className={classes.districtBlock}>
                            <div className={classes.districtTitle}>
                                INVEST
                            </div>
                            <div className={classes.districtContent}>
                                <div className={classes.districtImg}>
                                    <img src="/cherkessk.webp" alt="" />
                                </div>
                                <div className={classes.districtContentTextBlock}>

                                    <div className={classes.districtContentTextNameLast}>
                                        LastName
                                    </div>

                                    <div className={classes.districtContentTextNameFirst}>
                                        First Name
                                    </div>

                                    <div className={classes.districtContentTextPosition}>
                                        Position
                                    </div>

                                    <div className={classes.districtContentTextNumber}>
                                        <span style={{ fontWeight: '600' }}>
                                            Number:
                                        </span>
                                        <span style={{ fontWeight: '500' }}>
                                            +71032498
                                        </span>

                                    </div>

                                    <div className={classes.districtContentTextEmail}>
                                        <span style={{ fontWeight: '600' }}>
                                            Email:
                                        </span>
                                        <span style={{ fontWeight: '500' }}>
                                            example@example.com
                                        </span>
                                    </div>

                                    <div className={classes.districtContentTextNumber}>
                                        <span style={{ fontWeight: '600' }}>
                                            Number:
                                        </span>
                                        <span style={{ fontWeight: '500' }}>
                                            +71032498
                                        </span>
                                    </div>

                                    <div className={classes.districtContentTextSite}>
                                        <span style={{ fontWeight: '600' }}>
                                            Site:
                                        </span>
                                        <span style={{ fontWeight: '500' }}>
                                            example.com
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div> */}

                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>

        </>
    );
}

export default Cherkessk_page;