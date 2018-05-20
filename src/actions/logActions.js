import axios from "axios";
import * as types from "./actionTypes";
import * as api from "../util/api.js"

function receiveLogs(data) {
  return {
    type : types.SET_LOGS_RESULT,
    data : data
  }
}

function receiveLogsError(data) {
  return {
    type : types.SET_LOGS_ERROR,
    data : data
  }
}

export function getLogsForStageAndRider(stageId, riderId) {
  return function (dispatch) {
    return axios({
      url : api.LINKG_LOGS + stageId +"/" + riderId,
      timeout : 20000,
      method: 'get',
      responseType: 'json'
    }).then(function (response) {
      if (response.status === 200) {
        dispatch(receiveLogs(response.data));
      } else {
        dispatch(receiveLogsError("Error on loading data"));
      }
    }).catch(function (response) {
      dispatch(receiveLogsError(response));
    });
  }
}
