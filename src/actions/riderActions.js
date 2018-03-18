import * as types from "./actionTypes";
import axios from "axios";

function receiveRiders(data) {
  return {
      type : types.GET_RIDERS,
      data: data
  }
};

export function getRidersFromAPI () {
  return function (dispatch) {
      return axios({
          url : "http://localhost:9000/riders/list",
          timeout : 20000,
          method: 'get',
          responseType: 'json'
      })
        .then(function (response) {
            dispatch(receiveRiders(response.data));
        })

  }
}