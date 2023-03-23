import React, { useEffect, useState } from 'react';
import OrangeButton from '../OrangeButton/OrangeButton';
import styles from './ProjectPriceSection.module.css';
import quoteSectionLine from '../../assets/icons/quoteSectionLine.webp';
import PhoneInput from 'react-phone-input-2';
type CheckBoxType = {
  label: string;
  price: number;
};
type RadioType = {
  label: string;
};
const ProjectPriceSection: React.FC = () => {
  const {
    title,
    subtitle,
    wrapper,
    left,
    right,
    priceWrapper,
    inputName,
    inputWrapper,
    inputTitle,
    totalPrice,
    video,
    description,
    stickyWrapper,
    footerLine,
    inputLabel,
    inputPhone,
    inputCheckbox,
    checkmark,
    checkboxList,
    inputRadio,
    radiomark,
    optionPhone,
  } = styles;
  const [totalSum, setTotalSum] = useState(0);
  const [square, setSquare] = useState(0);
  const [value, setValue] = useState('');
  const [checkboxes, setCheckboxes] = useState<CheckBoxType[]>([
    { label: 'проект ночной подсветки фасадов', price: 300 },
    { label: 'доработать планировку дома', price: 260 },
    { label: 'авторский надзор', price: 300 },
  ]);
  const [radioStyle, setRadioStyle] = useState<RadioType[]>([
    { label: 'Современный' },
    { label: 'Классический' },
    { label: 'Не определились' },
    { label: 'Реконструкция построенного' },
  ]);
  const [radioType, setRadioType] = useState<RadioType[]>([
    { label: 'Дизайн фасадов - проект без спецификации' },
    { label: 'Дизайн фасадов - рабочий проект' },
  ]);
  const handleCheckboxChange = (event: any) => {
    const checkboxValue = Number(event.target.value);
    if (event.target.checked) {
      setTotalSum(totalSum + square * checkboxValue);
    } else {
      setTotalSum(totalSum - square * checkboxValue);
    }
  };
  const handleInput = (event: any) => {
    setSquare(event.target.value);
  };

  return (
    <section id={priceWrapper}>
      <div className="container">
        <p className={title}>СТОИМОСТЬ ПРОЕКТА</p>
        <p className={subtitle}>РАССЧИТАЙТЕ ПРЯМО СЕЙЧАС</p>
        <div>
          <div className={wrapper}>
            <div className={left}>
              <div className={stickyWrapper}>
                <iframe
                  className={video}
                  src="https://www.youtube.com/embed/vxB5YMJQUos?start=0&showinfo=1&controls=1&autoplay=0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
                <p className={description}>Проект дома Hi-Tech и ландшафт участка.</p>
              </div>
            </div>
            <div className={right}>
              <div>
                <p className={inputTitle}>Архитектурный стиль дома</p>
                <ul className={checkboxList}>
                  {radioStyle.map((option, index) => (
                    <li key={index}>
                      <label className={inputLabel}>
                        <input
                          type="radio"
                          value={option.label}
                          className={inputRadio}
                          name="style"
                        />
                        <span className={radiomark}></span>
                        <p>{option.label}</p>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={inputTitle}>Вариант проекта</p>
                <ul className={checkboxList}>
                  {radioType.map((option, index) => (
                    <li key={index}>
                      <label className={inputLabel}>
                        <input
                          type="radio"
                          value={option.label}
                          className={inputRadio}
                          name="type"
                        />
                        <span className={radiomark}></span>
                        <p>{option.label}</p>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={inputTitle}>Дополнительная комплектация проекта</p>
                <ul className={checkboxList}>
                  {checkboxes.map((option, index) => (
                    <li key={index}>
                      <label className={inputLabel}>
                        <input
                          type="checkbox"
                          value={option.price}
                          className={inputCheckbox}
                          onChange={handleCheckboxChange}
                        />
                        <span className={checkmark}></span>
                        <p>{option.label}</p>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={inputWrapper}>
                <p className={inputTitle}>Общая площадь, м2</p>
                <input
                  className={inputName}
                  type="number"
                  placeholder="300"
                  onChange={(e) => {
                    handleInput(e);
                  }}
                />
              </div>
              <p className={totalPrice}>{totalSum} руб.</p>
              <div className={inputWrapper}>
                <p className={inputTitle}>Ваше имя *</p>
                <input className={inputName} type="text" placeholder="Ваше имя" />
              </div>
              <div className={inputWrapper}>
                <p className={inputTitle}>Телефон *</p>
                <PhoneInput
                  inputClass={inputPhone}
                  country={'ru'}
                  value={value}
                  onChange={setValue}
                  placeholder="Ваш номер телефона"
                  buttonClass={optionPhone}
                />
              </div>
              <OrangeButton title="ОСТАВИТЬ ЗАЯВКУ" width="200px" />
            </div>
          </div>
          <img className={footerLine} src={quoteSectionLine} alt="Линия" />
        </div>
      </div>
    </section>
  );
};

export default ProjectPriceSection;
