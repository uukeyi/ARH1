import React from "react";
import Footer from "../Footer/Footer";
import styles from "./SingleProjectPageSection.module.css";
interface SingleProjectPageSection {
   titleText: string;
   city: string;
   date: string;
   facadeSquare: string;
   floors: string;
   houseSquare: string;
   children?: any;
}

const SingleProjectPageImgCover: React.FC<SingleProjectPageSection> = ({
   titleText,
   city,
   date,
   facadeSquare,
   floors,
   houseSquare,
   children,
}) => {
   const {
      mainBlock,
      bg,
      overlay,
      title,
      subtitle,
      spaceAroundContainer,
      card,
      cardSubtitle,
      cardTitle,
      infoCard,
      infoCardSubtitle,
      infoCardTitle,
      textContainer,
      contentContainer,
      footer,
      footerLogo,
      footerSubtitle,
      footerTextContainer,
      footerFeedbackContainer,
      footerFeedbackBlock,
      footerSocialLinks,
      bgWrapper,
   } = styles;
   return (
      <>
         <div className={mainBlock}>
            <div className={textContainer}>
               <p style={{ color: "white" }} className={title}>
                  {titleText}
               </p>
               <p className={subtitle}>
                  {city} , {date}
               </p>
               <div className={spaceAroundContainer}>
                  <div className={card}>
                     <p className={cardSubtitle}>
                        <div></div>| ИНЖЕНЕР-СТРОИТЕЛЬ
                     </p>
                     <p className={cardTitle}>АЛЕКСАНДР САВЕНКОВ</p>
                  </div>
                  <div className={card}>
                     <p className={cardSubtitle}>
                        <div></div>| ГЛАВНЫЙ АРХИТЕКТОР / ЛАНДШАФТНЫЙ АРХИТЕКТОР
                     </p>
                     <p className={cardTitle}>РЕНАТА ГАЛИМУЛИНА</p>
                  </div>
               </div>
               <div className={spaceAroundContainer}>
                  <div className={infoCard}>
                     <p className={infoCardTitle}>{houseSquare}</p>
                     <p className={infoCardSubtitle}>Площадь дома</p>
                  </div>
                  <div className={infoCard}>
                     <p className={infoCardTitle}>{floors}</p>
                     <p className={infoCardSubtitle}>Этажность</p>
                  </div>
                  <div className={infoCard}>
                     <p className={infoCardTitle}>{facadeSquare}</p>
                     <p className={infoCardSubtitle}>Площадь фасадов</p>
                  </div>
               </div>
               <div className={bgWrapper}>
                  <div className={bg}>
                     <div className={overlay}></div>
                  </div>
               </div>
            </div>

            {/* <div className={contentContainer}>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
               eius quas rerum rem eveniet, nihil fugit optio numquam sunt enim
               quisquam facere voluptatibus vero architecto vitae accusantium
               aperiam tempore debitis voluptas blanditiis repellendus explicabo
               eum aspernatur? Eaque sint quis ducimus et nisi sed asperiores
               officia modi. Iure et ea repellendus. Pariatur magnam eveniet
               eligendi? Nemo placeat laboriosam nisi maiores! Sint dignissimos
               labore explicabo error! Dignissimos, quo. Dolore cupiditate
               ducimus atque quia est consectetur non repellat praesentium quas
               corporis id magnam ex quos, aliquid nisi eos sunt illum provident
               similique obcaecati sapiente vel maxime et? Saepe id unde
               molestias, earum sequi repellat? Fuga, cumque voluptatum
               voluptatem esse dicta eligendi officiis incidunt, maxime optio,
               reprehenderit porro nostrum perferendis cum placeat debitis
               consequuntur at hic explicabo id nesciunt enim error quia nemo.
               Fugiat id aliquid architecto, porro temporibus modi consequuntur
               magni aliquam alias. Qui perferendis possimus tempore enim
               repellendus? Placeat voluptates aliquam numquam molestiae odio at
               consequatur, in odit officiis et error, distinctio magnam ad
               rerum? Quae hic ab odit sapiente voluptates odio architecto non
               accusamus minima, ut id vitae eos, excepturi qui fuga, nulla
               quaerat. Facilis corporis reiciendis eum quos nobis deserunt et
               sapiente? Animi, nesciunt quas quaerat dignissimos excepturi eos,
               sed, mollitia vitae molestiae natus ab inventore suscipit sint
               autem voluptatem iure velit. Nemo quidem ex sunt, aperiam
               voluptatum magni quod voluptatem, ut molestiae consequatur
               veritatis enim quibusdam commodi saepe. Velit itaque dolorem
               delectus, officiis iste quia asperiores debitis ipsa modi aut
               libero illum aspernatur fugiat, ipsum saepe voluptate,
               praesentium minus eligendi in? Sapiente, soluta. Vero, alias
               voluptatibus. Vero, debitis earum tenetur veniam cum ipsum! Magni
               placeat inventore, totam quos aperiam quae voluptates cupiditate,
               consectetur facilis eos ipsam alias provident debitis tempore,
               modi facere labore? Libero laudantium cum, ratione necessitatibus
               neque ad eaque illum corporis qui expedita veritatis sequi
               repellat iste at. Soluta repudiandae, quam dolor nesciunt unde
               eum sint, numquam magni perspiciatis perferendis possimus iusto
               ipsa! Modi dicta mollitia quos odit natus veniam aliquid quia ad
               adipisci quia, accusantium qui. Hic, veritatis, fugiat laudantium
               sed non magni facilis sunt perspiciatis suscipit est veniam
               quisquam itaque voluptates vero nisi esse ipsum error quasi
               tenetur obcaecati distinctio fugit blanditiis reprehenderit
               numquam! Placeat, nemo voluptatum nulla quo quia, perspiciatis et
               quisquam necessitatibus ea molestiae assumenda sint aliquid ab
               minima accusantium asperiores eum soluta aspernatur alias veniam
               voluptate. Vel sapiente animi asperiores pariatur obcaecati ipsum
               blanditiis omnis ratione quam voluptatum, eos neque veniam quia,
               harum labore accusamus minus voluptatem officia officiis tempora
               maxime soluta, possimus numquam! Explicabo voluptate delectus
               neque. Fugit, deserunt cupiditate corporis eum doloribus ea saepe
               porro, quos atque consequuntur et obcaecati temporibus?
               Cupiditate perspiciatis labore temporibus aperiam? Tempore libero
               aut earum illo omnis voluptate recusandae inventore eos ea,
               dolore soluta quia esse sequi accusamus debitis consequatur
               explicabo? Ea facere est fugiat tenetur, aliquid facilis ratione
               ipsam dicta, minima saepe ab quibusdam enim vitae quasi
               recusandae odit delectus earum quod voluptas. Minima dolores eius
               ipsam molestiae perspiciatis velit, debitis animi iusto beatae
               quia quibusdam laborum aspernatur eveniet labore assumenda
               nostrum reiciendis, commodi ut asperiores repellendus dolorum eum
               est architecto odit. Tenetur ratione non et, nostrum reiciendis
               recusandae officia saepe vel ipsam, numquam voluptatum
               consequatur sapiente? Sunt nemo temporibus, porro explicabo
               minima earum sed nihil, voluptatem, veritatis doloremque
               exercitationem aliquid. Sit dolorem qui magni ad? Quae asperiores
               sit enim est aperiam omnis saepe repellendus quibusdam? Ducimus
               saepe aliquam odio doloremque tempora adipisci, sequi veniam
               deleniti et expedita vero at omnis quaerat pariatur odit
               laboriosam praesentium autem veritatis repudiandae, facilis
               consequuntur voluptate magnam animi tenetur! Quod quis illum sit
               eligendi dolorem possimus consequuntur accusamus nam sequi
               commodi quisquam magnam adipisci ducimus ipsum impedit cum
               repellendus consectetur cumque dicta, incidunt molestias velit
               tempore veniam. Facilis tenetur, quod odio molestias culpa
               possimus illo architecto ducimus error in, eius reprehenderit!
               Consectetur distinctio voluptate ullam saepe adipisci quas quam,
               iusto eligendi ut et suscipit corrupti aliquam consequuntur autem
               laudantium libero corporis alias? Sequi consequatur architecto
               voluptatem, temporibus dolorem deserunt enim corporis sint modi
               veritatis, eum vel vitae commodi assumenda ut facere
               reprehenderit minus. Eaque at quisquam alias quae odio natus
               incidunt laborum fugiat omnis, esse dolorum, provident, vitae
               veritatis enim? Nam placeat consequuntur vero dolorem laborum.
               Aut doloremque dolor suscipit tempora culpa inventore neque,
               omnis dolorem ipsam laboriosam corporis atque nulla ipsum magni
               voluptate itaque natus architecto perferendis quae quibusdam?
               Nesciunt est, magni assumenda quam illum natus labore doloremque.
               Consequuntur repudiandae eius sapiente soluta, aut pariatur saepe
               esse voluptate tempora accusamus incidunt exercitationem impedit
               at quos, eveniet magnam? Recusandae saepe sequi veniam quaerat in
               temporibus qui quos nihil libero, ullam at suscipit! Voluptates,
               ad aspernatur. Eius, eligendi voluptatum perspiciatis laudantium
               explicabo consectetur quod, totam mollitia enim commodi nulla
               magni quas qui modi temporibus assumenda amet maxime magnam sint
               sunt autem recusandae dignissimos vero quo? Ratione cupiditate
               reprehenderit dolorem veniam rem reiciendis quidem, hic porro.
               Veniam quod inventore veritatis, qui quae repellat fugit optio
               illum maiores soluta dolor ea ab eligendi error rem hic? Id
               obcaecati magni modi doloremque, ducimus illum soluta totam
               voluptatibus unde earum, sunt rerum, eius consequuntur ut
               eligendi eaque nulla? Distinctio sequi ratione nobis sed incidunt
               impedit vero atque quasi beatae reiciendis fugit maiores
               perspiciatis rerum veniam aut at, saepe error nostrum quam
               tempore ex accusamus praesentium odio suscipit. Temporibus atque
               eaque doloremque, adipisci modi tempora consequuntur eius
               obcaecati provident ullam illo voluptas voluptate asperiores
               ratione similique quia id voluptatibus quaerat sequi perferendis
               numquam, fuga saepe, et enim! Eligendi natus magnam, reiciendis,
               ipsum suscipit asperiores eos ut repellendus ratione nostrum
               delectus aut quam quidem earum numquam voluptates, voluptate nisi
               similique quis hic molestiae distinctio expedita necessitatibus?
               Veritatis consectetur iusto hic eum facilis et qui saepe possimus
               amet. Cum iusto minima ducimus quidem labore eos sit possimus
               nemo officia? Aliquam pariatur excepturi, laborum facilis enim
               officiis unde possimus explicabo deleniti. Accusamus alias
               consectetur sint expedita, laboriosam corrupti facilis quibusdam
               voluptate voluptates incidunt architecto odio nulla quis impedit
               quo.
            </div> */}
         </div>
         <Footer
            whiteFooter={true}
            colorIcons="#fff"
            customClassNameFooter={footer}
            customClassNameFeedbackContainer={footerFeedbackContainer}
            customClassNameFeedbackBlock={footerFeedbackBlock}
            customClassNameSocialLinksContainer={footerSocialLinks}
            customClassNameTextContainer={footerTextContainer}
            customClassNameSubtitle={footerSubtitle}
            customClassNameLogo={footerLogo}
         />
      </>
   );
};

export default SingleProjectPageImgCover;
