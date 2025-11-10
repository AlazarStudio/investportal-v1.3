import React from "react";
import classes from './Cherkessk_page.module.css';
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import H2 from "../../Standart/H2/H2";
import Header from "../../Blocks/Header/Header";

import useCountUp from '../../../useCountUp';

function Cherkessk_page({ children, ...props }) {
    const [num1, ref1] = useCountUp(112.9, 1000);
    const [num2, ref2] = useCountUp(6986.02, 1000);
    const [num3, ref3] = useCountUp(5248, 1000);
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
                    <WidthBlock className="MspWidthBlock">
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">В ЦИФРАХ</H2>

                        <div className={classes.rajon_info}>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref1}>{num1} тыс. чел.</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>население</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref2}>{num2} га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>площадь территории</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref3}>{num3}</div>
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

                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">ГЛАВА МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ </H2>

                        <div className={classes.container}>
                            <div className={classes.profile}>
                                <div className={classes.profile_img}>
                                    <img src="/deduk_v_n.jpg" alt="Profile Image" />
                                </div>
                                <div className={classes.info}>
                                    <h2> Дедук Валерий Николаевич </h2>
                                    <p><b> Дата рождения: </b> 24 октября 1964 года</p>
                                    <p><b>Полное наименование должности:</b></p>
                                    <p> Депутат Думы муниципального образования города Черкесска шестого созыва </p>
                                    
                                    {/* <p><b>Телефон:</b> 28-16-75 </p> */}

                                </div>
                            </div>
                        </div>

                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Руководитель мэрии муниципального образования</H2>

                        <div className={classes.container}>
                            <div className={classes.profile}>
                                <div className={classes.profile_img}>
                                    <img src="/mer_cherkessk.jpg" alt="Profile Image" />
                                </div>
                                <div className={classes.info}>
                                    <h2> Баскаев Алексей Олегович </h2>

                                    <p><b>Полное наименование должности:</b></p>
                                    <p> Мэр города Черкесск </p>
                                    
                                    <p><b>Телефон:</b> 28-16-75 </p>

                                </div>
                            </div>
                        </div>


                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">ИНВЕСТИЦИОННЫЙ УПОЛНОМОЧЕННЫЙ</H2>

                        <div className={classes.container}>
                            <div className={classes.profile}>
                                <div className={classes.profile_img}>
                                    <img src="/MO_upl_cherkessk.jpg" alt="Profile Image" />
                                </div>
                                <div className={classes.info}>
                                    <h2>Охтова Асият Мухтаровна</h2>

                                    <p><b>Дата рождения:</b> 07.07.1983</p>

                                    <p><b>Полное наименование должности:</b></p>
                                    <p>Начальник отдела экономического развития города и методического обеспечения предоставления государственных и муниципальных услуг мэрии муниципального образования города Черкесска</p>

                                    <p><b>Нормативный акт, содержащий сведения об утверждении в качестве инвестиционного уполномоченного:</b></p>
                                    <p>Распоряжение мэрии муниципального образования города Черкесска от 19.01.2024 № 7-р «О назначении инвестиционного уполномоченного муниципального образования города Черкесска»</p>

                                    <p><b>Образование:</b> Высшее</p>
                                    <p><b>Работа в прошлом:</b> Информационный центр МВД по Карачаево-Черкесской Республике</p>
                                    <p><b>Государственные награды:</b> Медаль «За отличие в службе» - 2 (2014 год) и 3 степени (2020 год), НЗ «За верность долгу» (2011 год), НЗ «за отличную службу в МВД 1 степени» (2017 год).</p>
                                    <p><b>Телефон:</b> 8 928 386 07 01</p>
                                    <p><b>Эл. почта:</b> <a href="mailto:asiyat.oxtova@mail.ru">asiyat.oxtova@mail.ru</a></p>
                                    <p><b>Официальный сайт МО:</b> <a href="https://cherkessk09.ru/" target="_blank">https://cherkessk09.ru</a></p>
                                </div>
                            </div>
                        </div>

                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>

        </>
    );
}

export default Cherkessk_page;