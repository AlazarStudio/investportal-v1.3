import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Main_Page from "./Components/Pages/Main_Page";
import Region_Page from "./Components/Pages/Region_Page";
import Investor_Page from "./Components/Pages/Investor_Page";
import Investor_Info_Page from "./Components/Pages/Investor_Info_Page";
import Non_Found_Page from "./Components/Pages/Non_Found_Page";
import Layout from "./Components/Standart/Layout/Layout";
import Municipalnye_obrazovaniya_Page from "./Components/Pages/Municipalnye_obrazovaniya_Page";
import Documents_Page from "./Components/Pages/Documents_Page";
import Documents_msp from "./Components/Pages/Documents_msp";
import Documents_export from "./Components/Pages/Documents_export";
import MSP_Page from "./Components/Pages/MSP_Page";
import MSP_main_Page from "./Components/Pages/MSP_main_Page";
import Export_Page from "./Components/Pages/Export_Page";
import Export_main_Page from "./Components/Pages/Export_main_Page";
import Regionalniy_exportniy_standart_Page from "./Components/Pages/Regionalniy_exportniy_standart_Page/Regionalniy_exportniy_standart_Page";
import News_Page from "./Components/Pages/News_Page";
import One_New_Page from "./Components/Pages/One_New_Page";
import MP_Federal_Page from "./Components/Pages/MP_Federal_Page/MP_Federal_Page";
import MP_Region_Page from "./Components/Pages/MP_Region_Page/MP_Region_Page";
import MP_Organizations_Page from "./Components/Pages/MP_Organizations_Page/MP_Organizations_Page";
import Feedback_Page from "./Components/Pages/Feedback_Page/Feedback_Page";

import Projects_All_Page from "./Components/Pages/Projects_All_Page";
import Projects_One_Page from "./Components/Pages/Projects_One_Page";

import Pricubanskij_rajon_page from "./Components/Pages/Pricubanskij_rajon_page/Pricubanskij_rajon_page";
import Adygehablskij_rajon_page from "./Components/Pages/Adygehablskij_rajon_page/Adygehablskij_rajon_page";
import Abazinskij_rajon_page from "./Components/Pages/Abazinskij_rajon_page/Abazinskij_rajon_page";
import Cherkessk_page from "./Components/Pages/Cherkessk_page/Cherkessk_page";
import Karachaevsk_page from "./Components/Pages/Karachaevsk_page/Karachaevsk_page";
import Nogajskij_rajon_page from "./Components/Pages/Nogajskij_rajon_page/Nogajskij_rajon_page";
import Habezskij_rajon_page from "./Components/Pages/Habezskij_rajon_page/Habezskij_rajon_page";
import Ustdzhegutinskij_rajon_page from "./Components/Pages/Ustdzhegutinskij_rajon_page/Ustdzhegutinskij_rajon_page";
import Malokarachaevskij_rajon_page from "./Components/Pages/Malokarachaevskij_rajon_page/Malokarachaevskij_rajon_page";
import Urupskij_rajon_page from "./Components/Pages/Urupskij_rajon_page/Urupskij_rajon_page";
import Zelenchukskij_rajon_page from "./Components/Pages/Zelenchukskij_rajon_page/Zelenchukskij_rajon_page";
import Karachaevskij_rajon_page from "./Components/Pages/Karachaevskij_rajon_page/Karachaevskij_rajon_page";

import MP_Open_Page from "./Components/Pages/MP_Open_Page/MP_Open_Page";
import Block from "./Components/Pages/Block";
import Appeal from "./Components/Pages/Appeal/Appeal";
import AdminPage from "./Components/Pages/Admin/AdminPage";

function App() {
  const [isBlock, setIsBlock] = useState(false);
  return (
    <>
      <Routes>
        {isBlock && <Route index element={<Block />} />}

        {!isBlock &&
        <>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main_Page />} />
            <Route path="region" element={<Region_Page />} />
            <Route path="investor" element={<Investor_Page />} />
            <Route path="investor/:id" element={<Investor_Info_Page />} />
            <Route path="ipb" element={<MSP_Page />} />
            <Route path="msp" element={<MSP_main_Page />} />

            <Route path="federalniye_mery_podderjki" element={<MP_Federal_Page />} />
            <Route path="regionalniye_mery_podderjki" element={<MP_Region_Page />} />
            <Route path="organizations" element={<MP_Organizations_Page />} />

            <Route path="federalniye_mery_podderjki/:id" element={<MP_Open_Page />} />
            <Route path="regionalniye_mery_podderjki/:id" element={<MP_Open_Page />} />

            <Route path="export_kchr" element={<Export_Page />} />
            <Route path="export" element={<Export_main_Page />} />

            <Route path="regionalniy_exportniy_standart" element={<Regionalniy_exportniy_standart_Page />} />
            <Route path="news" element={<News_Page />} />
            <Route path="news/:id" element={<One_New_Page />} />

            <Route path="projects" element={<Projects_All_Page />} />
            <Route path="projects/:title" element={<Projects_One_Page />} />

            <Route path="municipalnye_obrazovaniya" element={<Municipalnye_obrazovaniya_Page />} />

            <Route path="municipalnye_obrazovaniya/cherkessk" element={<Cherkessk_page />} />
            <Route path="municipalnye_obrazovaniya/karachaevsk" element={<Karachaevsk_page />} />
            <Route path="municipalnye_obrazovaniya/abazinskij_rajon" element={<Abazinskij_rajon_page />} />
            <Route path="municipalnye_obrazovaniya/prikubanskij_rajon" element={<Pricubanskij_rajon_page />} />
            <Route path="municipalnye_obrazovaniya/zelenchukskij_rajon" element={<Zelenchukskij_rajon_page />} />
            <Route path="municipalnye_obrazovaniya/karachaevskij_rajon" element={<Karachaevskij_rajon_page />} />
            <Route path="municipalnye_obrazovaniya/malokarachaevskij_rajon" element={<Malokarachaevskij_rajon_page />} />
            <Route path="municipalnye_obrazovaniya/nogajskij_rajon" element={<Nogajskij_rajon_page />} />
            <Route path="municipalnye_obrazovaniya/habezskij_rajon" element={<Habezskij_rajon_page />} />
            <Route path="municipalnye_obrazovaniya/ustdzhegutinskij_rajon" element={<Ustdzhegutinskij_rajon_page />} />
            <Route path="municipalnye_obrazovaniya/adygehablskij_rajon" element={<Adygehablskij_rajon_page />} />
            <Route path="municipalnye_obrazovaniya/urupskij_rajon" element={<Urupskij_rajon_page />} />

            <Route path="documents" element={<Documents_Page />} />
            <Route path="documents_msp" element={<Documents_msp />} />

            <Route path="feedback" element={<Feedback_Page />} />
            <Route path="appeal" element={<Appeal />} />
            {/* <Route path="documents_export" element={<Documents_export />} /> */}
            <Route path="*" element={<Non_Found_Page />} />
          </Route>
					<Route path='/admin/*' element={<AdminPage />} />

        </>
        }

        {isBlock && <Route path="*" element={<Block />} />}
      </Routes>
    </>
  )
}

export default App
