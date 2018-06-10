import * as types from "../actions/actionTypes";

const initialState = {
    display: false,
    selectedRaceGroup : {}
};

const currentRaceGroupReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_HIDE_RACEGROUP:
            return {...state, display : false, selectedRaceGroup : {}};
        case types.SET_DISPLAY_RACEGROUP:
            return {...state, display : true, selectedRaceGroup : action.data};
        default:
            return state;
    }
};

export default currentRaceGroupReducer;