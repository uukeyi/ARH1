import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import OrangeButton from '../OrangeButton/OrangeButton';
import styles from './ApplicationForArch.module.css';

const ApplicationForArch: React.FC = () => {
  const {
    ApplicationForArch,
    right,
    left,
    img,
    title,
    description,
    contactsWrapper,
    wrapper,
    optionPhone,
    phoneContainer,
    inputPhone,
    inputName,
  } = styles;
  const [value, setValue] = useState('');
  return (
    <section id={ApplicationForArch}>
      <div className="container">
        <div className={wrapper}>
          <div className={left}>
            <img
              className={img}
              src="https://arh.yamaster.ml/images/blok9/75-14.png"
              alt="architechtor"
            />
          </div>
          <div className={right}>
            <p className={title}>ОСТАВЬТЕ ЗАЯВКУ АРХИТЕКТОРУ</p>
            <p className={description}>
              Меня зовут Александр Савенков, я профессиональный архитектор, строитель с 15-ти летним
              стажем работы. Занимался строительством многоэтажных домов и спортивных сооружений.{' '}
              <br />
              <br />
              С 2006 года мы открыли отдельное направление по проектированию и строительству частных
              домов, уделяя особое внимание:
              <br />
              - энергосбережению;
              <br />
              - внутреннему комфорту и удобству;
              <br />
              - внешней привлекательности;
              <br />
              - долговечности дома.
              <br />
              <br />
              Мы - небольшая строительная компания, открыто ведём строительство домов полного цикла
              с гарантийными обязательствами.
              <br />
              <br />
              Ввиду большой загрузки и творческого интереса, не все проекты берём в работу, но
              проконсультируем каждого, кто оставит заявку, с удовольствием.
            </p>
            <div className={contactsWrapper}>
              <input className={inputName} type="text" placeholder="Ваше имя" />
              <PhoneInput
                inputClass={inputPhone}
                country={'ru'}
                value={value}
                onChange={setValue}
                placeholder="Ваш номер телефона"
                buttonClass={optionPhone}
                containerClass={phoneContainer}
              />
              <OrangeButton title={'ОТПРАВИТЬ ЗАЯВКУ'} width="100%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForArch;
