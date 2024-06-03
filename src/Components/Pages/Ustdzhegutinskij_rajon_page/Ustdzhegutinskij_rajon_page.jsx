import React from "react";
import classes from './Ustdzhegutinskij_rajon_page.module.css';
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import H2 from "../../Standart/H2/H2";
import Header from "../../Blocks/Header/Header";
import useCountUp from '../../../useCountUp';

function Ustdzhegutinskij_rajon_page({ children, ...props }) {
    const [num1, ref1] = useCountUp(19, 1000);
    const [num2, ref2] = useCountUp(50.8, 1000);
    const [num3, ref3] = useCountUp(99.2, 1000);
    const [num4, ref4] = useCountUp(67.5, 1000);
    const [num5, ref5] = useCountUp(9.6, 1000);
    const [num6, ref6] = useCountUp(2.7, 1000);
    const [num7, ref7] = useCountUp(37.1, 1000);
    const [num8, ref8] = useCountUp(21.5, 1000);
    const [num9, ref9] = useCountUp(11, 1000);
    const [num10, ref10] = useCountUp(2855, 1000);
    return (
        <>
            <Header />

            <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                Усть-Джегутинский район

                <div className={classes.rajon_subtitle}>
                    Районный центр г. Усть-Джегута
                </div>
            </H2>

            <div className={classes.rajon_img}>
                <img src="/U-J-R.webp" alt="" />
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
                                <div className={classes.rajon_info__item___title} ref={ref6}>{num6} тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>Сенокосы</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref7}>{num7} тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>Пастбища</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref8}>{num8} тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>Прочие земли</div>
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
                                    Усть-Джегутинский район имеет хорошую транспортную доступность благодаря федеральной трассе, соединяющей Ставропольский край и горные курорты Карачаево-Черкесской Республики, а также региональной соединительной автомобильной дороге «Лермонтов – Черкесск – Домбай». Это обеспечивает транзитный потенциал и развитие связей с соседними регионами и крупными экономическими центрами
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
                                    Район обладает значительными запасами природных ресурсов, включая гипс, известняк, песчаник, глину и фарфоровый камень. Также имеются ценные минеральные воды типа «Нарзан», которые обладают высокой концентрацией свободной углекислоты и используются в лечебных целях. В районе расположены Кубанское и Усть-Джегутинское водохранилища, предназначенные для рыборазведения и мелиоративных мероприятий​​ .
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
                                    Инфраструктура района активно развивается. Реализуются проекты по строительству и модернизации газопроводов, водоснабжения и котельных, что создает благоприятные условия для жизни и ведения бизнеса. Также район обладает современной транспортной сетью и доступом к железнодорожным и авиаузлам​​ .
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
                                    Благоприятные климатические условия и разнообразие природных ландшафтов способствуют развитию туризма и индустрии гостеприимства. Район обладает потенциалом для развития экотуризма, агротуризма и лечебного туризма благодаря наличию минеральных вод и живописным природным местам​​ .
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
                                    Район является многонациональным, что создает богатую культурную среду и способствует развитию этноэкономики. В Усть-Джегутинском районе активно поддерживаются традиции и культура различных народов, что привлекает туристов и способствует развитию культурных и этнических мероприятий. Местные фольклорные ансамбли и народные художественные коллективы известны за пределами региона и принимают участие в различных фестивалях и конкурсах
                                </div>
                            </div>
                        </div>


                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">ИНВЕСТИЦИОННЫЙ УПОЛНОМОЧЕННЫЙ</H2>

                        <div className={classes.container}>
                            <div className={classes.profile}>
                                <div className={classes.profile_img}>
                                    <img src="/MO_upl_ustdzheguta.png" alt="Profile Image" />
                                </div>
                                <div className={classes.info}>
                                    <h2>Эркенова Светлана Воваевна</h2>

                                    <p><b>Дата рождения:</b> 08.04.1985</p>

                                    <p><b>Полное наименование должности:</b></p>
                                    <p>Начальника отдела социально – экономического развития и имущественных отношений </p>

                                    <p><b>Нормативный акт, содержащий сведения об утверждении в качестве инвестиционного уполномоченного:</b></p>
                                    <p>Распоряжение администрация Усть-Джегутинского муниципального района № 68-р от 14.03.2024 «О назначении инвестиционного уполномоченного»</p>

                                    <p><b>Образование:</b> Высшее:
                                        Пятигорский университет государственный технологический
                                    </p>
                                    <p><b>Работа в прошлом:</b> 26.08.2022 по н/в начальник отдела социально-экономического развития и имущественных отношений Администрации Усть-Джегутинского муниципального района.</p>
                                    <p><b>Государственные награды:</b> -</p>
                                    <p><b>Телефон:</b> 8 (87875) 7-27-72</p>
                                    <p><b>Эл. почта:</b> <a href="mailto:ud_iconom@mail.ru">ud_iconom@mail.ru</a></p>
                                    <p><b>Официальный сайт МО:</b> <a href="https://udmunicipal.ru/" target="_blank">https://udmunicipal.ru/</a></p>
                                </div>
                            </div>
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>

        </>
    );
}

export default Ustdzhegutinskij_rajon_page;