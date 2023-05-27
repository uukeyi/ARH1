import React, { useEffect, useState } from 'react';
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
import FacadeDesignWorksSection from '../components/FacadeDesignWorks/FacadeDesignWorksSection';
import FacadeDesign from '../components/FacadeDesign/FacadeDesign';
import ReviewsSection from '../components/ReviewsSection/ReviewsSection';
import { useAppDispatch, useAppSelector } from '../hooks/reduxTookitHooks';
import { checkAuth } from '../store/actions/authActions';
import { useAuth } from '../contexts/AuthContext';
import { Box } from '@mui/material';
import QuoteLineBlock from '../components/QuoteLineBlock/QuoteLineBlock';
import WorkAlgorithmSection from '../components/WorkAlgorithmSection/WorkAlgorithmSection';
const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { setIsAuth } = useAuth();
  const [isError, setIsError] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<{
    value: boolean;
    text: string;
  }>({
    value: true,
    text: '',
  });
  const store = useAppSelector((state) => state.authSlice);
  useEffect(() => {
    if (localStorage.getItem('token') === null || !localStorage.getItem('token')) {
      //  setIsOpen({ value: true, text: "Вы не авторизованы" });
      alert('Вы не авторизованы');
    } else {
      dispatch(checkAuth({ setError: setIsError, setIsAuth: setIsAuth }));
    }
  }, []);
  useEffect(() => {
    if (isError) {
      alert(store.errorMessage);
    }
  }, [isError]);

  return (
    <div>
      {/* <Box sx={{opacity : isOpen ? "1" : "0" , width : "150px" , height : "50px" , background : 'white' , position : "absolute" , top : '20px' , left : '20px' , textAlign : 'center' , transition : "1s"}}>
            <p>{isOpen.text}</p>
         </Box> */}
      <HeroSection />
      <OurServicesSection />
      <FacadeDesignWorksSection />
      <QuoteSection
        title="ПРИНЦИП"
        subtitle="Один подрядчик - одна ответственность."
        desc="Часто бывает так, что разные этапы выполняют отдельные фирмы, предложившие лучшую цену, в результате заказчик получает комплекс недочётов, за которые никто не отвечает."
        subDesc="Бывает сложно найти 'крайнего' и каждый переносит ответственность на другого исполнителя. Потому удобно, когда подрядчик один."
        weight="600"
        bg="#f0f0f0"
      />
      <WorkAlgorithmSection />
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
      <FacadeDesign />
      <ApplicationForArch />
      <CheapPriceSection />
      <QuoteLineBlock
        titleBlock="ИНТЕРЕСНО"
        title="Стоит ли ориентироваться на самую низкую цену?"
        desc="Стоит, но лишь тогда, когда предложения сопоставимы по комплектации и конечному результату, а не отличаются скрытыми доплатами, качеством материалов и уровнем специалистов.
Потому любое предложение нужно подробно анализировать."
      />
      <ProjectPriceSection />
      <CostEquivalentSection />
      <AboutUsSection />
      <ReviewsSection />
    </div>
  );
};
export default MainPage;
