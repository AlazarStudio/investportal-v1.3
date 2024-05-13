import React from "react";
import Header from "../Blocks/Header/Header";
import One_new_show_block from "../Blocks/One_new_show_block/One_new_show_block";

function News_Page({ children, ...props }) {
    return (
        <>
            <Header/>
            
            <One_new_show_block/>
        </>
    );
}

export default News_Page;