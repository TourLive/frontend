import axios from "axios";
import * as types from "./actionTypes";
import * as api from "../util/api.js"

function receiveJudgements(data) {
  return {
    type : types.SET_JUDGEMENTS,
    data : data
  }
}

function receiveJudgementsError(data) {
  return {
    type : types.SET_JUDGEMENTS_ERROR,
    data : data
  }
}

export function getJudgementsOfStage(id) {
  return function (dispatch) {
    return axios({
      url : api.LINK_JUDGEMENTS + id,
      timeout : 20000,
      method: 'get',
      responseType: 'json'
    }). then(function (response) {
      if (response.status === 200) {
        dispatch(receiveJudgements(response.data));
      } else {
        dispatch(receiveJudgementsError("Error on loading data"));
      }
    }).catch(function (response) {
      dispatch(receiveJudgementsError(response));
    });
  }
}
