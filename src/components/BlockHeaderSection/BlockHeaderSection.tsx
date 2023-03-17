import React, { useState } from "react";
import styles from "./BlockHeaderSection.module.css";
import digitalProcessSrc from "../../assets/mainPage/digitalProccess.webp";
import engineeringNodescSrc from "../../assets/mainPage/engineeringNodes.webp";
import sketchDesignSrc from "../../assets/mainPage/sketchDesign.webp";
import slowAuthorDesignSrc from "../../assets/mainPage/slowAuthorDesign.webp";
import suitableMaterialsSrc from "../../assets/mainPage/suitableMaterials.webp";
import warmingDesignSrc from "../../assets/mainPage/warmingDesign.webp";
import NumberedCard from "../NumberedCard/NumberedCard";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type cardType = {
   img: string;
   title: string;
   id: number;
   description: string;
};

const BlockHeaderSection: React.FC = () => {
   const [cards, setCards] = useState<cardType[]>([
      {
         img: slowAuthorDesignSrc,
         title: "Медленный авторский дизайн",
         id: 1,
         description:
            "К нам обращаются за уникальным дизайном для собственного особенного дома. Лучшие фасады, как и все другие хорошие вещи, появляются благодаря вниманию и увлечению своих создателей. В задачу нужно погрузиться с головой.",
      },
      {
         img: suitableMaterialsSrc,
         title: "Подходящие материалы",
         id: 2,
         description:
            "У нас нет карманного производства или магазина. Мы находим подходящие материалы для каждого проекта в рамках бюджета, характеристик, сочетаемости и надежности, проверенной трудным опытом.",
      },
      {
         img: sketchDesignSrc,
         title: "Эскизный старт",
         id: 3,
         description:
            "Ручная подача на первом этапе дает творческие и разнообразные идеи. Без эскизов дизайнеры делают то, что проще моделировать в знакомой программе.",
      },
      {
         img: digitalProcessSrc,
         title: "Цифровой процесс",
         id: 4,
         description:
            "Модель дома и профессиональная 3D-визуализация поможет проработать дизайн со всех ракурсов, согласовать материалы, посчитать точные площади покрытий.",
      },
      {
         img: engineeringNodescSrc,
         title: "Инженерные узлы",
         id: 5,
         description:
            "Не всё, что кажется прочным и безопасным во время монтажа, окажется таким через 15 лет. Фасад должен долго украшать и защищать дом, но в климате с холодной зимой и палящим солнцем это сложно.",
      },
      {
         img: warmingDesignSrc,
         title: "Утепление",
         id: 6,
         description:
            "Выбор типа и толщины утеплителя определяет не только расход на отопление. Сложным образом от него зависит прочность стены и комфорт. Допустим, можно не экономить и греть воздух внутри помещения, но, если внутренняя поверхность стены холодная, возникнет конденсат и плесень. Может намокнуть утеплитель или клеевой слой.",
      },
   ]);
   const [value, setValue] = useState("");
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
            <p data-aos="zoom-in" className={title}>
               Заголовок блока
            </p>

            <div className={cardContainer}>
               {cards.map((card) => {
                  return (
                     <NumberedCard
                        key={card.id}
                        title={card.title}
                        imgSrc={card.img}
                        description={card.description}
                        id={card.id}
                     />
                  );
               })}
            </div>
            <div className={feedbackContainer}>
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
