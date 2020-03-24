import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: azure;
  border-radius: 10px;
  width: 700px;
  margin-top: 20px;
`;

export const Heading = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Body = styled.div`
  height: 100%;
  width: 100;
  margin: 0 80px;
`;

export const H2 = styled.h2`
  margin: 10px 0 10px 0;
  color: #696969;
`;

export const Para = styled.p`
  font-family: fantasy;
`;
