import React, { useState } from 'react';
import { shoes, sunglasses, bags } from '../../View/Home/dummyData';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.css';
import {
  Container,
  CategoryContainer,
  ProductsContainer,
  Category,
  CategoryName,
  Tab,
  ProductsTitle,
  ProductsListWrapper,
} from './styledComponents';

function ProductList({ cartItems, handleSaveCartItems }) {
  const [showShoes, setShowShoes] = useState(true);
  const [showSunglasses, setShowSunglasses] = useState(false);
  const [showBags, setShowBags] = useState(false);

  const handleShoes = () => {
    setShowShoes(true);
    setShowSunglasses(false);
    setShowBags(false);
  };

  const handleSunglasses = () => {
    setShowShoes(false);
    setShowSunglasses(true);
    setShowBags(false);
  };

  const handleBags = () => {
    setShowShoes(false);
    setShowSunglasses(false);
    setShowBags(true);
  };

  const getList = () => {
    return (
      <>
        {showShoes && (
          <>
            {shoes.map(({ id, name, image }) => (
              <ProductItem
                key={id}
                id={id}
                name={name}
                image={image}
                cartItems={cartItems}
                handleSaveCartItems={handleSaveCartItems}
              />
            ))}
          </>
        )}

        {showSunglasses && (
          <>
            {sunglasses.map(({ id, name, image }) => (
              <ProductItem
                key={id}
                id={id}
                name={name}
                image={image}
                cartItems={cartItems}
                handleSaveCartItems={handleSaveCartItems}
              />
            ))}
          </>
        )}

        {showBags && (
          <>
            {bags.map(({ id, name, image }) => (
              <ProductItem
                key={id}
                id={id}
                name={name}
                image={image}
                cartItems={cartItems}
                handleSaveCartItems={handleSaveCartItems}
              />
            ))}
          </>
        )}
      </>
    );
  };

  let category =
    showShoes === true
      ? 'Shoes'
      : showSunglasses
      ? 'Sunglasses'
      : showBags
      ? 'Bags'
      : '';

  return (
    <Container>
      <CategoryContainer>
        <Category
          onClick={handleShoes}
          className={showShoes === true ? 'selected-category' : ''}
        >
          <Tab>
            <CategoryName
              className={showShoes === true ? 'selected-category-text' : ''}
            >
              Shoes
            </CategoryName>
          </Tab>
        </Category>

        <Category
          onClick={handleSunglasses}
          className={showSunglasses === true ? 'selected-category' : ''}
        >
          <Tab>
            <CategoryName
              className={
                showSunglasses === true ? 'selected-category-text' : ''
              }
            >
              Sunglasses
            </CategoryName>
          </Tab>
        </Category>

        <Category
          onClick={handleBags}
          className={showBags === true ? 'selected-category' : ''}
        >
          <Tab>
            <CategoryName
              className={showBags === true ? 'selected-category-text' : ''}
            >
              Bags
            </CategoryName>
          </Tab>
        </Category>
      </CategoryContainer>

      <ProductsContainer>
        <ProductsTitle>Products under {category}</ProductsTitle>
        <ProductsListWrapper> {getList()} </ProductsListWrapper>
      </ProductsContainer>
    </Container>
  );
}

export default ProductList;
