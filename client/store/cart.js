import axios from "axios";
import history from "../history";

const ADD_TO_CART= "ADD_TO_CART";
const REMOVE_FROM_CART= "REMOVE_FROM_CART";
const UPDATE_CART = "UPDATE_CART";
const GET_CART_ITEMS = "GET_CART_ITEMS"
export const addToCart = (poster) => {
  return {
    type: ADD_TO_CART,
    poster,
  };
};

export const removeFromCart = (poster) => {
  return {
    type: REMOVE_FROM_CART,
    poster,
  };
};

export const updateCart = (poster) => {
  return {
    type: UPDATE_CART,
    poster,
  };
};

export const getCarItems = (poster) => {
  return {
    type: GET_CART_ITEMS,
    poster
  }
}


export const addToCartThunk = (posterId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/cart/${posterId}`);
      dispatch(addToCart(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateCartThunk = (posterId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/cart/${posterId}`);
      dispatch(addToCart(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCartItemsThunk = (posterId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/cart/${posterId}`);
      dispatch(addToCart(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.poster];
    case REMOVE_FROM_CART:
      return state.filter((product) => poster.id !== action.poster.id);
    case UPDATE_CART:
      return state.filter((product) => poster.id !== action.poster.id);
    case GET_CART_ITEMS:
        return [...state];
    default:
      return state;
  }
};
