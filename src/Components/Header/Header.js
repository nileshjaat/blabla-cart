import React from 'react';
import './Header.css';
import CartImage from '../../assets/shopping-cart.png';
import UserImage from '../../assets/user-image.png';
import {
  HeaderContainer,
  HeaderTitle,
  DetailsContainer,
  UserContainer,
  UserImageContainer,
  UserDetails,
} from './styledComponents';

function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>BlablaCart</HeaderTitle>
      <DetailsContainer>
        <img src={CartImage} alt="cart" width="40" height="40" />

        <UserContainer>
          <UserImageContainer>
            <img
              src={UserImage}
              alt="user"
              width="40"
              height="40"
              style={{ borderRadius: '50%' }}
            />
          </UserImageContainer>

          <UserDetails>Hi, User</UserDetails>
        </UserContainer>
      </DetailsContainer>
    </HeaderContainer>
  );
}

export default Header;
