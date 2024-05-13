import React from "react";
import Header from "../Blocks/Header/Header";
import MSP_page_block from "../Blocks/MSP_page_block/MSP_page_block";

function MSP_Page({ children, ...props }) {
    return (
        <>
            <Header color={'#fff'} position={'absolute'} />
            <MSP_page_block />
        </>
    );
}

export default MSP_Page;