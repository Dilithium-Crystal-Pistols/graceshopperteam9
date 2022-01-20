import axios from "axios";
import { token } from "morgan";
import { DELETE } from "sequelize/dist/lib/query-types";
import history from "../history";

const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const TOKEN ='token'
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

export const updateProductAction = (product,id) => {
  console.log("in update Action",product);
  return {
    type: UPDATE_PRODUCT,
    product,
    id
  };
};

// export const addProduct = (product) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.post("/api/posters", product);
//       dispatch(addProductAction(data));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const removeProduct = (id) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN)
      const { data } = await axios.delete(`api/products/${id}`, {
        headers: {
          authorization:token
        }
      });
      dispatch(removeProductAction(data));
      history.push('/admin')
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateProduct = (product,id) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN)
      console.log("in update thunk");
      const { data } = await axios.put(`/api/products/${id}`, product, {
        headers: {
          authorization:token
        }
      });
      console.log("frontend data from thunk",data);
      dispatch(updateProductAction(data));
      history.push('/admin')
    } catch (err) {
      console.log(err);
    }
  };
};

export default function (state = [], action) {
  switch (action.type) {
    // case ADD_PRODUCT:
    //   return [...state, action.product];
    case REMOVE_PRODUCT:
      return state.filter((product) => product.id !== action.product.id);
    case UPDATE_PRODUCT:
      console.log(action);
      return state.map((product) =>
        product.id === action.product.id ? action.product : product
      );
    default:
      return state;
  }
}
