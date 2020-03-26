import React from 'react';
import { VerticalLine, Body, Circle, LeftDiv, Duration, Place, Position, CareerBlock, SmallVerticalLine } from './style';
import { Container } from '../technologies/style';
import { Heading, H2 } from '../introduction/style';

const Career = () => {
  return(
    <Container>
      <Heading>
        <H2>Career</H2>
      </Heading>
      <Body>
        <div>
          <CareerBlock>
            <LeftDiv>
              <SmallVerticalLine />
              <Circle />
              <VerticalLine />
            </LeftDiv>
            <div>
              <Duration>2018 - Current</Duration>
              <Place>TESCO</Place>
              <Position>Associate Software Developer</Position>
            </div>
          </CareerBlock>
          <CareerBlock>
            <LeftDiv>
              <SmallVerticalLine />
              <Circle />
              <VerticalLine />
            </LeftDiv>
            <div>
              <Duration>2014 - 2018</Duration>
              <Place>Graduated from IIT(ISM) Dhanbad</Place>
              <Position>Major in Electrical Engineering(minor in Computer Science and Engineering)</Position>
            </div>
          </CareerBlock>
          <CareerBlock>
            <LeftDiv>
              <SmallVerticalLine />
              <Circle />
              <VerticalLine />
            </LeftDiv>
            <div>
              <Duration>2013</Duration>
              <Place>Completed High School</Place>
              <Position>with percentage of 88.8</Position>
            </div>
          </CareerBlock>
        </div>
      </Body>
    </Container>
  );
};

export default Career;