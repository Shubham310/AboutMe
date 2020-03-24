import React from 'react';
import {Container, Image} from './style';
import Avatar from '../../assets/avatar.png';

const ProfilePicture = () => {
  return (
    <Container>
      <Image src={Avatar} alt="profile" />
    </Container>
  );
}

export default ProfilePicture;