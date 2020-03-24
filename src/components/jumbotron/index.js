import React from 'react';
import {Container} from './style';
import ProfilePicture from '../profilePicture';
import Profile from '../profile';
import ContactDetails from '../contactDetails';

const Jumbotron = () => {
  return (
    <Container>
      <ProfilePicture />
      <Profile />
      <ContactDetails />
    </Container>
  );
}

export default Jumbotron;