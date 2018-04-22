import * as types from "./actionTypes";
import axios from "axios";
import * as api from "../util/api.js";
import store from "../store";

function receiveRiders(data) {
  return {
      type : types.GET_RIDERS,
      data: data
  }
}

export function getRidersFromAPI(id) {
  return function (dispatch) {
      return axios({
          url : api.LINK_RIDERS + id,
          timeout : 20000,
          method: 'get',
          responseType: 'json'
      })
        .then(function (response) {
            dispatch(receiveRiders(response.data));
        })

  }
}