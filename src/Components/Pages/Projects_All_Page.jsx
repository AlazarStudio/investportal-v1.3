import React, { useEffect } from "react";

import SlideBlock from "../Blocks/SlideBlock/SlideBlock.jsx";

import BlockWidth from "../Standart/WidthBlock/WidthBlock.jsx";
import { getProjects } from "../GetData/GetData.js"
import CenterBlock from "../Standart/CenterBlock/CenterBlock.jsx";
import LeftTitle from "../Blocks/leftTitle/LeftTitle.jsx";
import Header from "../Blocks/Header/Header.jsx";
import ColumnBlock from "../Standart/ColumnBlock/ColumnBlock.jsx";

const Projects_All_Page = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let projects = getProjects();

    return (
        <>
            <Header />

            <ColumnBlock gap={'80px'}>
                <CenterBlock>
                    <LeftTitle center={"true"} color="var(--blueColor)">Реализованные и реализуемые проекты</LeftTitle>
                </CenterBlock>

                <CenterBlock>
                    <BlockWidth wrap={"wrap"} gap={'50px'}>
                        {projects.map((item, index) => (
                            <SlideBlock
                                key={index}
                                img={`${item.img[0]}`}
                                title={item.title}
                                link={item.link}
                                text={item.text}
                            />
                        ))}
                    </BlockWidth>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
};

export default Projects_All_Page;
