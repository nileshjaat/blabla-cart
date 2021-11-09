import { SAVE_CART_ITEMS } from './constants';

const initialState = {
  cartItems: [],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };

    default:
      return state;
  }
};

export default HomeReducer;
