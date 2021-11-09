import { SAVE_CART_ITEMS } from './constants';

export function saveCartItems(data) {
  return {
    type: SAVE_CART_ITEMS,
    payload: data,
  };
}
