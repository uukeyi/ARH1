import React, { useState } from "react";
import { Link } from "react-router-dom";
import BoxShadowCard from "../BoxShadowCard/BoxShadowCard";
import styles from "./OurProjectsSection.module.css";

type cardType = {
   titleText: string;
   cityText: string;
   squareHouse: string;
   squareFacade: string;
   img : string;
   pathCard : string;
};
const OurProjectsSection: React.FC = () => {
   const { ourProjectsSection, subtitle, title, cardContainer , cardTitle } = styles;
   const [cards, setCards] = useState<cardType[]>([
    {
        titleText: "ДИЗАЙН ФАСАДА ДОМА В СТИЛЕ РАЙТА (ПРЕРИЙ)",
        cityText: "г. Пушкин, д. Александровская",
        squareHouse: "320 м2",
        squareFacade: "410 м2",
        img : 'https://i.ibb.co/cDvv6WK/34-big.webp',
        pathCard : "designFacadeStyleRight"
     },
     {
        titleText :  "ДИЗАЙН ФАСАДА ДОМА ИЗ КАМНЯ",
        cityText: "Санкт-Петербург, д. Кирполье",
        squareHouse: "350 м2",
        squareFacade: "450 м2",
        img : 'https://i.ibb.co/9wXTxKL/1-min.webp',
        pathCard : "designFacadeStone"
     },
     {
        titleText :  "ДИЗАЙН ФАСАДА ЧАСТНОГО ДОМА",
        cityText: "Санкт-Петербург, Петергоф",
        squareHouse: "270 м2",
        squareFacade: "340 м2",
        img : 'https://i.ibb.co/bW6qfT3/40-big-min.webp',
        pathCard : "designFacadePrivateHousePeterhof"
     },
     {
        titleText :  "ДИЗАЙН ФАСАДА ЧАСТНОГО ДОМА",
        cityText: "Санкт-Петербург, посёлок Песочный",
        squareHouse: "280 м2",
        squareFacade: "350 м2",
        img : 'https://i.ibb.co/pZStLCY/1-min-1.webp',
        pathCard : "designFacadePrivateHouseSand"

     },
     {
        titleText :  "ДИЗАЙН ФАСАДОВ ЗАГОРОДНОГО ДОМА",
        cityText: "Санкт-Петербург, коттеджный посёлок 'Охтинский Парк'",
        squareHouse: "350 м2",
        squareFacade: "450 м2",
        img : 'https://i.ibb.co/z6frQfh/6-big.webp',
        pathCard : "designFacadeVillaticHouse"

     },
     {
        titleText :  "ПРОЕКТ РЕКОНСТРУКЦИИ БАЗЫ ОТДЫХА (ТУРБАЗЫ). ЭСКИЗ",
        cityText: "Челябинская область, г. Миасс",
        squareHouse: "6 га",
        squareFacade: "11500 м2",
        img : "https://i.ibb.co/QbsGrmt/1-min1.webp",
        pathCard : "projectReconstructionRelaxBase"

     },
   ]);
   return (
      <section id={ourProjectsSection}>
         <div className="container">
            <Link to={"/"} className={subtitle}>
               Главная /
               <Link to={"ourProjects"} style={{ color: "rgb(235 51 73)" }}>
                  {" "}
                  Наши работы
               </Link>
            </Link>
            <p className={title}>ПРОЕКТЫ</p>
            <div className={cardContainer}>
           {
            cards.map((card , index) => {
                return <BoxShadowCard customClassNameTitle={cardTitle} cityText ={card.cityText} key={index}  projectCard = {true} pathCard={card.pathCard} titleText={card.titleText} imgSrc = {card.img} squareHouse = {card.squareHouse} suqareFacade = {card.squareFacade}  />
            })
           }
            </div>
         </div>
      </section>
   );
};

export default OurProjectsSection;
