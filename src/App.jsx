import React from "react";
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
import Pricubanskij_rajon_page from "./Components/Pages/Pricubanskij_rajon_page/Pricubanskij_rajon_page";
import MSP_Page from "./Components/Pages/MSP_Page";
import Export_Page from "./Components/Pages/Export_Page";
import Regionalniy_exportniy_standart_Page from "./Components/Pages/Regionalniy_exportniy_standart_Page/Regionalniy_exportniy_standart_Page";
import News_Page from "./Components/Pages/News_Page";
import One_New_Page from "./Components/Pages/One_New_Page";
import MP_Federal_Page from "./Components/Pages/MP_Federal_Page/MP_Federal_Page";
import MP_Region_Page from "./Components/Pages/MP_Region_Page/MP_Region_Page";

import Projects_All_Page from "./Components/Pages/Projects_All_Page";
import Projects_One_Page from "./Components/Pages/Projects_One_Page";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main_Page />} />
          <Route path="region" element={<Region_Page />} />
          <Route path="investor" element={<Investor_Page />} />
          <Route path="investor/:id" element={<Investor_Info_Page />} />
          <Route path="msp" element={<MSP_Page />} />
          <Route path="federalniye_mery_podderjki" element={<MP_Federal_Page />} />
          <Route path="regionalniye_mery_podderjki" element={<MP_Region_Page />} />
          <Route path="export" element={<Export_Page />} />
          <Route path="regionalniy_exportniy_standart" element={<Regionalniy_exportniy_standart_Page />} />
          <Route path="news" element={<News_Page />} />
          <Route path="news/:id" element={<One_New_Page />} />

          <Route path="projects" element={<Projects_All_Page />} />
          <Route path="projects/:title" element={<Projects_One_Page />} />

          <Route path="municipalnye_obrazovaniya" element={<Municipalnye_obrazovaniya_Page />} />
          <Route path="municipalnye_obrazovaniya/prikubanskij_rajon" element={<Pricubanskij_rajon_page />} />
          <Route path="municipalnye_obrazovaniya/adygehablskij_rajon" element={<Pricubanskij_rajon_page />} />
          <Route path="municipalnye_obrazovaniya/abazinskij_rajon" element={<Pricubanskij_rajon_page />} />
          <Route path="municipalnye_obrazovaniya/cherkessk" element={<Pricubanskij_rajon_page />} />
          <Route path="municipalnye_obrazovaniya/karachaevsk" element={<Pricubanskij_rajon_page />} />
          <Route path="municipalnye_obrazovaniya/nogajskij_rajon" element={<Pricubanskij_rajon_page />} />
          <Route path="municipalnye_obrazovaniya/habezskij_rajon" element={<Pricubanskij_rajon_page />} />
          <Route path="municipalnye_obrazovaniya/ustdzhegutinskij_rajon" element={<Pricubanskij_rajon_page />} />
          <Route path="municipalnye_obrazovaniya/malokarachaevskij_rajon" element={<Pricubanskij_rajon_page />} />
          <Route path="municipalnye_obrazovaniya/urupskij_rajon" element={<Pricubanskij_rajon_page />} />
          <Route path="municipalnye_obrazovaniya/zelenchukskij_rajon" element={<Pricubanskij_rajon_page />} />
          <Route path="municipalnye_obrazovaniya/karachaevskij_rajon" element={<Pricubanskij_rajon_page />} />
          <Route path="documents" element={<Documents_Page />} />
          <Route path="documents_msp" element={<Documents_msp />} />
          {/* <Route path="documents_export" element={<Documents_export />} /> */}
          <Route path="*" element={<Non_Found_Page />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
