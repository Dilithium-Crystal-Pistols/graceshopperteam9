import axios from "axios";
import history from "../history";

const ADD_TO_CART= "ADD_TO_CART";
const REMOVE_FROM_CART= "REMOVE_FROM_CART";
const UPDATE_CART = "UPDATE_CART";
const SET_CART_ITEMS = "SET_CART_ITEMS"


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

export const updateCart = (poster, quantity) => {
  return {
    type: UPDATE_CART,
    poster,
    quantity
  };
};

export const setCarItems = (poster) => {
  return {
    type: SET_CART_ITEMS,
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
      dispatch(updateCart(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const setCartItemsThunk = (posterId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/cart/${posterId}`);
      dispatch(setCarItems(data));
    } catch (error) {
      console.log(error);
    }
  };
};

//initialize the state to the items in the localcart from localstorage
const initialState = {
  products: [
    {
      name: "Superman",
      price: 20.0,
      description: "literally Superman",
      superheroId: 1,
      productType: "Poster",
      image: ""
    },
    {
      name: "Batman",
      price: 22.0,
      description: "literally Superman",
      superheroId: 2,
      productType: "Poster",
      image: "",
    },
    {
      name: "wonderwoman",
      price: 22.0,
      description: "literally wonderwoman",
      superheroId: 3,
      productType: "Poster",
      image: "",
    }
  ],
  itemsInCart: [
    { superheroId: 2, qty: 3, price: 22},
    { superheroId: 3, qty: 1, price: 25}
  ],
  total: 0

};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const alreadyIncart = state.itemsInCart.find((item) => item.superheroId === action.poster.id)
      if(alreadyIncart) {
        state.alreadyIncart.filter((item) => item.id === action.posterId).map((item) => item.qty++)
        return {...state }
      } else {
        return {...state }
      }
    case REMOVE_FROM_CART:
      return state.itemsInCart.filter((item) => poster.id !== action.poster.id);
    case UPDATE_CART:
      return state.filter((item) => poster.id !== action.poster.id);
    case SET_CART_ITEMS:
        return {...state};
    default:
      return state;
  }
};
