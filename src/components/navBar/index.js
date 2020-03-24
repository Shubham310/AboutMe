import React from 'react';
import {Container, Items, H4} from './style';

const NavBar = () => {
  return (
    <Container>
      <Items>
        <H4>About Me</H4>
        <H4>Work</H4>
        <H4>Resume</H4>
      </Items>
    </Container>
  );
}

export default NavBar;