import React from "react";
import classes from './Karachaevskij_rajon_page.module.css';
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import H2 from "../../Standart/H2/H2";
import Header from "../../Blocks/Header/Header";

function Karachaevskij_rajon_page({ children, ...props }) {
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
                                <div className={classes.rajon_info__item___title}>58 км.</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>расстояние до г. Черкесска</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>31,3 тыс. чел.</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>население</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>391,3 тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>площадь территории</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>3917 тыс. га</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>сельскохозяйственные угодья</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>33.8%</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>Сенокосы</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>13%</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>Пастбища</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>15</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>населенных пунктов</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>13</div>
                                <div className={classes.rajon_info__item___line}></div>
                                <div className={classes.rajon_info__item___desc}>сельских поселений</div>
                            </div>
                            <div className={classes.rajon_info__item}>
                                <div className={classes.rajon_info__item___title}>8124 </div>
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
                                Карачаевский район обладает богатым природно-ресурсным потенциалом. В районе имеются значительные запасы полезных ископаемых, таких как золото, глины тугоплавкие, гематит, полевошпатовое сырье и каменный уголь. Район также славится своими более чем 200 источниками минеральных вод различного состава и температуры, которые по своим лечебным свойствам не уступают мировым курортам​
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
                                В Карачаевском районе активно развиваются инфраструктурные проекты. Ведется строительство линейных объектов газопровода и модернизация водопроводных сетей. Также планируется строительство и ремонт дорог, фельдшерско-акушерских пунктов и домов культуры в рамках различных государственных программ​
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
                                Карачаевский район славится своей самобытностью и богатым культурным наследием. Развитие этноэкономики, основанное на традициях и ремеслах местного населения, способствует созданию уникальных туристических продуктов и поддержке местных сообществ. В районе действуют различные культурные объекты, включая дома культуры, библиотеки и народный музей истории и культуры карачаевского народа​
                                </div>
                            </div>
                        </div>


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

export default Karachaevskij_rajon_page;