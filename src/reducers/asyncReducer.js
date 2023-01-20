const {
    FETCH_USERS_REQUESTED,
    FETCH_USERS_SUCCEEDED,
    FETCH_USERS_FAILED,
} = require('../actions/asyncActions');

const initialState = {
    loading: false,
    users: [],
    error: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USERS_SUCCEEDED:
            return {
                loading: false,
                users: action.payload,
                error: '',
            };
        case FETCH_USERS_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

module.exports = reducer;
