import { FC } from 'react';
import styled from 'styled-components';

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #1756dd32;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 99;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 80px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  margin-top: 10px;
`;

const DonateButton = styled.button`
  outline: none;
  border: none;
  background-color: #54b154;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid #54b154;
  }
`;

export const TopSection: FC = () => (
  <TopSectionContainer>
    <Logo>Global Warming</Logo>
    <Slogan>Keep it cool for safe living</Slogan>
    <DonateButton>Join us</DonateButton>
  </TopSectionContainer>
);
