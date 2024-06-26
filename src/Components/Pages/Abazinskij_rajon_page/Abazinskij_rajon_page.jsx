import React, { useState, useEffect, useRef } from "react";
import classes from './Abazinskij_rajon_page.module.css';
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import H2 from "../../Standart/H2/H2";
import Header from "../../Blocks/Header/Header";

import useCountUp from '../../../useCountUp';

function Abazinskij_rajon_page({ children, ...props }) {
    const [num1, ref1] = useCountUp(44, 1000);
    const [num2, ref2] = useCountUp(17.8, 1000);
    const [num3, ref3] = useCountUp(30.1, 1000);
    const [num4, ref4] = useCountUp(213.4, 1000);
    const [num5, ref5] = useCountUp(22.2, 1000);
    const [num6, ref6] = useCountUp(7, 1000);
    const [num7, ref7] = useCountUp(5.1, 1000);
    const [num8, ref8] = useCountUp(7.7, 1000);
    const [num9, ref9] = useCountUp(450, 1000);
    const [num10, ref10] = useCountUp(1.8, 1000);
    const [num11, ref11] = useCountUp(5, 1000);
    const [num12, ref12] = useCountUp(339, 1000);
    return (
        <>
            <Header />

            <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                Абазинский район

                <div className={classes.rajon_subtitle}>
                    Административный центр — аул Инжич-Чукун.
                </div>
            </H2>

            <div className={classes.rajon_img}>
                <img src="/A-R_.webp" alt="" />
            </div>

            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock className="MspWidthBlock">
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">В ЦИФРАХ</H2>

                        <div className={classes.rajon_info}>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref1}>{num1} км</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>расстояние до г.Черкесска</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref2}>{num2} тыс. чел</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>население</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref3}>{num3} тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>площадь территории</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref4}>{num4} тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>земли лесного фонда</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref5}>{num5} тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>сельскохозяйственные угодья</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref6}>{num6} тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>пашни</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref7}>{num7} тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>сенокосы</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref8}>{num8} тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>пастбища</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref9}>{num9} га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>залежи</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref10}>{num10} тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>прочие земли </div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref11}>{num11}</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>населенных пунктов</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref12}>{num12}</div>
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
                                    <div className={classes.rajon_konkurent__item___top____title}>ПРЕДПРИНИМАТЕЛЬСКАЯ ОСНОВА</div>
                                </div>
                                <div className={classes.rajon_konkurent__item___bottom}>
                                    развитие малого предпринимательства и КФХ;<br />
                                    развитие экспорта в соседние территории;<br />
                                    модернизация основных фондов;<br />
                                    привлечение инвестиционных ресурсов для финансового обеспечения малых предприятий через муниципальные и районные фонды поддержки малого предпринимательства;<br />
                                    эксплуатация месторождений полезных ископаемых на территории района.

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
                                    умеренно теплый климат;<br />
                                    наличие земельных ресурсов;<br />
                                    леса, лекарственные растения;<br />
                                    наличие полезных ископаемых;<br />
                                    высокая доля молодежи в структуре населения;<br />
                                    высокое качество сельхоз продукции

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
                                    1. Муниципальное бюджетное учреждение «Многофункциональный центр предоставления государственных и муниципальных услуг в Абазинском муниципальном районе»
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock2} `}>1 млн. руб.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock3} `}>2018-2028 гг.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock4} `}>
                                    Муниципальное бюджетное учреждение «Многофункциональный центр предоставления государственных и муниципальных услуг в Абазинском муниципальном районе»
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock5} `}>500 чел.</div>
                            </div>
                        </div> */}


                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">ГЛАВА МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ </H2>

                        <div className={classes.container}>
                            <div className={classes.profile}>
                                <div className={classes.profile_img}>
                                    <img src="/mer_abaz.jpg" alt="Profile Image" />
                                </div>
                                <div className={classes.info}>
                                    <h2> Кужев Руслан Муратович </h2>

                                    <p><b>Полное наименование должности:</b></p>
                                    <p> Глава администрации </p>

                                    <p><b>Телефон:</b> 8 (87873) 34155 </p>
                                    <p><b>Эл. почта:</b> abaz-raion@mail.ru  </p>

                                </div>
                            </div>
                        </div>


                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">ИНВЕСТИЦИОННЫЙ УПОЛНОМОЧЕННЫЙ</H2>

                        <div className={classes.container}>
                            <div className={classes.profile}>
                                <div className={classes.profile_img}>
                                    <img src="/MO_upl_abaza.jpg" alt="Profile Image" />
                                </div>
                                <div className={classes.info}>
                                    <h2>Кишмахова Ирма Рамазановна</h2>

                                    <p><b>Дата рождения:</b> 12.04.1989</p>

                                    <p><b>Полное наименование должности:</b></p>
                                    <p>Исполняющий обязанности начальника отдела экономического развития и муниципального имущества администрации Абазинского муниципального района</p>

                                    <p><b>Нормативный акт, содержащий сведения об утверждении в качестве инвестиционного уполномоченного:</b></p>
                                    <p>Распоряжение администрации Абазинского муниципального района № 02-р от 15.01.2024 «О назначении инвестиционного уполномоченного»</p>

                                    <p><b>Образование:</b> Высшее, Московский Открытый Социальный Университет</p>
                                    <p><b>Работа в прошлом:</b> И.о. начальника отдела экономического развития и муниципального имущества администрации Абазинского муниципального района </p>
                                    <p><b>Государственные награды:</b> Почетные грамоты: Министерства экономического развития Карачаево-Черкесской Республики.</p>
                                    <p><b>Телефон:</b> 8 (87873) 34120</p>
                                    <p><b>Эл. почта:</b> <a href="mailto:abazekonom@mail.ru">abazekonom@mail.ru</a></p>
                                    <p><b>Официальный сайт МО:</b> <a href="https://abaz-raion.ru/" target="_blank">https://abaz-raion.ru/</a></p>
                                </div>
                            </div>
                        </div>

                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>

        </>
    );
}

export default Abazinskij_rajon_page;