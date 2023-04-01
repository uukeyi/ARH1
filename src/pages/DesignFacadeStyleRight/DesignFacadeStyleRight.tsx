import React from "react";
import { Link } from "react-router-dom";
import SingleProjectPageImgCover from "../../components/SingleProjectPageSection/SingleProjectPageSection";
import styles from "./DesignFacadeStyleRight.module.css";
const DesignFacadeStyleRight: React.FC = () => {
   const { linkContainer, list } = styles;
   return (
      <div style={{ height: "100%" }}>
         <SingleProjectPageImgCover
            titleText="Дизайн фасада дома в стиле Райта (прерий)"
            city="г. Пушкин, д. Александровская"
            houseSquare="320 м2"
            facadeSquare="410 м2"
            floors="2 этажа"
            date="Январь 2021"
            imgSrc="https://i.ibb.co/YdcXvFk/34-big-1.webp"
         >
            <div className='single-project-page-content-container'>
               <p className={linkContainer}>
                  <Link to={"/"}> Главная </Link> /
                  <Link to={"/ourProjects"}> &nbsp; Наши работы</Link> /
                  <span style={{ color: "rgb(235 51 73)" }}>
                     {" "}
                     &nbsp;Дизайн фасада дома в стиле Райта (прерий)
                  </span>
               </p>
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ДИЗАЙН ФАСАДА ДОМА В СТИЛЕ РАЙТА (ПРЕРИЙ)
               </p>
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-description"
               >
                  г. Пушкин, д. Александровская
                  <br /> Площадь дома:
                  <strong>320 м2</strong>
                  <br />
                  Площадь фасадов: <strong>410 м2</strong>
                  <br />
                  <br />
                  <br />
                  Задача: создать проект внешней отделки построенного здания.
                  Разработать дизайн фасада частного дома в стиле Райта
                  (прерий), проработать входную группу, террасу для отдыха и
                  основные конструктивные узлы для фасадных работ и утепления
                  дома.
                  <br />
                  <br />
                  Разрабатываем дизайн фасадов домов в стиле Райта, если дом на
                  стадии строительства или есть готовый проект, но фасады не
                  проработаны. Подробнее узнать о наших услугах по ссылке:
                  разработка дизайна фасадов дома, а также разработка проекта
                  ландшафтного дизайна. В конце статьи можно посмотреть список
                  других наших работ и ссылки на описание проектов.
               </p>
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ФАСАД В СТИЛЕ РАЙТА - ПРОЦЕСС ПРОЕКТИРОВАНИЯ
               </p>
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  На тот момент, когда к нам обратился заказчик, дом уже был
                  построен, основная архитектурная форма его была задана. Наша
                  задача состояла в том, чтобы проработать его внешний вид в
                  стилистике Райта или, как его ещё называл сам Ф.Л.Райт, в
                  стиле прерий. Также важно было разработать продуманные
                  конструктивные узлы стыковки облицовочного кирпича с несущими
                  стенами дома, их утепление в сложных местах и исключение
                  мостиков холода. Приступаем к разработке внешнего вида дома:
                  делаем первые наброски, продумываем детали, элементы фасада,
                  делаем визуализацию. Показываем результат.
               </p>
               <img
                  className="single-project-page-img"
                  style={{ marginTop: "20px" }}
                  src="https://i.ibb.co/YdcXvFk/34-big-1.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ВХОДНАЯ ГРУППА ДОМА В СТИЛЕ РАЙТА
               </p>
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  При разработке фасада, особое внимание уделили парадной
                  входной группе, которая не устраивала заказчика в предыдущем
                  проекте дома. В результате изменили её конфигурацию, сделав
                  более просторной, по-настоящему парадной, а в карнизную
                  подшивку навеса встроили функциональное освещение. Кровлю
                  входной группы полностью переделали: значительно увеличили её
                  в длину, добавили пропорциональные и достаточно массивные
                  колонны, расширили карнизные свесы, что свойственно стилю
                  Райта. Сами колонны сделали с выступающим кирпичом, чтобы
                  поддержать элементы основного фасада.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/BzsyvND/design-facade-house-wright-preriy-2.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Делаем подробные чертежи входной группы для строительства.
                  Показываем необходимые размеры, высоты, а также принцип самой
                  кладки колонн с габаритами.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/CmKVsVC/design-facade-house-wright-preriy-16.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Входная группа в дом со стороны боковых фасадов также с
                  размерами и с высотными отметками, показываем.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/F7kQxjS/design-facade-house-wright-preriy-17-1.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Подробно прорабатываем план входной группы, показываем размеры
                  и отметки высот.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/GJb52jB/design-facade-house-wright-preriy-15.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Дополнительно прорабатываем дизайн входной двери в дом,
                  определяемся с производителем, узнаём технические возможности
                  и параметры дверей. На самом деле, проработали несколько
                  вариантов с дизайном входной двери. Показываем два основных,
                  на которых остановились в итоге, предложив их для выбора
                  заказчику. Первый вариант предполагал размещение над входным
                  пространством светового окна, что даст дополнительное
                  освещение тамбуру. Такой вариант есть у производителя дверей,
                  которого выбрали для этого проекта. Второй вариант исключал
                  световое окно над дверным проёмом. Отличия были также во
                  внешнем виде дверей и фурнитуры. Объединяло оба входа -
                  наличие окон по бокам двери с двух сторон.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/41VFbzD/design-facade-house-wright-preriy-21.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ФАСАД ДОМА В СТИЛЕ РАЙТА - ВЫНУЖДЕННЫЙ КОМПРОМИСС
               </p>
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Одноэтажный пристрой дома, в котором располагается столовая,
                  уже был построен под крышу. Карнизный свес кровли над ним
                  строители сделали небольшим, заметно меньше, чем это принято в
                  стиле Райта. При проектировании дизайна фасадов, разработали
                  варианты визуализации с имеющимся карнизным свесом и с более
                  широким - для сравнения. Расширенный карниз больше вписывался
                  в стилистику дома, всё же тут пришлось пойти на компромисс и
                  оставить существующий вариант, не увеличивая его размер,
                  потому как на визуализации он смотрелся приемлемо и сносить
                  полностью крышу для переделывания заказчику не хотелось.
                  Показываем, как оставили в итоге.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/ZTYY7Rd/design-facade-house-wright-preriy-5.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Для сравнения карнизных свесов, можно посмотреть такой же
                  ракурс фасада дома, как на первой картинке в этой статье (в
                  самом верху страницы) и на картинке ниже, показываем.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/6DHjY2G/design-facade-house-wright-preriy-3.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Прорабатываем подробно чертежи одноэтажного пристроя дома,
                  показываем размеры и высотные отметки для строителей.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/d01DPg2/design-facade-house-wright-preriy-18.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Боковые фасады одноэтажного пристроя дома также подробно
                  прорабатываем с размерами и пояснениями, показываем.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/sbcdBSV/design-facade-house-wright-preriy-19.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ФАСАД В СТИЛЕ РАЙТА - УСТРОЙСТВО ТЕРРАСЫ
               </p>
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Со стороны заднего фасада дома запроектировали открытую
                  террасу для отдыха, на которую можно выйти сразу из столовой.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/4pm5JZz/design-facade-house-wright-preriy-8.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Терраса протягивается на ширину всего дома по фасаду со
                  стороны сада. <br />
                  <br />
                  Глубину террасы рекомендуем делать не менее трёх метров для
                  более удобной эксплуатации и комфортного отдыха.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/JK0qwXh/design-facade-house-wright-preriy-7.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ФАСАДЫ ДОМА В СТИЛЕ РАЙТА (ПРЕРИЙ)
               </p>
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Для более удобного понимания по расположению архитектурных
                  элементов дома делаем фасад в плоскости с высотными отметками.
                  Вот как это выглядит. Фасад дома со стороны двора и террасы.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/kxDq36x/design-facade-house-wright-preriy-9.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Главный фасада дома со стороны парадной входной группы.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/G2BSBFR/design-facade-house-wright-preriy-11.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Боковой фасад №1.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/zxNy3Jm/design-facade-house-wright-preriy-10.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Боковой фасад №2.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/WscYkhb/design-facade-house-wright-preriy-12.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  В плане дом имеет интересную конфигурацию. Вот как всё это
                  выглядит.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/pnnmPWR/design-facade-house-wright-preriy-14.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  План кровли не менее интересный и сложный в построении
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/tHf6Cbr/design-facade-house-wright-preriy-13.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  СПЕЦИФИКАЦИЯ ДИЗАЙНА ФАСАДОВ ДОМА В СТИЛЕ РАЙТА
               </p>
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Важным моментом любого проектирования является подбор
                  материала, который есть на рынке, у реального производителя.
                  Делаем подборку по производителям всех архитектурных
                  элементов, участвующих в проекте дизайна фасадов дома:
               </p>
               <ul className={list}>
                  <li>кирпич</li>
                  <li>цокольный камень</li>
                  <li>входная дверь</li>
                  <li>окна</li>
                  <li>отливы для окон</li>
                  <li>светильники</li>
                  <li>карнизная подшивка</li>
                  <li>водосточная система</li>
                  <li>кровельная черепица</li>
                  <li>материал для отделки пола террасы</li>
                  <li>ступени и плитка входной группы</li>
                  <li>архитектурный пояс</li>
               </ul>
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  <strong style={{ fontFamily: "Roboto" }}>
                     Окончательная визуализация фасадов дома делается уже на
                     основе подобранного материала. &nbsp;
                  </strong>
                  Результаты работы вносим в сводную ведомость отделочного
                  материала. Делимся, показываем, как это выглядит.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/Rgf2tfd/design-facade-house-wright-preriy-24-1.webp"
                  alt="Не удалось отобразить картинку"
               />
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/jzmdGVx/design-facade-house-wright-preriy-25-1-1.webp"
                  alt="Не удалось отобразить картинку"
               />
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/M8yMz61/design-facade-house-wright-preriy-26-1.webp"
                  alt="Не удалось отобразить картинку"
               />
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/8McMrG8/design-facade-house-wright-preriy-27-1.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Дополнительно подробно разрабатываем конструктивные узлы по
                  утеплению стен и фундамента дома, а также узел по расширению
                  фундаментной плиты для опоры на неё облицовочного кирпича.
                  Показываем.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/W308yM3/design-facade-house-wright-preriy-22.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  И ещё один показываем.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/TKXJfyt/design-facade-house-wright-preriy-23.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Делаем сводную схему элементов отделки фасадов дома на 3D
                  визуализации для более удобного изучения предстоящих работ.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/WK7z0LB/design-facade-house-wright-preriy-20.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Формируем окончательный альбом проекта по дизайну фасада дома
                  в стиле Райта (стиль прерий) и сдаём заказчику.
               </p>
            </div>
         </SingleProjectPageImgCover>
      </div>
   );
};

export default DesignFacadeStyleRight;
