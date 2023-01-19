const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

function orderCake(qty = 1) {
    return {
        type: CAKE_ORDERED,
        payload: qty,
    };
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    };
}

module.exports = { CAKE_ORDERED, CAKE_RESTOCKED, orderCake, restockCake };
