import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import { Autoplay} from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import styles from "./CheapPriceSection.module.css";
const CheapPriceSection: React.FC = () => {
   const {
      cheapPriceSection,
      title,
      subtitle,
      contentContainer,
      textContainer,
      sliderTitle,
      descriptionSlider,
      slider,
      sliderContainer,
   } = styles;

   return (
      <section id={cheapPriceSection}>
         <div  data-aos = "zoom-in" data-aos-duration = "1000" className="container">
            <p className={title}>ПОЧЕМУ НИЗКАЯ ЦЕНА?</p>
            <p className={subtitle}>
               Есть несколько вариантов манипуляций низкой ценой.
            </p>
            <div className={sliderContainer}>
               <Swiper
                  className={slider}
                  modules={[Navigation, EffectFade , Autoplay]}
                  spaceBetween={0}
                  loop
                  slidesPerView={1}
                  navigation={{
                     nextEl: ".image-swiper-button-next-small",
                     prevEl: ".image-swiper-button-prev-small",
                  }}
                  speed={800}
                  effect="fade"
                  fadeEffect={{
                     crossFade: true,
                  }}

                  autoplay = {{
                     delay : 5500
                  }}
               >
                  {[
                     {
                        title: "1. Урезанная комплектация",
                        description:
                           "Неопытному человеку сложно сразу определить ряд строительных нюансов, потому нередко пользуются этим, предлагая более дешёвую смету.",
                        subDescription:
                           "В результате вы получаете не капитальный дом для постоянного проживания, а дачный домик с урезанной комплектацией.",
                     },
                     {
                        title: "2. Экономия на материалах",
                        description:
                           "Применяется дешёвый строительный материал: более дешёвый утеплитель, более дешёвый материал для стен и их отделки, металлочерепица из тонкого метала, второсортное сырое дерево на стропильную систему. В погоне за более красивой ценой в смете, вам мало кто расскажет о минусах дешёвого материала. При таком подходе качество вашего дома является задачей второстепенной. Подмена качественного материала на более дешёвый с худшими характеристиками или меньшей прочности, например, подмена качественного фасадного клея на дешёвый, приведёт к разрушению отделки фасада уже через 3-4 года.",
                        subDescription: false,
                     },
                     {
                        title: "3. Нарушение технологии строительства",
                        description:
                           "Исключение какого-либо материала из технологии производства работ зрительно может быть незаметно, но в результате приведёт к дополнительным потерям тепла и уменьшению срока службы дома, о чём заказчик узнает только через несколько лет. Например, исключение из кровли контробрешётки, отвечающей за отвод влаги и проветривание утеплителя, может привести к потере утеплителем своих свойств, увеличению теплопотерь и к образованию плесени, хотя внешне крыша ничем не будет отличаться. На этом нередко экономят в смете.",
                        subDescription: false,
                     },
                     {
                        title: "4. Экономия на рабочих",
                        description:
                           "Использование неквалифицированных недорогих рабочих, которые допускают не только технологические, но и качественные ошибки. Нередко происходит обучение строительству на вашем доме, страдает не только качество, но и затягиваются сроки сдачи.",
                        subDescription: false,
                     },
                     {
                        title: "5. Неправильный расчёт сметы",
                        description:
                           "Из-за отсутствия достаточного опыта, некоторые нередко выдают желаемое за действительное, показывая красивые и приятные для заказчика цифры в смете, а по итогам строительства понимают, что многие моменты не учли в расчётах и тогда стройка останавливается. Речь идёт о неправильном расчёте сметы и затрат на строительство.",
                        subDescription:
                           "Потому есть большой риск попасть на недострой. Грамотный прогноз стоимости строительного материала и накладных расходов - очень важный момент.",
                     },
                  ].map((slider, index) => {
                     return (
                        <SwiperSlide key={index}>
                           <div className={contentContainer}>
                              <img
                                 src="https://i.ibb.co/d00BJjj/kasa.webp"
                                 alt="Не удалось отобразить картинку"
                              />
                              <div className={textContainer}>
                                 <p className={sliderTitle}>{slider.title}</p>
                                 <p className={descriptionSlider}>
                                    {slider.description}
                                    <br />
                                    <br />
                                    {slider.subDescription
                                       ? slider.subDescription
                                       : null}
                                 </p>
                              </div>
                           </div>
                        </SwiperSlide>
                     );
                  })}
               </Swiper>
               <button type="button" className="image-swiper-button-next-small"></button>
               <button type="button" className="image-swiper-button-prev-small"></button>
            </div>
         </div>
      </section>
   );
};

export default CheapPriceSection;
