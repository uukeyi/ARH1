import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import OurServicesSection from "../components/OurServicesSection/OurServicesSection";
import QuoteSection from "../components/QuoteSection/QuoteSection";

const MainPage: React.FC = () => {
   return (
      <div>
         <HeroSection />
         <OurServicesSection />
         <QuoteSection/>
      </div>
   );
};
export default MainPage;
