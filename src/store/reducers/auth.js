import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isAuth: false
}

const reducer = (state = initialState, actions) => {
    switch(actions.type) {
        case actionTypes.AUTH: {
            return state.isAuth = true;
        }
        default:
            return state;
    }
}

export default reducer;