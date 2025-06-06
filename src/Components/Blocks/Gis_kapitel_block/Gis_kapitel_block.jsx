import React, { useState } from "react";
import classes from './Gis_kapitel_block.module.css';
import H2 from "../../Standart/H2/H2";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import DocsBlock from "../DocsBlock/DocsBlock";

function Gis_kapitel_block({ children, ...props }) {
    const content = {
        declaration: {
            description: "",
            files: [
                { title: 'презентация СЗПК', name: "prezentaciya SZPK", path: "pdf" },
                { title: 'распоряжение № 107-р Об утверждении перечня законов и иных НПА (стабилизационная оговорка) по СЗПК', name: "rasporyazhenie_No_107_r_Ob_utverzhdenii_perechnya_zakonov_i_inyh_NPA_(stabilizacionnaya_ogovorka)_po_SZPK", path: "pdf" },
                { title: 'ПП КЧР от 24.05.2023 № 114 Об утверждении порядка возмещения СЗПК', name: "PP_KCHR_ot_24.05.2023_No_114_Ob_utverzhdenii_poryadka_vozmeshcheniya_SZPK", path: "pdf" },
                { title: 'ПП КЧР от 27.07.2022 № 208 О мерах по реализации некоторых постановлений Правительства РФ (НИП)', name: "PP_KCHR_ot_27.07.2022_No_208_O_merah_po_realizacii_nekotoryh_postanovlenij_Pravitelstva_RF_(NIP)", path: "pdf" },
                { title: '117-РЗ по СЗПК', name: "117-RZ po SZPK", path: "docx" },
                { title: 'Клиентский путь', name: "Klientskij put'", path: "pdf" },
                { title: 'ПП КЧР 265 Об утверждении формы декларации СЗПК', name: "PP KCHR 265 Ob utverzhdenii formy deklaracii SZPK", path: "pdf" },
                { title: 'ПП КЧР 309 Об утверждении порядка мониторинга СЗПК', name: "PP KCHR 309 Ob utverzhdenii poryadka monitoringa SZPK", path: "pdf" },
                { title: 'ПП КЧР 336 О порядке оценки инвестиционного проекта в отношении которого планируется СЗПК', name: "PP KCHR 336 O poryadke ocenki investicionnogo proekta v otnoshenii kotorogo planiruetsya SZPK", path: "pdf" },
                { title: 'ПП КЧР от 23.11.2022 № 335 О порядке заключения СЗПК', name: "PP_KCHR_ot_23.11.2022_No_335_O_poryadke_zaklyucheniya_SZPK", path: "pdf" },
            ],
        },
    };

    return (
        <>
            <ColumnBlock className="InvestorColumnBlock" gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                            ГИС «Капиталовложения»
                        </H2>

                        <DocsBlock array={content.declaration.files} />
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default Gis_kapitel_block;