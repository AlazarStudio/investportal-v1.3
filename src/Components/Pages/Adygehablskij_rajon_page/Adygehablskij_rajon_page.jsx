import React from "react";
import classes from './Adygehablskij_rajon_page.module.css';
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import H2 from "../../Standart/H2/H2";
import Header from "../../Blocks/Header/Header";

function Adygehablskij_rajon_page({ children, ...props }) {
    return (
        <>
            <Header />

            <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                Адыге-Хабльский район

                <div className={classes.rajon_subtitle}>
                    Районный центр а. Адыге-Хабль
                </div>
            </H2>

            <div className={classes.rajon_img}>
                <img src="/A-H-R.webp" alt="" />
            </div>

            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">В ЦИФРАХ</H2>

                        <div className={classes.rajon_info}>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>20 км.</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>расстояние до г. Черкесска</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>16,4 тыс. чел.</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>население</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>32,6 тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>площадь территории</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>5,8 тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>земли лесного фонда</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>32,6 тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>сельскохозяйственные угодья</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>0,3 тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>промышленные земли</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>15</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>населенных пунктов</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>10</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>сельских поселений</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>106</div>
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
                                    Межмуниципальные, межрегиональные и межстрановые связи.
                                    Вовлечение в экономический оборот ископаемых и возобновляемых
                                    природных ресурсов на принципах устойчивого развития.
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
                                    Экологически чистая природа. <br />
                                    Развитая гидрологическая сеть. <br />
                                    Множественность и многофункциональность минеральных целебных
                                    источников. <br />
                                    Минерально-сырьевая база.
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
                            <div className={classes.rajon_konkurent__item}>
                                <div className={classes.rajon_konkurent__item___top}>
                                    <div className={classes.rajon_konkurent__item___top____img}>
                                        <img src="/kp5.png" alt="" />
                                    </div>
                                    <div className={classes.rajon_konkurent__item___top____title}>ЭТНОЭКОНОМИКА</div>
                                </div>
                                <div className={classes.rajon_konkurent__item___bottom}>
                                    Восстановление и развитие этноэкономики, включая овцеводство, коневодство, пчеловодство.
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
                                    1. ООО «Сады Карачаево-Черкессии»
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock2} `}>800 212,0 тыс. руб.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock3} `}>2016 - 2023 годы</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock4} `}>
                                Функционирует, заложено 279 га сада интенсивного типа, планируется заложить более 160 га
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock5} `}>166 чел.</div>
                            </div>
                            <div className={classes.rajon_table__row}>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock1} `}>
                                    2. ООО «АПК Приэльбрусье»
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock2} `}>13 324 тыс. руб.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock3} `}>2018 - 2023 годы</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock4} `}>
                                Функционирует, завершено строительство фруктохранилища на 5 тысяч тонн с сортировочно-упаковочным оборудованием
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock5} `}>65 чел.</div>
                            </div>
                        </div> */}


                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">ИНВЕСТИЦИОННЫЙ УПОЛНОМОЧЕННЫЙ</H2>

                        <div className={classes.container}>
                            <div className={classes.profile}>
                                <div className={classes.profile_img}>
                                    <img src="/MO_upl_adige.jpg" alt="Profile Image" />
                                </div>
                                <div className={classes.info}>
                                    <h2>Шакова Лира Аслановна</h2>

                                    <p><b>Дата рождения:</b> 06.05.1986 </p>

                                    <p><b>Полное наименование должности:</b></p>
                                    <p>Начальник отдела экономического развития и имущественных отношений администрации Адыге-Хабльского муниципального района</p>

                                    <p><b>Нормативный акт, содержащий сведения об утверждении в качестве инвестиционного уполномоченного:</b></p>
                                    <p>Распоряжение администрации Хабезского муниципального района от 9.02.2024 № 10 «Об определении структурного подразделения, ответственного за реализацию полномочий по привлечению инвестиций и работе с инвесторами	в	Адыге-Хабльском муниципальном районе»</p>

                                    <p><b>Образование:</b> Высшее</p>
                                    <p><b>Работа в прошлом:</b> 04.05.2010-17.11.2016года – специалистом в отделе экономического развития и имущественных отношений администрации Адыге-Хабльского муниципального района.
                                        17.11.2016 по настоящее время - начальник отдела экономического развития и имущественных отношений администрации Адыге-Хабльского муниципального района.
                                    </p>
                                    <p><b>Государственные награды:</b> Почетная грамота Правительства КЧР, 2022г.</p>
                                    <p><b>Телефон:</b> 8 988 916 34 88</p>
                                    <p><b>Эл. почта:</b> <a href="mailto:otdelekonomiki@mail.ru">otdelekonomiki@mail.ru</a></p>
                                    <p><b>Официальный сайт МО:</b> <a href="https://adigehablskimr.gosuslugi.ru/" target="_blank">https://adigehablskimr.gosuslugi.ru//</a></p>
                                </div>
                            </div>
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>

        </>
    );
}

export default Adygehablskij_rajon_page;