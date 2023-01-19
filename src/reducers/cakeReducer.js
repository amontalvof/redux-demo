const { CAKE_ORDERED, CAKE_RESTOCKED } = require('../actions/cakeActions');

const initialState = {
    numberOfCakes: 10,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - action.payload,
            };
        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload,
            };
        default:
            return state;
    }
};

module.exports = reducer;
