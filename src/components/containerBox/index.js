import React from 'react';
import {Container} from './style';

const ContainerBox = (props) => {
  const {styles} = props;
  return(
    <Container styles={styles}>
      {props.children}
    </Container>
  );
}

export default ContainerBox;