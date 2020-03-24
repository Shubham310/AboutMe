import React from 'react';
import {Container, Heading, Body, H2, Para} from './style';
import {aboutMe} from './constants';

const Introduction = () => {
  return(
    <Container>
      <Heading>
        <H2>Introduction</H2>
      </Heading>
      <Body>
        <Para>{aboutMe}</Para>
      </Body>
    </Container>
  );
};

export default Introduction;