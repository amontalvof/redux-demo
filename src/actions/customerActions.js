const STREET_UPDATED = 'STREET_UPDATED';

const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street,
    };
};

module.exports = { STREET_UPDATED, updateStreet };
