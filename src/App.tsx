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
import KnowledgeBasePage from './pages/KnowledgeBasePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactsPage from './pages/ContactsPage';
import DiscussionFacadePage from './pages/DiscussionFacadePage/DiscussionFacadePage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import CreateDiscussionPage from './pages/CreateDiscussionPage/CreateDiscussionPage';
import ProtectedRoutes from './routes/ProtectedRoutes';
import DiscussionDetailsPage from './pages/DiscussionDetailsPage/DiscussionDetailsPage';
import { CodeConfirmPage } from './pages/CodeConfirmPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import ServicePage from './pages/ServicePage/ServicePage';
import DiscussionCategoriesPage from './pages/DiscussionCategoriesPage/DiscussionCategoriesPage';
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
        <Route path="discussionFacade/:discussionFacadeId" element={<DiscussionFacadePage />} />
        <Route path="discussionCategories" element={<DiscussionCategoriesPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route
            path="createDiscussion/:createDiscussionElement"
            element={<CreateDiscussionPage />}
          />
        </Route>
        <Route path="discussionDetails/:discussionDetailsId" element={<DiscussionDetailsPage />} />
        <Route path="ourProjects" element={<OurProjectsPage />} />
        <Route path="knowledgeBase" element={<KnowledgeBasePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="aboutUs" element={<AboutUsPage />} />
        <Route path="ourServices" element={<ServicePage />} />
        <Route path="knowledgeBase/:knowledgeBaseId" element={<ArticlePage />} />
      </Route>
      <Route path="ourProjects" element={<SingleProjectPageLayout />}>
        {/* <Route
               path="designFacadeStyleRight"
               element={<DesignFacadeStyleRight />}
            />
            <Route path="designFacadeStone" element={<DesignFacadeStone />} />
            <Route
               path="designFacadePrivateHousePeterhof"
               element={<DesignFacadePrivateHousePeterhof />}
            /> */}
        <Route path=":ourProjectsId" element={<ProjectPage />} />
        {/* <Route
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
            /> */}
      </Route>
      <Route path="registration" element={<RegistrationPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="forgotPassword" element={<ForgotPasswordPage />} />
      <Route path="confirmEmail" element={<CodeConfirmPage />} />
    </Routes>
  );
}

export default App;
