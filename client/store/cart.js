import axios from "axios";

const SET_CART = 'SET_CART';

export const setCart = (cartItems) => {
  return {
    type: SET_CART,
    cartItems,
  };
};

//THUNK
export const fetchCart = (cartId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/cart/${cartId}`);
      dispatch(setCart(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export default function (state =[], action) {
  switch (action.type) {
    case SET_CART:
      return action.cartItems;
      default: return state;
  }
}