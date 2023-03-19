import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};
export default MainPage;
