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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main_Page />} />
          <Route path="region" element={<Region_Page />} />
          <Route path="investor" element={<Investor_Page />} />
          <Route path="investor/:id" element={<Investor_Info_Page />} />
          <Route path="municipalnye_obrazovaniya" element={<Municipalnye_obrazovaniya_Page />} />
          <Route path="municipalnye_obrazovaniya/:id" element={<Municipalnye_obrazovaniya_Page />} />
          <Route path="documents" element={<Documents_Page />} />
          <Route path="*" element={<Non_Found_Page />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
