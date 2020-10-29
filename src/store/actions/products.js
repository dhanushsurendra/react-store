import * as actionTypes from './actionTypes';

export const toggleFav = id => {
    return { type: actionTypes.TOGGLE_FAV, productId: id }
}