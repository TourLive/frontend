import axios from "axios";
import * as types from "./actionTypes";
import * as api from "../util/api.js"

function receiveGPXTracks(data) {
    return {
        type : types.SET_GPXTRACKS,
        data : data
    }
}

function receiveGPXTracksError(data) {
    return {
        type : types.SET_GPXTRACKS_ERROR,
        data : data
    }
}

export function getGPXTracks(id) {
    return function (dispatch) {
        return axios({
            url : api.LINK_GPXTRACKS + id,
            timeout : 20000,
            method: 'get',
            responseType: 'json'
        }). then(function (response) {
            if (response.status === 200) {
                dispatch(receiveGPXTracks(response.data));
            } else {
                dispatch(receiveGPXTracksError("Error on loading data"));
            }
        }).catch(function (response) {
            dispatch(receiveGPXTracksError(response));
        });
    }
}
