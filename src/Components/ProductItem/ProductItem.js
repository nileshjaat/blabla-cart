import React from 'react';
import './ProductItem.css';
import { Item, ProductItemName, Button, ButtonText } from './styledComponents';

function ProductItem({ id, name, image, cartItems, handleSaveCartItems }) {
  const onButtonCLick = (id, name, image) => {
    let items = [...cartItems];

    const itemIndex = items.findIndex((element) => element.id === id);

    if (itemIndex > -1) {
      items[itemIndex] = {
        ...items[itemIndex],
        quantity: items[itemIndex].quantity + 1,
      };

      items = [...items];
    } else {
      items = [...items, { id, name, image, quantity: 1 }];
    }

    handleSaveCartItems(items);
  };

  return (
    <Item>
      <img src={image} alt={name} width="250" height="250" />
      <ProductItemName>{name}</ProductItemName>
      <Button onClick={() => onButtonCLick(id, name, image)}>
        <ButtonText>Add to Cart</ButtonText>
      </Button>
    </Item>
  );
}

export default ProductItem;
