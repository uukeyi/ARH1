import React from "react";
import styles from "./CostEquivalentSection.module.css";
interface CostEquivalentSectionProps {}

const CostEquivalentSection: React.FC<CostEquivalentSectionProps> = () => {
   const { costEquivalentSection, title, contentContainer } = styles;
   return (
      <section id={costEquivalentSection}>
         <div className="container">
            <p className={title}>ЭКВИВАЛЕНТ СТОИМОСТИ</p>
            <div className={contentContainer}>
               <img
                  src="https://i.ibb.co/wNGTqsH/71.webp"
                  alt="Не удалось загрузить фото"
               />
               <p>
                  К примеру: стоимость эскизного проекта дизайна для отделки
                  фасадов дома площадью 250 м2 составит 85 000 руб.
                  <br />
                  <br />
                  За эти деньги, например, можно приобрести 30 м2 искусственного
                  камня и облицевать фасад.
                  <br />
                  <br />
                  Всё же это похоже на покупку одежды без примерки. На вешалке
                  она смотрится совершенно иначе, чем когда примеряешь её на
                  себя. Кроме того, может не подойти цвет, форма, размер и
                  сочетание цветов.
                  <br />
                  <br />
                  С дизайном фасадов дома всё очень похоже, только речь идёт о
                  суммах на порядок выше и вернуть их как одежду не получится -
                  работа будет оплачена. А «примерить» материал в проекте -
                  можно.
                  <br />
                  <br />
                  По статистике человек теряет более 450 000 руб., не используя
                  помощь и знания архитектора, обходясь без проекта. И это не
                  считая того, что результат в 98% случаев разочаровывает все
                  ожидания.
                  <br />
                  <br />
                  Воспользуйтесь помощью архитектора, инвестируйте в себя и свой
                  дом, это точно окупится.
               </p>
            </div>
         </div>
      </section>
   );
};

export default CostEquivalentSection;
