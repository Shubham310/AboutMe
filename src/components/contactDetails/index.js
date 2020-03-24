import React from 'react';
import {Items, Item, Text1, Text2} from './style';
import EmailIcon from '../../assets/email.svg';
import LinkedinIcon from '../../assets/linkedin.svg';
import PhoneIcon from '../../assets/phone.svg';
import ContainerBox from '../containerBox';

const ContactDetails = () => {
  return (
    <ContainerBox>
      <Items>
        <Item>
          <img src={EmailIcon} alt="emailIcon"/>
          <Text1>shubh.ism310@gmail.com</Text1>
        </Item>
        <Item>
          <img src={PhoneIcon} alt="phoneIcon"/>
          <Text2>9576060717</Text2>
        </Item>
        <Item>
          <Text2>Based in Bangalore, Karnataka</Text2>
        </Item>
        <Item>
          <img src={LinkedinIcon} alt="linkedinIcon"/>
        </Item>
      </Items>
    </ContainerBox>
  );
}

export default ContactDetails;