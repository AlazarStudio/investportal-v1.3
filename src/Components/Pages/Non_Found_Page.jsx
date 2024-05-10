import React from "react";
import Header from "../Blocks/Header/Header";
import CenterBlock from "../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../Standart/WidthBlock/WidthBlock";
import H2 from "../Standart/H2/H2";

function Non_Found_Page({ children, ...props }) {
    return (
        <>
            <Header />

            <CenterBlock>
                <WidthBlock>
                    <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)" padding={'20px 0'}>Страница не найдена</H2>
                </WidthBlock>
            </CenterBlock>
        </>
    );
}

export default Non_Found_Page;