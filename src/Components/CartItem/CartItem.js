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

function CartItem({ Name, image, quantity }) {
  return (
    <ItemContainer>
      <img src={image} width="100" height="100" />

      <ItemDetails>
        <ItemInfo>
          <ItemName>{Name}</ItemName>

          <ItemQuantityContainer>
            <ItemQuantity>Quantity:</ItemQuantity>
            <img
              src={BlackMinus}
              width="30"
              height="30"
              className="action-icon"
            />
            <ItemQuantityNumber>{quantity}</ItemQuantityNumber>
            <img
              src={BlackPlus}
              width="30"
              height="30"
              className="action-icon"
            />
          </ItemQuantityContainer>
        </ItemInfo>

        <img
          src={Trash}
          width="30"
          height="30"
          className="trash-icon action-icon"
        />
      </ItemDetails>
    </ItemContainer>
  );
}

export default CartItem;
