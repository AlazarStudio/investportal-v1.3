import React, { useState } from "react";
import classes from './KO_block.module.css';
import H2 from "../../Standart/H2/H2";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import DocsBlock from "../DocsBlock/DocsBlock";

function KO_block({ children, ...props }) {
    const content = {
        declaration: {
            description: "",
            files: [
                { title: 'Об-утверждении-дорожной-карты-Стандарта-кадрового-обеспечения-промышленного-роста', name: "Ob-utverzhdenii-dorozhnoj-karty-Standarta-kadrovogo-obespecheniya-promyshlennogo-rosta", path: "pdf" },
                { title: 'О-порядке-организации-кадрового-обеспечения-инвестиционных-проектов-в-КЧР', name: "O-poryadke-organizacii-kadrovogo-obespecheniya-investicionnyh-proektov-v-KCHR", path: "pdf" },
                // { title: 'О-координационном-совете-по-реализации-кадрового-обеспесения-промышленного-роста-в-КЧР', name: "O-koordinacionnom-sovete-po-realizacii-kadrovogo-obespeseniya-promyshlennogo-rosta-v-KCHR", path: "pdf" },
            ],
        },
    };

    return (
        <>
            <ColumnBlock className="InvestorColumnBlock" gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                            Кадровое обеспечение
                        </H2>

                        <DocsBlock array={content.declaration.files} />
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default KO_block;