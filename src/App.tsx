import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import MainPage from "./pages/MainPage";
//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();

  } , [])
   return (
      <Routes>
         <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage/>} />
         </Route>
      </Routes>
   );
}

export default App;
