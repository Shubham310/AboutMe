import React from 'react';
import {Container, Items, Body} from './style';
import HamburgerMenu from '../hamburgerMenu';
import Introduction from '../introduction';
import Technologies from '../technologies';
import Career from '../career';

const AboutMe = () => {
  return(
    <Container>
      <Items>
        <div>
          <HamburgerMenu />
        </div>
        <Body>
          <Introduction />
          <Technologies />
          <Career />
        </Body>
      </Items>
    </Container>
  );
}

export default AboutMe;