import React from "react";
import SingleProjectPageImgCover from "../../components/SingleProjectPageSection/SingleProjectPageSection";
import { Link } from "react-router-dom";
import styles from "./ProjectReconstructionRelaxBase.module.css";

const ProjectReconstructionRelaxBase: React.FC = () => {
   const { linkContainer , video } = styles;

   return (
      <div style={{ height: "100%" }}>
         <SingleProjectPageImgCover
            titleText="Проект реконструкции базы отдыха (турбазы). Эскиз"
            city="Челябинская область"
            houseSquare=""
            facadeSquare=""
            floors=""
            date="г. Миасс, Ноябрь 2016"
            reconstructionPage={true}
            imgSrc="https://i.ibb.co/py31m0C/1-min1-1.webp"
         >
            <div className="single-project-page-content-container">
               <p className={linkContainer}>
                  <Link to={"/"}> Главная </Link> /
                  <Link to={"/ourProjects"}> &nbsp; Наши работы</Link> /
                  <span style={{ color: "rgb(235 51 73)" }}>
                     {" "}
                     &nbsp;Проект реконструкции базы отдыха (турбазы). Эскиз
                  </span>
               </p>
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  Проект реконструкции базы отдыха (турбазы). Эскиз
               </p>
               <iframe
               className={video}
                  style={{ display: "block", margin: "30px auto" }}
                  src="https://www.youtube.com/embed/zL34wgSawb8"
                  allowFullScreen
                  width={"95%"}
                  height="400px"
               ></iframe>
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-description"
               >
                  Челябинская область, г. Миасс
                  <br /> Площадь дома:
                  <strong>6 га</strong>
                  <br />
                  Площадь фасадов: <strong>11500 м2</strong>
                  <br />
                  <br />
               </p>
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ЗАДАЧА
               </p>
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-description"
               >
                  Разработать эскизный проект концепции развития и реконструкции
                  базы отдыха площадью 6 га со СПА комплексом. Необходимо из
                  существующей с советских времён территории турбазы, сделать
                  современную базу отдыха со СПА комплексом для проведения
                  оздоровительных процедур и приятного отдыха.
               </p>
               <p
                  style={{ marginTop: "30px" }}
                  className="single-project-page-title"
               >
                  ПРОЦЕСС
               </p>
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  На территории турбазы есть ряд строений, которые необходимо
                  реконструировать и переоборудовать под новую концепцию базы
                  отдыха и разработать это в проекте. Вот что представляла собой
                  территория базы отдыха перед началом разработки проекта.
               </p>
               <img
                  className="single-project-page-img"
                  style={{ marginTop: "20px" }}
                  src="https://i.ibb.co/Cb0PNSx/2-min.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Необходимо максимально задействовать существующие площади
                  строений и обновить фасады зданий, находящихся на территории
                  базы отдыха и представляющих собой наследие советской
                  архитектуры. Также разместить в проекте дополнительные объекты
                  строительства, предусмотренные в техническом задании и создать
                  новую планировку территории с модернизацией соответствующей
                  инфраструктуры. Вид жилого корпуса на территории турбазы до
                  реконструкции фасадов.
               </p>
               <img
                  className="single-project-page-img"
                  style={{ marginTop: "20px" }}
                  src="https://i.ibb.co/z4Srn78/3-min.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Здание медицинского корпуса в перспективе планируется
                  переоборудовать под СПА комплекс с бассейнами и процедурными
                  кабинетами.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/zFFvkGy/4-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  В проекте базы отдыха необходимо дополнительно расположить
                  жилую зону для постояльцев, зону отдыха с развлекательными
                  площадками, СПА зону с бассейнами открытого и закрытого типов
                  и водным комплексом. Собираемся командой и проводим мозговой
                  штурм. Делаем подборку стилевых аналогов. Фото 5 Разрабатываем
                  несколько эскизных вариантов реконструкции фасадов
                  существующих зданий для проекта базы отдыха. Реконструкция
                  фасада медицинского корпуса в ручной графике.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/YfwWXZg/5-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Небольшое видео процесса создания этого эскизного проекта
                  можно посмотреть здесь. Делаем эскизный вариант дизайна фасада
                  жилого корпуса базы отдыха в ручной графике, а по сути
                  эскизный вариант проекта реконструкции фасада здания.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/ns2J18d/6-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Разрабатываем в проекте схему зонирования основных объектов
                  будущей СПА базы отдыха (турбазы), составляем список и план
                  озеленения участка, создаём новый генеральный план территории
                  и получаем готовый вариант основного эскиза проекта развития
                  СПА базы отдыха, который также выполняем в ручной графике.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/RCn5HXc/7-min.webp"
                  alt="Не удалось отобразить картинку"
               />
               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Проект концепции развития СПА базы отдыха с разработанными
                  эскизными вариантами дизайна фасадов зданий, предложенными для
                  реконструкции и обновления существующей архитектуры объектов.
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/r60s7jN/8-min.webp"
                  alt="Не удалось отобразить картинку"
               />

               <p
                  style={{ marginTop: "20px" }}
                  className="single-project-page-description"
               >
                  Формируем готовый эскизный проект развития базы отдыха со СПА
                  комплексом в Челябинской области, г. Миасс. Санкт-Петербург
                  2017г
               </p>
               <img
                  style={{ marginTop: "20px" }}
                  className="single-project-page-img"
                  src="https://i.ibb.co/tBJ8qBL/9-min.webp"
                  alt="Не удалось отобразить картинку"
               />
            </div>
         </SingleProjectPageImgCover>
      </div>
   );
};

export default ProjectReconstructionRelaxBase;
