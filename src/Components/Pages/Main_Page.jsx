import React from "react";
import Main_page_block from "../Blocks/Main_page_block/Main_page_block";
import Header from "../Blocks/Header/Header";

function Main_Page({ children, ...props }) {
    return (
        <>
            <Header color={'#fff'} position={'absolute'}/>

            <Main_page_block />
        </>
    );
}

export default Main_Page;