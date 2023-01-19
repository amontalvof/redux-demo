const redux = require('redux');
const { orderCake, restockCake } = require('./src/actions/cakeActions');
const cakeReducer = require('./src/reducers/cakeReducer');
const iceCreamReducer = require('./src/reducers/iceCreamReducer');
const {
    orderIceCream,
    restockIceCream,
} = require('./src/actions/iceCreamActions');

const { createStore, bindActionCreators, combineReducers } = redux;

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);

console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() =>
    console.log('Updated state', store.getState())
);
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));
const actions = bindActionCreators(
    { orderCake, restockCake, orderIceCream, restockIceCream },
    store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);
unsubscribe();
store.dispatch(orderCake());
