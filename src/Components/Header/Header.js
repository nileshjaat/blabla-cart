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
  CartCount,
  CartCountText,
} from './styledComponents';
import CartModal from '../CartModal/CartModal';

function Header({
  handleClick,
  showCartModal,
  cartItems,
  handleSaveCartItems,
  cartItemsCount,
}) {
  return (
    <>
      <HeaderContainer>
        <HeaderTitle>BlablaCart</HeaderTitle>
        <DetailsContainer>
          {cartItemsCount && cartItemsCount !== 0 ? (
            <CartCount>
              <CartCountText>{cartItemsCount}</CartCountText>
            </CartCount>
          ) : null}

          <img
            src={CartImage}
            alt="cart"
            width="40"
            height="40"
            className="cart-icon"
            onClick={handleClick}
          />

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

        <CartModal
          cartItems={cartItems}
          showCartModal={showCartModal}
          handleSaveCartItems={handleSaveCartItems}
        />
      </HeaderContainer>
    </>
  );
}

export default Header;
