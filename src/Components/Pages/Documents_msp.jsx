import React from "react";
import Header from "../Blocks/Header/Header";
import Documents_msp_block from "../Blocks/Documents_msp_block/Documents_msp_block";

function Documents_Page({ children, ...props }) {
    return (
        <>
            <Header/>
            <Documents_msp_block/>
        </>
    );
}

export default Documents_Page;