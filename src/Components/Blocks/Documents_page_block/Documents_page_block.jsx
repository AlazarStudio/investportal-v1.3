import React from "react";
import classes from './Documents_page_block.module.css';
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import H2 from "../../Standart/H2/H2";
import DocsBlock from "../DocsBlock/DocsBlock";

function Documents_page_block({ children, ...props }) {
    const getContent = (tabId) => {
        const content = {
            data: {
                files: [
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
                    { name: "ПОСТАНОВЛЕНИЕ АДМИНИСТРАЦИИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР ОТ 30 МАЯ 2016 ГОДА № 2183 «О ПОРЯДКЕ ОПРЕДЕЛЕНИЯ РАЗМЕРА АРЕНДНОЙ ПЛАТЫ ЗА ЗЕМЕЛЬНЫЕ УЧАСТКИ, НАХОДЯЩИЕСЯ В МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТИ МУНИЦИПАЛЬНОГО ОБРАЗОВАНИЯ ГОРОД КРАСНОДАР, ПРЕДОСТАВЛЕННЫЕ В АРЕНДУ БЕЗ ТОРГОВ»", path: "doc" },
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
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Документы</H2>

                        <div className="docsShowBlock">
                            {getContent('data')}
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default Documents_page_block;