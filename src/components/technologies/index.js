import React from 'react';
import {Container, List, Item} from './style';
import {technologies, tech} from './constant';
import { Heading, H2, Body, Para } from '../introduction/style';
import TickIcon from '../../assets/tick.svg';


const techItems = () => {
  return tech.map((tech) => {
    return (
      <List>
        <img src={TickIcon} alt="tickIcon"/>
        <Item>{tech}</Item>
      </List>
    );
  });
};

const Technologies = () => {
  return(
    <Container>
      <Heading>
        <H2>Technologies</H2>
      </Heading>
      <Body>
        <Para>{technologies}</Para>
        <div>
          {techItems()}
        </div>
      </Body>
    </Container>
  );
}

export default Technologies;