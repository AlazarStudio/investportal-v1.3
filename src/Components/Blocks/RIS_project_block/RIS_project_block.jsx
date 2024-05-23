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
                description: "",
                files: [
                    { title: 'Указ Главы КЧР 236 Об инвестиционной декларации КЧР', name: "Ukaz Glavy KCHR 236 Ob investicionnoj deklaracii KCHR", path: "pdf" },
                    { title: 'РГ-1-р Об ОИВ уполномоченном на проведение мониторинга внедрения регстандарта', name: "RG-1-r Ob OIV upolnomochennom na provedenie monitoringa vnedreniya regstandarta", path: "pdf" },
                ],
            },
            development: {
                description: "",
                files: [
                    { title: 'Устав КР', name: "Ustav KR (v agenstvo razvitiya)", path: "pdf" },
                    { title: 'Устав КР КЧР от 01 11 2022', name: "Ustav KR KCHR ot 01 11 2022", path: "pdf" },
                ],
            },
            committee: {
                description: "",
                files: [
                    { title: 'Об Инвестиционном совете КЧР', name: "Ob Investicionnom sovete KCHR", path: "docx" },
                    { title: 'Агенство инсвест. комитет', name: "Agenstvo insvest komitet", path: "docx" },
                ],
            },
            map: {
                description: "",
                files: [
                    { title: 'Об утверждении Регламента ведения инвесткарты', name: "Ob utverzhdenii Reglamenta vedeniya investkarty", path: "pdf" },
                ],
            },
            rules: {
                description: "",
                files: [
                    { title: 'РГ 337-р О внедрении свода инвестиционных правил', name: "RG 337-r O vnedrenii svoda investicionnyh pravil", path: "pdf" },
                    { title: 'Алгоритм (получение участка)', name: "Algoritm (poluchenie uchastka)", path: "pdf" },
                    { title: 'Алгоритм (теплоснабжение, водоснабжение, водоотведение, дорожная инфраструктура, получение разрешений, оформление прав собственности)', name: "Algoritm (teplosnabzhenie, vodosnabzhenie, vodootvedenie, dorozhnaya infrastruktura, poluchenie razreshenij, oformlenie prav sobstvennosti)", path: "pdf" },
                    { title: 'Алгоритм (электроснабжение, газоснабжение)', name: "Algoritm (elektrosnabzhenie, gazosnabzhenie)", path: "pdf" },
                    { title: 'План-график (получение земельного участка)', name: "Plan-grafik (poluchenie zemel'nogo uchastka)", path: "pdf" },
                    { title: 'План-график (электроснабжение, газоснабжение)', name: "Plan-grafik (elektrosnabzhenie, gazosnabzhenie)", path: "pdf" },
                ],
            },
        };

        if (!content[tabId]) return <div>Выберите вкладку</div>;

        const { description, files } = content[tabId];

        return (
            <div className={classes.tabContent}>
                <p>{description}</p>

                <DocsBlock array={files} />
            </div>
        );
    };

    return (
        <>
            <ColumnBlock gap="80px">
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