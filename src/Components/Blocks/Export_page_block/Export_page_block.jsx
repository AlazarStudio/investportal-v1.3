import React from "react";
import classes from './Export_page_block.module.css';
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import H2 from "../../Standart/H2/H2";
import DocsBlock from "../DocsBlock/DocsBlock";

function Export_page_block({ children, ...props }) {

    const getContent = (tabId) => {
        const content = {
            data: {
                files: [
                    { title: 'Центр поддержки экспорта', name: "Centr podderzhki eksporta", path: "docx" },
                    { title: 'Распоряжение 347р Об утверждении состава управленческой команды по развитию экспорта в КЧР', name: "Rasporyazhenie 347r Ob utverzhdenii sostava upravlencheskoj komandy po razvitiyu eksporta v KCHR", path: "pdf" },
                    { title: 'Региональная программа развития экспортной деятельности в КЧР', name: "Regionalnaya programma razvitiya eksportnoj deyatelnochti v KCHR", path: "pdf" },
                    { title: 'Стратегия социально-экономического развития КЧР до 2035 г', name: "Strategiya socialno-ekonomicheskogo razvitiya KCHR do 2035 g", path: "pdf" },
                ],
            },
        };

        const { description, files } = content[tabId];

        return (
            <div className={classes.tabContent}>
                <DocsBlock array={files} />
            </div>
        );
    };
    return (
        <>
            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Экспорт в кчр</H2>

                        <div className={classes.export_img}>
                            <img src="/export.png" alt="" />
                        </div>

                        <div className={classes.export_info}>
                            <div className={classes.export_info__left}>
                                На территории региона в целях поддержки экспортно ориентированных субъектов малого и среднего предпринимательства Карачаево-Черкесской Республики осуществляет свою работу Центр поддержки экспорта Карачаево-Черкесской Республики (далее – Центр).
                                <br />
                                Центр оказывает комплекс услуг, начиная с консультирования по условиям экспорта товара на рынок, и заканчивая заключением экспортного контракта,
                                а также включает в себя такие услуги, как содействие в поиске иностранного покупателя, организация и проведение международных и межрегиональных бизнес-миссий, содействие в организации и осуществлении транспортировки продукции субъектов малого и среднего предпринимательства, предназначенной для экспорта на внешние рынки, содействие в размещении на международных электронных торговых площадках и многие другие. Благодаря работе Центра экспортеры Карачаево-Черкесской Республики решают актуальные вопросы по экспортной деятельности, обмениваются опытом создания и реализации успешных проектов, обсуждают трудности, с которыми сталкивается бизнес при выходе на зарубежные рынки, и что немаловажно могут предложить рынку товары, оптимальные
                                по соотношению цена/качество.
                            </div>
                            <div className={classes.export_info__right}>
                                <div className={classes.export_info__right___item}>
                                    <div className={classes.export_info__right___item____img}>
                                        <img src="/phone.png" alt="" />
                                    </div>
                                    <div className={classes.export_info__right___item____info}>
                                        <div className={classes.export_info__right___item____info______title}>Телефон</div>
                                        <div className={classes.export_info__right___item____info______desc}>+78782250227</div>
                                    </div>
                                </div>
                                <div className={classes.export_info__right___item}>
                                    <div className={classes.export_info__right___item____img}>
                                        <img src="/mail.png" alt="" />
                                    </div>
                                    <div className={classes.export_info__right___item____info}>
                                        <div className={classes.export_info__right___item____info______title}>Электронная почта</div>
                                        <div className={classes.export_info__right___item____info______desc}>exportkchr@gmail.com</div>
                                    </div>
                                </div>
                                <div className={classes.export_info__right___item}>
                                    <div className={classes.export_info__right___item____img}>
                                        <img src="/place.png" alt="" />
                                    </div>
                                    <div className={classes.export_info__right___item____info}>
                                        <div className={classes.export_info__right___item____info______title}>Сайт</div>
                                        <div className={classes.export_info__right___item____info______desc}>https://exportkchr.com/</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="docsShowBlock">
                            {getContent('data')}
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default Export_page_block;