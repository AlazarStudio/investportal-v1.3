import React from "react";
import classes from './Karachaevsk_page.module.css';
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import H2 from "../../Standart/H2/H2";
import Header from "../../Blocks/Header/Header";
import useCountUp from '../../../useCountUp';

function Karachaevsk_page({ children, ...props }) {
    const [num1, ref1] = useCountUp(58, 1000);
    const [num2, ref2] = useCountUp(41.1, 1000);
    const [num3, ref3] = useCountUp(315.6, 1000);
    const [num4, ref4] = useCountUp(5.3, 1000);
    const [num5, ref5] = useCountUp(16.2, 1000);
    const [num6, ref6] = useCountUp(6, 1000);
    const [num7, ref7] = useCountUp(13, 1000);
    const [num8, ref8] = useCountUp(694, 1000);
    return (
        <>
            <Header />

            <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                г. Карачаевск
            </H2>

            <div className={classes.rajon_img}>
                <img src="/Karach-G.webp" alt="" />
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
                                    Выгодное географическое положение и удобное транспортное расположение (приграничное положение — округ граничит с Абхазской Республикой, прохождение на территории округа автодорог федерального и регионального значения)
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
                                    Разнообразие природных ландшафтов, наличие горных рек, уникальные природные комплексы и памятники. Природные зоны включают горные и предгорные климатические пояса, что способствует развитию туризма. Большая часть округа покрыта лесами, субальпийскими и альпийскими лугами
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
                                    Наличие важной транспортной инфраструктуры, включая железнодорожные и автомобильные дороги. В округе ведется активное строительство объектов инженерной инфраструктуры, что способствует экономическому развитию
                                </div>
                            </div>
                            <div className={classes.rajon_konkurent__item}>
                                <div className={classes.rajon_konkurent__item___top}>
                                    <div className={classes.rajon_konkurent__item___top____img}>
                                        <img src="/kp4.png" alt="" />
                                    </div>
                                    <div className={classes.rajon_konkurent__item___top____title}>ИНДУСТРИЯ ГОСТЕПРИИМСТВА И ТУРИЗМ</div>
                                </div>
                                <div className={classes.rajon_konkurent__item___bottom}>Я
                                    Округ включает такие курорты как Теберда и Домбай, которые привлекают туристов своими горнолыжными трассами и лечебными свойствами климата. Туризм в округе развивается за счет уникальных природных ресурсов и культурного наследия
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
                                    Богатое историко-культурное наследие, этнографические особенности региона создают условия для развития этнотуризма. Местная культура и традиции активно используются для привлечения туристов и создания сувенирной продукции
                                </div>
                            </div>
                        </div>



                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">ИНВЕСТИЦИОННЫЙ УПОЛНОМОЧЕННЫЙ</H2>

                        <div className={classes.container}>
                            <div className={classes.profile}>
                                <div className={classes.profile_img}>
                                    <img src="/MO_upl_karachaevsk.jpg" alt="Profile Image" />
                                </div>
                                <div className={classes.info}>
                                    <h2>Байчорова Радима Срафильевна</h2>

                                    <p><b>Дата рождения:</b> 29.11.1981</p>

                                    <p><b>Полное наименование должности:</b></p>
                                    <p>Начальника Управления экономического развития, закупок и мобилизации доходов Администрации Карачаевского городского округа</p>

                                    <p><b>Нормативный акт, содержащий сведения об утверждении в качестве инвестиционного уполномоченного:</b></p>
                                    <p>Распоряжение Администрация Карачаевского городского округа № 2-р от 15.01.2024 «О назначении инвестиционного уполномоченного»</p>

                                    <p><b>Образование:</b> Высшее
                                        1.	Московская академия комплексной безопасности (институт)
                                        2.	Карачаево-Черкесский государственный университет имени У.Д. Алиева
                                    </p>
                                    <p><b>Работа в прошлом:</b> 08.2021- по н/в – начальник Управления экономического развития закупок и мобилизации доходов Администрации Карачаевского городского округа</p>
                                    <p><b>Государственные награды:</b> Почетные грамоты:
                                        Президиума Народного собрания
                                        (Парламента) Карачаево-Черкесской Республики; Правительства Карачаево-Черкесской Республики; Министерства экономического развития Карачаево-Черкесской Республики.
                                    </p>
                                    <p><b>Телефон:</b> 8 (87879) 24656, 8 (87879) 22424</p>
                                    <p><b>Эл. почта:</b> <a href="mailto:ekonom21@list.ru">ekonom21@list.ru</a></p>
                                    <p><b>Официальный сайт МО:</b> <a href="http://karachaevsk.info/" target="_blank">http://karachaevsk.info/</a></p>
                                </div>
                            </div>
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>

        </>
    );
}

export default Karachaevsk_page;