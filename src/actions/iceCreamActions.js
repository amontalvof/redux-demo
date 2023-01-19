const ICE_CREAM_ORDERED = 'ICE_CREAM_ORDERED';
const ICE_CREAM_RESTOCKED = 'ICE_CREAM_RESTOCKED';

function orderIceCream(qty = 1) {
    return {
        type: ICE_CREAM_ORDERED,
        payload: qty,
    };
}

function restockIceCream(qty = 1) {
    return {
        type: ICE_CREAM_RESTOCKED,
        payload: qty,
    };
}

module.exports = {
    ICE_CREAM_ORDERED,
    ICE_CREAM_RESTOCKED,
    orderIceCream,
    restockIceCream,
};
