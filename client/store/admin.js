import axios from 'axios';
import { DELETE } from 'sequelize/dist/lib/query-types';
import history from '../history';

const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const addProductAction = (product) => {
    return {
        type: ADD_PRODUCT,
        product,
    };
};

export const removeProductAction = (product) => {
  return {
      type: REMOVE_PRODUCT,
      product,
  };
};

export const updateProductAction = (product) => {
  return {
      type: UPDATE_PRODUCT,
      product,
  };
};

export const addProduct =  (product) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post('/api/posters', product);
            dispatch(addProductAction(data))
        } catch (error) {
            console.log(error);
        }
    }
}

export const removeProduct =  (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`api/posters/${id}`);
      dispatch(removeProductAction(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateProduct =  (product) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/posters/${product.id}`, product);
      dispatch(updateProductAction(data));
    } catch (err) {
      console.log(err);
    }
  };
};




export default function(state = [], action) {
    switch (action.type) {
        case ADD_PRODUCT:
          return [...state, action.product]
        case REMOVE_PRODUCT:
           return state.filter((product) => product.id !== action.product.id);
        case UPDATE_PRODUCT:
            return state.map((product) =>
            product.id === action.product.id ? action.product : product
          );
    default:
        return state
    };
};
