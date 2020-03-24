import React from 'react';
import {Container, Items, Body} from './style';
import HamburgerMenu from '../hamburgerMenu';
import Introduction from '../introduction';
import Technologies from '../technologies';
import Education from '../education';
import Hobbies from '../hobbies';

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
          <Education />
          <Hobbies />
        </Body>
      </Items>
    </Container>
  );
}

export default AboutMe;