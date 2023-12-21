import React from 'react';
import Footer from '../Footer/Footer';
import styles from './SingleProjectPageSection.module.css';
import { useAuth } from '../../contexts/AuthContext';
import { useAdminModalEdit } from '../../contexts/AdminModalEditContext';
import { ILandingBlockElement } from '../../interfaces/landingPageResponse';
import AdminModalEdit from '../AdminModalEdit';
interface SingleProjectPageSection {
  titleText: ILandingBlockElement;
  city: ILandingBlockElement;
  date: ILandingBlockElement;
  facadeSquare: ILandingBlockElement;
  floors: ILandingBlockElement;
  houseSquare: ILandingBlockElement;
  children?: any;
  imgSrc: ILandingBlockElement;
  reconstructionPage?: boolean;
  engineer?: ILandingBlockElement;
  engineerName?: ILandingBlockElement;
  architector?: ILandingBlockElement;
  architectorName?: ILandingBlockElement;
}

const SingleProjectPageImgCover: React.FC<SingleProjectPageSection> = ({
  titleText,
  city,
  date,
  facadeSquare,
  floors,
  houseSquare,
  children,
  imgSrc,
  reconstructionPage,
  engineer,
  engineerName,
  architector,
  architectorName,
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
    fullWidthContainer,
  } = styles;
  const { isAuthSettings } = useAuth();
  const { setElSettings, setIsOpen } = useAdminModalEdit();

  return (
    <>
      <AdminModalEdit />
      <div className={mainBlock}>
        <div
          onClick={(e: any) => {
            if (isAuthSettings.isAdmin) {
              setElSettings(JSON.parse(e.target.dataset.el));
              setIsOpen(true);
            }
          }}
          className={textContainer}
        >
          <p data-el={JSON.stringify(titleText)} style={{ color: 'white' }} className={title}>
            {titleText?.value}
          </p>
          <p className={subtitle}>
            <span data-el={JSON.stringify(city)}>{city?.value}</span> ,{' '}
            <span data-el={JSON.stringify(date)}>{date?.value}</span>
          </p>
          <div className={spaceAroundContainer}>
            <div className={card}>
              <p className={cardSubtitle} data-el={JSON.stringify(engineer)}>
                <div></div>| {engineer?.value}
                {/* <div></div>| ИНЖЕНЕР-СТРОИТЕЛЬ */}
              </p>
              <p className={cardTitle} data-el={JSON.stringify(engineerName)}>
                {engineerName?.value}
              </p>
              {/* <p className={cardTitle}>АЛЕКСАНДР САВЕНКОВ</p> */}
            </div>
            <div className={card}>
              <p className={cardSubtitle} data-el={JSON.stringify(architector)}>
                <div></div>| {architector?.value}
                {/* <div></div>| ГЛАВНЫЙ АРХИТЕКТОР / ЛАНДШАФТНЫЙ АРХИТЕКТОР */}
              </p>
              {/* <p className={cardTitle}>РЕНАТА ГАЛИМУЛИНА</p> */}
              <p className={cardTitle} data-el={JSON.stringify(architectorName)}>
                {architectorName?.value}
              </p>
            </div>
          </div>
          <div className={spaceAroundContainer}>
            <div className={infoCard}>
              <p data-el={JSON.stringify(houseSquare)} className={infoCardTitle}>
                {reconstructionPage ? '6 га' : houseSquare?.value}
              </p>
              <p className={infoCardSubtitle}>
                {reconstructionPage ? 'ПЛОЩАДЬ БАЗЫ ОТДЫХА' : 'Площадь дома'}
              </p>
            </div>
            <div className={infoCard}>
              <p data-el={JSON.stringify(floors)} className={infoCardTitle}>
                {reconstructionPage ? '11500 м2' : floors?.value}
              </p>
              <p className={infoCardSubtitle}>
                {reconstructionPage ? 'ПЛОЩАДЬ СТРОЕНИЙ' : 'Этажность'}
              </p>
            </div>
            <div className={infoCard}>
              <p data-el={JSON.stringify(facadeSquare)} className={infoCardTitle}>
                {reconstructionPage ? '2016 год' : facadeSquare?.value}
              </p>
              <p className={infoCardSubtitle}>
                {reconstructionPage ? 'ГОД ПРОЕКТИРОВАНИЯ' : 'Площадь фасадов'}
              </p>
            </div>
          </div>
          <div className={bgWrapper}>
            <div
              // onClick={(e: any) => {
              //    if (isAuthSettings.isAdmin) {
              //       setElSettings(JSON.parse(e.target.dataset.el));
              //       setIsOpen(true);
              //    }
              // }}
              style={{
                background: `url(${imgSrc?.value}) no-repeat`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
              className={bg}
            >
              <div data-el={JSON.stringify(imgSrc)} className={overlay}></div>
            </div>
          </div>
        </div>

        <div className={contentContainer}>
          {children}

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
            customClassNameContainer={fullWidthContainer}
          />
        </div>
      </div>
    </>
  );
};

export default SingleProjectPageImgCover;
