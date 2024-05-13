import React from "react";
import Header from "../Blocks/Header/Header";
import News_page_block from "../Blocks/News_page_block/News_page_block";

function News_Page({ children, ...props }) {
    return (
        <>
            <Header/>
            
            <News_page_block/>
        </>
    );
}

export default News_Page;