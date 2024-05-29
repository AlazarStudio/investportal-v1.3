import React from "react";
import classes from './Pricubanskij_rajon_page.module.css';
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import H2 from "../../Standart/H2/H2";
import Header from "../../Blocks/Header/Header";

function Pricubanskij_rajon_page({ children, ...props }) {
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
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">В ЦИФРАХ</H2>

                        <div className={classes.rajon_info}>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>16 км.</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>расстояние до г. Черкесска</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>29,2 тыс. чел.</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>население</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>960 тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>площадь территории</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>768,9 тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>сельскохозяйственные угодья</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>473,13 тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>Пашни</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>63,91  тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>Сенокосы</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>205,85  тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>Пастбища</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>21,77 тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>Залежи</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>23</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>населенных пунктов</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>2602</div>
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

export default Pricubanskij_rajon_page;