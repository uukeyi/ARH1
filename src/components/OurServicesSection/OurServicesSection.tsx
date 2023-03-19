import React, { useState } from "react";
import styles from "./OurServicesSection.module.css";

import OurServicesCard from "../OurServicesCard/OurServicesCard";
type cardType = {
   img: string;
   title: string;
   description: string;
   id: number;
   aosAnimation: string;
};
const OurServicesSection: React.FC = () => {
   const { ourServices, title, cardContainer } = styles;
   const [cards, setCards] = useState<cardType[]>([
      {
         id: 1,
         img: 'https://i.ibb.co/RBH9ZB6/author-Supervision.webp',
         title: "Дизайн фасадов",
         description:
            "Авторский дизайн фасада с использованием элементов швейцарского шале, минимализма, русского стиля, дополненных растительным декором.",
         aosAnimation: "fade-right",
      },
      {
         id: 2,
         img: 'https://i.ibb.co/xYfcrsd/building-Facades.webp',
         title: "Строительство фасадов",
         description:
            "Осуществляем отделку фасадов натуральным и искусственным камнем, керамической плиткой. Монтируем и восстанавливаем наличники, карнизы и тяги. Производим монтаж колонн, вензелей и замковых камней.",
         aosAnimation: "fade-up",
      },
      {
         id: 3,
         img: 'https://i.ibb.co/RBH9ZB6/author-Supervision.webp',
         title: "Авторский надзор",
         description:
            "Авторский надзор является частью строительного контроля, который проводится лицом, осуществившим подготовку проектной и, на её основе, рабочей документации.",
         aosAnimation: "fade-left",
      },
   ]);

   return (
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
               {cards.map((card) => {
                  return (
                     <OurServicesCard
                        src={card.img}
                        title={card.title}
                        description={card.description}
                        key={card.id}
                        aosAnimation = {card.aosAnimation}
                     />
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default OurServicesSection;
