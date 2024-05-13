import React from "react";
import Header from "../Blocks/Header/Header";
import Export_page_block from "../Blocks/Export_page_block/Export_page_block";

function Export_Page({ children, ...props }) {
    return (
        <>
            <Header/>
            
            <Export_page_block/>
        </>
    );
}

export default Export_Page;