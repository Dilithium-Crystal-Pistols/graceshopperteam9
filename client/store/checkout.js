import axios from "axios";
import history from "../history";
const TOKEN = 'token';

const FETCH_CHECKOUT = "FETCH_CHECKOUT";
const CLEAR_CHECKOUT = "CLEAR_CHECKOUT";


export const fetchCheckout = (cart) => {
  return {
    type: FETCH_CHECKOUT,
    cart,
  };
};


export const clearCheckout = (cart) => {
  return {
    type: CLEAR_CHECKOUT,
    cart,
  };
};

export const checkout = () => {
  const token = window.localStorage.getItem(TOKEN)
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/cart/checkout', {
        headers: {
          authorization: token
        }
      });
      dispatch(fetchCheckout(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearCheckoutThunk = () => {
  const token = window.localStorage.getItem(TOKEN)

  return async (dispatch) => {
    try {
      const { data } = await axios.put('/api/cart/checkout', {
        headers: {
          authorization: token
        }
      });
      dispatch(clearCheckout(data));
      alert('Thank you for shopping')
      history.push('/')
    } catch (error) {
      console.log(error);
    }
  };
};


export default function (state = [], action) {
  switch (action.type) {
    case FETCH_CHECKOUT:
      const quantity = action.cart.products.map((cartItem) =>  cartItem.cartItem.quantity);
      const price = action.cart.products.map((cartItem) => cartItem.price);
      let totalPrice = 0;

      for(let i = 0; i < quantity.length; i++) {
        let currentTotal = 0
          currentTotal = price[i] * quantity[i];
        totalPrice += currentTotal
      }
      return totalPrice;

      case CLEAR_CHECKOUT:
        console.log('hello form here')
        return action.cart;
    default:
      return state;
  }
}
