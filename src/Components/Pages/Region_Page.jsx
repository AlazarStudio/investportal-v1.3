import React from "react";
import Region_page_block from "../Blocks/Region_page_block/Region_page_block";
import Header from "../Blocks/Header/Header";

function Region_Page({ children, ...props }) {
    return (
        <>
            <Header/>

            <Region_page_block />
        </>
    );
}

export default Region_Page;