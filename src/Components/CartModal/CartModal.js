import React from 'react';
import CartItem from '../CartItem/CartItem';
import { ItemDetails } from '../CartItem/styledComponents';
import './CartModal.css';
import { CartModalWrapper } from './styledComponents';

function CartModal({ showCartModal }) {
  const onButtonClick = (e) => {
    e.stopPropagation();
  };

  const items = [
    {
      id: 1,
      Name: 'Sports Running Shoes',
      image:
        'https://image.freepik.com/free-photo/colorful-running-fashion-sneaker-shoes-isolated-white-background_47469-291.jpg',
      quantity: 3,
    },

    {
      id: 2,
      Name: 'Normal Black Sunglasses',
      image:
        'https://cdn2.vectorstock.com/i/1000x1000/54/71/sunglasses-with-black-glasses-on-white-background-vector-6005471.jpg',
      quantity: 5,
    },

    {
      id: 3,
      Name: 'Yellow Hand Bag',
      image:
        'https://previews.123rf.com/images/annnam29/annnam291511/annnam29151100094/48196739-yellow-hand-bag-isolated-on-white-background.jpg',
      quantity: 1,
    },

    {
      id: 4,
      Name: 'Yellow Hand Bag',
      image:
        'https://previews.123rf.com/images/annnam29/annnam291511/annnam29151100094/48196739-yellow-hand-bag-isolated-on-white-background.jpg',
      quantity: 1,
    },

    {
      id: 5,
      Name: 'Yellow Hand Bag',
      image:
        'https://previews.123rf.com/images/annnam29/annnam291511/annnam29151100094/48196739-yellow-hand-bag-isolated-on-white-background.jpg',
      quantity: 1,
    },
  ];

  const getList = () => {
    return (
      <>
        {items.map(({ id, Name, image, quantity }) => (
          <CartItem key={id} Name={Name} image={image} quantity={quantity} />
        ))}
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
