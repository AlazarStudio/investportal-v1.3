import React, { useState } from "react";
import classes from './RIS_project_block.module.css';
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import H2 from "../../Standart/H2/H2";
import DocsBlock from "../DocsBlock/DocsBlock";

function RIS_project_block({ children, ...props }) {
    const [activeTab, setActiveTab] = useState('declaration');

    const tabs = [
        { id: 'declaration', title: 'ИНВЕСТИЦИОННАЯ ДЕКЛАРАЦИЯ' },
        { id: 'development', title: 'Агентство инвестиционного развития' },
        { id: 'committee', title: 'ИНВЕСТИЦИОННЫЙ КОМИТЕТ' },
        { id: 'map', title: 'ИНВЕСТИЦИОННАЯ КАРТА' },
        { id: 'rules', title: 'СВОД ИНВЕСТИЦИОННЫХ ПРАВИЛ' }
    ];

    const getContent = (tabId) => {
        const content = {
            declaration: {
                description: `
                <p>
                Инвестиционная декларация Карачаево-Черкесской Республики утверждена указом Главы Карачаево-Черкесской Республики от 21 ноября 2022 года № 236 «Об утверждении инвестиционной декларации Карачаево-Черкесской Республики».
                </p><p>
                Инвестиционная декларация Карачаево-Черкесской Республики устанавливает основные принципы взаимодействия органов исполнительной власти Карачаево-Черкесской Республики с субъектами предпринимательской и инвестиционной деятельности, гарантии безопасности ведения предпринимательской и инвестиционной деятельности, соблюдения и защиты прав инвесторов на территории Карачаево-Черкесской Республики, инвестиционные обязательства Карачаево-Черкесской Республики.
                </p><p>
                Декларация разработана с целью создания условий для опережающего развития Карачаево-Черкесской Республики, достижения национальных целей развития Российской Федерации, утвержденных Указом Президента Российской Федерации от 21.07.2020 N 474 "О национальных целях развития Российской Федерации на период до 2030 года".
                </p><p>
                Главной целью инвестиционного развития Карачаево-Черкесской Республики является увеличение реального роста инвестиций в основной капитал в качестве вклада в достижение национальной цели развития на 70% до 2030 года по сравнению с 2020 годом.
                </p><p>
                Важными инструментами для достижения главной стратегической цели развития Карачаево-Черкесской Республики являются:
                <p>- повышение инвестиционной привлекательности региона;</p>
                <p>- совершенствование нормативно-правовой базы, регулирующей инвестиционную деятельность;</p>
                <p>- повышение эффективности использования мер государственной поддержки инвестиционной деятельности;</p>
                <p>- информационная поддержка инвестиционной деятельности.</p>
                </p>
                `,
                files: [
                    { title: 'Инвестиционная декларация', name: "invest deklaratsia", path: "pdf" },
                    // { title: 'Указ Главы КЧР 236 Об инвестиционной декларации КЧР', name: "Ukaz Glavy KCHR 236 Ob investicionnoj deklaracii KCHR", path: "pdf" },
                    // { title: 'РГ-1-р Об ОИВ уполномоченном на проведение мониторинга внедрения регстандарта', name: "RG-1-r Ob OIV upolnomochennom na provedenie monitoringa vnedreniya regstandarta", path: "pdf" },
                ],
            },
            development: {
                description: `
                <p>
                В соответствии с Указом Главы Карачаево-Черкесской Республики от 12 февраля 2024 года № 22 «О внесении изменений в Указ Главы Карачаево-Черкесской Республики от 4 июля 2023 года № 113 «Об определении уполномоченного по формированию и ведению инвестиционной карты Карачаево-Черкесской Республики» функции регионального агентства инвестиционного развития выполняет АО «Корпорация развития Карачаево-Черкесской Республики».
                </p><p>
                Ключевые задачи АО «Корпорация развития Карачаево-Черкесской Республики»:
                </p><p>
                - функционирование в режиме «одного окна» для инвесторов;
                </p><p>
                - обеспечение взаимодействия инвесторов и органов государственной власти;
                </p><p>
                - комплексное сопровождение реализации инвестиционных проектов;
                </p><p>
                - содействие в поиске свободных инвестиционных площадок;
                </p><p>
                - привлечение инвесторов для реализации инвестиционных проектов.
                </p><p>
                Генеральный директор АО «Корпорация развития Карачаево-Черкесской Республики» - Батдыев Марат Мустафаевич.    
                </p>     
                <img src="/agenstvo_razvitia.png" alt=""/>       
                `,
                files: [
                    { title: 'Устав КР', name: "Ustav KR (v agenstvo razvitiya)", path: "pdf" },
                    // { title: 'Устав КР', name: "Ustav KR (v agenstvo razvitiya)", path: "pdf" },
                    // { title: 'Устав КР КЧР от 01 11 2022', name: "Ustav KR KCHR ot 01 11 2022", path: "pdf" },
                ],
            },
            committee: {
                description: `
                <p>На постоянной основе в КЧР функционирует коллегиальный консультативный орган, образованный в целях содействия созданию благоприятного инвестиционного климата, обеспечению стабильных условий осуществления инвестиционной деятельности на территории КЧР - Инвестиционный совет КЧР, действующий на основании Указа Главы КЧР от 22 октября 2013 года № 245 «Об Инвестиционном совете КЧР».
                </p>
                <p>
                Cовет функционирует под председательством Главы Карачаево-Черкесской Республики Р.Б. Темрезова и является постоянно действующим коллегиальным консультативным органом, обеспечивающим оперативное решение проблем и споров в сфере инвестиционной деятельности.
                </p>
                <img src="/invest_commitet.png" alt="" />
                `,
                files: [
                    // { title: 'Об Инвестиционном совете КЧР', name: "Ob Investicionnom sovete KCHR", path: "docx" },
                    // { title: 'Агенство инсвест. комитет', name: "Agenstvo insvest komitet", path: "docx" },
                ],
            },
            map: {
                description: `
                    <img src="/map.jpg" alt="" />
                `,
                files: [
                    // { title: 'Об утверждении Регламента ведения инвесткарты', name: "Ob utverzhdenii Reglamenta vedeniya investkarty", path: "pdf" },
                ],
            },
            rules: {
                description: `
                    <img src="/invest-rules.jpg" alt="" />
                `,
                files: [
                    // { title: 'РГ 337-р О внедрении свода инвестиционных правил', name: "RG 337-r O vnedrenii svoda investicionnyh pravil", path: "pdf" },
                    // { title: 'Алгоритм (получение участка)', name: "Algoritm (poluchenie uchastka)", path: "pdf" },
                    // { title: 'Алгоритм (теплоснабжение, водоснабжение, водоотведение, дорожная инфраструктура, получение разрешений, оформление прав собственности)', name: "Algoritm (teplosnabzhenie, vodosnabzhenie, vodootvedenie, dorozhnaya infrastruktura, poluchenie razreshenij, oformlenie prav sobstvennosti)", path: "pdf" },
                    // { title: 'Алгоритм (электроснабжение, газоснабжение)', name: "Algoritm (elektrosnabzhenie, gazosnabzhenie)", path: "pdf" },
                    // { title: 'План-график (получение земельного участка)', name: "Plan-grafik (poluchenie zemel'nogo uchastka)", path: "pdf" },
                    // { title: 'План-график (электроснабжение, газоснабжение)', name: "Plan-grafik (elektrosnabzhenie, gazosnabzhenie)", path: "pdf" },
                ],
            },
        };

        if (!content[tabId]) return <div>Выберите вкладку</div>;

        const { description, files } = content[tabId];

        return (
            <div className={classes.tabContent}>
                <p dangerouslySetInnerHTML={{ __html: description }}></p>

                <DocsBlock array={files} />
            </div>
        );
    };

    return (
        <>
            <ColumnBlock className="InvestorColumnBlock" gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Региональный инвестиционный стандарт</H2>

                        <div className={classes.docsTab}>
                            {tabs.map(tab => (
                                <div key={tab.id}
                                    className={`${classes.docsTab_item} ${activeTab === tab.id ? classes.activeTab_item : ''}`}
                                    onClick={() => setActiveTab(tab.id)}>
                                    <div className={classes.docsTab_item__title}>
                                        {tab.title}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="docsShowBlock">
                            {getContent(activeTab)}
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default RIS_project_block;