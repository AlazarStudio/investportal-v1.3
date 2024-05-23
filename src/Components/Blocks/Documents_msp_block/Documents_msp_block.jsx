import React from "react";
import classes from './Documents_msp_block.module.css';
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import H2 from "../../Standart/H2/H2";
import DocsBlock from "../DocsBlock/DocsBlock";

function Documents_msp_block({ children, ...props }) {
    const getContent = (tabId) => {
        const content = {
            data: {
                files: [
                    { title: 'Федеральный закон от 26 декабря 2008 года № 294-ФЗ', name: "Federalnyj zakon ot 26 dekabrya 2008 goda № 294-F", path: "docx" },

                    { title: 'Федеральный закон от 24 июля 2007 г. N 209-ФЗ', name: "Federal'nyj zakon ot 24 iyulya 2007 g. N 209-FZ", path: "docx" },

                    { title: 'ПЕРЕЧЕНЬ документов для признания субъекта МСП социальным', name: "PERECHEN' dokumentov dlya priznaniya subekta MSP social'nym", path: "pdf" },
                    { title: 'Приказ № 149 Овнесении изменений в Приказ 773', name: "Prikaz № 149 Ovnesenii izmenenij v Prikaz 773", path: "pdf" },
                    { title: 'Приказ Минэкономразвития', name: "Prikaz Minekonomrazvitiya", path: "pdf" },
                    { title: 'Социальное предприятие', name: "Social'noe predpriyatie", path: "docx" },
                    { title: 'Формы', name: "Formy", path: "docx" },

                    { title: 'Постановление Правительства РФ от 16.07.2009 N 584', name: "Postanovlenie Pravitel'stva RF ot 16.07.2009 N 584", path: "docx" },

                    { title: 'Стратегия развития малого и среднего предпринимательства в Российской Федерации на период до 2030 года', name: "Strategiya razvitiya malogo i srednego predprinimatel'stva v Rossijskoj Federacii na period do 2030 goda", path: "pdf" },
                    { title: 'стратегия развития МСП', name: "strategiya razvitiya MSP", path: "docx" },
                    { title: 'МСП', name: "MSP", path: "docx" },
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
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Документы МСП</H2>

                        <div className="docsShowBlock">
                            {getContent('data')}
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default Documents_msp_block;