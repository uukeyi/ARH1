import React from "react";
import vkIcon from "../../assets/icons/vkIcon.png";
import telegramIcon from "../../assets/icons/telegramIcon.svg";
import instagramIcon from "../../assets/icons/instagramIcon.svg";
import whatsappIcon from "../../assets/icons/whatsappIcon.svg";
import styles from "./Footer.module.css";
import blackLogo from "../../assets/logoBlack.webp";
import { Link } from "react-router-dom";
interface FooterProps {
   whiteFooter?: boolean;
   customClassNameFooter?: string;
   customClassNameLogo?: string;
   customClassNameSubtitle?: string;
   customClassNameTextContainer?: string;
   customClassNameFeedbackContainer?: string;
   customClassNameFeedbackBlock?: string;
   customClassNameSocialLinksContainer?: string;
   colorIcons?: string;
   customClassNameContainer? : string;
}
const Footer: React.FC<FooterProps> = ({
   whiteFooter,
   customClassNameFooter,
   customClassNameLogo,
   customClassNameSubtitle,
   customClassNameTextContainer,
   customClassNameFeedbackContainer,
   customClassNameFeedbackBlock,
   customClassNameSocialLinksContainer,
   colorIcons,
   customClassNameContainer
}) => {
   const {
      wrapper,
      top,
      callText,
      contactsLink,
      topText,
      iconsWrapper,
      icon,
      img,
      phoneWrapper,
      phoneInput,
      phoneButton,
      bottom,
      bottomText,
   } = styles;
   return (
      <footer className={wrapper}>
         <div className={`${top} ${customClassNameFooter}`}>
            {whiteFooter ? (
               <>
                  <div className={`container ${customClassNameContainer}`}>
                     <div className={customClassNameTextContainer}>
                        <Link to={"/"}>
                           <img
                              className={customClassNameLogo}
                              src={blackLogo}
                              alt="ARH1"
                           />
                        </Link>
                        <p data-aos = "zoom-in" data-aos-duration = "1000" className={customClassNameSubtitle}>
                           Архитектурное проектирование и строительство зданий,
                           ландшафтный дизайн <br /> садово-парковых зон,
                           создание уникальных проектов городов и микрорайонов
                        </p>
                     </div>
                     <div className={customClassNameFeedbackContainer}>
                        <div data-aos = "fade-right" data-aos-duration = "1000" className={customClassNameFeedbackBlock}>
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
                                 borderBottom: "1px solid grey",
                                 margin: "10px 0px",
                              }}
                           ></div>
                           <p
                              style={{ textAlign: "center", fontSize: "16px" }}
                              className={customClassNameSubtitle}
                           >
                              Санкт-Петербург <br /> Красногвардейская площадь,
                              3Е.
                           </p>
                        </div>
                        <div data-aos = "fade-left" data-aos-duration = "1000"  className={customClassNameFeedbackBlock}>
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
                                 borderBottom: "1px solid grey",
                                 margin: "10px 0px",
                              }}
                           ></div>
                           <p
                              style={{ textAlign: "center", fontSize: "16px" }}
                              className={customClassNameSubtitle}
                           >
                              Санкт-Петербург <br /> Красногвардейская площадь,
                              3Е.
                           </p>
                        </div>
                     </div>
                  </div>
               </>
            ) : (
               <>
                  <p className={callText}>ПОЗВОНИТЬ:</p>
                  <a className={contactsLink} href="tel:+78129709005">
                     +7 (812) 970-90-05
                  </a>
                  <p className={topText}>
                     Красногвардейская площадь 3Е <br />
                     ARTPLAY, метро Новочеркасская, <br />
                     Санкт-Петербург
                  </p>
               </>
            )}

            <div
               className={`${iconsWrapper} ${customClassNameSocialLinksContainer}`}
            >
               <a className={icon} href="https://vk.com/arh1_ru">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     x="0px"
                     y="0px"
                     width="48"
                     height="48"
                     viewBox="0 0 48 48"
                     fill={colorIcons}
                  >
                     <path d="M45.763,35.202c-1.797-3.234-6.426-7.12-8.337-8.811c-0.523-0.463-0.579-1.264-0.103-1.776 c3.647-3.919,6.564-8.422,7.568-11.143C45.334,12.27,44.417,11,43.125,11l-3.753,0c-1.237,0-1.961,0.444-2.306,1.151 c-3.031,6.211-5.631,8.899-7.451,10.47c-1.019,0.88-2.608,0.151-2.608-1.188c0-2.58,0-5.915,0-8.28 c0-1.147-0.938-2.075-2.095-2.075L18.056,11c-0.863,0-1.356,0.977-0.838,1.662l1.132,1.625c0.426,0.563,0.656,1.248,0.656,1.951 L19,23.556c0,1.273-1.543,1.895-2.459,1.003c-3.099-3.018-5.788-9.181-6.756-12.128C9.505,11.578,8.706,11.002,7.8,11l-3.697-0.009 c-1.387,0-2.401,1.315-2.024,2.639c3.378,11.857,10.309,23.137,22.661,24.36c1.217,0.12,2.267-0.86,2.267-2.073l0-3.846 c0-1.103,0.865-2.051,1.977-2.079c0.039-0.001,0.078-0.001,0.117-0.001c3.267,0,6.926,4.755,8.206,6.979 c0.368,0.64,1.056,1.03,1.8,1.03l4.973,0C45.531,38,46.462,36.461,45.763,35.202z"></path>
                  </svg>
               </a>
               <a
                  className={icon}
                  href="https://www.instagram.com/design_facad"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     fill={colorIcons}
                     viewBox="0 0 24 24"
                  >
                     <path
                        d="M21.231 0h-18.462c-1.529 0-2.769 1.24-2.769 2.769v18.46c0 1.531 1.24 2.771 2.769 2.771h18.463c1.529 0 2.768-1.24 2.768-2.771v-18.46c0-1.529-1.239-2.769-2.769-2.769zm-9.231 7.385c2.549 0 4.616 2.065 4.616 4.615 0 2.549-2.067 4.616-4.616 4.616s-4.615-2.068-4.615-4.616c0-2.55 2.066-4.615 4.615-4.615zm9 12.693c0 .509-.413.922-.924.922h-16.152c-.511 0-.924-.413-.924-.922v-10.078h1.897c-.088.315-.153.64-.2.971-.05.337-.081.679-.081 1.029 0 4.079 3.306 7.385 7.384 7.385s7.384-3.306 7.384-7.385c0-.35-.031-.692-.081-1.028-.047-.331-.112-.656-.2-.971h1.897v10.077zm0-13.98c0 .509-.413.923-.924.923h-2.174c-.511 0-.923-.414-.923-.923v-2.175c0-.51.412-.923.923-.923h2.174c.511 0 .924.413.924.923v2.175z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                     />
                  </svg>
               </a>
               <a
                  className={icon}
                  href="https://api.whatsapp.com/send?phone=88129709005"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill={colorIcons}
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                  >
                     <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
               </a>
               <a className={icon} href="https://t.me/Sasha_Save">
                  <svg
                     width="24px"
                     height="24px"
                     xmlns="http://www.w3.org/2000/svg"
                     fill={colorIcons}
                  >
                     <path
                        id="telegram-1"
                        d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
                     />
                  </svg>
               </a>
            </div>
            {whiteFooter ? null : (
               <div className={phoneWrapper}>
                  <input className={phoneInput} />
                  <button className={phoneButton}>ОТПРАВИТЬ ЗАЯВКУ</button>
               </div>
            )}
         </div>
         <div className={`${bottom} ${customClassNameFooter}`}>
            <div className={bottomText}>
               © "АРХИТЕКТУРА" 2006-2020. Все права защищены.
               <br /> <br />
               Фотографии и тексты использованные на сайте являются авторской{" "}
               <br />
               собственностью ООО "АРХИТЕКТУРА" ОГРН 1177835017060
            </div>
         </div>
      </footer>
   );
};

export default Footer;
