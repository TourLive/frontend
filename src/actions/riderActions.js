import * as types from "./actionTypes";
import axios from "axios";

const HOST = "localhost:9000";
const LINK_RIDERS = "http://" + HOST + "/riders/stages/";

function receiveRiders(data) {
  return {
      type : types.GET_RIDERS,
      data: data
  }
}

export function getRidersFromAPI (stageId) {
  return function (dispatch) {
      return axios({
          url : LINK_RIDERS + stageId,
          timeout : 20000,
          method: 'get',
          responseType: 'json'
      })
        .then(function (response) {
            dispatch(receiveRiders(response.data));
        })

  }
}