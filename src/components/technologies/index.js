import React from 'react';
import {Container} from './style';
import {technologies} from './constant';
import { Heading, H2, Body } from '../introduction/style';

const Technologies = () => {
  return(
    <Container>
      <Heading>
        <H2>Technologies</H2>
      </Heading>
      <Body>
        <p>{technologies}</p>
      </Body>
    </Container>
  );
}

export default Technologies;