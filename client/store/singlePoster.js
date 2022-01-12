import axios from "axios";
import history from "../history";

const SET_POSTER = "SET_POSTER";

export const setPoster = (poster) => {
  return {
    type: SET_POSTER,
    poster,
  };
};

export const fetchSinglePoster = (posterId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/posters/${posterId}`);
      dispatch(setPoster(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export default (state = {}, action) => {
  switch (action.type) {
    case SET_POSTER:
      return action.poster;
    default:
      return state;
  }
};
