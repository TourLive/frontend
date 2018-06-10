import * as types from "./actionTypes";

function hideSingleRaceGroup() {
    return {
        type : types.SET_HIDE_RACEGROUP
    }
}

function displayRaceGroup(raceGroup) {
    return {
        type : types.SET_DISPLAY_RACEGROUP,
        data : raceGroup
    }
}

export function disableSingleRaceGroup() {
    return function (dispatch) {
        dispatch(hideSingleRaceGroup());
    }
}

export function enableSingleRaceGroup(raceGroup) {
    return function (dispatch) {
        dispatch(displayRaceGroup(raceGroup));
    }
}