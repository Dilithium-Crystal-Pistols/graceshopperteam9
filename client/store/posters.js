import axios from 'axios';
import history from '../history';

const SET_POSTERS = "SET_POSTERS";
const ADD_POSTER = "ADD_POSTER";

export const setPosters = (posters) => {
    return {
        type: SET_POSTERS,
        posters,
    };
};

export const setAddPoster = (poster) => {
    return {
        type: ADD_POSTER,
        poster
    };
};


export const fetchPosters = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/api/posters');
            dispatch(setPosters(data))
        } catch (error) {
            console.log(error);
        };
    };
};

export const addPoster = (poster, history) => {
    return async (dispatch) => {
        try {
            console.log(('in thunk'));
            const { data } = await axios.post('/api/posters', poster);
            dispatch(setAddPoster(data));
            history.push('/posters')
        } catch (error) {
            console.log(error);
        };
    };
};




export default function(state = [], action) {
    switch (action.type) {
        case SET_POSTERS:
            return action.posters;
        case ADD_POSTER:
            console.log(action);
            return [...state,action.poster]
    default:
        return state
    };
};
