const {
    ICE_CREAM_ORDERED,
    ICE_CREAM_RESTOCKED,
} = require('../actions/iceCreamActions');

const initialState = {
    numberOfIceCreams: 20,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ICE_CREAM_ORDERED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - action.payload,
            };
        case ICE_CREAM_RESTOCKED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams + action.payload,
            };
        default:
            return state;
    }
};

module.exports = reducer;
