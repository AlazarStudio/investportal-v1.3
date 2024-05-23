import React, { useState } from "react";
import classes from './Documents_block.module.css';
import H2 from "../../Standart/H2/H2";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import DocsBlock from "../DocsBlock/DocsBlock";

function Documents_block({ children, ...props }) {
    const content = {
        declaration: {
            description: "",
            files: [
                { title: 'ПП КЧР от 24.05.2023 № 114 Об утверждении порядка возмещения СЗПК', name: "PP KCHR ot 24.05.2023 № 114 Ob utverzhdenii poryadka vozmeshcheniya SZPK", path: "pdf" },
                { title: 'ПП КЧР от 27.07.2022 № 208 О мерах по реализации некоторых постановлений Правительства РФ (НИП)', name: "PP KCHR ot 27.07.2022 № 208 O merah po realizacii nekotoryh postanovlenij Pravitel'stva RF (NIP)", path: "pdf" },
                { title: 'РГ 337-р О внедрении свода инвестиционных правил', name: "RG 337-r O vnedrenii svoda investicionnyh pravil", path: "pdf" },
                { title: 'РЕЕСТР инвестиционных соглашений 2024', name: "REESTR investicionnyh soglashenij 2024", path: "docx" },
                { title: 'РП КЧР 432-р О внесении сведений в систему ГАС Управление', name: "RP KCHR 432-r O vnesenii svedenij v sistemu GAS Upravlenie", path: "pdf" },
                { title: '23-РЗ О госстимулировании инвестиционной деятельности в КЧР', name: "23-RZ O gosstimulirovanii investicionnoj deyatel'nosti v KCHR", path: "docx" },
                { title: 'Закон КЧР № 117-РЗ Об отдельных вопросах в сфере защиты и поощрении капиталовложений', name: "Zakon KCHR № 117-RZ Ob otdel'nyh voprosah v sfere zashchity i pooshchrenii kapitalovlozhenij", path: "docx" },
                { title: 'Об Инвестиционном совете КЧР', name: "Ob Investicionnom sovete KCHR", path: "docx" },
                { title: 'Об утверждении инвестиционного плана Карачаево-Черкесской Республики на 2023 год', name: "Ob utverzhdenii investicionnogo plana Karachaevo-CHerkesskoj Respubliki na 2023 god", path: "pdf" },
                { title: 'Об утверждении перечня объектов, которые могут быть переданы в концессию, ГЧП', name: "Ob utverzhdenii perechnya obektov, kotorye mogut byt peredany v koncessiyu, GCHP", path: "pdf" },
                { title: 'Об экспертном совете КЧР', name: "Ob ekspertnom sovete KCHR", path: "docx" },
                { title: 'ПП КЧР 265 Об утверждении формы декларации СЗПК', name: "PP KCHR 265 Ob utverzhdenii formy deklaracii SZPK", path: "pdf" },
                { title: 'ПП КЧР 290 Об утверждении плана импортозамещения', name: "PP KCHR 290 Ob utverzhdenii plana importozameshcheniya", path: "pdf" },
                { title: 'ПП КЧР 309 Об утверждении порядка мониторинга СЗПК', name: "PP KCHR 309 Ob utverzhdenii poryadka monitoringa SZPK", path: "pdf" },
                { title: 'ПП КЧР 336 О порядке оценки инвестиционного проекта в отношении которого планируется СЗПК', name: "PP KCHR 336 O poryadke ocenki investicionnogo proekta v otnoshenii kotorogo planiruetsya SZPK", path: "pdf" },
                { title: 'ПП КЧР О мерах по реализации 115-ФЗ от 18.05.2022 №135', name: "PP KCHR O merah po realizacii 115-FZ ot 18.05.2022 №135", path: "pdf" },
                { title: 'ПП КЧР от 23.11.2022 № 335 О порядке заключения СЗПК', name: "PP KCHR ot 23.11.2022 № 335 O poryadke zaklyucheniya SZPK", path: "pdf" },
            ],
        },
    };

    return (
        <>
            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                            Документы
                        </H2>

                        <DocsBlock array={content.declaration.files} />
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default Documents_block;