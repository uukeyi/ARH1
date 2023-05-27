import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutUsPageSection.module.css';

interface IInfoCard {
  title: string;
  subtitle: string;
}
interface IProfCard {
  profPic: string;
  title: string;
  subtitle: string;
}

const AboutUsPageSection: React.FC = () => {
  const {
    AboutUsSection,
    baOverlay,
    subtitle,
    title,
    wrapper,
    description,
    infoCardSubtitle,
    infoCardTitle,
    videoWrapper,
    videoPlayer,
    featuresWrapper,
    profWrapper,
    infoCardWrapper,
    profCardTitle,
    profCardSubtitle,
    profCardWrapper,
    cardLine,
    profPicture,
    profContent,
    infoWrapper,
  } = styles;
  const [infoCards, setInfoCards] = useState<IInfoCard[]>([
    {
      title: '2005 год',
      subtitle: 'ОСНОВАНИЕ СТУДИИ',
    },
    {
      title: '20 лет',
      subtitle: 'ОПЫТ НАШИХ СПЕЦИАЛИСТОВ',
    },
    {
      title: '7 дней',
      subtitle: 'МИНИМАЛЬНЫЙ СРОК ВЫПОЛНЕНИЯ ПРОЕКТА',
    },
    {
      title: '250 объектов',
      subtitle: 'РЕАЛИЗОВАНО НАШИМИ',
    },
    {
      title: '100% проектов',
      subtitle: 'УСПЕШНО ПРОШЛИ ЭКСПЕРТИЗУ',
    },
  ]);
  const [profCards, setProfCards] = useState<IProfCard[]>([
    {
      profPic: 'https://arh.yamaster.ml/images/sotrudniki/2_sm_0.webp',
      title: 'РЕНАТА ГАЛИМУЛИНА',
      subtitle: 'Главный Архитектор / Ландшафтный архитектор',
    },
    {
      profPic: 'https://arh.yamaster.ml/images/sotrudniki/1_sm_0.webp',
      title: 'АЛЕКСАНДР САВЕНКОВ',
      subtitle: 'Инженер-строитель',
    },
    {
      profPic: 'https://arh.yamaster.ml/images/sotrudniki/10_sm_0.webp',
      title: 'АННА ВОДЯНОВА',
      subtitle: 'Архитектор',
    },
    {
      profPic: 'https://arh.yamaster.ml/images/sotrudniki/11_sm_0.webp',
      title: 'ЕКАТЕРИНА НЕНАШЕВА',
      subtitle: 'Дизайнер',
    },
    {
      profPic: 'https://arh.yamaster.ml/images/sotrudniki/5_sm_0.webp',
      title: 'АЛЕКСАНДР ПАНКРАТОВ',
      subtitle: 'Главный Инженер Проекта',
    },
    {
      profPic: 'https://arh.yamaster.ml/images/sotrudniki/8_sm_0.webp',
      title: 'АЛЕКСЕЙ БОРОДИН',
      subtitle: 'Строитель',
    },
    {
      profPic: 'https://arh.yamaster.ml/images/sotrudniki/9_sm_0.webp',
      title: 'АННА АКШЕВСКАЯ',
      subtitle: 'Дизайнер',
    },
    {
      profPic: 'https://arh.yamaster.ml/images/sotrudniki/4_sm_0.webp',
      title: 'ПАВЕЛ ДОЛГОВ',
      subtitle: 'Руководитель строительного направления',
    },
    {
      profPic: 'https://arh.yamaster.ml/images/sotrudniki/7_sm_0.webp',
      title: 'АНАТОЛИЙ ЧЕКЛАЕВ',
      subtitle: 'Директор по строительству',
    },
  ]);
  return (
    <section id={AboutUsSection}>
      <div className={baOverlay}>
        <div className="container">
          <div className={wrapper}>
            <div>
              <Link to={'/'} className={subtitle}>
                Главная /
                <Link to={'ourProjects'} style={{ color: 'rgb(235 51 73)' }}>
                  {' '}
                  О нас
                </Link>
              </Link>
              <p className={title}>О НАС</p>
            </div>
            <p className={description}>
              АРХИТЕКТУРА АРХ1 - архитектурно-строительная компания, основанная в 2005 году.
              Проектируем и строим базы отдыха, коттеджные посёлки, загородные дома.
            </p>

            <div className={videoWrapper}>
              <video
                className={videoPlayer}
                playsInline
                loop
                muted
                controls
                autoPlay
                src="https://arh.yamaster.ml/images/video/vid1.mp4"
              />
            </div>
            <div className={featuresWrapper}>
              {infoCards.map((card) => (
                <div className={infoCardWrapper}>
                  <p className={infoCardTitle}>{card.title}</p>
                  <hr className={cardLine} />
                  <p className={infoCardSubtitle}>{card.subtitle}</p>
                </div>
              ))}
            </div>
            <div className={profWrapper}>
              {profCards.map((card) => (
                <div className={profCardWrapper}>
                  <img className={profPicture} src={card.profPic} alt="profile-picture" />
                  <div className={profContent}>
                    <p className={profCardTitle}>{card.title}</p>
                    <hr className={cardLine} />
                    <p className={profCardSubtitle}>{card.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={infoWrapper}>
              <p>
                Строим "под ключ" и профессионально запускаем турбазы. Создаём проекты баз отдыха,
                бизнес модель и организационную структуру.
                <br />
                <br />
                <span>Мы - студия АРХИТЕКТУРА АРХ1.</span>
                <br />
                Разрабатываем проекты баз отдыха, загородных отелей, гостиниц, частных домов. Делаем
                благоустройство и ландшафтный дизайн территории, производим дальнейшее обслуживание.
                <br />
                <br />
                Разрабатываем бизнес модель и упаковку базы отдыха (турбазы), загородного отеля,
                гостиницы, продумываем рекламные каналы, продвигаем бизнес на стадии проектирования,
                делая загрузку турбазы на этапе реализации проекта.
                <br />
                <br />
                Уменьшаем сроки окупаемости, увеличиваем инвестиционную привлекательность. Исключаем
                нерациональные решения, подготавливаем быстрый старт.
                <br />
                <br />
                В нашей команде работают маркетологи, делаем аудит существующих турбаз, формируем
                стратегию продвижения.
                <br />
                <br />
                Создаём уникальное архитектурное пространство.
                <br />
                <br />
                <span>Проектируем и строим:</span>
                <br />
                - базы отдыха
                <br />
                - гостиницы, отели
                <br />
                - загородные дома
                <br />
                - проектируем жилые микрорайоны.
                <br />
                <br />
                Если Вы хотите начать строительство, мы подскажем с чего начать и поможем избежать
                основных ошибок.
                <br />
                <br />
                Мы делимся знаниями, навыками, советами и нам ещё больше возвращается - такова наша
                позиция, принцип развития компании.
                <br />
                <br />
                Вступайте в наше сообщество, чтобы следить за актуальными темами и обсуждениями,
                задавайте вопросы.
                <br />
                <br />
                Периодически мы будем бесплатно создавать проект дома или ландшафтный дизайн для
                одного из участников нашей группы, проект которого покажется нам актуальным и
                интересным.
                <br />
                <br />
                Если у вас есть интересные идеи, мы готовы совместно поучаствовать в их реализации с
                вами.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPageSection;
