import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AboutUsPageSection.module.css";
import { getLandingPageBlocks } from "../../store/actions/landingPageActions";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
import { useAuth } from "../../contexts/AuthContext";
import { useAppSelector } from "../../hooks/reduxTookitHooks";
import { useAppDispatch } from "../../hooks/reduxTookitHooks";
import { useEffect } from "react";
import {
   ILandingBlockElement,
   landingElPrototype,
} from "../../interfaces/landingPageResponse";
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
   const dispatch = useAppDispatch();

   const [errorLandingBlocks, setErrorLandingBlocks] = useState(false);
   const { setIsOpen, setElSettings } = useAdminModalEdit();
   const { isAuthSettings } = useAuth();
   const landingBlocks = useAppSelector((state) => state.landingPageSlice);
   useEffect(() => {
      dispatch(
         getLandingPageBlocks({
            showInvisible: true,
            setError: setErrorLandingBlocks,
         })
      );
   }, []);
   if (errorLandingBlocks) {
      alert("Не получилось загрузить сайт");
   }
   const aboutUs = landingBlocks.elements.find((el) => {
      return el.page === "aboutUs";
   });
   const infoCards = aboutUs?.elements.slice(2, 12);
   const profCards = aboutUs?.elements.slice(12, 39);
   console.log(profCards);
   let infoCardTitleObj: ILandingBlockElement = landingElPrototype;
   let infoCardDesc: ILandingBlockElement = landingElPrototype;
   let infoCardIndex = 0;
   let profCardPic: ILandingBlockElement = landingElPrototype;
   let profTitle: ILandingBlockElement = landingElPrototype;
   let profSubtitle: ILandingBlockElement = landingElPrototype;
   let profIndex = 0;
   //  const [profCards, setProfCards] = useState<IProfCard[]>([
   //     {
   //        profPic: "https://arh.yamaster.ml/images/sotrudniki/2_sm_0.webp",
   //        title: "РЕНАТА ГАЛИМУЛИНА",
   //        subtitle: "Главный Архитектор / Ландшафтный архитектор",
   //     },
   //     {
   //        profPic: "https://arh.yamaster.ml/images/sotrudniki/1_sm_0.webp",
   //        title: "АЛЕКСАНДР САВЕНКОВ",
   //        subtitle: "Инженер-строитель",
   //     },
   //     {
   //        profPic: "https://arh.yamaster.ml/images/sotrudniki/10_sm_0.webp",
   //        title: "АННА ВОДЯНОВА",
   //        subtitle: "Архитектор",
   //     },
   //     {
   //        profPic: "https://arh.yamaster.ml/images/sotrudniki/11_sm_0.webp",
   //        title: "ЕКАТЕРИНА НЕНАШЕВА",
   //        subtitle: "Дизайнер",
   //     },
   //     {
   //        profPic: "https://arh.yamaster.ml/images/sotrudniki/5_sm_0.webp",
   //        title: "АЛЕКСАНДР ПАНКРАТОВ",
   //        subtitle: "Главный Инженер Проекта",
   //     },
   //     {
   //        profPic: "https://arh.yamaster.ml/images/sotrudniki/8_sm_0.webp",
   //        title: "АЛЕКСЕЙ БОРОДИН",
   //        subtitle: "Строитель",
   //     },
   //     {
   //        profPic: "https://arh.yamaster.ml/images/sotrudniki/9_sm_0.webp",
   //        title: "АННА АКШЕВСКАЯ",
   //        subtitle: "Дизайнер",
   //     },
   //     {
   //        profPic: "https://arh.yamaster.ml/images/sotrudniki/4_sm_0.webp",
   //        title: "ПАВЕЛ ДОЛГОВ",
   //        subtitle: "Руководитель строительного направления",
   //     },
   //     {
   //        profPic: "https://arh.yamaster.ml/images/sotrudniki/7_sm_0.webp",
   //        title: "АНАТОЛИЙ ЧЕКЛАЕВ",
   //        subtitle: "Директор по строительству",
   //     },
   //  ]);
   return (
      <section id={AboutUsSection}>
         <div className={baOverlay}>
            <div className="container">
               <div className={wrapper}>
                  <div>
                     <Link to={"/"} className={subtitle}>
                        Главная /
                        <Link
                           to={"ourProjects"}
                           style={{ color: "rgb(235 51 73)" }}
                        >
                           {" "}
                           О нас
                        </Link>
                     </Link>
                     <p className={title}>О НАС</p>
                  </div>
                  <p
                     onClick={() => {
                        if (isAuthSettings.isAdmin) {
                           setIsOpen(true);
                           setElSettings(aboutUs?.elements[0]);
                        }
                     }}
                     className={description}
                  >
                     {aboutUs?.elements[0].value}
                  </p>

                  <div
                     onContextMenu={() => {
                        if (isAuthSettings.isAdmin) {
                           setIsOpen(true);
                           setElSettings(aboutUs?.elements[1]);
                        }
                     }}
                     className={videoWrapper}
                  >
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
                  <div
                     onClick={(e: any) => {
                        if (isAuthSettings.isAdmin) {
                           setIsOpen(true);
                           setElSettings(JSON.parse(e.target.dataset.id));
                        }
                     }}
                     className={featuresWrapper}
                  >
                     {infoCards
                        ? infoCards.map((el, index) => {
                             infoCardIndex++;
                             if (infoCardIndex === 1) {
                                infoCardTitleObj = el;
                             }

                             if (infoCardIndex === 2) {
                                infoCardDesc = el;
                                infoCardIndex = 0;
                                return (
                                   <div key={index} className={infoCardWrapper}>
                                      <p
                                         data-id={JSON.stringify(
                                            infoCardTitleObj
                                         )}
                                         className={infoCardTitle}
                                      >
                                         {infoCardTitleObj.value}
                                      </p>
                                      <hr className={cardLine} />
                                      <p
                                         data-id={JSON.stringify(infoCardDesc)}
                                         className={infoCardSubtitle}
                                      >
                                         {infoCardDesc.value}
                                      </p>
                                   </div>
                                );
                             }
                             return null;
                          })
                        : null}
                  </div>
                  <div
                     onClick={(e: any) => {
                        if (isAuthSettings.isAdmin) {
                           setIsOpen(true);
                           setElSettings(JSON.parse(e.target.dataset.id));
                        }
                     }}
                     className={profWrapper}
                  >
                     {profCards
                        ? profCards.map((card, index) => {
                             profIndex++;
                             if (profIndex === 1) {
                                profCardPic = card;
                             }
                             if (profIndex === 2) {
                                profTitle = card;
                             }
                             if (profIndex === 3) {
                                profSubtitle = card;
                                profIndex = 0;
                                return (
                                   <div className={profCardWrapper}>
                                      <img
                                         data-id={JSON.stringify(profCardPic)}
                                         className={profPicture}
                                         src={profCardPic.value}
                                         alt="profile-picture"
                                      />
                                      <div className={profContent}>
                                         <p
                                            data-id={JSON.stringify(profTitle)}
                                            className={profCardTitle}
                                         >
                                            {profTitle.value}
                                         </p>
                                         <hr className={cardLine} />
                                         <p
                                            data-id={JSON.stringify(
                                               profSubtitle
                                            )}
                                            className={profCardSubtitle}
                                         >
                                            {profSubtitle.value}
                                         </p>
                                      </div>
                                   </div>
                                );
                             }
                             return null;
                          })
                        : null}
                  </div>
                  <div
                     onClick={(e: any) => {
                        if (isAuthSettings.isAdmin) {
                           setIsOpen(true);
                           setElSettings(JSON.parse(e.target.dataset.id));
                        }
                     }}
                     className={infoWrapper}
                  >
                     <p>
                        <span
                           data-id={JSON.stringify(aboutUs?.elements[39])}
                           style={{ fontWeight: "300" }}
                        >
                           {aboutUs?.elements[39].value}
                        </span>
                        <br />
                        <br />
                        <span data-id={JSON.stringify(aboutUs?.elements[40])}>
                           {aboutUs?.elements[40].value}
                        </span>
                        <br />
                        <span
                           data-id={JSON.stringify(aboutUs?.elements[41])}
                           style={{ fontWeight: "300" }}
                        >
                           {aboutUs?.elements[41].value}
                        </span>
                        <br />
                        <br />
                        <span
                           data-id={JSON.stringify(aboutUs?.elements[42])}
                           style={{ fontWeight: "300" }}
                        >
                           {aboutUs?.elements[42].value}
                        </span>
                        <br />
                        <br />
                        <span
                           data-id={JSON.stringify(aboutUs?.elements[43])}
                           style={{ fontWeight: "300" }}
                        >
                           {aboutUs?.elements[43].value}
                        </span>
                        <br />
                        <br />
                        <span
                           data-id={JSON.stringify(aboutUs?.elements[44])}
                           style={{ fontWeight: "300" }}
                        >
                           {aboutUs?.elements[44].value}
                        </span>
                        <br />
                        <br />
                        <span
                           data-id={JSON.stringify(aboutUs?.elements[45])}
                           style={{ fontWeight: "300" }}
                        >
                           {aboutUs?.elements[45].value}
                        </span>
                        <br />
                        <br />
                        <span data-id={JSON.stringify(aboutUs?.elements[46])}>
                           {" "}
                           {aboutUs?.elements[46].value}
                        </span>
                        <br />
                        <span
                           data-id={JSON.stringify(aboutUs?.elements[47])}
                           style={{ fontWeight: "300" }}
                        >
                           {aboutUs?.elements[47].value}
                        </span>
                        <br />
                        <span
                           data-id={JSON.stringify(aboutUs?.elements[48])}
                           style={{ fontWeight: "300" }}
                        >
                           {aboutUs?.elements[48].value}
                        </span>
                        <br />
                        <span
                           data-id={JSON.stringify(aboutUs?.elements[49])}
                           style={{ fontWeight: "300" }}
                        >
                           {aboutUs?.elements[49].value}
                        </span>
                        <br />
                        <span
                           data-id={JSON.stringify(aboutUs?.elements[50])}
                           style={{ fontWeight: "300" }}
                        >
                           {aboutUs?.elements[50].value}
                        </span>
                        <br />
                        <br />
                        <span
                           data-id={JSON.stringify(aboutUs?.elements[51])}
                           style={{ fontWeight: "300" }}
                        >
                           {aboutUs?.elements[51].value}
                        </span>
                        <br />
                        <br />
                        <span
                           data-id={JSON.stringify(aboutUs?.elements[52])}
                           style={{ fontWeight: "300" }}
                        >
                           {aboutUs?.elements[52].value}
                        </span>
                        <br />
                        <br />
                        <span
                           data-id={JSON.stringify(aboutUs?.elements[53])}
                           style={{ fontWeight: "300" }}
                        >
                           {aboutUs?.elements[53].value}
                        </span>
                        <br />
                        <br />
                        <span
                           data-id={JSON.stringify(aboutUs?.elements[54])}
                           style={{ fontWeight: "300" }}
                        >
                           {aboutUs?.elements[54].value}
                        </span>
                        <br />
                        <br />
                        <span
                           data-id={JSON.stringify(aboutUs?.elements[55])}
                           style={{ fontWeight: "300" }}
                        >
                           {aboutUs?.elements[55].value}
                        </span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutUsPageSection;
