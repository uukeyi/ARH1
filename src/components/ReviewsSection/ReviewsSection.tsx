import React, { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import { Autoplay } from "swiper";
import { Pagination } from "swiper";
import styles from "./ReviewsSection.module.css";
import { ILandingBlockElement } from "../../interfaces/landingPageResponse";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";

interface ReviewsSectionProps {
   mainTitle: ILandingBlockElement;
   subtitle: ILandingBlockElement;
   subtitleDesc: ILandingBlockElement;
   slide1: {
      name: ILandingBlockElement;
      personDescription: ILandingBlockElement;
      description: ILandingBlockElement;
      img: ILandingBlockElement;
   };
   slide2: {
      name: ILandingBlockElement;
      personDescription: ILandingBlockElement;
      description: ILandingBlockElement;
      img: ILandingBlockElement;
   };
   slide3: {
      name: ILandingBlockElement;
      personDescription: ILandingBlockElement;
      description: ILandingBlockElement;
      img: ILandingBlockElement;
   };
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({
   mainTitle,
   subtitle,
   subtitleDesc,
   slide1,
   slide2,
   slide3,
}) => {
   const {
      reviewsSection,
      title,
      description,
      slider,
      cardDescription,
      sliderContainer,
      cardLine,
      cardInfoContainer,
      personContainer,
      personName,
      personDescription,
      swiperPagination,
   } = styles;
   //  const [reviews, setReviews] = useState<IReview[]>([
   //     {
   //        description:
   //           "Добрый день! Очень хотелось оставить отзыв о работе с архитектурным бюро АРХ1! Я очень доволен Вашей работой. Мы примерно пол года мучались с этим дизайном до обращения к Вам, и как же быстро и красиво мы вместе все решили. Мы кстати 2 раза оплачивали дизайн нашего дома в других компаниях, но так и не получили решение, которое нам на 100% нравится. Команде дизайнеров под руководством Александра большое СПАСИБО! Мы строим загородный дом для постоянного проживания нашей семьи в пос. Песочный Курортного р-на и на момент когда нужно было выходить на отделку фасада возникли некоторые сложности. Первое: был конец лета, второе: бюджет был ограничен и было очень размытое понимание того, какой фасад в итоге хочется увидеть. Через несколько дней после встречи на объекте ребята прислали несколько визуализаций, которые нам очень понравились и стало понятно в каком направлении двигаться. Хочется отметить, что дизайнеры сразу поняли наши предпочтения и смогли в кратчайшие сроки дать решения, после чего работать было уже проще. Мы остались очень довольны работой компании АРХ1 под руководством Александра и готовы рекомендовать ее друзьям и знакомым))!",
   //        name: "Антон Рябцев",
   //        personDescription:
   //           "Директор сети магазинов и шоу-румов 'Готовим на огне', Санкт-Петербург.",
   //        img: "https://i.ibb.co/rGs9rtM/e52uyvt-1s.webp",
   //     },
   //     {
   //        description:
   //           "Воспользовался услугами Александра и его команды при решении проблемы по разработке рабочего проекта отделки фасада загородного дома вол Всеволожском районе Ленобласти. Дом большой, двухэтажный, достаточно сложной конфигурации и архитектуры. Несмотря на это команда профессиональных архитекторов и дизайнеров под руководством Александра великолепно справилась с поставленной задачей. Проект был завершен в кратчайшие сроки и на должном уровне. В настоящее время полным ходом идут работы по отделке фасада, при этом разработчиками проекта осуществляется авторский надзор за всеми производимыми работами. За все это огромное спасибо архитектурному бюро АРХ1 и его руководителю! С уважением, Дергачев Олег Васильевич, дер. Кирполье, Всеволожский район, Ленинградской области",
   //        name: "Дергачев Олег Васильевич",
   //        personDescription: "Директор ТЦ 'Звёздный', Санкт-Петербург.",
   //        img: "https://i.ibb.co/d6HK22S/d806b062c31db8c7cd79.webp",
   //     },
   //     {
   //        description:
   //           "На волне патриотических настроений решили заняться непрофильным для нас делом - построить качественный досугово-развлекательный туристический центр 'Открытые Кижи' в Карелии. Для начала нужен проект и я нашёл в интернете компанию 'Архитектура АРХ1'. Встретились с ребятами, всё обсудили, вроде устраивает. Но как обычно захотелось сравнить, найти альтернативу. Обратились к известному в узких кругах архитектурному бюро (иностранная компания, московское представительство), вроде тоже всё устроило, решили остановиться на нём. Сроки первого этапа оказались нарушены вдвое и выдали откровенную халтуру. Тогда мы вновь вернулись к 'Архитектуре', я позвонил Александру и предложил возобновить переговоры. Ещё раз всё обсудили, подписали контракт. Получили проект вовремя и результат превзошёл наши ожидания. Рады, что воспользовались услугами компании 'Архитектура', спасибо огромное Александру и его команде! Рекомендуем к сотрудничеству всем ) И сами ещё будем обращаться... Председатель совета директоров ООО 'Группа Компаний ТрансБалт' Иванов Сергей.",
   //        name: "Иванов Сергей",
   //        personDescription:
   //           "Председатель совета директоров ООО 'Группа Компаний ТрансБалт'",
   //        img: "https://i.ibb.co/rMHJyTZ/51.webp",
   //     },
   //  ]);
   const {isAuthSettings}  = useAuth()
   const {setIsOpen , setElSettings} = useAdminModalEdit()
   const data = [slide1, slide2, slide3];
   return (
      <section id={reviewsSection}>
         <div className="container">
            <p
               data-typeId={mainTitle.typeId}
               data-orderIndex={mainTitle.orderIndex}
               data-blockId={mainTitle.blockId}
               data-id={mainTitle.id}
               data-aos="fade-right"
               data-aos-duration="1500"
               className={title}
               onClick={() => {
                if (isAuthSettings.isAdmin) {
                   setIsOpen(true);
                   setElSettings(mainTitle);
                }
             }}
            >
               {mainTitle.value}
               {/* ОТЗЫВЫ О НАШЕЙ РАБОТЕ */}
            </p>
            <p
               data-aos="fade-right"
               data-aos-duration="1500"
               className={description}
            >
               <span
                  data-typeId={subtitle.typeId}
                  data-orderIndex={subtitle.orderIndex}
                  data-blockId={subtitle.blockId}
                  data-id={subtitle.id}
                  onClick={() => {
                    if (isAuthSettings.isAdmin) {
                       setIsOpen(true);
                       setElSettings(subtitle);
                    }
                 }}
               >
                  {subtitle.value}
               </span>
               {/* Реальные отзывы о нас в социальных сетях. <br /> */}
               <span
                  data-typeId={subtitleDesc.typeId}
                  data-orderIndex={subtitleDesc.orderIndex}
                  data-blockId={subtitleDesc.blockId}
                  data-id={subtitleDesc.id}
                  onClick={() => {
                    if (isAuthSettings.isAdmin) {
                       setIsOpen(true);
                       setElSettings(subtitleDesc);
                    }
                 }}
               >
                  {subtitleDesc.value}
               </span>
               {/* Нам важно получать обратную связь от наших клиентов. */}
            </p>
            <div
               data-aos="fade-left"
               data-aos-duration="1500"
               className={sliderContainer}
            >
               <Swiper
                  className={slider}
                  modules={[Navigation, EffectFade, Autoplay, Pagination]}
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
                  autoplay={{
                     delay: 5500,
                  }}
                  pagination={{
                     el: ".swiper-pagination",
                     clickable: true,
                  }}
               >
                  {data.map((review, index) => {
                     return (
                        <SwiperSlide key={index}>
                           <q
                              className={cardDescription}
                            
                              onClick={() => {
                                if (isAuthSettings.isAdmin) {
                                   setIsOpen(true);
                                   setElSettings(review.description);
                                }
                             }}
                           >
                              {review.description.value}
                           </q>
                           <hr className={cardLine} />
                           <div className={cardInfoContainer}>
                              <img
                                
                                 src={review.img.value}
                                 onClick={() => {
                                  if (isAuthSettings.isAdmin) {
                                     setIsOpen(true);
                                     setElSettings(review.img);
                                  }
                               }}
                                 alt="Не удалось отобразить картинку"
                              />
                              <div className={personContainer}>
                                 <p
                                    className={personName}
                                    
                                    onClick={() => {
                                      if (isAuthSettings.isAdmin) {
                                         setIsOpen(true);
                                         setElSettings(review.name);
                                      }
                                   }}
                                 >
                                    {review.name.value}
                                 </p>
                                 <p
                                    className={personDescription}
                                   
                                    onClick={() => {
                                      if (isAuthSettings.isAdmin) {
                                         setIsOpen(true);
                                         setElSettings(review.personDescription);
                                      }
                                   }}
                                 >
                                    {review.personDescription.value}
                                 </p>
                              </div>
                           </div>
                        </SwiperSlide>
                     );
                  })}
               </Swiper>
               <button
                  type="button"
                  className="image-swiper-button-next-small"
               ></button>
               <button
                  type="button"
                  className="image-swiper-button-prev-small"
               ></button>
            </div>
            <div
               data-aos="fade-left"
               data-aos-duration="1500"
               className={`swiper-pagination ${swiperPagination}`}
            ></div>
         </div>
      </section>
   );
};
export default ReviewsSection;
