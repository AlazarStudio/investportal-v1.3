import React from "react";
import classes from './Habezskij_rajon_page.module.css';
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import H2 from "../../Standart/H2/H2";
import Header from "../../Blocks/Header/Header";
import useCountUp from '../../../useCountUp';

function Habezskij_rajon_page({ children, ...props }) {
    const [num1, ref1] = useCountUp(37, 1000);
    const [num2, ref2] = useCountUp(30.6, 1000);
    const [num3, ref3] = useCountUp(529, 1000);
    const [num4, ref4] = useCountUp(213.4, 1000);
    const [num5, ref5] = useCountUp(1.4, 1000);
    const [num6, ref6] = useCountUp(0.2, 1000);
    const [num7, ref7] = useCountUp(2, 1000);
    const [num8, ref8] = useCountUp(10, 1000);
    const [num9, ref9] = useCountUp(30, 1000);
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
                    <WidthBlock className="MspWidthBlock">
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">В ЦИФРАХ</H2>

                        <div className={classes.rajon_info}>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref1}>{num1} км</div>
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
                                <div className={classes.rajon_info__item___title} ref={ref6}>{num6} тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>промышленные земли</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref7}>{num7}</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>населенных пунктов</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref8}>{num8}</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>сельских поселений</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref9}>{num9}</div>
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

                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">ГЛАВА МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ </H2>

                        <div className={classes.container}>
                            <div className={classes.profile}>
                                <div className={classes.profile_img}>
                                    <img src="/mer_habez.jpg" alt="Profile Image" />
                                </div>
                                <div className={classes.info}>
                                    <h2> Жужуев Тимур Муаедович </h2>

                                    <p><b>Полное наименование должности:</b></p>
                                    <p> Глава администрации </p>

                                    <p><b>Телефон:</b> 8 (87873) 5-14-41 </p>
                                    <p><b>Эл. почта:</b> xabez@bk.ru </p>

                                </div>
                            </div>
                        </div>


                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">ИНВЕСТИЦИОННЫЙ УПОЛНОМОЧЕННЫЙ</H2>

                        <div className={classes.container}>
                            <div className={classes.profile}>
                                <div className={classes.profile_img}>
                                    <img src="/MO_upl_habez.jpg" alt="Profile Image" />
                                </div>
                                <div className={classes.info}>
                                    <h2>Микитова Оксана Владимировна</h2>

                                    <p><b>Дата рождения:</b> 15.12.1977 </p>

                                    <p><b>Полное наименование должности:</b></p>
                                    <p>Начальник отдела экономического развития и муниципального имущества администрации Хабезского муниципального района</p>

                                    <p><b>Нормативный акт, содержащий сведения об утверждении в качестве инвестиционного уполномоченного:</b></p>
                                    <p>Распоряжение администрации Хабезского муниципального района от 19.09.2016 № 59-р
                                        «Об определении структурного подразделения, ответственного за реализацию полномочий по привлечению инвестиций и работе с инвесторами в Хабезском муниципальном районе»
                                    </p>

                                    <p><b>Образование:</b> Высшее</p>
                                    <p><b>Работа в прошлом:</b> 12.2011-по н/в - начальник отдела экономического развития и муниципального имущества администрации Хабезского муниципального района.</p>
                                    <p><b>Государственные награды:</b>Почетная	грамота		Министерства экономического развития КЧР, 2011г., 2014г., 2021 г., Почетная грамота Правительства Карачаево-Черкесской Республики, 2015г., Почетная	грамота		Министерства промышленности и торговли Карачаево- Черкесской Республики, 2020г., Грамота Карачаево-Черкесского	регионального
                                        отделения партии «Единая Россия», 2021г.
                                    </p>
                                    <p><b>Телефон:</b> 8 903 422 16 62</p>
                                    <p><b>Эл. почта:</b> <a href="mailto:h.economotdel@mail.ru">h.economotdel@mail.ru</a></p>
                                    <p><b>Официальный сайт МО:</b> <a href="https://xabez.ru/" target="_blank">https://xabez.ru/</a></p>
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
