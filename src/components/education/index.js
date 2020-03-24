import React from 'react';
import { Heading, H2, Body } from '../introduction/style';
import {education} from './constant';

const Education = () => {
  return(
    <div>
      <Heading>
        <H2>Education</H2>
      </Heading>
      <Body>
        <p>{education}</p>
      </Body>
    </div>
  );
};

export default Education;