import React from 'react';

import styles from './BuildHouseOrBuy.module.css';
import KnowledgeBaseDetailsSection from '../../components/KnowledgeBaseDetailsSection/KnowledgeBaseDetailsSection';
const BuildHouseOrBuy: React.FC = () => {
  const { wrapper, title } = styles;
  return (
    <section>
      <KnowledgeBaseDetailsSection pageTitle="Построить дом или купить" />
      <div className="container">
        <div className={wrapper}>
          <p>
            Раскрываю секрет строителей.
            <br />
            <br />
            Более чем за 15 лет исследований построенных домов я понимаю, насколько ужасно качество
            домов, построенных без базовых знаний архитектуры и принципов строительства. На сегодня
            85% домов построено неграмотно или без проекта - это реальная статистика.
            <br />
            <br />
            При этом дома 90-х годов не сильно отличаются по качеству от современного частного
            строительства.
            <br />
            <br />
            И вот это сейчас продаётся на рынке недвижимости, риэлторами, красиво рассказывающими,
            как вы будете прекрасно пить кофе с утра в своём доме и парковать машину на свободное
            место.
            <br />
            <br />
            Только вам никто не расскажет, как промерзает дом каждую зиму, примерно на 25 000 рублей
            в месяц за отопление из-за плохого утепления (не на 3 000 руб.), как каждый год
            штукатурят очередную трещину на несущей стене дома от осадки фундамента или как
            покрывается грибком стропильная система крыши, превращаясь в труху.
          </p>
          <img src="https://arh.yamaster.ml/images/baza_znanii/3/1.webp" alt="img1" />
          <p>
            Скажите, вы купите машину, собранную в гараже неизвестным мастером - гаражную
            "самоделку"? Вы же так не сделаете? Или вы пойдёте и купите пусть не новую, но
            безопасную Вольво, например? Они как минимум прошли краш-тесты и тысячи тестирований.
            <br />
            <br />
            Также и с домом – неизвестно кем он был построен, вы не знаете квалификацию, образование
            и опыт строителей, которые его строили. Покупка дома часто сопровождается не очень
            хорошими последствиями, даже опасными для здоровья.
          </p>
          <h3 className={title}>СТРОИТЬ ДОМ ИЛИ КУПИТЬ ГОТОВЫЙ?</h3>
          <p>
            Итак, кратко мои «за» и «против» покупки готового дома и только ТОП самых
            распространённых ошибок:
            <br />
            <br />
            - 85% домов построено без проекта, вы не сможете быть уверенным в грамотных
            конструктивных решениях дома на 100%
            <br />
            <br />
            - утепление – в 95% исследуемых мною домов были нарушены все нормативные требования по
            утеплению
            <br />
            <br />
            - не исключено, что строители экономили на всём, покупая плохой материал для стройки,
            это сложно выяснить при покупке. Были случаи на практике, когда материал сильно фонил –
            был радиоактивен.
            <br />
            <br />
            - коммуникации – слабая сторона таких домов. Можно мерзнуть зимой и долго ждать горячую
            воду из крана или ещё хуже – остаться без канализации. Узнаете, только прожив год в
            доме.
            <br />
            <br />
            - вентиляция – дом просто не дышит, задыхается, преет из-за неправильного расчёта
            вентиляции.
            <br />
            <br />
            - несущие конструкции могут быть изношены и бо́льшую часть из них мы не сможем проверить,
            всё закрыто отделкой дома – миссия не выполнима.
            <br />
            <br />
            - часто при обследовании, видел годами накопленный конденсат на конструкциях дома,
            скрытый за обшивкой. Это были целые скопления воды. Приходилось срочно менять
            конструкции или усиливать – это дорого.
            <br />
            <br />
            - Плохая гидроизоляция фундамента. Также узнаете весной или во время сильного ливня,
            когда сырость из цокольной части дома даст о себе знать неприятным запахом и повышенной
            влажностью в доме.
            <br />
            <br />
            - дома на продажу – это отдельная тема для разговора. Не советую их к покупке.
            <br />
            <br />
            Плюсы покупки готового дома в том, что он готов, и вы можете сегодня заехать в него
            жить, однако, не факт, что без постоянного дальнейшего ремонта и реконструкции.
          </p>
          <h3 className={title}>СТРОИТЕЛЬСТВО ДОМА - ВЫВОДЫ</h3>
          <p>
            Мой выбор – это покупка участка, пустого - без дома, с возможностью строительства и
            подключения необходимых коммуникаций (и даже это не всегда важно). Кстати, очень
            полезная статья как купить участок и не пожалеть с удобным чек-листом по выбору участка.
            <br />
            <br />
            При этом вы сами видите, как строится дом, контролируете каждый этап, ведёте
            фотографирование процесса или заставляете это делать строителей. Вы сами выбираете
            материал, тип коммуникаций, строителей. Вы видите каждый шаг. Вот пример, как мы строим
            деревянный дом и документируем, каждый этап.
            <br />
            <br />
            Кроме того, построить дом самому - много дешевле покупки готового дома.
            <br />
            <br />
            И дальше я расскажу вам, как это сделать.
            <br />
            <br />
            И, если делать выбор в пользу покупки готового дома, то убедитесь, что на этот дом есть
            полный рабочий проект. Впрочем, даже это не гарантия качества, важно понимать, как
            строился дом и кем, а это уже в раздел фантастики.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuildHouseOrBuy;
