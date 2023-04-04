import React from 'react';
import KnowledgeBaseDetailsSection from '../../components/KnowledgeBaseDetailsCover/KnowledgeBaseDetailsSection';
import styles from './MainStylesLandscapeDesign.module.css';
const MainStylesLandscapeDesign: React.FC = () => {
  const { wrapper, title, redLine } = styles;
  return (
    <section>
      <KnowledgeBaseDetailsSection pageTitle="Основные стили дизайна ландшафта" />
      <div className="container">
        <div className={wrapper}>
          <p>
            При обустройстве территории вокруг дома рекомендуется придерживаться одного направления.
            Существуют разные стили ландшафтного дизайна. У каждого есть свои особенности.
          </p>
          <h3 className={title}>РЕГУЛЯРНЫЙ КЛАССИЧЕСКИЙ</h3>
          <img
            src="https://arh.yamaster.ml/images/baza_znanii/1/reg_french_formal_garden_in_loire_valley.webp"
            alt="img1"
          />
          <p>
            Традиционная техника оформления придомовой территории отличается строгостью
            геометрических форм, симметрией, грациозностью правильных и чётких линий. Классику
            отличает наличие центрального объекта: фонтана, статуи, пруда, от которого расходятся
            дорожки из гальки (гравия).
            <br />
            <br />
            Строго в симметричном порядке высаживают деревья и кустарники. Свободное пространство
            покрывают газоном.
            <br />
            <br />В классическом ландшафте разбивают клумбы с симметрично посаженными на них
            растениями. Для цветников подходят луковичные (тюльпаны, крокусы), бархатцы, петунии. Из
            древесных пород предпочтительны ели, туи. Они хорошо сохраняют правильную форму. Из
            кустарников делают боскеты – композиции, созданные путем фигурной обрезки.
          </p>

          <h3 className={title}>УГОЛОК ЯПОНИИ</h3>

          <img
            src="https://arh.yamaster.ml/images/baza_znanii/1/yaponskij-landshaftnyj-dizajn-foto-8.webp"
            alt="img2"
          />
          <p>
            Любители восточной культуры обустраивают у себя природные уголки в японском стиле. Из
            камней разного размера и вида создают «сад». Он играет главную роль. Дорожки покрывают
            каменной плиткой. В таком оформлении находят место небольшому открытому источнику воды,
            миниатюрным садовым скульптурам.
            <br />
            <br />
            Особое значение имеет цвет. При устройстве японского ландшафта дизайнеры используют
            спокойные, умиротворяющие, гармонирующие с природой оттенки. Цветущие растения размещают
            небольшими композициями, которые перемежаются отдельно стоящими карликовыми деревьями:
            соснами, можжевельником.
          </p>
          <h3 className={title}>СТАРАЯ ДОБРАЯ АНГЛИЯ</h3>
          <img
            src="https://arh.yamaster.ml/images/baza_znanii/1/victorian-shrubs-donna-lynn-landscape-design.webp"
            alt="img3"
          />
          <p>
            В английском стиле сочетаются строгость классики и хаотичность деревенского направления.
            Главный атрибут такого пейзажа – красивый, идеально ровный газон. Другой элемент – плющ,
            дикий виноград, хмель, которые вьются по опорам, оградам и поднимаются по стенам дома.
            <br />
            <br />В таком ландшафте нет правильно разбитых клумб, посаженных ровными линиями
            кустарников. Красиво, необычно выглядят форзиции, гортензии. Из деревьев выбирают ель,
            лиственницу, клён.
          </p>
          <h3 className={title}>КАНТРИ</h3>
          <img
            src="https://arh.yamaster.ml/images/baza_znanii/1/landshaftnyj-dizajn-v-stile-kantri.webp"
            alt="img4"
          />
          <p>
            Деревенский стиль – наиболее распространённое оформление ландшафта. Он отличается
            свободой самовыражения хозяев. Основные черты этого направления:
          </p>

          <p className={redLine}>
            неприхотливые растения, трава- самосевка;
            <br />
            плетень из пруьев ивы, виноградной лозы;
            <br />
            использование старой утвари, деревянных изделий (тачек, телег).
          </p>

          <br />
          <p>
            Участок заполняют полезными фруктовыми деревьями и ягодными кустарниками. Посадки ведут
            в хаотично.
            <br />
            <br />
            Главная особенность такого ландшафта – творческий беспорядок, имитирующий хозяйственную
            деятельность человека. При создании территории деревенского направления важно избежать
            правильных, симметричных линий и сохранить простоту и природную непритязательность.
          </p>
          <h3 className={title}>КАНТРИ</h3>
          <p>
            Органично с природой сочетается простой пейзажный стиль. Он поглощается окружающей
            средой, отличается первобытностью. На участке должны расти луговые, лесные, полевые
            цветы, которые распространены в данной местности. Порядка в их размещении не существует.
            Палитра красок приближается к естественной.
            <br />
            <br />
            Если на участке сохранились старые деревья, замечательно. В противном случае сажают
            лиственные и хвойные породы в произвольном порядке. Главное условие – создать
            приближенный к натуральному уголок природы.
            <br />
            <br />
            Выбирая определенный стиль, стоит ориентироваться на собственные предпочтения.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainStylesLandscapeDesign;
