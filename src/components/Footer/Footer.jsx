import React from 'react';
import styled, { keyframes } from 'styled-components';
import vkIcon from '../../assets/icons/vkIcon.png';
import telegramIcon from '../../assets/icons/telegramIcon.svg';
import instagramIcon from '../../assets/icons/instagramIcon.svg';
import whatsappIcon from '../../assets/icons/whatsappIcon.svg';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTop>
        <FooterCallText>ПОЗВОНИТЬ:</FooterCallText>
        <FooterContactsLink href="tel:+78129709005">+7 (812) 970-90-05</FooterContactsLink>
        <FooterTopText>
          Красногвардейская площадь 3Е <br />
          ARTPLAY, метро Новочеркасская, <br />
          Санкт-Петербург
        </FooterTopText>
        <FooterIconsWrapper>
          <FooterIcon href="https://vk.com/arh1_ru">
            <Img src={vkIcon} />
          </FooterIcon>
          <FooterIcon href="https://www.instagram.com/design_facad">
            <Img src={instagramIcon} />
          </FooterIcon>
          <FooterIcon href="https://api.whatsapp.com/send?phone=88129709005">
            <Img src={whatsappIcon} />
          </FooterIcon>
          <FooterIcon href="https://t.me/Sasha_Save">
            <Img src={telegramIcon} />
          </FooterIcon>
        </FooterIconsWrapper>
        <FooterPhoneWrapper>
          <FooterPhoneInput />
          <FooterPhoneButton>ОТПРАВИТЬ ЗАЯВКУ</FooterPhoneButton>
        </FooterPhoneWrapper>
      </FooterTop>
      <FooterBottom>
        <FooterBottomText>
          © "АРХИТЕКТУРА" 2006-2020. Все права защищены.
          <br /> <br />
          Фотографии и тексты использованные на сайте являются авторской <br />
          собственностью ООО "АРХИТЕКТУРА" ОГРН 1177835017060
        </FooterBottomText>
      </FooterBottom>
    </FooterWrapper>
  );
};
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;
const FooterTop = styled.div`
  background: rgba(28, 28, 28, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;
const Img = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
`;

const FooterBottom = styled.div`
  background: rgba(1, 1, 1, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;
const FooterBottomText = styled.p`
  font-size: 16px;
  text-align: center;
  opacity: 0.7;
  @media (max-width: 800px) {
    font-size: 13px;
  }
`;
const FooterIconsWrapper = styled.div`
  display: flex;
  margin: 50px 0;
`;
const FooterCallText = styled.p`
  font-size: 25px;
  text-align: center;
  margin: 0;
  font-weight: 300;
  font-family: 'Oswald', sans-serif;
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;
const FooterTopText = styled.p`
  font-size: 23px;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;
const FooterIcon = styled.a.attrs((props) => ({
  href: props.href,
}))`
  background: white;
  border-radius: 50%;
  border: 3px solid white;
  padding: 10px;
  transition: 0.5s;
  width: 30px;
  display: flex;
  margin: 0 5px;
  align-items: center;
  &:hover {
    border: 3px solid rgb(235, 51, 73);
    border-radius: 0;
  }
`;
const FooterContactsLink = styled.a.attrs((props) => ({
  href: props.href,
}))`
  font-size: 43px;
  color: white;
  text-decoration: none;
  transition: 0.5s;
  font-weight: 700;
  margin-bottom: 20px;

  &:hover {
    color: rgb(235, 51, 73);
  }
  @media (max-width: 800px) {
    font-size: 33px;
  }
`;
const FooterPhoneWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  @media (max-width: 736px) {
    flex-direction: column;
  }
`;
const FooterPhoneInput = styled.input`
  font-size: 18px;
  padding: 20px;
  border: none;
  border-radius: 50px;
  margin: 10px;
  ::placeholder {
    color: black;
  }
`;
const shiningAnimation = keyframes`
    0% {left: -100px}
    20% {left: 100%}
    100% {left: 100%}
`;
const FooterPhoneButton = styled.button`
  color: white;
  background: rgb(255, 68, 31);
  border: 0;
  margin: 10px;
  border-radius: 50px;
  padding: 10px 40px;
  font-size: 21px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s;
  font-family: 'Oswald', sans-serif;
  -webkit-box-shadow: 0px 12px 26px 7px rgba(255, 255, 255, 0.2);
  -moz-box-shadow: 0px 12px 26px 7px rgba(255, 255, 255, 0.2);
  box-shadow: 0px 12px 26px 7px rgba(255, 255, 255, 0.2);
  &:hover {
    -webkit-box-shadow: 0px 12px 15px 7px rgba(255, 255, 255, 0.2);
    -moz-box-shadow: 0px 12px 15px 7px rgba(255, 255, 255, 0.2);
    box-shadow: 0px 12px 15px 7px rgba(255, 255, 255, 0.2);
  }
  &:before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    animation: ${shiningAnimation} 5s infinite linear; /* Animation */
  }
`;
export default Footer;
