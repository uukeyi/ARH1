import React from "react";
import styles from "./DesignFacadeVillaticHouse.module.css";
import SingleProjectPageImgCover from "../../components/SingleProjectPageSection/SingleProjectPageSection";

import { Link } from "react-router-dom";
const DesignFacadeVillaticHouse: React.FC = () => {
   const { linkContainer } = styles;

   return (
      <div style={{ height: "100%" }}>
         <SingleProjectPageImgCover
            titleText="Дизайн фасадов загородного дома"
            city="Санкт-Петербург, коттеджный посёлок 'Охтинский Парк'"
            houseSquare="350 м2"
            facadeSquare="450 м2"
            floors="2 этажа"
            date="Январь 2018"
            imgSrc="https://i.ibb.co/s9WyFgf/6-big-1.webp"
         >
            <div className="single-project-page-content-container">
               <p className={linkContainer}>
                  <Link to={"/"}> Главная </Link> /
                  <Link to={"/ourProjects"}> &nbsp; Наши работы</Link> /
                  <span style={{ color: "rgb(235 51 73)" }}>
                     {" "}
                     &nbsp;Дизайн фасадов загородного дома
                  </span>
               </p>
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ДИЗАЙН ФАСАДОВ ЗАГОРОДНОГО ДОМА
               </p>
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-description"
               >
                  Санкт-Петербург, коттеджный посёлок "Охтинский Парк"
                  <br /> Площадь дома:
                  <strong>350 м2</strong>
                  <br />
                  Площадь фасадов: <strong>450 м2</strong>
                  <br />
                  <br />
                  Задача: Разработать проект дизайна фасада дома в стиле Фрэнка
                  Ллойда Райта. Необходима новая свежая идея отделки фасадов с
                  учётом современного видения дизайна внешнего вида (экстерьера)
                  дома.​
               </p>
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ДИЗАЙН ФАСАДА ЧАСТНОГО ДОМА - ПРОЦЕСС
               </p>
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Так получилось, что дом почти построен, а вот отделка внешнего
                  вида дома, которая предложена в предыдущем проекте, Заказчика
                  не устраивала никак. Первым делом выезжаем на местность.
                  Обмеряем фасады, снимаем высоты дома для сопоставления их с
                  проектными величинами. Составляем техническое задание вместе с
                  Заказчиком и начинаем новый проект. Кстати, узнать подбробнее
                  о нашей услуге и заказать дизайн фасада дома можно в разделе
                  "наши направления" в шапке сайта.
               </p>
               <img
                  className="single-project-page-img"
                  style={{ marginTop: "20px" }}
                  src="https://i.ibb.co/pwZzmJN/1.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Фасад, который был заложен в проекте до того, как мы
                  познакомились с Заказчиком и, который его никак не устраивал
               </p>
               <img
                  className="single-project-page-img"
                  style={{ marginTop: "20px" }}
                  src="https://i.ibb.co/FBYPYT5/foto-1-1.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Подбираем стилевые аналоги дизайна фасадов.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/Z1tttJt/foto-2.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  В поле зрения теперь попадаются исключительно дома с
                  соответствующим стилистическим направлением отделки и дизайна
                  фасадов в стиле Райта. Фотографируем, замечаем особенности и
                  нюансы. Встречаем также много непродуманных домов в этой
                  стилистике, фотографии по соображениям эстетической чистоты не
                  выкладываем.
                  <br />
                  <br />
                  Устраиваем мозговой штурм, делаем первые наброски дизайна
                  фасада от руки, ищем основную идею.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/H2mcwhf/foto-4-2.webp"
                  alt="Не удалось отобразить картинку"
               />
               <img
                  style={{ marginTop: "0px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/YZN8mNx/foto-4-3.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Выбираем лучшие эскизы, рисуем наброски дизайна и создаём
                  первые несколько вариантов отделки фасадов.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/WP6QWGv/foto-5.webp"
                  alt="Не удалось отобразить картинку"
               />
               <img
                  style={{ marginTop: "0px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/86kws5X/foto-6.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Заказчик берёт паузу, вносит корректировки. Добавляем
                  горизонтальные линии - элементы отделки (архитектурный пояс)
                  на фасад, оперативно разрабатываем второй вариант дизайна
                  фасадов дома
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/thQhRjs/foto-7.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Корректируем с Заказчиком эскиз, решаем, что хочется всё-таки
                  отделку фасада видеть в более темных тонах (под тёмную крышу),
                  а не в светлых, как хотели ранее. Получаем третий вариант
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/0GyxJF0/foto-8.webp"
                  alt="Не удалось отобразить картинку"
               />
               <img
                  style={{ marginTop: "0px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/nrsmjSL/foto-9.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Да, отделка фасада дома должна быть красива, современна и
                  очень важно – практична! На белых горизонтальных элементах,
                  заложенных на этом этапе работы в проекте дизайна фасада дома
                  со временем образуются некрасивые разводы, потому также меняем
                  светлые элементы отделки фасадов на более практичные - темные
                  (горизонтальные полосы). Также немного меняем варианты
                  подсветки фасадов дома и решаем убрать подсветку карнизов
                  крыши (выше второго этажа). Получаем четвёртый вариант.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/bmWzLT0/foto-10.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Корректируем, по заданию Заказчика делаем цвет кирпича ещё
                  темнее и получаем пятый вариант дизайна фасада.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/ZxBm7C3/foto-11.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  С цветовыми решениями и основными нюансами внешнего вида
                  определились, теперь подбираем реальный материал для отделки
                  фасадов дома.
                  <br />
                  <br />
                  Выбираем облицовочный кирпич из коллекции реального
                  производителя кирпича.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/yQx11pW/foto-9-2.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Согласовываем материал определённого производителя и
                  разрабатываем шестой вариант дизайна фасада с отделкой из
                  выбранного реального гладкого кирпича.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/WtgbsKp/foto-12.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Обсуждаем с заказчиком данный вариант, приходим к выводу, что
                  хочется сделать ещё темнее. Это возможно достичь, если
                  применить для отделки фасада кирпич из той же выбранной
                  коллекции только с рельефной структурой граней, так как при
                  той же цветовой гамме сам кирпич на фасаде дома будет
                  смотреться темнее за счёт того, что меньше отражает свет
                  благодаря своей шероховатой поверхности. Для удобства выбора
                  разрабатываем варианты отделки фасада дома из трёх различных
                  типов кирпича с примерами уже построенных домов, для большей
                  наглядности.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/1nkMcCD/13-1.jpg"
                  alt="Не удалось отобразить картинку"
               />
               <img
                  style={{ marginTop: "0px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/N2dFQZq/14.jpg"
                  alt="Не удалось отобразить картинку"
               />
               <img
                  style={{ marginTop: "0px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/3B7VxkV/15.jpg"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Получаем от Заказчика подтверждающее: "Да, прекрасно. Первый
                  вариант наш".
                  <br />
                  <br />
                  Остаётся единственный вопрос, который необходимо решить на
                  этом этапе. При строительстве дома по его периметру
                  предварительно заложили расширение фундамента под облицовочный
                  кирпич шириной 180 мм, а в месте, где находятся колонны
                  необходимый выступ был всего 40 мм, что не достаточно для
                  облицовочного кирпича выбранного размера в 85 мм шириной.
                  Потому решаем сделать отделку колонн из натурального камня,
                  поддержав тем самым материал отделки цоколя дома.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/YQM8Bvc/foto-16.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Согласовываем этот окончательный вариант. Новый дизайн фасада
                  дома разработан полностью. Приступаем к расчёту всего
                  материала, необходимого для отделки фасада в соответствии с
                  проектом по фактическим размерам, которые замерили во время
                  первого выезда на объект. В процессе расчёта материала
                  Заказчик просит разработать дополнительно три варианта отделки
                  фасада дома, отличающихся цветом (тоном) деревянной отделки
                  фасадных элементов. Получаем следующие варианты..
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/g68Z8dG/foto-17.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  На основании расчётов составляем ведомость материалов для
                  отделки фасада дома.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/0Q6K0rM/foto-20.webp"
                  alt="Не удалось отобразить картинку"
               />
               <img
                  style={{ marginTop: "0px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/ZMdW9JH/foto-21.webp"
                  alt="Не удалось отобразить картинку"
               />
               <img
                  style={{ marginTop: "0px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/Cw1r7B1/foto-22.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Прорабатываем видовые кадры дизайна фасада дома с разных
                  сторон
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/KjjZsSj/foto-23.webp"
                  alt="Не удалось отобразить картинку"
               />
               <img
                  style={{ marginTop: "0px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/W6rx1xP/foto-24.webp"
                  alt="Не удалось отобразить картинку"
               />
               <img
                  style={{ marginTop: "0px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/MCK2gBh/foto-26.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Делаем фотомонтаж дома на участке строительства.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/0D5kWqX/foto-27.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Формируем альбом проекта дизайна фасада дома со всей
                  необходимой рабочей документацией и сдаём работу.
                  Дополнительно разрабатываем схему отделки фасада в удобной
                  наглядной форме.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/K9ZVKB5/foto-28.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Для того, чтобы Заказчику при подборе материала было удобно
                  самостоятельно делать выбор специально для его дома, в
                  качестве подарка, разрабатываем буклет отделочных материалов.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/GpdKvGh/29.jpg"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ОТДЕЛКА ФАСАДОВ ДОМА ПО ДИЗАЙН ПРОЕКТУ
               </p>
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Обновляем информацию об этом проекте. На сегодняшний день
                  проект дома полностью реализован. В процессе мы вносили
                  изменения и разработали ещё один вариант фасада, который и был
                  построен. Вот что получилось в итоге.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/qFs688v/23.webp"
                  alt="Не удалось отобразить картинку"
               />
               <img
                  style={{ marginTop: "0px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/ZxBxJcg/imag2507-3.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Даже в таком крупном городе как Санкт-Петербург, где и был
                  реализован этот проект, нам пришлось ждать поставку кирпича на
                  участок порядка трёх недель. Потому всегда говорю о том, что
                  строительный материал нужно заказывать заранее, чтобы не
                  тормозить производство работ в ожидании поставки. Важно, мы
                  настояли на том, чтобы кирпич для облицовки фасадов дома был
                  поставлен из одной партии с завода, чтобы исключить возможные
                  расхождения в цвете даже на один тон, не смотря на
                  получившийся рисунок кирпича в завершённом виде. Спасибо, что
                  дочитали до конца. От меня вам персональный лайк.
               </p>
            
            </div>
         </SingleProjectPageImgCover>
      </div>
   );
};
export default DesignFacadeVillaticHouse;
