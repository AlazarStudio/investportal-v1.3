import React from "react";
import classes from './Habezskij_rajon_page.module.css';
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import H2 from "../../Standart/H2/H2";
import Header from "../../Blocks/Header/Header";

function Habezskij_rajon_page({ children, ...props }) {
    return (
        <>
            <Header />

            <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                Хабезский район
                <div className={classes.rajon_subtitle}>
                    Районный центр а. Хабез
                </div>
            </H2>

            <div className={classes.rajon_img}>
                <img src="/H-R.webp" alt="Хабезский район" />
            </div>

            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">В ЦИФРАХ</H2>

                        <div className={classes.rajon_info}>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>37 км</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>расстояние до г. Черкесска</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>30,679 тыс. чел.</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>население</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>529 тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>площадь территории</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>213,4 тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>земли лесного фонда</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>1,4 тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>сельскохозяйственные угодья</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>0,2 тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>промышленные земли</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>2</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>населенных пунктов</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>10</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>сельских поселений</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>30</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>субъектов малого и среднего предпринимательства</div>
                            </div>
                        </div>

                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">КОНКУРЕНТНЫЕ ПРИЕМУЩЕСТВА</H2>

                        <div className={classes.rajon_konkurent}>
                            <div className={classes.rajon_konkurent__item}>
                                <div className={classes.rajon_konkurent__item___top}>
                                    <div className={classes.rajon_konkurent__item___top____img}>
                                        <img src="/kp1.png" alt="Внешние связи" />
                                    </div>
                                    <div className={classes.rajon_konkurent__item___top____title}>ВНЕШНИЕ СВЯЗИ</div>
                                </div>
                                <div className={classes.rajon_konkurent__item___bottom}>
                                    Межмуниципальные, межрегиональные и межстрановые связи. Вовлечение в экономический оборот ископаемых и возобновляемых природных ресурсов на принципах устойчивого развития.
                                </div>
                            </div>
                            <div className={classes.rajon_konkurent__item}>
                                <div className={classes.rajon_konkurent__item___top}>
                                    <div className={classes.rajon_konkurent__item___top____img}>
                                        <img src="/kp2.png" alt="Природные ресурсы и экология" />
                                    </div>
                                    <div className={classes.rajon_konkurent__item___top____title}>ПРИРОДНЫЕ РЕСУРСЫ И ЭКОЛОГИЯ</div>
                                </div>
                                <div className={classes.rajon_konkurent__item___bottom}>
                                    Экологически чистая природа. <br />
                                    Развитая гидрологическая сеть. <br />
                                    Множественность и многофункциональность минеральных целебных источников. <br />
                                    Минерально-сырьевая база.
                                </div>
                            </div>
                            <div className={classes.rajon_konkurent__item}>
                                <div className={classes.rajon_konkurent__item___top}>
                                    <div className={classes.rajon_konkurent__item___top____img}>
                                        <img src="/kp3.png" alt="Инфраструктура" />
                                    </div>
                                    <div className={classes.rajon_konkurent__item___top____title}>ИНФРАСТРУКТУРА</div>
                                </div>
                                <div className={classes.rajon_konkurent__item___bottom}>
                                    Развитие транспортной, энергетической и информационно-коммуникационной инфраструктуры.
                                </div>
                            </div>
                            <div className={classes.rajon_konkurent__item}>
                                <div className={classes.rajon_konkurent__item___top}>
                                    <div className={classes.rajon_konkurent__item___top____img}>
                                        <img src="/kp4.png" alt="Индустрия гостеприимства и туризм" />
                                    </div>
                                    <div className={classes.rajon_konkurent__item___top____title}>ИНДУСТРИЯ ГОСТЕПРИИМСТВА И ТУРИЗМ</div>
                                </div>
                                <div className={classes.rajon_konkurent__item___bottom}>
                                    Развитие индустрии гостеприимства и туризма. <br />
                                    Развитие этнографического, экологического, лечебно-оздоровительного, гастрономического и других видов туризма.
                                </div>
                            </div>
                            <div className={classes.rajon_konkurent__item}>
                                <div className={classes.rajon_konkurent__item___top}>
                                    <div className={classes.rajon_konkurent__item___top____img}>
                                        <img src="/kp5.png" alt="Этноэкономика" />
                                    </div>
                                    <div className={classes.rajon_konkurent__item___top____title}>ЭТНОЭКОНОМИКА</div>
                                </div>
                                <div className={classes.rajon_konkurent__item___bottom}>
                                Восстановление и развитие этноэкономики, включая овцеводство, коневодство, пчеловодство.
                                </div>
                            </div>
                        </div>

                        {/* <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                            Ключевые инвестиционные проекты

                            <div className={classes.rajon_subtitle}>
                                Реализуемые инвестиционные проекты на территории МО
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
                                    1. Строительство завода по добыче и производству технического кремния, ООО “Байкальская Финансово-Промышленная компания”
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock2} `}>382 млн. руб.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock3} `}>2018-2028 гг.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock4} `}>
                                    Инвестором проведены поиски и оценка кварцевого сырья, составляется отчет с подсчетом запасов для постановки запасов на баланс. <br />
                                    Этапность работ: 1) Разведка месторождения 2) Проектирование и строительство ЛЭП 110 кВ 3) Проектирование предприятия
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock5} `}>2500 чел.</div>
                            </div>
                            <div className={classes.rajon_table__row}>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock1} `}>
                                    2. Разработка и добыча руды с целью отработки запасов Зун-Холбинского золоторудного месторождения, ООО “Зун-Холба”
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock2} `}>1129 млн. руб.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock3} `}>2023-2028 гг.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock4} `}>
                                    План развития рудника «Холбинский» предполагает модернизацию подземного горно-добывающего комплекса, расширение парка самоходного горного оборудования, применение нескольких эффективных систем разработки.
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock5} `}>810 чел.</div>
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

export default Habezskij_rajon_page;
