import * as types from "./actionTypes";
import axios from "axios";
import * as api from "../util/api.js";

var id = 0;

function receiveRiders(data) {
  return {
      type : types.GET_RIDERS,
      data: data
  }
}

export function getRidersFromAPI (stageId) {
  return function (dispatch) {
      return axios({
          url : api.LINK_RIDERS + stageId,
          timeout : 20000,
          method: 'get',
          responseType: 'json'
      })
        .then(function (response) {
            dispatch(receiveRiders(response.data));
        })

  }
}