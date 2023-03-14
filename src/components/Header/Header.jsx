import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <NavLogoWrapper>
          <NavLogoLink href="#">
            <LogoImg src="https://arh.yamaster.ml/images/arhlogotip02.webp" />
          </NavLogoLink>
        </NavLogoWrapper>
        <NavButtonWrapper>
          <NavButton>О НАС</NavButton>
          <NavButton>НАШИ РАБОТЫ</NavButton>
          <NavButton>БАЗА ЗНАНИЙ</NavButton>
          <NavButton>КОНТАКТЫ</NavButton>
        </NavButtonWrapper>
        <NavContactWrapper>
          <NumberButton>8 (812) 970-90-05</NumberButton>
          <NavButtonContact href="https://api.whatsapp.com/send?phone=88129709005">
            <Img src="https://arh.yamaster.ml/images/ikon/icons8-whatsapp.svg" />
          </NavButtonContact>
          <NavButtonContact href="https://t.me/Sasha_Save">
            <Img src="https://arh.yamaster.ml/images/ikon/icons8-telegram.svg" />
          </NavButtonContact>
        </NavContactWrapper>
      </HeaderWrapper>
    </Container>
  );
};
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 15px;
  background-color: gray;
`;
const HeaderWrapper = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const LogoImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 150px;
`;
const NavButton = styled.a`
  color: white;
  border: 0;
  background: transparent;
  transition: 0.5s;
  &:hover {
    color: rgb(255, 68, 31);
    cursor: pointer;
  }
`;
const NavButtonContact = styled.a.attrs((props) => ({
  href: props.href,
}))`
  width: 30px;
`;
const NavLogoLink = styled.a.attrs((props) => ({
  href: props.href,
}))``;

const Img = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
`;

const NavButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
  font-size: 18px;
`;
const NavContactWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 25%;
`;
const NavLogoWrapper = styled.div`
  width: 25%;
`;
const shiningAnimation = keyframes`
    0% {left: -100px}
    20% {left: 100%}
    100% {left: 100%}
`;
const NumberButton = styled.button`
  color: white;
  background: transparent;
  border: 1px solid white;
  border-radius: 30px;
  transition: 0.5s;
  padding: 12px 20px;
  position: relative;
  overflow: hidden;
  &:hover {
    background: rgb(255, 68, 31);
    cursor: pointer;
    border: 1px solid rgb(255, 68, 31);
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

export default Header;
