import React from 'react';
import './CartItem.css';
import WhitePlus from '../../assets/plus-white.svg';
import BlackPlus from '../../assets/plus-black.svg';
import WhiteMinus from '../../assets/minus-white.png';
import BlackMinus from '../../assets/minus-white.png';
import Trash from '../../assets/Trash.svg';
import {
  ItemContainer,
  ItemDetails,
  ItemInfo,
  ItemName,
  ItemQuantityContainer,
  ItemQuantity,
  ItemQuantityNumber,
} from './styledComponents';

function CartItem({
  id,
  name,
  image,
  quantity,
  cartItems,
  handleSaveCartItems,
}) {
  const onMinusCLick = (id) => {
    let items = [...cartItems];

    const itemIndex = items.findIndex((element) => element.id === id);

    if (items[itemIndex].quantity === 1) {
      items = items.filter((item) => item.id !== id);
    } else {
      items[itemIndex] = {
        ...items[itemIndex],
        quantity: items[itemIndex].quantity - 1,
      };
    }

    handleSaveCartItems(items);
  };

  const onPlusCLick = (id) => {
    let items = [...cartItems];

    const itemIndex = items.findIndex((element) => element.id === id);

    items[itemIndex] = {
      ...items[itemIndex],
      quantity: items[itemIndex].quantity + 1,
    };

    handleSaveCartItems(items);
  };

  const onDeleteCLick = (id) => {
    let items = [...cartItems];

    items = items.filter((item) => item.id !== id);

    handleSaveCartItems(items);
  };

  return (
    <ItemContainer>
      <img src={image} width="100" height="100" />

      <ItemDetails>
        <ItemInfo>
          <ItemName>{name}</ItemName>

          <ItemQuantityContainer>
            <ItemQuantity>Quantity:</ItemQuantity>
            <img
              src={BlackMinus}
              width="30"
              height="30"
              className="action-icon"
              onClick={() => onMinusCLick(id)}
            />
            <ItemQuantityNumber>{quantity}</ItemQuantityNumber>
            <img
              src={BlackPlus}
              width="30"
              height="30"
              className="action-icon"
              onClick={() => onPlusCLick(id)}
            />
          </ItemQuantityContainer>
        </ItemInfo>

        <img
          src={Trash}
          width="30"
          height="30"
          className="trash-icon action-icon"
          onClick={() => onDeleteCLick(id)}
        />
      </ItemDetails>
    </ItemContainer>
  );
}

export default CartItem;
