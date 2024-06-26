import React from "react";
import classes from './Nogajskij_rajon_page.module.css';
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import H2 from "../../Standart/H2/H2";
import Header from "../../Blocks/Header/Header";
import useCountUp from '../../../useCountUp';

function Nogajskij_rajon_page({ children, ...props }) {
    const [num1, ref1] = useCountUp(26, 1000);
    const [num2, ref2] = useCountUp(15.4, 1000);
    const [num3, ref3] = useCountUp(210.8, 1000);
    const [num4, ref4] = useCountUp(15.7, 1000);
    const [num5, ref5] = useCountUp(11, 4, 1000);
    const [num6, ref6] = useCountUp(0.7, 1000);
    const [num7, ref7] = useCountUp(2.6, 1000);
    const [num8, ref8] = useCountUp(0.5, 1000);
    const [num9, ref9] = useCountUp(5, 1000);
    const [num10, ref10] = useCountUp(5, 1000);
    const [num11, ref11] = useCountUp(86, 1000);
    return (
        <>
            <Header />

            <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                Ногайский район

                <div className={classes.rajon_subtitle}>
                    Районный центр п. Эркен-Шахар
                </div>
            </H2>

            <div className={classes.rajon_img}>
                <img src="/N-R.webp" alt="" />
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
                                <div className={classes.rajon_info__item___desc}>сельских поселений</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref11}>{num11}</div>
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
                                    Ногайский район активно работает над улучшением инвестиционного климата и привлечением инвесторов. Основные меры включают:<br /><br />
                                    Предоставление земельных участков на основе долгосрочных договоров аренды.<br />
                                    Обеспечение прямой связи с руководством муниципального района для решения сложных вопросов.<br />
                                    Гарантии сохранности инвестиций и создание комфортных условий для инвесторов.<br />
                                    Функционирование «Многофункционального центра предоставления государственных и муниципальных услуг».
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
                                    Ногайский район обладает значительными природными ресурсами:<br />
                                    <br />
                                    Черноземные почвы, подходящие для сельского хозяйства.<br />
                                    Природные условия способствуют развитию сельского хозяйства, включая животноводство, птицеводство и растениеводство.<br />
                                    Добыча песчано-гравийной смеси, садоводство и разведение мальков также являются значимыми ресурсами района .
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
                                    Инфраструктура района включает:<br />
                                    <br />
                                    Развитую сеть транспортных путей, включая железнодорожные станции и автодороги.<br />
                                    Доступность крупных городов и экономических центров (Черкесск, Ставрополь, Краснодар) .<br />
                                    Обеспеченность коммунальными услугами, такими как водоснабжение и газификация .
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
                                    Информация о развитии индустрии гостеприимства и туризма в документе отсутствует. Однако, район имеет потенциал для развития туристической инфраструктуры благодаря природным и культурным ресурсам.
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
                                    Район богат историческими и культурными ресурсами, что создает возможности для развития этноэкономики:<br />
                                    <br />
                                    В Ногайском районе проживают трудолюбивые и талантливые люди, что способствует развитию местного бизнеса и сохранению культурного наследия.<br />
                                    Развитие сельского хозяйства и производство местной продукции также являются важными аспектами этноэкономики .
                                </div>
                            </div>
                        </div>

                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">ГЛАВА МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ </H2>

                        <div className={classes.container}>
                            <div className={classes.profile}>
                                <div className={classes.profile_img}>
                                    <img src="/no_photo.png" alt="Profile Image" />
                                </div>
                                <div className={classes.info}>
                                    <h2> Хапиштов Мурат Азаматович </h2>

                                    <p><b>Полное наименование должности:</b></p>
                                    <p> Глава администрации </p>

                                    <p><b>Телефон:</b> 8(87870)5-39-09 </p>
                                    <p><b>Эл. почта:</b> noghayski_rayon@mail.ru </p>

                                </div>
                            </div>
                        </div>


                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">ИНВЕСТИЦИОННЫЙ УПОЛНОМОЧЕННЫЙ</H2>

                        <div className={classes.container}>
                            <div className={classes.profile}>
                                <div className={classes.profile_img}>
                                    <img src="/no_photo.png" alt="Profile Image" />
                                </div>
                                <div className={classes.info}>
                                    <h2>Огурлиева Лиана Мурадиновна</h2>

                                    <p><b>Дата рождения:</b> 29.08.1974</p>

                                    <p><b>Полное наименование должности:</b></p>
                                    <p>начальник отдела экономического анализа и муниципального имущества</p>

                                    <p><b>Нормативный акт, содержащий сведения об утверждении в качестве инвестиционного уполномоченного:</b></p>
                                    <p>Постановление от 28.12.2023 №771 «О назначении инвестиционного уполномоченного и утверждении Положения об инвестиционном уполномоченном в Ногайском муниципальном районе»</p>

                                    <p><b>Образование:</b> Высшее</p>
                                    <p><b>Работа в прошлом:</b> Заместитель главы Эркен-Шахарского сельского поселения</p>
                                    <p><b>Государственные награды:</b> Почетная грамота Народного Собрания (Парламента)</p>
                                    <p><b>Телефон:</b> 8-922-764-34-30</p>
                                    <p><b>Эл. почта:</b> <a href="mailto:econom_otdel_nr@mail.ru">econom_otdel_nr@mail.ru</a></p>
                                    <p><b>Официальный сайт МО:</b> <a href="https://noghay-rayon.ru/" target="_blank">https://noghay-rayon.ru/</a></p>
                                </div>
                            </div>
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>

        </>
    );
}

export default Nogajskij_rajon_page;