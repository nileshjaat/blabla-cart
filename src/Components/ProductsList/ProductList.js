import React, { useState } from 'react';
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

function ProductList() {
  const [showShoes, setShowShoes] = useState(true);
  const [showJackets, setShowJackets] = useState(false);
  const [showHats, setShowHats] = useState(false);

  const handleShoes = () => {
    setShowShoes(true);
    setShowJackets(false);
    setShowHats(false);
  };

  const handleJackets = () => {
    setShowShoes(false);
    setShowJackets(true);
    setShowHats(false);
  };

  const handleHats = () => {
    setShowShoes(false);
    setShowJackets(false);
    setShowHats(true);
  };

  let items = [
    {
      id: 1,
      name: 'abcd',
      image:
        'https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg',
      isInCart: false,
    },
    {
      id: 2,
      name: 'efgh',
      image: 'https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg',
      isInCart: true,
    },
    {
      id: 3,
      name: 'ijkl',
      image: 'https://m.media-amazon.com/images/I/61utX8kBDlL._UL1100_.jpg',
      isInCart: false,
    },
    {
      id: 4,
      name: 'mnop',
      image: 'https://m.media-amazon.com/images/I/41Leu3gBUFL.jpg',
      isInCart: false,
    },
    {
      id: 5,
      name: 'qrst',
      image:
        'https://assets.ajio.com/medias/sys_master/root/hd4/h99/14092964397086/-1117Wx1400H-460455972-black-MODEL.jpg',
      isInCart: false,
    },
    {
      id: 6,
      name: 'uvwx',
      image:
        'https://static.nike.com/a/images/t_default/z12golttmgjbp3zhxvvq/revolution-5-road-running-shoes-8P3bh3.png',
      isInCart: false,
    },
  ];

  const getShoesList = () => {
    return (
      <>
        {items.map(({ id, name, image, isInCart }) => (
          <ProductItem
            key={id}
            id={id}
            name={name}
            image={image}
            isInCart={isInCart}
          />
        ))}
      </>
    );
  };

  let category =
    showShoes === true
      ? 'Shoes'
      : showJackets
      ? 'Jackets'
      : showHats
      ? 'Hats'
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
          onClick={handleJackets}
          className={showJackets === true ? 'selected-category' : ''}
        >
          <Tab>
            <CategoryName
              className={showJackets === true ? 'selected-category-text' : ''}
            >
              Jackets
            </CategoryName>
          </Tab>
        </Category>

        <Category
          onClick={handleHats}
          className={showHats === true ? 'selected-category' : ''}
        >
          <Tab>
            <CategoryName
              className={showHats === true ? 'selected-category-text' : ''}
            >
              Hats
            </CategoryName>
          </Tab>
        </Category>
      </CategoryContainer>

      <ProductsContainer>
        <ProductsTitle>Products under {category}</ProductsTitle>
        <ProductsListWrapper> {getShoesList()} </ProductsListWrapper>
      </ProductsContainer>
    </Container>
  );
}

export default ProductList;
