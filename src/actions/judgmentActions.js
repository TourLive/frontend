import axios from "axios";
import * as types from "./actionTypes";
import * as api from "../util/api.js"

function receiveJudgments(data) {
  return {
    type : types.SET_JUDGMENTS,
    data : data
  }
}

function receiveJudgmentsError(data) {
  return {
    type : types.SET_JUDGMENTS_ERROR,
    data : data
  }
}

export function getJudgmentsOfStage(id) {
  return function (dispatch) {
    return axios({
      url : api.LINK_JUDGMENTS + id,
      timeout : 20000,
      method: 'get',
      responseType: 'json'
    }). then(function (response) {
      if (response.status === 200) {
        dispatch(receiveJudgments(response.data));
      } else {
        dispatch(receiveJudgmentsError("Error on loading data"));
      }
    }).catch(function (response) {
      dispatch(receiveJudgmentsError(response));
    });
  }
}
