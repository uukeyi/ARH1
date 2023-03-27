import React from "react";
import SingleProjectPageImgCover from "../../components/SingleProjectPageSection/SingleProjectPageSection";
import { Link } from "react-router-dom";
import styles from "./DesignFacadePrivateHouseSand.module.css";

const DesignFacadePrivateHouseSand: React.FC = () => {
   const { linkContainer } = styles;
   return (
      <div style={{ height: "100%" }}>
         <SingleProjectPageImgCover
            titleText="Дизайн фасада частного дома"
            city="Санкт-Петербург"
            houseSquare="280 м2"
            facadeSquare="350 м2"
            floors="2 этажа"
            date="посёлок Песочный, Декабрь 2018"
            imgSrc="https://i.ibb.co/XWMBWsJ/1-min-2.webp"
         >
            <div className="single-project-page-content-container">
               <p className={linkContainer}>
                  <Link to={"/"}> Главная </Link> /
                  <Link to={"/ourProjects"}> &nbsp; Наши работы</Link> /
                  <span style={{ color: "rgb(235 51 73)" }}>
                     {" "}
                     &nbsp;Дизайн фасада частного дома
                  </span>
               </p>
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ДИЗАЙН ФАСАДА ЧАСТНОГО ДОМА
               </p>
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-description"
               >
                  Санкт-Петербург, посёлок Песочный
                  <br /> Площадь дома:
                  <strong>280 м2</strong>
                  <br />
                  Площадь фасадов: <strong>350 м2</strong>
                  <br />
                  <br />
                  Задача: разработать проект дизайна фасада уже построенного
                  дома. Необходима новая свежая идея отделки фасадов из
                  современного материала в сочетании камня и штукатурки. Нужно
                  сказать, мы специализируемся на разработке дизайн проектов
                  фасадов домов, если дом построен, находится на стадии
                  строительства или ещё не построен и есть готовый проект, но
                  фасады не проработаны. Узнать подробнее и заказать дизайн
                  фасадов дома можно по ссылке. Также вам может быть интересна
                  близкая к этому тематика: проектирование загородных домов.
               </p>
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  <strong>ПРОЕКТ ДИЗАЙНА ФАСАДА ЧАСТНОГО ДОМА - ПРОЦЕСС</strong>
               </p>
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Скажем честно - мы были третьими по счёту архитекторами у
                  заказчика. Оказалось, что на тот момент, как заказать у нас
                  проект, владелец дома уже успел поработать с двумя разными
                  дизайнерами, заплатив каждому из них за работу, но при этом
                  получившийся результат его не устраивал ни в каком виде.
                  Начиная работу с нами, заказчик испытывал вполне объяснимое
                  опасение, что и наше сотрудничество может получиться не
                  удачным. Забегая вперёд скажу, что после этого дома мы
                  разработали ещё три различных проекта для семьи заказчика,
                  один из них: проект ландшафтного дизайна участка, можно
                  посмотреть по ссылке. После выполненной работы, доверие
                  заказчика выросло настолько, что для его семьи разработали
                  дополнительно не только ряд проектов, но и в настоящий момент
                  ведём их строительство, а наши отношения переросли в
                  дружеские. Но начнём с самого начала. Итак, то, что мы
                  увидели, приехав на участок, представляло собой серое
                  строение, сквозь которое проглядывалось очертание жилого дома,
                  окруженного кучей строительного мусора и горой из утеплителя.
               </p>
               <img
                  className="single-project-page-img"
                  style={{ marginTop: "20px" }}
                  src="https://i.ibb.co/SB7KcFN/2-min.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Показываем с других ракурсов
               </p>
               <img
                  className="single-project-page-img"
                  style={{ marginTop: "20px" }}
                  src="https://i.ibb.co/Dfj3bWj/3-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ДИЗАЙН ФАСАДОВ ЧАСТНОГО ДОМА - ПОИСК
               </p>
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Разработка проекта дизайна фасадов начинается с формирования
                  представления внешнего вида дома, который хочет видеть
                  заказчик. Изначально заказчик не знал точно, что хочет,
                  удалось получить лишь примерное представление о том, каким он
                  видит будущий дизайн фасадов дома, а также то, что отделка
                  планируется в светлых тонах. Начинаем наши поиски экстерьера
                  дома. Для этого разрабатываем несколько вариантов для
                  обсуждения. Внешне фасады сильно отличались друг от друга, их
                  объединял только светлый тон при выборе цветовых решений.
                  Показываем лишь часть из разработанных вариантов, вынесенных
                  на обсуждение с заказчиком.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/0fkt6Vr/4-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  В общем, вариантов было не мало и ещё больше дискусий.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/jWHMbDf/5-min.jpg"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Параллельно с проработкой вариантов, подбирали материал
                  будущей отделки фасадов.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/8r23n5Z/6-min.jpg"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  В результате обсуждений, количество вариаций начинает
                  уменьшаться, переходя в качественный показатель, а мы с
                  заказчиком приходим к единому пониманию в поисках искомого
                  варианта отделки фасада. В процессе разработали дизайн
                  фасадов, парадную входную группу в дом, запасной выход, дизайн
                  террасы, цвет и материал карнизной подшивки, а также
                  водосточной системы. Показываем вариант, на котором
                  остановились, докрутив до нужного результата.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/bRNDMG6/7-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Видовой кадр дизайна фасада со стороны балкона в доме.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/9vBL9tB/8-min.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  По периметру фасада разместили светильники "ап-даун", которые
                  создают приятную атмосферу и интересно подчёркивают текстуру
                  материала в темное время суток.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/7kM0r23/9-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Элементы системы кондиционирования воздуха расположили на
                  заднем фасаде дома, скрыв их декоративной решёткой в едином
                  стиле с ограждением балкона и террасы.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/nz7B3z3/10-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Показываем высотные отметки по фасадам для удобства его
                  отделки в дальнейшем.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/ZcMg0h4/11-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Высотные отметки необходимо сделать со всех сторон дома,
                  потому как элементы его отделки отличаются и могут находиться
                  в разных уровнях. Показываем фасад с отметками с другой
                  стороны.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/VVknvkD/12-min.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Более подробно показываем отдельные элементы фасада, требующие
                  пояснений, с размерами. Чем больше информации будет заложено в
                  проекте фасадов, тем меньше в дальнейшем вопросов возникнет на
                  стройке в процессе реализации.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/Xbhq0Jc/13-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ДИЗАЙН ФАСАДОВ ЧАСТНОГО ДОМА - СОСТАВ ПРОЕКТА
               </p>
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  В конце по традиции рубрика "ответы на популярные вопросы".
                  Итак, что же входит в проект дизайна фасада загородного дома?
                  Ответ зависит от того, какие задачи стоят на данном этапе, а
                  состав проекта корректируется уже в соответствии с целями
                  работ. В состав проекта, как правило, входит: подбор аналогов,
                  разработка принципиальных цветовых решений фасадов, подбор
                  материалов и ведомость отделки с обозначением производителей,
                  3D визуализация дома с реальным, подобранным материалом,
                  плоские фасады дома со всех сторон со строительными отметками.
                  В проект также может входить разработка узловых элементов
                  фасада: утепление, облицовка материалом, крепление
                  декоративных элементов, примыкание карнизов, водосточной
                  системы. При необходимости отдельно прорисовываем декоративные
                  элементы внешней отделки дома. Для пример, показываем состав
                  этого проекта.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/MBzvzcF/14-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ОТДЕЛКА ФАСАДА ДОМА ПО ДИЗАЙН ПРОЕКТУ
               </p>
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Показываем фотографии рабочего процесса отделки фасада дома по
                  проекту. Сейчас готовим более подробную статью. Расскажем про
                  особенности, а также сложности, с которыми столкнулись в
                  процессе строительства.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/rcqn8Rs/15-min.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  В настоящий момент отделка фасада дома полностью завершена,
                  ведём ландшафтные работы по благоустройству участка. В
                  ближайшее время выложим ссылку с описанием процесса работ по
                  дому и территории. Фотографии авторов проекта в процессе
                  строительства, мощение почти выполнено, скоро приедет газон.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/h8kcQqJ/16-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               
            </div>
         </SingleProjectPageImgCover>
      </div>
   );
};

export default DesignFacadePrivateHouseSand;
