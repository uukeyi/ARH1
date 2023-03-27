import React from "react";
import SingleProjectPageImgCover from "../../components/SingleProjectPageSection/SingleProjectPageSection";
import { Link } from "react-router-dom";

import styles from "./DesignFacadeStone.module.css";

const DesignFacadeStone: React.FC = () => {
   const { linkContainer } = styles;

   return (
      <div style={{ height: "100%" }}>
         <SingleProjectPageImgCover
            titleText="Дизайн фасада дома из камня"
            city="Санкт-Петербург, д. Кирполье"
            houseSquare="350 м2"
            facadeSquare="450 м2"
            floors="2 этажа"
            date="Сентябрь 2018"
            imgSrc="https://i.ibb.co/Ny37RtJ/1-min-2.webp"
         >
            <div className="single-project-page-content-container">
               <p className={linkContainer}>
                  <Link to={"/"}> Главная </Link> /
                  <Link to={"/ourProjects"}> &nbsp; Наши работы</Link> /
                  <span style={{ color: "rgb(235 51 73)" }}>
                     {" "}
                     &nbsp;Дизайн фасада дома из камня
                  </span>
               </p>
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ДИЗАЙН ФАСАДА ДОМА ИЗ КАМНЯ
               </p>
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-description"
               >
                  Санкт-Петербург, д. Кирполье
                  <br /> Площадь дома:
                  <strong>350 м2</strong>
                  <br />
                  Площадь фасадов: <strong>450 м2</strong>
                  <br />
                  <br />
                  <br />
                  Мы специализируемся на проектировании фасадов домов из
                  различного материала, на сегодня создали более 50 проектов
                  домов с фасадами из натурального или искусственного камня.
                  Рассказываю про очередной проект. Итак, поехали.
               </p>
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ДИЗАЙН ФАСАДА ДОМА ИЗ КАМНЯ
               </p>
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Задача: Для уже построенного дома разработать проект дизайна
                  фасада дома из камня. Необходима новая свежая идея отделки
                  фасадов с учётом современного видения дизайна внешнего вида
                  (экстерьера) дома.​
               </p>
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ФАСАД ДОМА ИЗ КАМНЯ - ОПИСАНИЕ ПРОЕКТА
               </p>
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  На момент начала проектирования фасада, дом уже был построен и
                  в нём велась внутренняя отделка. Вот таким мы увидели дом в
                  первый раз. Карнизная подшивка и кровля были уже полностью
                  готовы, потому в проекте нужно было привязываться к уже
                  готовым элементам строительства.
               </p>
               <img
                  className="single-project-page-img"
                  style={{ marginTop: "20px" }}
                  src="https://i.ibb.co/ZGJjRph/2-min.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Заказчика не устраивал предложенный предыдущим архитектором
                  фасад дома, в котором было много непрактичных элементов и в
                  целом не нравился стиль фасада и материал его отделки. Это
                  было здание, напоминающее по архитектуре дом мексиканского
                  барона. Данное решение было предложено в предыдущем проекте.
                  Было ощущение, что сейчас из его окон появится Кончита и будет
                  звать на обед Хуана. Показываем его.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/0tCRsn7/3-min-1.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  В процессе проектирования разработали несколько вариантов
                  дизайна фасадов. Мы искали фасад, который больше всего
                  подойдёт дому. Проработали гораздо больше вариантов для себя,
                  заказчик увидел лишь часть из них. Показываем некоторые эскизы
                  тут.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/1QHQgmC/4-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Из разработанных вариантов фасада утверждаем оптимальный,
                  максимально удовлетворяющий требованиям заказчика.
                  Прорабатываем фасады дома с четырёх сторон, ставим
                  строительные отметки высот и необходимые размеры.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/2Y2S5nM/5-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Дизайн фасада дома с противоположной стороны от главного
                  фасада. Также с размерами и высотными отметками.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/Wp3kWWH/6-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Дизайн фасада дома - боковой фасад со стороны главного входа.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/HYCc5xT/7-min.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Когда материал отделки фасадов был утверждён, возникла
                  необходимость в разработке освещения фасадов: функционального
                  и декоративного. Мы подобрали светильники для фасадов,
                  продумали схему их включения и выключения. Некоторые
                  осветительные приборы могут включаться как из дома, так и из
                  бани через проходной выключатель. Это удобно, когда отдыхаете
                  в бане, например, не нужно идти в дом, чтобы включить
                  подсветку фасада дома или освещение участка. Теперь всё это
                  можно включить/выключить из разных точек. При этом, если
                  включили свет в бане, то выключить его можно уже с другой
                  локации, например, из дома.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/Lptqrvn/8-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Разработанную подсветку показываем на фасадах дома с разлчных
                  сторон. Делаем необходимые пояснения для удобства.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/zQnR4tn/10-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Показываем подсветку фасадов со всех сторон с необходимыми
                  отметками высот и размерами.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/sjg7hR6/11-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Показываем в ведомости подобранные светильники с вариациями
                  цен на них, обясняем отличия.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/bL9r6Jr/12-min.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Прорабатываем фотореалистичные модели дизайна фасадов дома с
                  нескольких ракурсов.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/h1ZDqtx/13-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Дизайн фасада 3D модель, проработка ракурсов.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/pPsyCzR/14-min.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Как можно увидеть, ограждение входных групп и террасы сделали
                  кованными. Деревянные ограждения для этого фасада нам не
                  понравились, потому как сильно утяжеляли фасад визуально.
                  Потому приняли решение сделать ограждение более воздушным
                  зрительно. Кстати, в дальнейшем для отделки лестницы внутри
                  дома также применили кованное ограждение.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/t8XNdym/15-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Видовой кадр фасада дома со стороны террасы на втором этаже.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/MPNY69L/16-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Подобранные ограждения из ковки и декоративные элементы фасада
                  дома - розетки показываем на следующем листе.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/9gRXpwh/17-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Делаем подробное описание элементов фасада для удобства
                  восприятия и снятия возможных дополнительных вопросов в
                  процессе строительства и отделки дома.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/R2mp4cM/18-min.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ОТДЕЛКА ФАСАДА ДОМА КАМНЕМ - ПОДБОР МАТЕРИАЛА{" "}
               </p>
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Когда проект был уже готов и мы определились со стилем дома,
                  важно было понять, как камень будет смотреться на фасаде дома
                  в живую. Для этого мы заказали пробные квадратные метры камня
                  для тестовой выкладки в натуре. Мы всегда рекомендуем делать
                  пробную выкладку одного квадратного метра камня или выкрас по
                  штукатурке перед тем, как приступать к масштабному
                  строительству по всему фасаду. Это поможет окончательно
                  убедиться в правильности выбранного решения или немного его
                  откорректировать перед покупкой всего объёма материала, когда
                  будет уже поздно что-то менять. Чтобы не терять время и
                  одновременно посмотреть похожие варианты по камню, мы заказали
                  дополнительно ещё три разных по фактуре камня. По факту
                  приезда камня на строительную площадку, мы сделали четыре
                  различных (и немного похожих) выкладки камня по одному
                  квадратному метру каждого на лист OSB (фанеры). Выкладку можно
                  также делать на лист гипсокартона, а потом также приложить к
                  стене дома. Делаем выкладку камня на строительной площадке и
                  дополнительно ещё разрабатываем четыре варианта фасада с
                  визуализацией из разного камня, который заказали на тест.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/9ySbScP/19-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ОТДЕЛКА ФАСАДА ДОМА КАМНЕМ - СТОИМОСТЬ МАТЕРИАЛА
               </p>
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Завершаем проект сводной ведомостью отделки фасада с расчётом
                  объёма материала и его метража.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/B4tFkyd/20-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  В сводной ведомости показываем весь подобранный материал, его
                  площадь, метраж, сечение архитектурных поясов и стоимость
                  материала. Также учитываем и расчитываем материал отделки
                  вентиляционных труб, терассную доску и уличную плитку с
                  противоскользящим покрытием.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/k8dg9BC/21-min.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Подбираем водосточную систему, материал отделки оконных
                  откосов, подшивку потолка террасы.
               </p>

               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/dPrxxhL/22-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Подбираем и расчитываем отделку фасада декоративными
                  элементами: отделка вокруг окон, архитектурные пояса, отделка
                  карниза, откосы, колонны.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/T82YRZd/23-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Мы всегда предлагаем альтернативу отделки фасада по различным
                  декоративным элементам, потому как они могут отличаться по
                  материалу, удобству монтажа, долговечности и стоимости. Эти
                  вопросы взегда обсуждаем с заказчиком, предоставляя ему
                  возможность выбирать, мы просто говорим про плюсы и минусы
                  всех возможных вариантов. По завершению подбора и расчётов
                  материала, мы составляем таблицу с контактами производителей
                  материалов, которые применены в проекте для удобства выбора и
                  их дальнейшей покупки. Полный альбом по данному проекту можно
                  посмотреть нажав на ссылку "Процесс" вверху этой страницы.
               </p>
            </div>
         </SingleProjectPageImgCover>
      </div>
   );
};
export default DesignFacadeStone;
