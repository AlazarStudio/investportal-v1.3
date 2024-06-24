import React from "react";
import Header from "../Blocks/Header/Header";
import MSP_block from "../Blocks/MSP_block/MSP_block";

function MSP_main_Page({ children, ...props }) {
    return (
        <>
            <Header />
            <MSP_block />
        </>
    );
}

export default MSP_main_Page;