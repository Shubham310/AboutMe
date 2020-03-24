import React from 'react';
import {Items, Item, containerBoxStyles} from './style';
import ContainerBox from '../containerBox';

const HamburgerMenu = () => {
  return(
    <ContainerBox styles={containerBoxStyles}>
      <Items>
        <Item>Introduction</Item>
        <Item>Technologies</Item>
        <Item>Education</Item>
        <Item>Hobbies</Item>
      </Items>
    </ContainerBox>
  );
}

export default HamburgerMenu;