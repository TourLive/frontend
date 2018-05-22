import axios from "axios";
import * as types from "./actionTypes";
import * as api from "../util/api.js"
import * as gpsUtil from "../util/gps";

function receiveGPXTracks(data) {
    const array = [];
    let currentDistance = 0.0;
    let lastElement  = null;
    data.map(element => {
        let distance = 0.0;
        if (lastElement === null) {
            distance = 0.0;
        } else {
            distance += gpsUtil.distance(lastElement, element);
        }
        lastElement = element;
        currentDistance += distance;
        array.push({id: element.id, height: element.height, latitude : element.latitude, longitude : element.longitude, stage_id : element.stage_id, distance : currentDistance});
    });
    return {
        type : types.SET_GPXTRACKS,
        data : array
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
        }).then(function (response) {
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
