import { SAVE_CART_ITEMS } from './constants';

const initialState = {
  cartItems: [],

  cartItemsCount: null,
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CART_ITEMS:
      let quantities = action.payload.map((item) => item.quantity);

      let sum = 0;

      for (let i = 0; i < quantities.length; i++) {
        sum += quantities[i];
      }

      return {
        ...state,
        cartItems: action.payload,
        cartItemsCount: sum,
      };

    default:
      return state;
  }
};

export default HomeReducer;
