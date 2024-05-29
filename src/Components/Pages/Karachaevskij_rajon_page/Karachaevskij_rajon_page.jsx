import React from "react";
import classes from './Karachaevskij_rajon_page.module.css';
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import H2 from "../../Standart/H2/H2";
import Header from "../../Blocks/Header/Header";
import useCountUp from '../../../useCountUp';

function Karachaevskij_rajon_page({ children, ...props }) {
    const [num1, ref1] = useCountUp(58, 1000);
    const [num2, ref2] = useCountUp(31.3, 1000);
    const [num3, ref3] = useCountUp(391.3, 1000);
    const [num4, ref4] = useCountUp(3917, 1000);
    const [num5, ref5] = useCountUp(33.8, 1000);
    const [num6, ref6] = useCountUp(13, 1000);
    const [num7, ref7] = useCountUp(15, 1000);
    const [num8, ref8] = useCountUp(13, 1000);
    const [num9, ref9] = useCountUp(8124, 1000);
    return (
        <>
            <Header />

            <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                Карачаевский район

                <div className={classes.rajon_subtitle}>
                    Районный центр г. Карачаевск
                </div>
            </H2>

            <div className={classes.rajon_img}>
                <img src="/karachaevsk-G-R.webp" alt="" />
            </div>

            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock>
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
                                <div className={classes.rajon_info__item___title} ref={ref4}>{num4} га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>сельскохозяйственные угодья</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref5}>{num5}%</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>Сенокосы</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title} ref={ref6}>{num6}%</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>Пастбища</div>
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
                                <div className={classes.rajon_info__item___title} ref={ref9}>{num9} </div>
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
                                    Карачаевский район имеет стратегическое расположение с хорошими транспортными связями. Расстояние до административного центра республики, города Черкесска, составляет 58 км. Также в пределах досягаемости находятся крупные города, такие как Краснодар (400 км), Ставрополь (172 км), и Ростов-на-Дону (480 км). Расстояние до ближайших государственных границ с Грузией и Абхазией составляет 3 км. На территории района находятся важные транспортные узлы, такие как ЖД Вокзал Черкесск (60 км) и аэропорт Минеральные Воды (136 км)​​.
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
                                    Карачаевский район обладает богатым природно-ресурсным потенциалом. В районе имеются значительные запасы полезных ископаемых, таких как золото, глины тугоплавкие, гематит, полевошпатовое сырье и каменный уголь. Район также славится своими более чем 200 источниками минеральных вод различного состава и температуры, которые по своим лечебным свойствам не уступают мировым курортам
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
                                    В Карачаевском районе активно развиваются инфраструктурные проекты. Ведется строительство линейных объектов газопровода и модернизация водопроводных сетей. Также планируется строительство и ремонт дорог, фельдшерско-акушерских пунктов и домов культуры в рамках различных государственных программ
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
                                    Карачаевский район имеет значительный рекреационный потенциал, обусловленный уникальным природным комплексом горных районов. Это место привлекательно для различных видов туризма и оздоровительного отдыха. В районе действуют 5 туристических баз, 4 базы отдыха и 2 альплагеря. Туризм является одной из ключевых отраслей для инвестирования и экономического роста
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
                                    Карачаевский район славится своей самобытностью и богатым культурным наследием. Развитие этноэкономики, основанное на традициях и ремеслах местного населения, способствует созданию уникальных туристических продуктов и поддержке местных сообществ. В районе действуют различные культурные объекты, включая дома культуры, библиотеки и народный музей истории и культуры карачаевского народа
                                </div>
                            </div>
                        </div>


                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">ИНВЕСТИЦИОННЫЙ УПОЛНОМОЧЕННЫЙ</H2>

                        <div className={classes.container}>
                            <div className={classes.profile}>
                                <div className={classes.profile_img}>
                                    <img src="/MO_upl_kr.png" alt="Profile Image" />
                                </div>
                                <div className={classes.info}>
                                    <h2>Хачирова Марина Руслановна</h2>

                                    <p><b>Дата рождения:</b> 12.02.1988г</p>

                                    <p><b>Полное наименование должности:</b></p>
                                    <p>Начальника отдела контрактной службы и экономического развития Администрации Карачаевского муниципального района.</p>

                                    <p><b>Нормативный акт, содержащий сведения об утверждении в качестве инвестиционного уполномоченного:</b></p>
                                    <p>Распоряжение Администрация Карачаевского муниципального района № 8-р от 02.02.2024 «О назначении инвестиционного уполномоченного»</p>

                                    <p><b>Образование:</b> Высшее
                                        1. Карачаево-Черкесский государственный университет имени У.Д. Алиева
                                    </p>
                                    <p><b>Работа в прошлом:</b> 12.2016 -05.2021 ведущий специалист Управления образования физической культуры, спорта и молодежной политики Администрации Карачаевского муниципального района.
                                        06.2021- по н/в – начальник отдела контрактной службы и экономического развития Администрации Карачаевского муниципального района.
                                    </p>
                                    <p><b>Государственные награды:</b> - </p>
                                    <p><b>Телефон:</b> 8 (87879) 21020</p>
                                    <p><b>Эл. почта:</b> <a href="mailto:Ekonrazkmr09@mail.ru">Ekonrazkmr09@mail.ru</a></p>
                                    <p><b>Официальный сайт МО:</b> <a href="https://xn----7sbaabkuzjcbf8bntim8h.xn--p1ai/" target="_blank">https://карачаевский-район.рф/</a></p>
                                </div>
                            </div>
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>

        </>
    );
}

export default Karachaevskij_rajon_page;