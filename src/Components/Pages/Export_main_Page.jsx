import React from "react";
import Header from "../Blocks/Header/Header";
import Export_block from "../Blocks/Export_block/Export_block";

function Export_main_Page({ children, ...props }) {
    return (
        <>
            <Header/>
            
            <Export_block/>
        </>
    );
}

export default Export_main_Page;