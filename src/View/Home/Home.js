import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartModal from '../../Components/CartModal/CartModal';
import Header from '../../Components/Header/Header';
import ProductList from '../../Components/ProductsList/ProductList';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCartModal: false,
    };
  }

  handleClick = (e) => {
    if (this.state.showCartModal) {
      this.closeModal();
      return;
    }
    this.setState({ showCartModal: true });
    e.stopPropagation();
    document.addEventListener('click', this.closeModal);
  };

  closeModal = () => {
    this.setState({ showCartModal: false });
    document.removeEventListener('click', this.closeModal);
  };

  openCartModal = () => {
    this.setState({ showCartModal: true });
  };

  closeCartModal = () => {
    this.setState({ showCartModal: false });
  };

  render() {
    return (
      <div>
        <Header
          openCartModal={this.openCartModal}
          handleClick={this.handleClick}
          showCartModal={this.state.showCartModal}
        />
        <ProductList shoes={this.props.home.shoesData} />

        {/* <CartModal /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home,
  };
};

export default connect(mapStateToProps)(Home);
