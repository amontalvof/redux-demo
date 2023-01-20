const { produce } = require('immer');
const { STREET_UPDATED } = require('../actions/customerActions');

const initialState = {
    name: 'Vishwas',
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA',
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            //   return {
            //     ...state,
            //     address: {
            //       ...state.address,
            //       street: action.payload
            //     }
            //   }
            return produce(state, (draft) => {
                draft.address.street = action.payload;
            });
        default: {
            return state;
        }
    }
};

module.exports = reducer;
