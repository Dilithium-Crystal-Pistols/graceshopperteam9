import axios from 'axios';
import history from '../history';

const SET_POSTERS = "SET_POSTERS";

export const setPosters = (posters) => {
    return {
        type: SET_POSTERS,
        posters,
    };
};


export const fetchPosters =  () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get('/api/posters');
            dispatch(setPosters(data))
        } catch (error) {
            console.log(error);
        }
    }
}




export default function(state = [], action) {
    switch (action.type) {
        case SET_POSTERS:
        return [...state,action.posters]
    default:
        return state
    };
};
