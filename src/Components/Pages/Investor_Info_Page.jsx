import React from "react";
import Header from "../Blocks/Header/Header";
import { useParams } from "react-router-dom";
import Invest_pojects_block from "../Blocks/Invest_pojects_block/Invest_pojects_block";
import RIS_project_block from "../Blocks/RIS_project_block/RIS_project_block";
import Mech_project_block from "../Blocks/Mech_project_block/Mech_project_block";
import Gis_kapitel_block from "../Blocks/Gis_kapitel_block/Gis_kapitel_block";

function Investor_Info_Page({ children, ...props }) {
    let { id } = useParams();
    return (
        <>
            <Header />

            {id == 'investicionnye_proekty' ? <Invest_pojects_block /> : null}
            {id == 'regionalnyj_investicionnyj_standart' ? <RIS_project_block /> : null}
            {id == 'dejstvuyushchie_mekhanizmy_gosudarstvennogo_stimulirovaniya_investicionnoj_deyatelnosti' ? <Mech_project_block /> : null}
            {id == 'gis_kapitalovlozheniya' ? <Gis_kapitel_block /> : null}
            {/* {id == 'kadrovoe_obespechenie' ? <With_title /> : null} */}
            {/* {id == 'dokuments' ? <With_title /> : null} */}
        </>
    );
}

export default Investor_Info_Page;