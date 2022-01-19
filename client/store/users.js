import axios from 'axios';

const SET_USERS = "SET_USERS";

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    };
};

export const fetchUsers = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/api/users');
            dispatch(setUsers(data))
        } catch (error) {
            console.log(error);
        };
    };
};

export default function (state = [], action) {
    switch (action.type) {
        case SET_USERS:
            return action.users
    
        default:
            return state
    }
}