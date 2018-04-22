import axios from "axios";
import * as types from "./actionTypes";
import * as api from "../util/api.js"

function receiveRaceGroups(data) {
  return {
    type : types.SET_RACEGROUPS,
    data : data
  }
}

function receiveRaceGroupsError(data) {
  return {
    type : types.SET_RACEGROUPS,
    data : data
  }
}

export function getCurrentRaceGroups(id) {
  return function (dispatch) {
    return axios({
      url : api.LINK_RACEGROUPS + id,
      timeout : 20000,
      method: 'get',
      responseType: 'json'
    }). then(function (response) {
      if (response.status === 200) {
        dispatch(receiveRaceGroups(response.data));
      } else {
        dispatch(receiveRaceGroupsError("Error on loading data"));
      }
    }).catch(function (response) {
      dispatch(receiveRaceGroupsError(response));
    });
  }
}
