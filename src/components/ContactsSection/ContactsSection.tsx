import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';
import OrangeButton from '../OrangeButton/OrangeButton';
import styles from './ContactsSection.module.css';

const ContactsSection: React.FC = () => {
  const {
    contactsSection,
    checkmark,
    agreeCheckbox,
    inputPhone,
    agreeLabel,
    subtitle,
    icon,
    description,
    optionPhone,
    feedbackTextarea,
    phoneContainer,
    inputName,
    information,
    feedbackWrapper,
    phoneCard,
    title,
    wrapper,
    buttonWrapper,
    phoneWrapper,
    phoneTitle,
    feedbackRight,
    feedbackLeft,
    iconsWrapper,
    inputsWrapper,
    socialLinks,
    baOverlay,
  } = styles;
  const [phoneValue, setPhoneValue] = useState('');
  const [commentValue, setCommentValue] = useState('');
  return (
    <section id={contactsSection}>
      <div className={baOverlay}>
        <div className="container">
          <Link to={'/'} className={subtitle}>
            Главная /
            <Link to={'ourProjects'} style={{ color: 'rgb(235 51 73)' }}>
              {' '}
              Контакты
            </Link>
          </Link>
          <p className={title}>КОНТАКТЫ</p>
          <div className={wrapper}>
            <div className={information}>
              <p className={description}>
                По всем вопросам, касающимся проектирования или строительства, можно обратиться к
                нам по телефону, whatsapp или воспользоваться формой обратной связи кнопка
                "отправить сообщение" внизу страницы.
                <br /> Режим работы: Пн-Пт: 10:00-18:00. Суббота: 12:00-16:00. Воскресенье: Выходной
              </p>
              <div className={phoneWrapper}>
                <div data-aos="fade-right" data-aos-duration="1000" className={phoneCard}>
                  <a href="tel:+78129709005">
                    <svg
                      aria-hidden="true"
                      fill="rgb(235 51 73)"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="1em"
                      height="1em"
                    >
                      <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
                    </svg>
                    <p>+7 (812) 970-90-05</p>
                  </a>
                  <div
                    style={{
                      borderBottom: '1px solid white',
                      margin: '10px 0px',
                    }}
                  ></div>
                  <p style={{ textAlign: 'center', fontSize: '16px' }} className={phoneTitle}>
                    Санкт-Петербург <br /> Красногвардейская площадь, 3Е.
                  </p>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className={phoneCard}>
                  <a href="tel:+78129709005">
                    <svg
                      aria-hidden="true"
                      fill="rgb(235 51 73)"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="1em"
                      height="1em"
                    >
                      <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
                    </svg>
                    <p>+7 (952) 261-90-05</p>
                  </a>
                  <div
                    style={{
                      borderBottom: '1px solid white',
                      margin: '10px 0px',
                    }}
                  ></div>
                  <p style={{ textAlign: 'center', fontSize: '16px' }} className={phoneTitle}>
                    Москва
                    <br />
                    Бауманская, д.53, ст.1
                  </p>
                </div>
              </div>
            </div>
            <div className={feedbackWrapper}>
              <div className={inputsWrapper}>
                <div className={feedbackRight}>
                  <input className={inputName} type="text" placeholder="Имя" />
                  <PhoneInput
                    inputClass={inputPhone}
                    country={'ru'}
                    value={phoneValue}
                    onChange={setPhoneValue}
                    placeholder="Ваш номер телефона"
                    buttonClass={optionPhone}
                    containerClass={phoneContainer}
                  />
                </div>
                <div className={feedbackLeft}>
                  <textarea
                    placeholder="Текст комментария"
                    value={commentValue}
                    name="feedbackText"
                    rows={3}
                    cols={22}
                    className={feedbackTextarea}
                    onChange={(e) => setCommentValue(e.target.value)}
                  />
                </div>
              </div>
              <label className={agreeLabel}>
                <input type="checkbox" className={agreeCheckbox} />
                <span className={checkmark}></span>
                <p>Я соглашаюсь на обработку моих персональных данных</p>
              </label>

              <div className={buttonWrapper}>
                <OrangeButton title={'ОТПРАВИТЬ СООБЩЕНИЕ'} width={'250px'} />
              </div>
            </div>
            <div className={`${iconsWrapper} ${socialLinks}`}>
              <a className={icon} href="https://vk.com/arh1_ru">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path d="M45.763,35.202c-1.797-3.234-6.426-7.12-8.337-8.811c-0.523-0.463-0.579-1.264-0.103-1.776 c3.647-3.919,6.564-8.422,7.568-11.143C45.334,12.27,44.417,11,43.125,11l-3.753,0c-1.237,0-1.961,0.444-2.306,1.151 c-3.031,6.211-5.631,8.899-7.451,10.47c-1.019,0.88-2.608,0.151-2.608-1.188c0-2.58,0-5.915,0-8.28 c0-1.147-0.938-2.075-2.095-2.075L18.056,11c-0.863,0-1.356,0.977-0.838,1.662l1.132,1.625c0.426,0.563,0.656,1.248,0.656,1.951 L19,23.556c0,1.273-1.543,1.895-2.459,1.003c-3.099-3.018-5.788-9.181-6.756-12.128C9.505,11.578,8.706,11.002,7.8,11l-3.697-0.009 c-1.387,0-2.401,1.315-2.024,2.639c3.378,11.857,10.309,23.137,22.661,24.36c1.217,0.12,2.267-0.86,2.267-2.073l0-3.846 c0-1.103,0.865-2.051,1.977-2.079c0.039-0.001,0.078-0.001,0.117-0.001c3.267,0,6.926,4.755,8.206,6.979 c0.368,0.64,1.056,1.03,1.8,1.03l4.973,0C45.531,38,46.462,36.461,45.763,35.202z"></path>
                </svg>
              </a>
              <a className={icon} href="https://www.instagram.com/design_facad">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M21.231 0h-18.462c-1.529 0-2.769 1.24-2.769 2.769v18.46c0 1.531 1.24 2.771 2.769 2.771h18.463c1.529 0 2.768-1.24 2.768-2.771v-18.46c0-1.529-1.239-2.769-2.769-2.769zm-9.231 7.385c2.549 0 4.616 2.065 4.616 4.615 0 2.549-2.067 4.616-4.616 4.616s-4.615-2.068-4.615-4.616c0-2.55 2.066-4.615 4.615-4.615zm9 12.693c0 .509-.413.922-.924.922h-16.152c-.511 0-.924-.413-.924-.922v-10.078h1.897c-.088.315-.153.64-.2.971-.05.337-.081.679-.081 1.029 0 4.079 3.306 7.385 7.384 7.385s7.384-3.306 7.384-7.385c0-.35-.031-.692-.081-1.028-.047-.331-.112-.656-.2-.971h1.897v10.077zm0-13.98c0 .509-.413.923-.924.923h-2.174c-.511 0-.923-.414-.923-.923v-2.175c0-.51.412-.923.923-.923h2.174c.511 0 .924.413.924.923v2.175z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a className={icon} href="mailto:mail@arh1.ru">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
