import React from 'react';
import {Items, Item, containerBoxStyles, Span} from './style';
import ContainerBox from '../containerBox';
import DownloadIcon from '../../assets/download.svg';

const HamburgerMenu = () => {
  return(
    <ContainerBox styles={containerBoxStyles}>
      <Items>
        <Item>Introduction</Item>
        <Item>Technologies</Item>
        <Item>Career</Item>
        <Item>
          <img src={DownloadIcon} alt="Download Icon" />
          <Span>Resume</Span>
        </Item>
      </Items>
    </ContainerBox>
  );
}

export default HamburgerMenu;