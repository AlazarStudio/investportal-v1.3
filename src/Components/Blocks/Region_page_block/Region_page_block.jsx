import React from "react";
import classes from './Region_page_block.module.css';
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import H2 from "../../Standart/H2/H2";
import Button from "../../Standart/Button/Button";

function Region_page_block({ children, ...props }) {
    return (
        <>
            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock>

                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Ресурсы</H2>

                        <CenterBlock>
                            <Button>Все проекты</Button>
                        </CenterBlock>

                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default Region_page_block;