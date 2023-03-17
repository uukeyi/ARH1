import React from "react";
import BlockHeaderSection from "../components/BlockHeaderSection/BlockHeaderSection";
import HeroSection from "../components/HeroSection/HeroSection";
import OurServicesSection from "../components/OurServicesSection/OurServicesSection";
import QuoteSection from "../components/QuoteSection/QuoteSection";
import SwiperSection from "../components/SwiperSection/SwiperSection";

const MainPage: React.FC = () => {
   return (
      <div>
         <HeroSection />
         <OurServicesSection />
         <QuoteSection
            desc="Часто бывает так, что разные этапы выполняют отдельные фирмы, предложившие лучшую цену, в результате заказчик получает комплекс недочётов, за которые никто не отвечает."
            subDesc="Бывает сложно найти 'крайнего' и каждый переносит ответственность на другого исполнителя. Потому удобно, когда подрядчик один."
         />
         <BlockHeaderSection/>
         <SwiperSection/>
      </div>
   );
};
export default MainPage;
