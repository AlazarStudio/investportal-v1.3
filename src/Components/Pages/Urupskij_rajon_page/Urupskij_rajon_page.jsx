import React from "react";
import classes from './Urupskij_rajon_page.module.css';
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import H2 from "../../Standart/H2/H2";
import Header from "../../Blocks/Header/Header";
import useCountUp from '../../../useCountUp';

function Urupskij_rajon_page({ children, ...props }) {
    const [num1, ref1] = useCountUp(120, 1000);
    const [num2, ref2] = useCountUp(24.3, 1000);
    const [num3, ref3] = useCountUp(278.2, 1000);
    const [num4, ref4] = useCountUp(7, 1000);
    const [num5, ref5] = useCountUp(6, 1000);
    const [num6, ref6] = useCountUp(234, 1000);
    return (
        <>
            <Header />

            <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                Урупский район

                <div className={classes.rajon_subtitle}>
                    Районный центр станица Преградная
                </div>
            </H2>

            <div className={classes.rajon_img}>
                <img src="/U-R.webp" alt="" />
            </div>

            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">В ЦИФРАХ</H2>

                        <div className={classes.rajon_info}>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref1}>{num1}  км.</div>
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
                                <div className={classes.rajon_info__item___title} ref={ref4}>{num4}</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>населенных пунктов</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref5}>{num5}</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>сельских поселений</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref6}>{num6} </div>
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
                                    Урупский район активно стремится к экономической интеграции и утвердить себя как надежного экономического партнера. Для обеспечения устойчивого развития района и благосостояния его жителей важны процессы экономической интеграции, расширение рамок взаимовыгодного сотрудничества не только в республике, но и за ее пределами. Важным является создание благоприятного инвестиционного климата и содействие в открытии новых производств, развитии жилищного и социально-культурного строительства, а также решении вопросов льготного налогообложения для предприятий, осуществляющих инвестиционную деятельность
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
                                    Урупский район обладает значительными природными ресурсами: <br />
                                    <br />
                                    Серпентиниты Беденского массива: площадь 9 км², разведанные месторождения.<br />
                                    Месторождения каменного угля: Большелабинское (10 млн. тонн) и Толстобугорское (226 млн. тонн) месторождения.<br />
                                    Месторождения пресных вод: значительные запасы питьевых вод высокого качества в долинах рек Большая Лаба и Уруп​​.
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
                                    Инфраструктура Урупского района включает:<br />
                                    <br />
                                    Газификация района начата в 2013 году, что улучшает перспективу развития территории.<br />
                                    Развитая водопроводная сеть и проводимые работы по обеспечению качественной водой.<br />
                                    Благоустройство мест массового отдыха населения, такие как Центральный парк в станице Преградная​​.
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
                                    Урупский район обладает природными и климатическими условиями, благоприятными для развития туризма. Разнообразие форм рельефа, большие колебания высот, наличие горно-долинных ветров и протяженные склоны способствуют развитию туризма​​.
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
                                    Развитие малого и среднего предпринимательства является важным направлением экономического роста. В районе сфера малого и среднего бизнеса охватывает значительную часть трудоспособного населения, занимающихся индивидуальной трудовой деятельностью и предпринимательством. Наиболее привлекательной для малого и среднего бизнеса является сфера торговли и сельского хозяйства
                                </div>
                            </div>
                        </div>


                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">ИНВЕСТИЦИОННЫЙ УПОЛНОМОЧЕННЫЙ</H2>

                        <div className={classes.container}>
                            <div className={classes.profile}>
                                <div className={classes.profile_img}>
                                    <img src="/MO_upl_urup.jpg" alt="Profile Image" />
                                </div>
                                <div className={classes.info}>
                                    <h2>Мархель Юлия Викторовна</h2>

                                    <p><b>Дата рождения:</b> 11.03.1988</p>

                                    <p><b>Полное наименование должности:</b></p>
                                    <p>Начальник отдела социально-экономического развития, бухгалтерского учета и имущественных отношений администрации Урупского муниципального района.</p>

                                    <p><b>Нормативный акт, содержащий сведения об утверждении в качестве инвестиционного уполномоченного:</b></p>
                                    <p>Распоряжение администрации Урупского муниципального района от 24.01.2024 №4-р «О назначении инвестиционного уполномоченного Урупского муниципального района».</p>

                                    <p><b>Образование:</b> Высшее, квалификация «Экономист» по специальности «Бухгалтерский учет, анализ и аудит» Федеральное государственное образовательное учреждение высшего профессионального образования «Ставропольский государственный аграрный университет»   21.12.2009 года.</p>
                                    <p><b>Работа в прошлом:</b> 04.2016- по настоящее время Начальник отдела социально-экономического развития, бухгалтерского учета и имущественных отношений администрации Урупского муниципального района.</p>
                                    <p><b>Государственные награды:</b> -</p>
                                    <p><b>Телефон:</b> 8(87876)6-15-96</p>
                                    <p><b>Эл. почта:</b> <a href="mailto:econimik_urup@mail.ru">econimik_urup@mail.ru</a></p>
                                    <p><b>Официальный сайт МО:</b> <a href="https://urupadm.ru/" target="_blank">https://urupadm.ru/</a></p>
                                </div>
                            </div>
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>

        </>
    );
}

export default Urupskij_rajon_page;