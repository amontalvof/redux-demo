const axios = require('axios');
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    };
};

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
    };
};

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
    };
};

const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                // response.data is the users
                const users = response.data.map((user) => user.id);
                dispatch(fetchUsersSuccess(users));
            })
            .catch((error) => {
                // error.message is the error message
                dispatch(fetchUsersFailure(error.message));
            });
    };
};

module.exports = {
    FETCH_USERS_REQUESTED,
    FETCH_USERS_SUCCEEDED,
    FETCH_USERS_FAILED,
    fetchUsers,
};
