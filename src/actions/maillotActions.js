import axios from "axios";
import * as types from "./actionTypes";
import * as api from "../util/api.js"
import store from "../store";

function receiveMaillot(data) {
  return {
    type : types.GET_MAILLOTS,
    data : data
  }
}

function receiveMaillotError(data) {
  return {
    type : types.GET_ERROR_MAILLOTS,
    data : data
  }
}

export function getCurrentMaillots(id) {
  return function (dispatch) {
    return axios({
      url : api.LINK_MAILLOTS + id,
      timeout : 20000,
      method: 'get',
      responseType: 'json'
    }). then(function (response) {
      if (response.status === 200) {
        dispatch(receiveMaillot(response.data));
      } else {
        dispatch(receiveMaillotError("Error on loading data"));
      }
    }).catch(function (response) {
        dispatch(receiveMaillotError(response));
    });
  }
}
