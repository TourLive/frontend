import * as types from "./actionTypes";
import axios from "axios";
import * as api from "../util/api.js";

function receiveRiderStageConnections(data) {
  return {
      type : types.GET_RIDERSTAGECONNECTIONS,
      data: data
  }
}

export function getRiderStageConnectionsFromAPI(id) {
  return function (dispatch) {
      return axios({
          url : api.LINK_RIDERSTAGECONNECTIONS + id,
          timeout : 20000,
          method: 'get',
          responseType: 'json'
      })
        .then(function (response) {
            dispatch(receiveRiderStageConnections(response.data));
        })

  }
}