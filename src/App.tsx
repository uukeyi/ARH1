import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import MainPage from "./pages/MainPage";
//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import OurProjectsPage from "./pages/OurProjectsPage";
import WhiteMainLayout from "./layout/WhiteMainLayout/WhiteMainLayout";
import SingleProjectPageLayout from "./layout/SingleProjectPageLayout/SingleProjectPageLayout";
import DesignFacadeStyleRight from "./pages/DesignFacadeStyleRight/DesignFacadeStyleRight";
import KnowledgeBase from "./pages/KnowledgeBase";
import DesignFacadeStone from "./pages/DesignFacadeStone/DesignFacadeStone";
import DesignFacadePrivateHousePeterhof from "./pages/DesignFacadePrivateHousePeterhof/DesignFacadePrivateHousePeterhof";
import DesignFacadePrivateHouseSand from "./pages/DesignFacadePrivateHouseSand/DesignFacadePrivateHouseSand";
import DesignFacadeVillaticHouse from "./pages/DesignFacadeVillaticHouse/DesignFacadeVillaticHouse";
import ProjectReconstructionRelaxBase from "./pages/ProjectReconstructionRelaxBase/ProjectReconstructionRelaxBase";
function App() {
   useEffect(() => {
      AOS.init();
   }, []);
   return (
      <Routes>
         <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
         </Route>
         <Route path="/" element={<WhiteMainLayout />}>
            <Route path="ourProjects" element={<OurProjectsPage />} />
            <Route path="knowledgeBase" element={<KnowledgeBase />} />
         </Route>
         <Route path="ourProjects" element={<SingleProjectPageLayout />}>
            <Route
               path="designFacadeStyleRight"
               element={<DesignFacadeStyleRight />}
            />
            <Route path="designFacadeStone" element={<DesignFacadeStone />} />
            <Route
               path="designFacadePrivateHousePeterhof"
               element={<DesignFacadePrivateHousePeterhof />}
            />
            <Route
               path="designFacadePrivateHouseSand"
               element={<DesignFacadePrivateHouseSand />}
            />
            <Route
               path="designFacadeVillaticHouse"
               element={<DesignFacadeVillaticHouse />}
            />
            <Route
               path="projectReconstructionRelaxBase"
               element={<ProjectReconstructionRelaxBase />}
            />
         </Route>
      </Routes>
   );
}

export default App;
