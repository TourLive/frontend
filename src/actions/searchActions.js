import * as types from "./actionTypes";

function hideSearchResult() {
    return {
        type : types.SET_HIDE_SEARCH_RESULT,
        data : false
    }
}

function setSearchResult(value, rider) {
    const data = {};
    data.result = value;
    data.selectedRider = rider;
    return {
        type : types.SET_SEARCH_RESULT,
        data : data
    }
}

export function disableSearchResult() {
    return function (dispatch) {
        dispatch(hideSearchResult());
    }
}

export function saveSearchResult(value, rider) {
    return function (dispatch) {
        dispatch(setSearchResult(value, rider));
    }
}
