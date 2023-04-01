import React from "react";
import SingleProjectPageImgCover from "../../components/SingleProjectPageSection/SingleProjectPageSection";
import { Link } from "react-router-dom";
import styles from "./DesignFacadePrivateHousePeterhof.module.css";
const DesignFacadePrivateHousePeterhof: React.FC = () => {
   const { linkContainer } = styles;

   return (
      <div style={{ height: "100%" }}>
         <SingleProjectPageImgCover
            titleText="Дизайн фасада частного дома"
            city="Санкт-Петербург, Петергоф"
            houseSquare="270 м2"
            facadeSquare="340 м2"
            floors="2 этажа"
            date="Март 2021"
            imgSrc="https://i.ibb.co/qdFd593/40-big-min-1.webp"
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
                  Санкт-Петербург, Петергоф
                  <br /> Площадь дома:
                  <strong>270 м2</strong>
                  <br />
                  Площадь фасадов: <strong>340 м2</strong>
                  <br />
                  <br />
                  Задача: разработать дизайн фасада частного дома, который
                  находится на стадии строительства в Санкт-Петербурге [СПб] г.
                  Петергоф. Необходимо привязать архитектуру дома к уже
                  построенному банному комплексу на участке, чтобы всё
                  смотрелось гармонично. Так как на протяжении длительного
                  времени разрабатываем дизайн фасадов, если дом построен,
                  строится или только планируется к строительству, то уже
                  сталкивались с подобной задачей. Посмотреть другие наши работы
                  и узнать подробнее об услуге: разработка проекта фасадов дома
                  можно по ссылке. Реальные отзывы о нас можно посмотреть в ВК и
                  соцсетях по ссылке внизу страницы.
               </p>
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  РАЗРАБОТАТЬ ДИЗАЙН ФАСАДА ЧАСТНОГО ДОМА - ПРОЦЕСС
               </p>
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Стояла задача разработать дизайн фасада частного дома в
                  привязке к уже имеющемуся строению на территории в виде здания
                  бани. Дом находился в стадии строительства без крыши и без
                  окон. В этой ситуации больше свободы в плане проектирования,
                  чем тогда, когда дом уже полностью построен. А это исходные
                  данные для реализации проекта - баня, построенная в английском
                  стиле. Этот стиль – микс строгости, изысканности и
                  практичности. Потому дом, должен соответствовать этим
                  критериям и гармонично смотреться с уже имеющимся строением.
               </p>
               <img
                  className="single-project-page-img"
                  style={{ marginTop: "20px" }}
                  src="https://i.ibb.co/0XfP9km/1-min-2.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  И сам дом. Дело в том, что заказчик начал строительство,
                  предварительно не разработав дизайн фасада, из-за чего были
                  определённые сложности. Но для нас сложный проект - синоним
                  интересного. Потому с азартом приступили к работе
               </p>
               <img
                  className="single-project-page-img"
                  style={{ marginTop: "20px" }}
                  src="https://i.ibb.co/FWsb3yp/2-min.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Если посмотреть на главный фасад, то можно увидеть окна,
                  ставшие одной из главных задач, требовавшей решения. На первом
                  этаже три окна, на втором - два, и они асимметрично
                  расположены относительно друг друга. Нужно было грамотно их
                  вписать в новый облик строения.
                  <br />
                  <br />
                  Со стороны заднего фасада тоже присутствовала асимметрия.
                  Здесь окна находились на разных уровнях. Что добавляло
                  сложности к необычной архитектуре дома.
                  <br />
                  <br />
                  Первый раз приехали на объект в феврале. Сделали необходимые
                  замеры, все сфотографировали, получили от заказчика примеры
                  домов, которые ему нравятся. И начали разрабатывать дизайн.
                  <br />
                  <br />
                  Через несколько дней отправили заказчику два варианта фасадов,
                  потому как сомневались, какому именно отдать предпочтение. Он
                  выбрал один из них и внес корректировки. После внесения
                  изменений через неделю проект был согласован.
                  <br />
                  <br />В процессе проработали несколько элементов дома, так
                  появилась парадная входная группа, где предусмотрели
                  функциональную подсветку.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/L0w9zfR/3-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  А для теплых летних вечеров в проекте предусмотрели террасу,
                  которая была утверждена в том виде, как на картинке ниже.
                  Предполагаем, что она станем местом притяжения всей семьи.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/pXbHX6p/4-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  В едином комплексе с террасой запроектировали клумбу для
                  цветов многолетников и однолетних видов - по настроению и
                  вкусу.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/xSL0mMt/5-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  В ходе работ подобрали цветовые решения, «одели» дом в светлые
                  пастельные тона.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/Rb2R4G9/6-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Добавили в дизайн архитектурный пояс. Также предусмотрели по
                  периметру фасада функциональную и архитектурную подсветку.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/rwyM6NY/7-min.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  А вот и те самые асимметричные окна на заднем и боковом
                  фасадах.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/ThR17cN/8-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Со стороны главного фасада асимметрия окон также
                  прослеживается, но заметьте, что бросающийся в глаза на стадии
                  строительства дома дисбаланс в геометрии окон, незаметно
                  растворяется в подобранной цветовой гамме кирпича. Это было
                  одним из ключевых решений.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/j8qJnrd/9-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Можно увидеть, что у витражных окон второго этажа появились
                  ограждения, получился французский балкон. Сделали это для
                  безопасности жителей дома. Проработали визуализацию дома со
                  всех сторон. Но перед этим согласовали с заказчиком цветовую
                  гамму и сформировали подборку реальных материалов. Дали
                  рекомендации по кровле, материалам отделки, а также по их
                  монтажу. На следующих фотографиях показываем плоские фасады.
                  Это инструкция - палочка-выручалочка для строителей. Она нужна
                  для удобства монтажа во время проведения строительных работ
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/WzGxFvY/10-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Можно заметить, что углы дома рельефно выступают за счёт
                  кладки кирпича - это было одно из пожеланий заказчика. Ещё
                  предусмотрели вывод розетки под карнизном для установки
                  новогоднего освещения. Показываем задний фасад.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/Pgp5XgF/11-min.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Боковые фасады дома для полноты картины.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/pwvcSfS/12-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  И с другой стороны дома
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/yW3gwCc/13-min.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Для понимания показываем габариты пристраиваемой террасы и
                  входной группы в плане.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/wsx4RSF/14-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Далее переходим к рассмотрению кровли. Все хорошо видно на
                  следующей картинке. На макете показаны все уклоны и отметки.
                  Кровли не было на стадии строительства, потому её
                  проектировали заново.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/p1Zg4gf/15-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  А вот и навигатор всего проекта. Подробная карта по фасаду,
                  какой материал, где находится. Сразу становится вся предельно
                  ясно.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/zSdJ2b4/16-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  По традиции далее идет ведомость строительных и отделочных
                  материалов. В ней указали артикул материала, цвет,
                  производителя, общий объем материалов. А еще дали отдельные
                  узлы с размерами..
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/wYmf1RP/17-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/7bjF8S3/18-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Спецификация отдельных элементов отделки фасадов дома.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/6ghQkbq/20-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Элементы подсветки фасадов и другие архитектурные детали.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/jJryBsg/21-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/jJryBsg/21-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Показываем принципиальные узлы для отделки фасадов с
                  размерами.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/Zg5DTgL/23-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ДИЗАЙН ФАСАДА ЧАСТНОГО ДОМА - ГОТОВЫЙ ПРОЕКТ
               </p>
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Подходим к завершающей стадии. Дизайн фасада частного дома
                  готов, проект почти закончен, осталось показать примеры
                  отделки подобранным материалом реальных домов, чтобы сложилась
                  полноценная картина у заказчика. Потому показываем подборку,
                  которую сделали по камню с расчётом объёма в зависимости от
                  производителя, а также стоимость с учётом доставки на
                  строительную площадку.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/9p8g8Wy/24-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Вместе с подборкой показываем, как материал смотрится в
                  реальности уже на построенных домах.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/SNc5WDp/25-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/PWSvbQB/26-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Согласовываем с заказчиком детали, подписываем акт приёмки,
                  проект готов. Стоит показать ещё один промежуточный вариант,
                  от которого в итоге отказались. Это был достаточно сырой
                  дизайн, но покажем его в сравнении с незавершённым
                  строительством.
               </p>

               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/C55CPfw/27-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  И в завершенни картинка с согласованным фасадом дома и благоустройством участка.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/qdSHPRX/28-min.webp"
                  alt="Не удалось отобразить картинку"
               />
              
             
            </div>
         </SingleProjectPageImgCover>
      </div>
   );
};

export default DesignFacadePrivateHousePeterhof;
