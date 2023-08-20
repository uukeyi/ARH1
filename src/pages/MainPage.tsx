import React, { useEffect, useState } from "react";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import ApplicationForArch from "../components/ApplicationForArch/ApplicationForArch";
import BlockHeaderSection from "../components/BlockHeaderSection/BlockHeaderSection";
import CheapPriceSection from "../components/CheapPriceSection/CheapPriceSection";
import CostEquivalentSection from "../components/CostEquivalentSection/CostEquivalentSection";
import HeroSection from "../components/HeroSection/HeroSection";
import OurServicesSection from "../components/OurServicesSection/OurServicesSection";
import ProjectPriceSection from "../components/ProjectPriceSection/ProjectPriceSection";
import QuoteSection from "../components/QuoteSection/QuoteSection";
import SwiperSection from "../components/SwiperSection/SwiperSection";
import FacadeDesignWorksSection from "../components/FacadeDesignWorks/FacadeDesignWorksSection";
import FacadeDesign from "../components/FacadeDesign/FacadeDesign";
import ReviewsSection from "../components/ReviewsSection/ReviewsSection";
import { useAppDispatch, useAppSelector } from "../hooks/reduxTookitHooks";
import { checkAuth } from "../store/actions/authActions";
import { useAuth } from "../contexts/AuthContext";
import QuoteLineBlock from "../components/QuoteLineBlock/QuoteLineBlock";
import WorkAlgorithmSection from "../components/WorkAlgorithmSection/WorkAlgorithmSection";
import UnauthorizedPopup from "../components/UnauthorizedPopup/UnauthorizedPopup";
import { getLandingPageBlocks } from "../store/actions/landingPageActions";
const MainPage: React.FC = () => {
   const dispatch = useAppDispatch();
   const { setIsAuth } = useAuth();
   const [isError, setIsError] = useState<boolean>(false);
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [errorLandingBlocks, setErrorLandingBlocks] = useState(false);

   // const store = useAppSelector((state) => state.authSlice.user);

   const landingBlocks = useAppSelector((state) => state.landingPageSlice);
   useEffect(() => {
      if (
         localStorage.getItem("token") === null ||
         !localStorage.getItem("token")
      ) {
         setIsOpen(true);
      } else {
         dispatch(checkAuth({ setError: setIsError, setIsAuth: setIsAuth }));
      }
   }, []);
   useEffect(() => {
      dispatch(checkAuth({ setError: setIsError, setIsAuth: setIsAuth }));
      dispatch(
         getLandingPageBlocks({
            showInvisible: false,
            setError: setErrorLandingBlocks,
         })
      );
   }, []);
   if (errorLandingBlocks) {
      alert("Не получилось загрузить сайт");
   }
   //  console.log(isAuthSettings.isAuth);
   //  console.log(store)
   //  useEffect(() => {
   //     if (isError) {
   //        alert(store.errorMessage);
   //     }
   //  }, [isError]);

   return (
      <div>
         <UnauthorizedPopup
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isTimeout={true}
         />
         {[...landingBlocks.elements]
            .sort((a, b) => a.orderIndex - b.orderIndex)
            .map((el, index) => {
               switch (el.name) {
                  case "НАШИ УСЛУГИ":
                     return <OurServicesSection titleText={el.elements[0].value}  />;
                  case "ДИЗАЙН ФАСАДОВ - НАШИ РАБОТЫ":
                     return <FacadeDesignWorksSection />;
                  case "ОДИН ПОДРЯДЧИК - ОДНА ОТВЕТСТВЕННОСТЬ.":
                     return (
                        <QuoteSection
                           title="ПРИНЦИП"
                           subtitle="Один подрядчик - одна ответственность."
                           desc="Часто бывает так, что разные этапы выполняют отдельные фирмы, предложившие лучшую цену, в результате заказчик получает комплекс недочётов, за которые никто не отвечает."
                           subDesc="Бывает сложно найти 'крайнего' и каждый переносит ответственность на другого исполнителя. Потому удобно, когда подрядчик один."
                           weight="600"
                           bg="#f0f0f0"
                        />
                     );
                  case "АЛГОРИТМ РАБОТЫ":
                     return <WorkAlgorithmSection />;
                  case "ЗАГОЛОВОК БЛОКА":
                     return <BlockHeaderSection />;
                  case "ЧТО ДЕЛАЕМ В ПРОЕКТЕ ФАСАДОВ":
                     return <SwiperSection />;
                  case "ПОЧЕМУ СТРОИТЕЛЕЙ МНОГО, А КАЧЕСТВЕННЫХ ДОМОВ МАЛО?":
                     return (
                        <QuoteSection
                           title="ВАЖНО"
                           subtitle="Почему строителей много, а качественных домов мало?"
                           desc="Большое желание сэкономить деньги, искажает рынок, формируя предложение недорогих некачественных домов от разных фирм и строителей под руководством маркетологов и экономистов. Они называют это малобюджетным строительством."
                           subDesc="Когда заказчик соглашается на такое предложение, он стимулирует недобросовестных строителей и ставит себя в невыгодное положение, как в мультфильме: можно сделать из одной шкурки одну, две, три, семь шапок, но вопрос: это именно то, что вы ожидаете?"
                           weight="300"
                           bg="white"
                        />
                     );
                  case "ДИЗАЙН ФАСАДОВ":
                     return <FacadeDesign />;
                  case "ОСТАВЬТЕ ЗАЯВКУ АРХИТЕКТОРУ":
                     return <ApplicationForArch />;
                  case "ПОЧЕМУ НИЗКАЯ ЦЕНА?":
                     return <CheapPriceSection />;
                  case "СТОИТ ЛИ ОРИЕНТИРОВАТЬСЯ НА САМУЮ НИЗКУЮ ЦЕНУ?":
                     return (
                        <QuoteLineBlock
                           titleBlock="ИНТЕРЕСНО"
                           title="Стоит ли ориентироваться на самую низкую цену?"
                           desc="Стоит, но лишь тогда, когда предложения сопоставимы по комплектации и конечному результату, а не отличаются скрытыми доплатами, качеством материалов и уровнем специалистов.
Потому любое предложение нужно подробно анализировать."
                        />
                     );
                  case "СТОИМОСТЬ ПРОЕКТА":
                     return <ProjectPriceSection />;
                  case "ЭКВИВАЛЕНТ СТОИМОСТИ":
                     return <CostEquivalentSection />;
                  case "О НАС":
                     return <AboutUsSection />;
                  case "ОТЗЫВЫ О НАШЕЙ РАБОТЕ":
                     return <ReviewsSection />;
               }
            })}
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
