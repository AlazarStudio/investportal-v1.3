import React from "react";
import Header from "../Blocks/Header/Header";
import Municipalnye_obrazovaniya_block from "../Blocks/Municipalnye_obrazovaniya_block/Municipalnye_obrazovaniya_block";

function Municipalnye_obrazovaniya_Page({ children, ...props }) {
    return (
        <>
            <Header/>
            
            <Municipalnye_obrazovaniya_block/>
        </>
    );
}

export default Municipalnye_obrazovaniya_Page;