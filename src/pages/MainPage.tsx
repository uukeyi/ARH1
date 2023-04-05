import React from 'react';
import AboutUsSection from '../components/AboutUsSection/AboutUsSection';
import ApplicationForArch from '../components/ApplicationForArch/ApplicationForArch';
import BlockHeaderSection from '../components/BlockHeaderSection/BlockHeaderSection';
import CheapPriceSection from '../components/CheapPriceSection/CheapPriceSection';
import CostEquivalentSection from '../components/CostEquivalentSection/CostEquivalentSection';
import HeroSection from '../components/HeroSection/HeroSection';
import OurServicesSection from '../components/OurServicesSection/OurServicesSection';
import ProjectPriceSection from '../components/ProjectPriceSection/ProjectPriceSection';
import QuoteSection from '../components/QuoteSection/QuoteSection';
import SwiperSection from '../components/SwiperSection/SwiperSection';

const MainPage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <OurServicesSection />
      {/* <FacadeDesignWorksSection /> */}
      <QuoteSection
        title="ПРИНЦИП"
        subtitle="Один подрядчик - одна ответственность."
        desc="Часто бывает так, что разные этапы выполняют отдельные фирмы, предложившие лучшую цену, в результате заказчик получает комплекс недочётов, за которые никто не отвечает."
        subDesc="Бывает сложно найти 'крайнего' и каждый переносит ответственность на другого исполнителя. Потому удобно, когда подрядчик один."
        weight="600"
        bg="#f0f0f0"
      />

      <BlockHeaderSection />
      <SwiperSection />
      <QuoteSection
        title="ВАЖНО"
        subtitle="Почему строителей много, а качественных домов мало?"
        desc="Большое желание сэкономить деньги, искажает рынок, формируя предложение недорогих некачественных домов от разных фирм и строителей под руководством маркетологов и экономистов. Они называют это малобюджетным строительством."
        subDesc="Когда заказчик соглашается на такое предложение, он стимулирует недобросовестных строителей и ставит себя в невыгодное положение, как в мультфильме: можно сделать из одной шкурки одну, две, три, семь шапок, но вопрос: это именно то, что вы ожидаете?"
        weight="300"
        bg="white"
      />

      <ApplicationForArch />
      <CheapPriceSection />
      <ProjectPriceSection />
      <CostEquivalentSection />
      <AboutUsSection />
    </div>
  );
};
export default MainPage;
