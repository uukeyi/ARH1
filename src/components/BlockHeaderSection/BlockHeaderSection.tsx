import React, { useState } from "react";
import styles from "./BlockHeaderSection.module.css";
import NumberedCard from "../NumberedCard/NumberedCard";
import PhoneInput from "react-phone-input-2";
import { ILandingBlockElement, landingBlockPrototype } from "../../interfaces/landingPageResponse";

import "react-phone-input-2/lib/style.css";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";

interface BlockHeaderSectionProps {
   titleText: ILandingBlockElement;
   elements: ILandingBlockElement[];
}

const BlockHeaderSection: React.FC<BlockHeaderSectionProps> = ({
   elements,
   titleText,
}) => {
   // const [cards, setCards] = useState<cardType[]>([
   //    {
   //       img: "https://i.ibb.co/RBH9ZB6/author-Supervision.webp",
   //       title: "Медленный авторский дизайн",
   //       id: 1,
   //       description:
   //          "К нам обращаются за уникальным дизайном для собственного особенного дома. Лучшие фасады, как и все другие хорошие вещи, появляются благодаря вниманию и увлечению своих создателей. В задачу нужно погрузиться с головой.",
   //    },
   //    {
   //       img: "https://i.ibb.co/xYfcrsd/building-Facades.webp",
   //       title: "Подходящие материалы",
   //       id: 2,
   //       description:
   //          "У нас нет карманного производства или магазина. Мы находим подходящие материалы для каждого проекта в рамках бюджета, характеристик, сочетаемости и надежности, проверенной трудным опытом.",
   //    },
   //    {
   //       img: "https://i.ibb.co/xYfcrsd/building-Facades.webp",
   //       title: "Эскизный старт",
   //       id: 3,
   //       description:
   //          "Ручная подача на первом этапе дает творческие и разнообразные идеи. Без эскизов дизайнеры делают то, что проще моделировать в знакомой программе.",
   //    },
   //    {
   //       img: "https://i.ibb.co/RBH9ZB6/author-Supervision.webp",
   //       title: "Цифровой процесс",
   //       id: 4,
   //       description:
   //          "Модель дома и профессиональная 3D-визуализация поможет проработать дизайн со всех ракурсов, согласовать материалы, посчитать точные площади покрытий.",
   //    },
   //    {
   //       img: "https://i.ibb.co/RBH9ZB6/author-Supervision.webp",
   //       title: "Инженерные узлы",
   //       id: 5,
   //       description:
   //          "Не всё, что кажется прочным и безопасным во время монтажа, окажется таким через 15 лет. Фасад должен долго украшать и защищать дом, но в климате с холодной зимой и палящим солнцем это сложно.",
   //    },
   //    {
   //       img: "https://i.ibb.co/xYfcrsd/building-Facades.webp",
   //       title: "Утепление",
   //       id: 6,
   //       description:
   //          "Выбор типа и толщины утеплителя определяет не только расход на отопление. Сложным образом от него зависит прочность стены и комфорт. Допустим, можно не экономить и греть воздух внутри помещения, но, если внутренняя поверхность стены холодная, возникнет конденсат и плесень. Может намокнуть утеплитель или клеевой слой.",
   //    },
   // ]);
   const [value, setValue] = useState("");
   let titleProps: ILandingBlockElement = landingBlockPrototype
   let imgProps: ILandingBlockElement = landingBlockPrototype
   let descProps: ILandingBlockElement =landingBlockPrototype
   let index = 0;
   let indexElement = 0;
   const { isAuthSettings } = useAuth();
   const { setIsOpen, setElSettings } = useAdminModalEdit();
   const {
      blockHeaderSection,
      title,
      cardContainer,
      feedbackContainer,
      inputName,
      inputPhone,
      optionPhone,
      phoneContainer,
   } = styles;

   return (
      <section id={blockHeaderSection}>
         <div className="container">
            <p
               data-aos="zoom-in"
       
               data-aos-duration="1500"
               className={title}
               onClick={() => {
                  if (isAuthSettings.isAdmin) {
                     setIsOpen(true);
                     setElSettings(titleText);
                  }
               }}
            >
               {titleText.value}
            </p>

            <div className={cardContainer}>
               {elements.map((card) => {
                  index = index + 1;
                  switch (index) {
                     case 3:
                        indexElement = indexElement + 1;
                        descProps = card;
                        index = 0;
                        return (
                           <NumberedCard
                              key={indexElement}
                              title={titleProps}
                              imgSrc={imgProps}
                              description={descProps}
                              id={indexElement}
                           />
                        );

                     case 2:
                        titleProps = card;

                        break;
                     case 1:
                        imgProps = card;

                        break;
                  }
               })}
            </div>
            <div
               data-aos="zoom-in"
               data-aos-duration="1500"
               className={feedbackContainer}
            >
               <input
                  className={inputName}
                  type="text"
                  placeholder="Ваше имя"
               />
               <PhoneInput
                  inputClass={inputPhone}
                  country={"ru"}
                  value={value}
                  onChange={setValue}
                  placeholder="Ваш номер телефона"
                  buttonClass={optionPhone}
                  containerClass={phoneContainer}
               />
               {/* ADD BUTTON HERE */}
            </div>
         </div>
      </section>
   );
};

export default BlockHeaderSection;
