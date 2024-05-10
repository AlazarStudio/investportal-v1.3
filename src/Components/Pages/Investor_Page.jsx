import React from "react";
import Investor_block from "../Blocks/Investor_block/Investor_block";
import Header from "../Blocks/Header/Header";

function Main_Page({ children, ...props }) {
    return (
        <>
            <Header/>
            
            <Investor_block/>
        </>
    );
}

export default Main_Page;