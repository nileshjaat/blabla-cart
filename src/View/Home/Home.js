import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import ProductList from '../../Components/ProductsList/ProductList';

export class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <ProductList />
      </>
    );
  }
}

export default Home;
