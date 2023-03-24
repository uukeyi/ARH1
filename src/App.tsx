import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout/MainLayout';
import MainPage from './pages/MainPage';
//@ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import OurProjectsPage from './pages/OurProjectsPage';
import WhiteMainLayout from './layout/WhiteMainLayout/WhiteMainLayout';
import KnowledgeBase from './pages/KnowledgeBase';
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
    </Routes>
  );
}

export default App;
