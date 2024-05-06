import React from "react";
import { Route, Routes } from "react-router-dom";

import Main_Page from "./Components/Pages/Main_Page";
import Non_Found_Page from "./Components/Pages/Non_Found_Page";
import Layout from "./Components/Standart/Layout/Layout";

import Admin_Page from "./Admin/Admin_Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main_Page />} />
          <Route path="*" element={<Non_Found_Page />} />
        </Route>

        <Route path="/admin" element={<Admin_Page />} />
      </Routes>
    </>
  )
}

export default App
