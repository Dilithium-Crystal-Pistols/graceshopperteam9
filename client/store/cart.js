import axios from "axios";

const SET_CART = "SET_CART";
const DELETE_CART = "DELETE_CART";
const UPDATE_CART = "UPDATE_CART";
const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";

export const setCart = (cartItems) => {
  return {
    type: SET_CART,
    cartItems,
  };
};

export const deleteCartAction = (cartItem) => {
  return {
    type: DELETE_CART,
    cartItem,
  };
};

export const updateCartAction = (cartItem) => {
  return {
    type: UPDATE_CART,
    cartItem,
  };
};

export const addProductToCartAction = (product) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    product,
  }
}

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

export const deleteCart = (cartId, productId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`api/cart/${cartId}/${productId}`);
      dispatch(deleteCartAction(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateCart = (cartId, productId, product) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`api/cart/${cartId}/${productId}`, product);
      dispatch(updateCartAction(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addProductToCart = (productId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/products/${productId}/${localStorage.currentCartId}`)
      dispatch(addProductToCartAction(data));
    } catch (err) {
      console.log(err);
    }
  }
}

export default function (state = [], action) {
  switch (action.type) {
    case SET_CART:
      return action.cartItems;
    case DELETE_CART:
      //DOUBLE CHECK BELOW!!!!
      return state.filter(
        (cartItem) =>
          cartItem.campusId !== action.cartItem.campusId &&
          cartItem.productId !== action.cartItem.productId
      );
    case UPDATE_CART:
      console.log('STATE!: ', state);
      console.log('ACTION!!!!!: ', action)
      return state.find((cartItem) =>
        cartItem.cartId === action.cartItem.cartId &&
        cartItem.productId === action.cartItem.productId
          ? action.cartItem
          : cartItem
      );
    case ADD_PRODUCT_TO_CART:
      return [...state, action.product];
    default:
      return state;
  }
}
