import React, { useState } from 'react';
import AdminModalEdit from '../AdminModalEdit';
import styles from './OurServicesCard.module.css';
import { useAuth } from '../../contexts/AuthContext';
import { useAdminModalEdit } from '../../contexts/AdminModalEditContext';
import { ILandingBlockElement } from '../../interfaces/landingPageResponse';
import { useNavigate } from 'react-router-dom';
interface OurServicesCardProps {
  description: ILandingBlockElement;
  imgEl: ILandingBlockElement;
  titleEl: ILandingBlockElement;
  aosAnimation: string;
  pathCard: string;
}

const OurServicesCard: React.FC<OurServicesCardProps> = ({
  description,
  aosAnimation,
  imgEl,
  titleEl,
  pathCard,
}) => {
  const { card, titleClass, descriptionClass } = styles;
  const { setElSettings, setIsOpen } = useAdminModalEdit();
  const { isAuthSettings } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <div
        data-aos={aosAnimation}
        data-aos-duration="1500"
        className={card}
        onClick={() => {
          navigate(`/ourServices`);
        }}
      >
        <img
          src={imgEl.value}
          alt={'Не получилось отобразить картинку'}
      
          onClick={(e: any) => {
            setIsOpen(true);
            setElSettings(imgEl);
          }}
        />
        <p
         
          className={titleClass}
          onClick={(e: any) => {
            setIsOpen(true);
            setElSettings(titleEl);
          }}
        >
          {titleEl.value}
        </p>
        <p
      
          className={descriptionClass}
          onClick={(e: any) => {
            setIsOpen(true);
            setElSettings(description);
          }}
        >
          {description.value}
        </p>
      </div>
    </>
  );
};

export default OurServicesCard;
