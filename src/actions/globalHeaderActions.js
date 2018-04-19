import axios from "axios";
import * as types from "./actionTypes";
import store from "../store"

var raceId = 0;

function receiveStage(data) {
    return {
        type : types.GET_ACTIVESTAGE,
        data : data
    }
}

function receiveRace(data) {
    return {
        type : types.GET_ACTIVERACE,
        data : data
    }
}

export function getSettingsFromAPI() {
    return function (dispatch) {
        return axios({
            url : "http://localhost:9000/settings",
            timeout : 20000,
            method: 'get',
            responseType: 'json'
        }). then(function (response) {
            raceId = response.data.raceID;
            dispatch(getActiveStageFromAPI(response.data.stageID));
        }).then(function (response) {
                dispatch(getActiveRaceFromAPI(raceId));
            }
        )
    }
}

function getActiveStageFromAPI(stageId) {
    return function(dispatch){ axios({
        url : "http://localhost:9000/stages/" + stageId,
        timeout : 20000,
        method: 'get',
        responseType: 'json'
        }). then(function (response) {
            dispatch(receiveStage(response.data));
        })
    }
}

function getActiveRaceFromAPI(raceId) {
    console.log(raceId);
    return function(dispatch){ axios({
        url : "http://localhost:9000/races/" + raceId,
        timeout : 20000,
        method: 'get',
        responseType: 'json'
    }). then(function (response) {
        dispatch(receiveRace(response.data));
    })
    }
}
