import * as types from "../actions/actionTypes";

const initialState = {
    displayResult: false,
    value : "",
    selectedRider : {}
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_HIDE_SEARCH_RESULT:
            return {...state, displayResult : false, value : "", selectedRider : {}};
        case types.SET_SEARCH_RESULT:
            return {...state, displayResult : true, value : action.data.result, selectedRider : action.data.selectedRider};
        default:
            return state;
    }
};

export default searchReducer;