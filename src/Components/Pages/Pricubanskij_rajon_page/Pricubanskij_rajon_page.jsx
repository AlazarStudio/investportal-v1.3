import React from "react";
import classes from './Pricubanskij_rajon_page.module.css';
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import H2 from "../../Standart/H2/H2";
import Header from "../../Blocks/Header/Header";
import useCountUp from '../../../useCountUp';

function Pricubanskij_rajon_page({ children, ...props }) {
    const [num1, ref1] = useCountUp(16, 1000);
    const [num2, ref2] = useCountUp(29.2, 1000);
    const [num3, ref3] = useCountUp(960, 1000);
    const [num4, ref4] = useCountUp(768.9, 1000);
    const [num5, ref5] = useCountUp(473.13, 1000);
    const [num6, ref6] = useCountUp(63.91, 1000);
    const [num7, ref7] = useCountUp(205.85, 1000);
    const [num8, ref8] = useCountUp(21.7, 1000);
    const [num9, ref9] = useCountUp(23, 1000);
    const [num10, ref10] = useCountUp(2602, 1000);
    return (
        <>
            <Header />

            <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                Прикубанский район

                <div className={classes.rajon_subtitle}>
                    Районный центр п. Кавказский
                </div>
            </H2>

            <div className={classes.rajon_img}>
                <img src="/P-R.webp" alt="" />
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
                                <div className={classes.rajon_info__item___desc}>сельскохозяйственные угодья</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref5}>{num5} тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>Пашни</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref6}>{num6}  тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>Сенокосы</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref7}>{num7}  тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>Пастбища</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref8}>{num8} тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>Залежи</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref9}>{num9}</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>населенных пунктов</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref10}>{num10}</div>
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
                                    Прикубанский район обладает выгодным географическим положением, что способствует развитию внешних связей. Район находится в непосредственной близости к крупным транспортным узлам и городам, таким как Черкесск, Ставрополь и Краснодар, что облегчает логистику и транспортировку товаров
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
                                    Район обладает значительными природными ресурсами, включая плодородные земли, водные ресурсы и благоприятный климат. Большое Ставропольское водохранилище и река Кубань обеспечивают достаточное количество воды для сельского хозяйства и других нужд. Климатические условия способствуют выращиванию разнообразных сельскохозяйственных культур​​.
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
                                    Прикубанский район активно развивает свою инфраструктуру. Строительство и модернизация коммунальных систем, улучшение транспортных связей и создание благоприятных условий для бизнеса играют ключевую роль в повышении инвестиционной привлекательности района. Создание Многофункционального центра предоставления государственных и муниципальных услуг значительно улучшает доступность услуг для предпринимателей и населения​​.
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
                                    Район обладает большим туристическим потенциалом благодаря своим природным и культурным ресурсам. Планируется развитие туристической инфраструктуры, включая строительство набережной вдоль реки Кубань, создание парка и развитие маршрутов для туристов. Это поможет привлечь больше туристов и создать новые рабочие места в секторе услуг​​.
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
                                    Прикубанский район богат культурными и этническими традициями, что способствует развитию этнотуризма и сельского туризма. Местные ремесла, традиции и культура могут привлекать туристов и инвесторов, способствуя экономическому развитию района. Район поддерживает инициативы, направленные на сохранение и популяризацию этнокультурного наследия​​.
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
                                    1. Площадка откорма овец / ООО Ставропольский фермер
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock2} `}>779,580 млн. руб.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock3} `}>2023 г.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock4} `}>
                                    Проект по созданию площадки откорма овец на 50 000 скотомест в п. Ударный. Реализация проекта направлена на развитие овцеводства и обеспечение продовольственной безопасности региона. Текущее состояние: на стадии реализации
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock5} `}>40 чел.</div>
                            </div>
                        </div> */}


                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">ИНВЕСТИЦИОННЫЙ УПОЛНОМОЧЕННЫЙ</H2>

                        <div className={classes.container}>
                            <div className={classes.profile}>
                                <div className={classes.profile_img}>
                                    <img src="/MO_upl_prikub.jpg" alt="Profile Image" />
                                </div>
                                <div className={classes.info}>
                                    <h2>Таранов Александр Петрович</h2>

                                    <p><b>Дата рождения:</b> 21.03.1984г</p>

                                    <p><b>Полное наименование должности:</b></p>
                                    <p>Первый  заместитель главы администрации Прикубанского муниципального района</p>

                                    <p><b>Нормативный акт, содержащий сведения об утверждении в качестве инвестиционного уполномоченного:</b></p>
                                    <p>Распоряжение администрации Прикубанского муниципального района от  31.01.2024  №9-р « О назначении инвестиционного уполномоченного лица Прикубанского муниципального района».</p>

                                    <p><b>Образование:</b> Высшее</p>
                                    <p><b>Работа в прошлом:</b> Начальник бюджетного отдела финансового управления.
                                        Начальник отдела-главный бухгалтер администраций Майского сельского поселения.
                                    </p>
                                    <p><b>Государственные награды:</b> - </p>
                                    <p><b>Телефон:</b> 8 963 170 26 87</p>
                                    <p><b>Официальный сайт МО:</b> <a href="https://admprikmr.tilda.ws/" target="_blank">https://admprikmr.tilda.ws/</a></p>
                                </div>
                            </div>
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>

        </>
    );
}

export default Pricubanskij_rajon_page;