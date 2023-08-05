import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout/MainLayout';
import MainPage from './pages/MainPage';
//@ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import OurProjectsPage from './pages/OurProjectsPage';
import WhiteMainLayout from './layout/WhiteMainLayout/WhiteMainLayout';
import SingleProjectPageLayout from './layout/SingleProjectPageLayout/SingleProjectPageLayout';
import DesignFacadeStyleRight from './pages/DesignFacadeStyleRight/DesignFacadeStyleRight';
import KnowledgeBasePage from './pages/KnowledgeBasePage';
import DesignFacadeStone from './pages/DesignFacadeStone/DesignFacadeStone';
import DesignFacadePrivateHousePeterhof from './pages/DesignFacadePrivateHousePeterhof/DesignFacadePrivateHousePeterhof';
import DesignFacadePrivateHouseSand from './pages/DesignFacadePrivateHouseSand/DesignFacadePrivateHouseSand';
import DesignFacadeVillaticHouse from './pages/DesignFacadeVillaticHouse/DesignFacadeVillaticHouse';
import ProjectReconstructionRelaxBase from './pages/ProjectReconstructionRelaxBase/ProjectReconstructionRelaxBase';
import AboutUsPage from './pages/AboutUsPage';
import ContactsPage from './pages/ContactsPage';
import BuyLandPlot from './pages/BuyLandPlot/BuyLandPlot';
import MainStylesLandscapeDesign from './pages/MainStylesLandscapeDesign/MainStylesLandscapeDesign';
import BuildHouseOrBuy from './pages/BuildHouseOrBuy/BuildHouseOrBuy';
import DevelopmentProjectDesignHouseFacade from './pages/DevelopmentProjectDesignHouseFacade/DevelopmentProjectDesignHouseFacade';
import DiscussionFacadePage from './pages/DiscussionFacadePage/DiscussionFacadePage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import CreateDiscussionPage from './pages/CreateDiscussionPage/CreateDiscussionPage';
import ProtectedRoutes from './routes/ProtectedRoutes';
import DiscussionDetailsPage from './pages/DiscussionDetailsPage/DiscussionDetailsPage';
import CodeConfirmPage from './pages/CodeConfirmPage';
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
        <Route path="discussionFacade" element={<DiscussionFacadePage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="createDiscussion" element={<CreateDiscussionPage />} />
        </Route>
        <Route path="discussionDetails/:discussionDetailsId" element={<DiscussionDetailsPage />} />
        <Route path="ourProjects" element={<OurProjectsPage />} />
        <Route path="knowledgeBase" element={<KnowledgeBasePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="aboutUs" element={<AboutUsPage />} />
        <Route path="knowledgeBase/buyLandPlot" element={<BuyLandPlot />} />
        <Route
          path="knowledgeBase/mainStylesLandscapeDesign"
          element={<MainStylesLandscapeDesign />}
        />
        <Route path="knowledgeBase/buildHouseOrBuy" element={<BuildHouseOrBuy />} />
        <Route
          path="knowledgeBase/developmentProjectDesignHouseFacade"
          element={<DevelopmentProjectDesignHouseFacade />}
        />
      </Route>
      <Route path="ourProjects" element={<SingleProjectPageLayout />}>
        <Route path="designFacadeStyleRight" element={<DesignFacadeStyleRight />} />
        <Route path="designFacadeStone" element={<DesignFacadeStone />} />
        <Route
          path="designFacadePrivateHousePeterhof"
          element={<DesignFacadePrivateHousePeterhof />}
        />
        <Route path="designFacadePrivateHouseSand" element={<DesignFacadePrivateHouseSand />} />
        <Route path="designFacadeVillaticHouse" element={<DesignFacadeVillaticHouse />} />
        <Route path="projectReconstructionRelaxBase" element={<ProjectReconstructionRelaxBase />} />
      </Route>
      <Route path="registration" element={<RegistrationPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="forgotPassword" element={<ForgotPasswordPage />} />
      <Route path="codeConfirm" element={<CodeConfirmPage />} />
    </Routes>
  );
}

export default App;
