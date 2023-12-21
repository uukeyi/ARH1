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
// import FacadeDesignWorksSection from "../components/FacadeDesignWorks/FacadeDesignWorksSection";
import FacadeDesign from "../components/FacadeDesign/FacadeDesign";
import ReviewsSection from "../components/ReviewsSection/ReviewsSection";
import { useAppDispatch, useAppSelector } from "../hooks/reduxTookitHooks";
import { checkAuth } from "../store/actions/authActions";
import { useAuth } from "../contexts/AuthContext";
import QuoteLineBlock from "../components/QuoteLineBlock/QuoteLineBlock";
import WorkAlgorithmSection from "../components/WorkAlgorithmSection/WorkAlgorithmSection";
import UnauthorizedPopup from "../components/UnauthorizedPopup/UnauthorizedPopup";
import { getLandingPageBlocks } from "../store/actions/landingPageActions";
import AdminModalEdit from "../components/AdminModalEdit";
import FacadeDesignWorksSection from "../components/FacadeDesignWorks/FacadeDesignWorksSection";
import AdminModalEditBlock from "../components/AdminModalEditBlock";
import FaqSection from "../components/Faq/FaqSection";

const MainPage: React.FC = () => {
   const dispatch = useAppDispatch();
   const { setIsAuth, isAuthSettings } = useAuth();
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
      dispatch(
         getLandingPageBlocks({
            showInvisible: true,
            setError: setErrorLandingBlocks,
         })
      );
   }, []);
   if (errorLandingBlocks) {
      alert("Не получилось загрузить сайт");
   }
   return (
      <div>
         <UnauthorizedPopup
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isTimeout={true}
         />
         <AdminModalEdit />
         <AdminModalEditBlock />
         {landingBlocks.elements.map((el, index) => {
            if (!el.isVisible && !isAuthSettings.isAdmin) {
               return null;
            }
            switch (el.name) {
               case "ПРОЕКТ ДИЗАЙНА ФАСАДОВ ДОМА ЗА 7 ДНЕЙ":
                  return (
                     <HeroSection
                        titleText={el.elements[0]}
                        subtitle={el.elements[1]}
                        desc1={el.elements[2]}
                        desc2={el.elements[3]}
                        desc3={el.elements[4]}
                        desc4={el.elements[5]}
                     />
                  );
               case "НАШИ УСЛУГИ":
                  return (
                     <OurServicesSection
                        block={el}
                        titleText={el.elements[0]}
                        firstCard={{
                           img: el.elements[1],
                           description: el.elements[2],
                           title: el.elements[3],
                           aosAnimation: "fade-right",
                        }}
                        secondCard={{
                           img: el.elements[4],
                           description: el.elements[5],
                           title: el.elements[6],
                           aosAnimation: "fade-up",
                        }}
                        thirdCard={{
                           img: el.elements[7],
                           description: el.elements[8],
                           title: el.elements[9],
                           aosAnimation: "fade-left",
                        }}
                     />
                  );
               case "ДИЗАЙН ФАСАДОВ - НАШИ РАБОТЫ":
                  return (
                     <FacadeDesignWorksSection
                        block={el}
                        elWithNoDesc={el.elements.slice(0, 11)}
                        elWithDesc={el.elements.slice(12, 32)}
                        extraElWithDesc={el.elements.slice(32, 40)}
                        title={el.elements[el.elements.length - 1]}
                     />
                  );
               case "ОДИН ПОДРЯДЧИК - ОДНА ОТВЕТСТВЕННОСТЬ.":
                  return (
                     <QuoteSection
                        block={el}
                        title={el.elements[0]}
                        subtitle={el.elements[1]}
                        desc={el.elements[2]}
                        subDesc={el.elements[3]}
                        personImg={el.elements[4]}
                        personName={el.elements[5]}
                        personDesc={el.elements[6]}
                        weight="600"
                        bg="#f0f0f0"
                     />
                  );
               case "АЛГОРИТМ РАБОТЫ":
                  console.log(el.elements)
                  let firstIndex = el.elements.findIndex((el, index) => {
                     if (el.aosAnimation === "first") {
                        return index;
                     }
                  });
                  let secondIndex = el.elements.findIndex((el, index) => {
                     if (el.aosAnimation === "second") {
                        return index;
                     }
                  });
                  let thirdIndex = el.elements.findIndex((el, index) => {
                     if (el.aosAnimation === "third") {
                        return index;
                     }
                  });
                  return (
                     <WorkAlgorithmSection
                        block={el}
                        titleText={el.elements[el.elements.length - 1]}
                        subtitleText={el.elements[el.elements.length - 2]}
                        thirdBlockElements={el.elements.slice(secondIndex + 1, thirdIndex)}
                        thirdBlockTitle={el.elements[thirdIndex]}
                        firstBlockTitle={el.elements[firstIndex]}
                        firstBlockElements={el.elements.slice(0, firstIndex )}
                        secondBlockElements={el.elements.slice(firstIndex + 1, secondIndex)}
                        secondBlockTitle={el.elements[secondIndex]}
                     />
                  );
               case "ЗАГОЛОВОК БЛОКА":
                  return (
                     <BlockHeaderSection
                        block={el}
                        elements={el.elements.slice(0, el.elements.length - 1)}
                        titleText={el.elements[el.elements.length - 1]}
                     />
                  );
               case "ЧТО ДЕЛАЕМ В ПРОЕКТЕ ФАСАДОВ":
                  return (
                     <SwiperSection
                        block={el}
                        titleText={el.elements[el.elements.length - 1]}
                        changeConception={{
                           img: el.elements[0],
                           title: el.elements[1],
                           subtitle: el.elements[2],
                           description: el.elements[3],
                        }}
                        designGroup={{
                           img: el.elements[4],
                           title: el.elements[5],
                           description: el.elements[6],
                           subtitle: false,
                        }}
                        details={{
                           img: el.elements[7],
                           title: el.elements[8],
                           description: el.elements[9],
                           subtitle: false,
                        }}
                        backlight={{
                           img: el.elements[10],
                           title: el.elements[11],
                           description: el.elements[12],
                           subtitle: false,
                        }}
                        attached={{
                           img: el.elements[13],
                           title: el.elements[14],
                           subtitle: el.elements[15],
                           description: el.elements[16],
                        }}
                        redevelopment={{
                           img: el.elements[17],
                           title: el.elements[18],
                           subtitle: false,
                           description: el.elements[19],
                        }}
                     />
                  );
               case "ПОЧЕМУ СТРОИТЕЛЕЙ МНОГО, А КАЧЕСТВЕННЫХ ДОМОВ МАЛО?":
                  return (
                     <QuoteSection
                        block={el}
                        title={el.elements[0]}
                        subtitle={el.elements[1]}
                        desc={el.elements[2]}
                        subDesc={el.elements[3]}
                        personImg={el.elements[4]}
                        personName={el.elements[5]}
                        personDesc={el.elements[6]}
                        weight="600"
                        bg="white"
                     />
                  );
               case "ДИЗАЙН ФАСАДОВ":
                  return (
                     <FacadeDesign
                        block={el}
                        titleText={el.elements[0]}
                        card1={{
                           img: el.elements[1],
                           title: el.elements[2],
                           description: el.elements[3],
                        }}
                        card2={{
                           img: el.elements[4],
                           title: el.elements[5],
                           description: el.elements[6],
                        }}
                        card3={{
                           img: el.elements[7],
                           title: el.elements[8],
                           description: el.elements[9],
                        }}
                        card4={{
                           img: el.elements[10],
                           title: el.elements[11],
                           description: el.elements[12],
                        }}
                        card5={{
                           img: el.elements[13],
                           title: el.elements[14],
                           description: el.elements[15],
                        }}
                     />
                  );
               case "ОСТАВЬТЕ ЗАЯВКУ АРХИТЕКТОРУ":
                  return (
                     <ApplicationForArch
                        block={el}
                        title={el.elements[0]}
                        img={el.elements[1]}
                        subtitle={el.elements[2]}
                        liTitle={el.elements[3]}
                        liEl1={el.elements[4]}
                        liEl2={el.elements[5]}
                        liEl3={el.elements[6]}
                        liEl4={el.elements[7]}
                        desc={el.elements[8]}
                        bottomDesc={el.elements[9]}
                     />
                  );
               case "ПОЧЕМУ НИЗКАЯ ЦЕНА?":
                  return (
                     <CheapPriceSection
                        block={el}
                        titleConfig={el.elements[13]}
                        firstSlide={{
                           title: el.elements[0],
                           desc: el.elements[1],
                           subtitle: el.elements[2],
                        }}
                        secondSlide={{
                           title: el.elements[3],
                           desc: el.elements[4],
                           subtitle: false,
                        }}
                        thirdSlide={{
                           title: el.elements[5],
                           desc: el.elements[6],
                           subtitle: false,
                        }}
                        fourthSlide={{
                           title: el.elements[7],
                           desc: el.elements[8],
                           subtitle: false,
                        }}
                        fifthSlide={{
                           title: el.elements[9],
                           desc: el.elements[10],
                           subtitle: el.elements[11],
                        }}
                        imgConfig={el.elements[12]}
                        subtitleConfig={el.elements[14]}
                     />
                  );
               case "СТОИТ ЛИ ОРИЕНТИРОВАТЬСЯ НА САМУЮ НИЗКУЮ ЦЕНУ?":
                  return (
                     <QuoteLineBlock
                        titleBlock={el.elements[0]}
                        title={el.elements[1]}
                        desc={el.elements[2]}
                        block={el}
                     />
                  );
               case "СТОИМОСТЬ ПРОЕКТА":
                  return <ProjectPriceSection block={el} />;
               case "ЭКВИВАЛЕНТ СТОИМОСТИ":
                  return (
                     <CostEquivalentSection
                        block={el}
                        titleConfig={el.elements[0]}
                        imgConfig={el.elements[1]}
                        desc1={el.elements[2]}
                        desc2={el.elements[3]}
                        desc3={el.elements[4]}
                        desc4={el.elements[5]}
                        desc5={el.elements[6]}
                        desc6={el.elements[7]}
                     />
                  );
               case "О НАС":
                  return (
                     <AboutUsSection
                        block={el}
                        mainTitle={el.elements[0]}
                        titleConfig={el.elements[1]}
                        titleDesc={el.elements[2]}
                        subTitle={el.elements[el.elements.length - 1]}
                        mainDesc={el.elements[3]}
                        card1={{
                           title: el.elements[4],
                           subtitle: el.elements[5],
                        }}
                        card2={{
                           title: el.elements[6],
                           subtitle: el.elements[7],
                        }}
                        card3={{
                           title: el.elements[8],
                           subtitle: el.elements[9],
                        }}
                        card4={{
                           title: el.elements[10],
                           subtitle: el.elements[11],
                        }}
                     />
                  );
               case "ВОПРОСЫ И ОТВЕТЫ":
                  return (
                     <FaqSection
                        block={el}
                        titleText={el.elements[0]}
                        subtitle1={el.elements[1]}
                        desc1={el.elements[2]}
                        subtitle2={el.elements[3]}
                        desc2={el.elements[4]}
                        desc3={el.elements[5]}
                        desc4={el.elements[6]}
                        subtitle3={el.elements[7]}
                        desc5={el.elements[8]}
                        subtitle4={el.elements[9]}
                        desc6={el.elements[10]}
                        subtitle5={el.elements[11]}
                        desc7={el.elements[12]}
                        subtitle6={el.elements[13]}
                        desc8={el.elements[14]}
                        subtitle7={el.elements[15]}
                        desc9={el.elements[16]}
                        subtitle8={el.elements[17]}
                        desc10={el.elements[18]}
                     />
                  );
               case "ОТЗЫВЫ О НАШЕЙ РАБОТЕ":
                  return (
                     <ReviewsSection
                        block={el}
                        mainTitle={el.elements[0]}
                        subtitle={el.elements[1]}
                        subtitleDesc={el.elements[2]}
                        slide1={{
                           name: el.elements[3],
                           personDescription: el.elements[4],
                           img: el.elements[5],
                           description: el.elements[6],
                        }}
                        slide2={{
                           name: el.elements[7],
                           personDescription: el.elements[8],
                           img: el.elements[9],
                           description: el.elements[10],
                        }}
                        slide3={{
                           name: el.elements[11],
                           personDescription: el.elements[12],
                           img: el.elements[13],
                           description: el.elements[14],
                        }}
                     />
                  );
            }
         })}
      </div>
   );
};
export default MainPage;
