import { saveCartItems } from './actions';

export function saveCartItemsInfo(data) {
  return (dispatch) => {
    dispatch(saveCartItems(data));
  };
}
