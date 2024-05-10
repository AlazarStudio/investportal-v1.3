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
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                files: [
                    { name: "Документ 1", path: "doc" },
                    { name: "Презентация", path: "pdf" },

                ],
            },
            development: {
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                files: [
                    { name: "Документ 1", path: "doc" },
                    { name: "Презентация", path: "pdf" },
                    { name: "Документ 1", path: "doc" },
                    { name: "Презентация", path: "pdf" },
                ],
            },
            committee: {
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                files: [
                    { name: "Документ 1", path: "doc" },
                    { name: "Презентация", path: "pdf" },
                    { name: "Документ 1", path: "doc" },
                    { name: "Презентация", path: "pdf" },
                    { name: "Документ 1", path: "doc" },
                    { name: "Презентация", path: "pdf" },

                ],
            },
            map: {
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                files: [
                    { name: "Документ 1", path: "doc" },
                    { name: "Презентация", path: "pdf" },
                    { name: "Документ 1", path: "doc" },
                    { name: "Презентация", path: "pdf" },

                ],
            },
            rules: {
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                files: [
                    { name: "Документ 1", path: "doc" },
                    { name: "Презентация", path: "pdf" },
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