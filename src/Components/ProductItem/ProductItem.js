import React from 'react';
import './ProductItem.css';
import { Item, ProductItemName, Button, ButtonText } from './styledComponents';

function ProductItem({ id, name, image }) {
  return (
    <Item>
      <img src={image} alt={name} width="250" height="250" />
      <ProductItemName>{name}</ProductItemName>
      <Button>
        <ButtonText>Add to Cart</ButtonText>
      </Button>
    </Item>
  );
}

export default ProductItem;
