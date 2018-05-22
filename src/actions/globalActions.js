import axios from "axios";
import * as types from "./actionTypes";
import * as api from "../util/api.js";

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
            url : api.LINK_SETTINGS,
            timeout : 20000,
            method: 'get',
            responseType: 'json'
        }).then(function (response) {
            dispatch(getActiveRaceFromAPI(response.data.raceID));
            dispatch(getActiveStageFromAPI(response.data.stageID));
        }).catch(function (response) {
            // TODO
        })
    }
}

function getActiveStageFromAPI(stageId) {
    return function(dispatch){ axios({
        url : api.LINK_STAGES + stageId,
        timeout : 20000,
        method: 'get',
        responseType: 'json'
        }).then(function (response) {
            dispatch(receiveStage(response.data));
        }).catch(function (response) {
            // TODO
        })
    }
}

function getActiveRaceFromAPI(raceId) {
    return function(dispatch){ axios({
        url : api.LINK_RACES + raceId,
        timeout : 20000,
        method: 'get',
        responseType: 'json'
    }).then(function (response) {
        dispatch(receiveRace(response.data));
    }).catch(function (response) {

    })
    }
}
