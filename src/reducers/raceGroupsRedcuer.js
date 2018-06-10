import * as types from "../actions/actionTypes";

const initialState = {
    data: [],
    error: false,
    loading: false
};

const raceGroupsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_RACEGROUPS:
            return {...state, data : action.data, loading : false};
        default:
            return state;
    }
}
export default raceGroupsReducer;