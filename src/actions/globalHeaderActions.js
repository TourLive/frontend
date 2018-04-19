import axios from "axios";
import * as types from "./actionTypes";

var raceId = 0;
const HOST = "localhost:9000";
const LINK_SETTINGS = "http://" + HOST + "/settings";
const LINK_STAGES = "http://" + HOST + "/stages/";
const LINK_RACES = "http://" + HOST + "/races/";

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
            url : LINK_SETTINGS,
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
        url : LINK_STAGES + stageId,
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
        url : LINK_RACES + raceId,
        timeout : 20000,
        method: 'get',
        responseType: 'json'
    }). then(function (response) {
        dispatch(receiveRace(response.data));
    })
    }
}
