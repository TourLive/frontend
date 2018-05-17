import axios from "axios";
import * as types from "./actionTypes";
import * as api from "../util/api.js"

function receiveNotifications(data) {
    return {
        type : types.GET_NOTIFICATIONS,
        data : data
    }
}

function receiveNotificationsError(data) {
    return {
        type : types.GET_NOTIFICATIONS_ERROR,
        data : data
    }
}

export function getNotifications(id, timestamp) {
    return function (dispatch) {
        return axios({
            url : api.LINK_NOTIFICATIONS + id + "/" + timestamp,
            timeout : 20000,
            method: 'get',
            responseType: 'json'
        }).then(function (response) {
            if (response.status === 200) {
                dispatch(receiveNotifications(response.data));
            } else {
                dispatch(receiveNotificationsError("Error on loading data"));
            }
        }).catch(function (response) {
            dispatch(receiveNotificationsError(response));
        });
    }
}