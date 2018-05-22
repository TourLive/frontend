import axios from "axios";
import * as types from "./actionTypes";
import * as api from "../util/api.js"

function receiveJudgmentRiderConnections(data) {
  return {
    type : types.SET_JUDGEMENTRIDERCONNECTION,
    data : data
  }
}

function receiveJudgmentRiderConnectionsError(data) {
  return {
    type : types.SET_JUDGEMENTRIDERCONNECTION_ERROR,
    data : data
  }
}

export function getJudgmentRiderConnections(id) {
  return function (dispatch) {
    return axios({
      url : api.LINK_JUDGMENT_RIDER_CONNECTIONS + id,
      timeout : 20000,
      method: 'get',
      responseType: 'json'
    }).then(function (response) {
      if (response.status === 200) {
        dispatch(receiveJudgmentRiderConnections(response.data));
      } else {
        dispatch(receiveJudgmentRiderConnectionsError("Error on loading data"));
      }
    }).catch(function (response) {
      dispatch(receiveJudgmentRiderConnectionsError(response));
    });
  }
}
