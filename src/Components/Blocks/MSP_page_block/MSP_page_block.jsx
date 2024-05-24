import React from "react";
import classes from './MSP_page_block.module.css';
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import H2 from "../../Standart/H2/H2";
import Button from "../../Standart/Button/Button";

function MSP_page_block({ children, ...props }) {
    return (
        <>
            <ColumnBlock gap="80px">
                <div className={classes.msp_main}>
                    <H2 text_align='center' text_transform="uppercase" color="#fff">Инфраструктура <br /> поддержки бизнеса</H2>
                    <div className={classes.msp_main__subTitle}>
                        Правительством Карачаево-Черкесской Республики уделяется особое внимание развитию малого и среднего бизнеса и его переходу на новый качественный уровень.
                    </div>
                </div>

                <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Мой бизнес</H2>

                <div className={classes.msp_bussiness}>
                    <p></p>
                    <div className={classes.msp_bussiness__block}>
                        В рамках реализации национального проекта «Малое и среднее предпринимательство и поддержка индивидуальной предпринимательской инициативы» в республике осуществляет свою деятельность автономная некоммерческая организация «Центр «Мой бизнес» Карачаево-Черкесской Республики», которая проводит работу с потенциальными предпринимателями с целью вовлечения их в ведение предпринимательской деятельности, оказывает субъектам МСП информационно-консультационные услуги, осуществляет образовательные программы для субъектов МСП и физических лиц, а также мероприятия массового характера, направленные на стимулирование развития предпринимательства в Карачаево-Черкесии.
                    </div>
                </div>

                <CenterBlock>
                    <WidthBlock>
                        <div className={classes.msp_infoblock}>
                            Центром «Мой бизнес» Карачаево-Черкесской Республики оказываются информационно-консультационные услуги и услуги нефинансового характера (форумы, семинары, образовательные курсы и т.д.) субъектам МСП. Кроме того, субъектам МСП республики оказывается поддержка по их выходу на внешние рынки на безвозмездной основе.
                        </div>

                        <CenterBlock><Button link={'https://moibiz09.ru'} target={'_blank'} width={'350px'}>Перейти на сайт</Button></CenterBlock>

                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Гарантийный фонд поддержки предпринимательства Кчр</H2>

                        <div className={classes.msp_infoblockBG} style={{ backgroundImage: `url('/msp_garant.png')` }}>
                            <div className={classes.msp_infoblock}>
                                <div className={classes.msp_infoblock__num}>01</div>
                                <div className={classes.msp_infoblock__text}>
                                    Предоставление прочих финансовых услуг, кроме услуг по страхованию и пенсионному обеспечению, не включённых в другие группировки, включающие в себя
                                </div>
                            </div>
                            <div className={classes.msp_infoblock}>
                                <div className={classes.msp_infoblock__num}>02</div>
                                <div className={classes.msp_infoblock__text}>
                                    Предоставление поручительств по обязательствам (кредитам, займам, договорам лизинга и т.д.) малых и средних предприятий и организаций инфраструктуры поддержки малого и среднего предпринимательства
                                </div>
                            </div>
                            <div className={classes.msp_infoblock}>
                                <div className={classes.msp_infoblock__num}>03</div>
                                <div className={classes.msp_infoblock__text}>
                                    Проведение отбора банков — партнёров для участия в программе предоставления поручительств Предприятием
                                </div>
                            </div>
                        </div>

                        <CenterBlock><Button link={'https://economykchr.ru/protivodejstvie-korruptsii/910'} target={'_blank'} width={'350px'}>Перейти на сайт</Button></CenterBlock>

                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Микрокредитная компания поддержки субъектов малого и среднего предпринимательства Кчр</H2>

                        <div className={classes.msp_infoblock}>
                            Автономное учреждение Карачаево-Черкесской Республики «Микрокредитная компания поддержки субъектов малого и среднего предпринимательства Карачаево-Черкесской Республики» оказывает поддержку субъектам малого и среднего предпринимательства, зарегистрированным на территории Карачаево-Черкесской Республики в виде выдачи краткосрочных микрозаймов на срок до 36 месяцев в размере от 50 000 до 5 000 000 рублей. Процентная ставка равна ключевой ставке ЦБРФ.
                        </div>

                        <CenterBlock><Button link={'https://mckchr.ru/'} target={'_blank'} width={'350px'}>Перейти на сайт</Button></CenterBlock>

                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Малое и среднее предпринимательство и поддержка индивидуальной предпринимательской инициативы</H2>

                        <div className={classes.msp_infoblockBG} style={{ backgroundImage: `url('/msp_predprim.png')` }}>
                            <div className={classes.msp_infoblockBG__title}>
                                В рамках реализации национального проекта «Малое и среднее предпринимательство и поддержка индивидуальной предпринимательской инициативы» на территории Карачаево-Черкесской Республики реализуется 3 региональных проекта.
                            </div>

                            <div className={classes.msp_infoblock}>
                                <div className={classes.msp_infoblock__num}>01</div>
                                <div className={classes.msp_infoblock__text}>
                                    Региональный проект «Акселерация субъектов малого и среднего предпринимательства».
                                </div>
                            </div>
                            <div className={classes.msp_infoblock}>
                                <div className={classes.msp_infoblock__num}>02</div>
                                <div className={classes.msp_infoblock__text}>
                                    Региональный проект «Создание условий для легкого старта и комфортного ведения бизнеса».
                                </div>
                            </div>
                            <div className={classes.msp_infoblock}>
                                <div className={classes.msp_infoblock__num}>03</div>
                                <div className={classes.msp_infoblock__text}>
                                    Региональный проект «Создание благоприятных условий для осуществления деятельности самозанятыми гражданами»
                                </div>
                            </div>
                        </div>

                        <CenterBlock><Button link={'https://xn--90aifddrld7a.xn--p1ai/project'} target={'_blank'} width={'350px'}>Перейти на сайт</Button></CenterBlock>


                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default MSP_page_block;