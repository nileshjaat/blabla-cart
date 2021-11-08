import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../Components/Header/Header';
import ProductList from '../../Components/ProductsList/ProductList';

export class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <ProductList shoes={this.props.home.shoesData} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home,
  };
};

export default connect(mapStateToProps)(Home);
