import React from 'react';
import styles from './OurServicesSection.module.css';
import { Button } from '@mui/material';
import OurServicesCard from '../OurServicesCard/OurServicesCard';
import { useAuth } from '../../contexts/AuthContext';
import { useAdminModalEdit } from '../../contexts/AdminModalEditContext';
import { ILandingBlock, ILandingBlockElement } from '../../interfaces/landingPageResponse';
type cardType = {
  img: ILandingBlockElement;
  description: ILandingBlockElement;
  title: ILandingBlockElement;
  aosAnimation: string;
};
interface OurServicesSectionProps {
  titleText: ILandingBlockElement;
  firstCard: cardType;
  secondCard: cardType;
  thirdCard: cardType;
  block: ILandingBlock;
}

const OurServicesSection: React.FC<OurServicesSectionProps> = ({
  titleText,
  firstCard,
  secondCard,
  thirdCard,
  block,
}) => {
  const { ourServices, title, cardContainer } = styles;
  const { isAuthSettings } = useAuth();
  const { setElSettings, setIsOpen, setIsOpenBlockEdit, setBlockSettings } = useAdminModalEdit();
  const cards: cardType[] = [firstCard, secondCard, thirdCard];
  return (
    <section id={'ourServices'}>
      {isAuthSettings.isAdmin ? (
        <Button
          onClick={() => {
            if (isAuthSettings.isAdmin) {
              setIsOpenBlockEdit(true);
              setBlockSettings(block);
            }
          }}
          variant="outlined"
        >
          Изменить порядок блока
        </Button>
      ) : null}
      <div id={ourServices}>
        <div className="container">
          <h1
            data-aos="fade-right"
            data-aos-duration="1500"
            className={title}
            style={{
              cursor: isAuthSettings.isAdmin ? 'pointer' : 'default',
            }}
            onClick={(e: any) => {
              if (isAuthSettings.isAdmin) {
                setIsOpen(true);
                setElSettings(titleText);
              }
            }}
          >
            {titleText.value}
          </h1>
          <div className={cardContainer}>
            {cards.map((card: cardType, index) => {
              return (
                <OurServicesCard
                  pathCard={String(index)}
                  description={card.description}
                  key={index}
                  aosAnimation={card.aosAnimation}
                  titleEl={card.title}
                  imgEl={card.img}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
