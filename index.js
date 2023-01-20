const {
    createStore,
    bindActionCreators,
    combineReducers,
    applyMiddleware,
} = require('redux');
const { default: thunkMiddleware } = require('redux-thunk');
// const { createLogger } = require('redux-logger');
const cakeReducer = require('./src/reducers/cakeReducer');
const iceCreamReducer = require('./src/reducers/iceCreamReducer');
const customerReducer = require('./src/reducers/customerReducer');
const asyncReducer = require('./src/reducers/asyncReducer');
const { orderCake, restockCake } = require('./src/actions/cakeActions');
const { fetchUsers } = require('./src/actions/asyncActions');
const { updateStreet } = require('./src/actions/customerActions');
const {
    orderIceCream,
    restockIceCream,
} = require('./src/actions/iceCreamActions');

// const logger = createLogger();

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    customer: customerReducer,
    users: asyncReducer,
});
const store = createStore(
    rootReducer,
    applyMiddleware(/*logger,*/ thunkMiddleware)
);

const actions = bindActionCreators(
    {
        orderCake,
        restockCake,
        orderIceCream,
        restockIceCream,
        updateStreet,
        fetchUsers,
    },
    store.dispatch
);
const unsubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState());
});
console.log('\033[2J');
console.log(
    '\x1b[0m',
    '\x1b[30m',
    '\x1b[46m',
    '************************************',
    '\x1b[0m'
);
console.log('Initial state', store.getState());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));
actions.orderCake();
actions.restockCake(3);
actions.orderIceCream();
actions.restockIceCream(2);
actions.updateStreet('456 Main St');
actions.fetchUsers();
// unsubscribe();
// store.dispatch(orderCake());
