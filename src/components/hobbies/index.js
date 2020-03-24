import React from 'react';
import { Heading, H2, Body } from '../introduction/style';
import { hobbies } from './constant';

const Hobbies = () => {
  return(
    <div>
      <Heading>
        <H2>Hobbies</H2>
      </Heading>
      <Body>
        <p>{hobbies}</p>
      </Body>
    </div>
  );
};

export default Hobbies;