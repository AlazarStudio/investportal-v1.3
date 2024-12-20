import React from "react";
import classes from './Zelenchukskij_rajon_page.module.css';
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import H2 from "../../Standart/H2/H2";
import Header from "../../Blocks/Header/Header";
import useCountUp from '../../../useCountUp';

function Zelenchukskij_rajon_page({ children, ...props }) {
    const [num1, ref1] = useCountUp(75, 1000);
    const [num2, ref2] = useCountUp(48.2, 1000);
    const [num3, ref3] = useCountUp(293.1, 1000);
    const [num4, ref4] = useCountUp(213.4, 1000);
    const [num5, ref5] = useCountUp(22.2, 1000);
    const [num6, ref6] = useCountUp(17, 1000);
    const [num7, ref7] = useCountUp(9, 1000);
    const [num8, ref8] = useCountUp(339, 1000);
    return (
        <>
            <Header />

            <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                Зеленчукский район

                <div className={classes.rajon_subtitle}>
                    Районный центр станица Зеленчукская
                </div>
            </H2>

            <div className={classes.rajon_img}>
                <img src="/Z-R.webp" alt="" />
            </div>

            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock className="MspWidthBlock">
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">В ЦИФРАХ</H2>

                        <div className={classes.rajon_info}>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref1}>{num1} км.</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>расстояние до г. Черкесска</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref2}>{num2} тыс. чел.</div>
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
                                <div className={classes.rajon_info__item___title} ref={ref6}>{num6}</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>населенных пунктов</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref7}>{num7}</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>сельских поселений</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref8}>{num8}</div>
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
                                    1. Всесезонный туристско-рекреационный комплекс "Архыз"
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock2} `}>1,8 млрд. руб.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock3} `}>2012-2025 гг.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock4} `}>
                                Первые объекты введены в 2012 году. Включает канатные дороги, горнолыжные трассы, внутрипоселковые коммуникации и прочее.
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock5} `}>1016 чел.</div>
                            </div>
                        </div> */}


                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">ГЛАВА МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ </H2>

                        <div className={classes.container}>
                            <div className={classes.profile}>
                                <div className={classes.profile_img}>
                                    <img src="/no_photo.png" alt="Profile Image" />
                                </div>
                                <div className={classes.info}>
                                    <h2> Шайдаров Александр Анатольевич </h2>

                                    <p><b>Полное наименование должности:</b></p>
                                    <p> Глава администрации </p>

                                    <p><b>Телефон:</b> 8-878-78-5-12-45 </p>
                                    {/* <p><b>Эл. почта:</b>  </p> */}

                                </div>
                            </div>
                        </div>


                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">ИНВЕСТИЦИОННЫЙ УПОЛНОМОЧЕННЫЙ</H2>

                        <div className={classes.container}>
                            <div className={classes.profile}>
                                <div className={classes.profile_img}>
                                    <img src="/MO_upl_zel1.jpg" alt="Profile Image" />
                                </div>
                                <div className={classes.info}>
                                    <h2>Саламахина Ирина Анатольевна</h2>

                                    <p><b>Дата рождения:</b> 23 ноября 1972г.</p>

                                    <p><b>Полное наименование должности:</b></p>
                                    <p>Заместитель главы-управделами  администрации Зеленчукского муниципального района</p>

                                    <p><b>Нормативный акт, содержащий сведения об утверждении в качестве инвестиционного уполномоченного:</b></p>
                                    <p>Постановление от 19.01.2024 №16 «О назначении инвестиционного уполномоченного в Зеленчукском муниципальном районе»</p>

                                    <p><b>Образование:</b> 2008 г., НОУ ВПО Северо-Кавказский институт бизнеса, инженерных и информационных технологий, по специальности: Бухгалтерский учет, анализ и аудит</p>
                                    <p><b>Работа в прошлом:</b> руководитель  МБУ «Многофункциональный центр по оказанию государственных и муниципальных услуг»</p>
                                    <p><b>Государственные награды:</b> Не имеется</p>
                                    <p><b>Телефон:</b> +7 (963) 284-77-77</p>
                                    <p><b>Эл. почта:</b> <a href="mailto:uprav.azmr@mail.ru">uprav.azmr@mail.ru</a></p>
                                    <p><b>Официальный сайт МО:</b> <a href="https://zelenchukadminis.ru/" target="_blank">https://zelenchukadminis.ru/</a></p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.container}>
                            <div className={classes.profile}>
                                <div className={classes.profile_img}>
                                    <img src="/MO_upl_zel2.jpg" alt="Profile Image" />
                                </div>
                                <div className={classes.info}>
                                    <h2>Колкова  Елена Александровна</h2>

                                    <p><b>Дата рождения:</b> 31 марта 1980г.</p>

                                    <p><b>Полное наименование должности:</b></p>
                                    <p>Начальник отдела экономического, социального развития и имущества администрации Зеленчукского муниципального района</p>

                                    <p><b>Образование:</b> 2002 г., ГОУВПО Ростовский государственный экономический университет «РИНХ», по специальности: Финансы и кредит</p>
                                    <p><b>Работа в прошлом:</b> ведущий инженер по экономике  РГУП «Зеленчукское ДРСУ»</p>
                                    <p><b>Государственные награды:</b> Не имеется</p>
                                    <p><b>Телефон:</b> +7 (963) 283-43-14</p>
                                    <p><b>Эл. почта:</b> <a href="mailto:zelekonom@mail.ru">zelekonom@mail.ru</a></p>
                                    <p><b>Официальный сайт МО:</b> <a href="https://zelenchukadminis.ru/" target="_blank">https://zelenchukadminis.ru/</a></p>
                                </div>
                            </div>
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>

        </>
    );
}

export default Zelenchukskij_rajon_page;