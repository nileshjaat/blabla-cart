import React from 'react';
import CartItem from '../CartItem/CartItem';
import './CartModal.css';
import { CartModalWrapper, EmptyCartText } from './styledComponents';

function CartModal({ showCartModal, cartItems, handleSaveCartItems }) {
  const onButtonClick = (e) => {
    e.stopPropagation();
  };

  const getList = () => {
    return (
      <>
        {cartItems.length !== 0 ? (
          <>
            {cartItems.map(({ id, name, image, quantity }) => (
              <CartItem
                key={id}
                id={id}
                name={name}
                image={image}
                quantity={quantity}
                cartItems={cartItems}
                handleSaveCartItems={handleSaveCartItems}
              />
            ))}
          </>
        ) : cartItems.length === 0 ? (
          <EmptyCartText>Your cart is empty!</EmptyCartText>
        ) : (
          <EmptyCartText>Your cart is empty!</EmptyCartText>
        )}
      </>
    );
  };

  return (
    <>
      {showCartModal ? (
        <CartModalWrapper onClick={onButtonClick}>{getList()}</CartModalWrapper>
      ) : null}
    </>
  );
}

export default CartModal;
