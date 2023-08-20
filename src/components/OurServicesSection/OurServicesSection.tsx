import React, { useState } from "react";
import styles from "./OurServicesSection.module.css";

import OurServicesCard from "../OurServicesCard/OurServicesCard";
type cardType = {
   img: string;
   id: number;
   title: string;
   description: string;
};
interface OurServicesSectionProps {
   titleText?: string;
   firstCard?: cardType;
   secondCard?: cardType;
   thirdCard?: cardType;
}

const OurServicesSection: React.FC<OurServicesSectionProps> = ({
   titleText,
   firstCard,
   secondCard,
   thirdCard,
}) => {
   const { ourServices, title, cardContainer } = styles;
   const [cards, setCards] = useState<any>([
      {
         id: 1,
         // id : firstCard?.id
         img: "https://i.ibb.co/RBH9ZB6/author-Supervision.webp",
         // img : firstCard?.img
         title: "Дизайн фасадов",
         // title : firstCard?.title
         description:
            "Авторский дизайн фасада с использованием элементов швейцарского шале, минимализма, русского стиля, дополненных растительным декором.",
         // description : firstCard?.description
         aosAnimation: "fade-right",
      },
      {
         id: 2,
         // id : secondCard?.id

         img: "https://i.ibb.co/xYfcrsd/building-Facades.webp",
         // img : secondCard?.img
         title: "Строительство фасадов",
         // title : secondCard?.title
         description:
            "Осуществляем отделку фасадов натуральным и искусственным камнем, керамической плиткой. Монтируем и восстанавливаем наличники, карнизы и тяги. Производим монтаж колонн, вензелей и замковых камней.",
         // description : secondCard?.description
         aosAnimation: "fade-up",
      },
      {
         id: 3,
         // id : thirdCard?.id

         img: "https://i.ibb.co/RBH9ZB6/author-Supervision.webp",
         // img : thirdCard?.img
         title: "Авторский надзор",
         // title : thirdCard?.title
         description:
            "Авторский надзор является частью строительного контроля, который проводится лицом, осуществившим подготовку проектной и, на её основе, рабочей документации.",
         // description : thirdCard?.description
         aosAnimation: "fade-left",
      },
   ]);

   return (
      <section id={"ourServices"}>
         <div id={ourServices}>
            <div className="container">
               <h1
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  className={title}
               >
                  НАШИ УСЛУГИ
               </h1>
               <div className={cardContainer}>
                  {cards.map((card: any) => {
                     return (
                        <OurServicesCard
                           src={card.img}
                           title={card.title}
                           description={card.description}
                           key={card.id}
                           aosAnimation={card.aosAnimation}
                        />
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
};

export default OurServicesSection;
