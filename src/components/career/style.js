import styled from 'styled-components';

export const Circle = styled.div`
  height:10px;
  width: 10px;
  border-radius: 50%;
  border: 2px solid cadetblue;
`;

export const VerticalLine = styled.div`
  flex-grow: 1;
  border-left: 2px solid cadetblue;
`;

export const SmallVerticalLine = styled.div`
  height: 15px;
  border-left: 2px solid cadetblue;
`;

export const Body = styled.div`
  display: flex;
  margin: 0 80px;
`;

export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Hr = styled.hr`
  border-top: 1px dashed red;
`;

export const Duration = styled.h2`
  margin: 10px;
`;

export const Place = styled.h2`
  margin: 3px 10px 10px;
`;

export const Position = styled.p`
  margin: 3px 10px 10px;
`;

export const CareerBlock = styled.div`
  display: flex;
  flex-direction: row;
`;