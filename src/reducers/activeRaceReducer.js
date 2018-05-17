import * as types from "../actions/actionTypes";

const initialState = {
    data: {},
    error: false,
    loading: false
};

const activeRaceReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ACTIVERACE:
            return Object.assign({}, state, {
                data : action.data,
                error: false,
                loading : false
            });
        default:
            return state;
    }
}
export default activeRaceReducer;