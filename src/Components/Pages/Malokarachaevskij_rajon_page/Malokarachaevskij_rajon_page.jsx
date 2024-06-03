import React from "react";
import classes from './Malokarachaevskij_rajon_page.module.css';
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import H2 from "../../Standart/H2/H2";
import Header from "../../Blocks/Header/Header";
import useCountUp from '../../../useCountUp';

function Malokarachaevskij_rajon_page({ children, ...props }) {
    const [num1, ref1] = useCountUp(76, 1000);
    const [num2, ref2] = useCountUp(43.1, 1000);
    const [num3, ref3] = useCountUp(136.5, 1000);
    const [num4, ref4] = useCountUp(10, 1000);
    const [num5, ref5] = useCountUp(10, 1000);
    const [num6, ref6] = useCountUp(1355, 1000);
    return (
        <>
            <Header />

            <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                Малокарачаевский район

                <div className={classes.rajon_subtitle}>
                    Районный центр село Учкекен
                </div>
            </H2>

            <div className={classes.rajon_img}>
                <img src="/M-K-R.webp" alt="" />
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
                                <div className={classes.rajon_info__item___title} ref={ref6}>{num6}</div>
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
                                Малокарачаевский район имеет развитую систему внешних связей. Он граничит с Кабардино-Балкарской Республикой и Ставропольским краем, а также с Карачаевским и Усть-Джегутинским районами КЧР. От Учкекена до Черкесска 76 км, до Кисловодска 23 км, до Ставрополя 131 км, до Минеральных Вод 70 км, до Пятигорска 58 км​​. Это обеспечивает легкий доступ к крупным транспортным узлам и экономическим центрам, что способствует развитию торговли и обмену ресурсами.
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
                                Малокарачаевский район обладает значительными природными ресурсами. Среди них андеозитовые порфириты, месторождения меди, доломитизированный известняк и другие полезные ископаемые​​. Район также является частью особо охраняемого эколого-курортного региона Кавказских Минеральных Вод, что обеспечивает высокий уровень экологической безопасности и привлекательности для туристов​​.
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
                                Район активно развивается в сфере инфраструктуры. В 2022 году был проведен ремонт дорог, водопроводных сетей и других коммунальных объектов​​. Также реализуются проекты по модернизации образовательных учреждений и медицинских услуг​​. Важными предприятиями являются швейная фабрика «Красный Восток», Эшкаконский гидроузел и ресторанные комплексы​​.
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
                                В Малокарачаевском районе активно развивается туризм. Известные туристические объекты включают всесезонный туристический комплекс «Медовые Водопады», этнографический комплекс «Дом Эмегена», Плато Бермамыт и другие природные достопримечательности​​. Эти места привлекают туристов со всей страны благодаря своей уникальной красоте и богатому культурному наследию.
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
                                Район славится своим этнографическим и культурным наследием. На территории расположены этнографические музеи и комплексы, такие как «Алан-шахар» на территории комплекса «Медовые Водопады», которые способствуют сохранению и популяризации карачаевской культуры​​. Также развита индустрия производства изделий из шерсти и других традиционных материалов​​.
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
                                    1. Глава КФХ Байчора Мурат - Реконструкция Парка культуры и отдыха в с. Учкекен
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock2} `}>25 млн. руб.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock3} `}>2023 год</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock4} `}>
                                Проект направлен на благоустройство и обновление Парка культуры и отдыха в селе Учкекен. Планируется улучшение инфраструктуры парка, установка новых аттракционов и создание зон для отдыха и развлечений. Это повысит привлекательность района для жителей и туристов.
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock5} `}>30 чел.</div>
                            </div>
                            <div className={classes.rajon_table__row}>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock1} `}>
                                    2. ООО «ВоенТекстильПром» - Швейная фабрика в с. Красный Восток
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock2} `}>400 млн. руб.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock3} `}>2023 гг.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock4} `}>
                                Создание швейной фабрики для производства одежды и текстильных изделий, включая форму для военнослужащих. Проект предусматривает установку современного оборудования и обучение персонала. Фабрика будет выпускать продукцию высокого качества и обеспечит стабильные рабочие места для местных жителей.
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock5} `}>200 чел.</div>
                            </div>
                            <div className={classes.rajon_table__row}>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock1} `}>
                                    3. ООО «Эльбрус Агро-Инвест» - Создание племенного хозяйства по сохранению овец карачаевской породы
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock2} `}>100 млн. руб.</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock3} `}>2023-2024 годы</div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock4} `}>
                                Проект направлен на разведение и сохранение карачаевской породы овец. В рамках проекта будет построена ферма, оснащенная современными технологиями для эффективного управления хозяйством. Племенное хозяйство обеспечит высококачественную продукцию и сохранит генетический фонд породы.
                                </div>
                                <div className={`${classes.rajon_table__row___item} ${classes.widthBlock5} `}>60 чел.</div>
                            </div>
                        </div> */}
                        

                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">ИНВЕСТИЦИОННЫЙ УПОЛНОМОЧЕННЫЙ</H2>

                        <div className={classes.container}>
                            <div className={classes.profile}>
                                <div className={classes.profile_img}>
                                    <img src="/MO_upl_malokar.jpg" alt="Profile Image" />
                                </div>
                                <div className={classes.info}>
                                    <h2>Дотдаева Земфира Абдурашидовна</h2>

                                    <p><b>Дата рождения:</b> 06.09.1970</p>

                                    <p><b>Полное наименование должности:</b></p>
                                    <p>Начальник отдела экономического развития, торговли и муниципальных закупок</p>

                                    <p><b>Нормативный акт, содержащий сведения об утверждении в качестве инвестиционного уполномоченного:</b></p>
                                    <p>Распоряжение о назначении ответственного лица  от 01.03.2024 № 31</p>

                                    <p><b>Образование:</b> Высшее</p>
                                    <p><b>Работа в прошлом:</b> Налоговая инспекция Малокарачаевского района</p>
                                    <p><b>Государственные награды:</b> Грамоты Правительства </p>
                                    <p><b>Телефон:</b> 8 87877 22363</p>
                                    <p><b>Эл. почта:</b> <a href="mailto:esmk65@mail.ru">esmk65@mail.ru</a></p>
                                    <p><b>Официальный сайт МО:</b> <a href="https://mkarachay.ru/" target="_blank">https://mkarachay.ru/</a></p>
                                </div>
                            </div>
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>

        </>
    );
}

export default Malokarachaevskij_rajon_page;