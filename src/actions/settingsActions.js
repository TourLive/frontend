import * as types from "./actionTypes";

function setNotifications(data) {
  return {
    type : types.SET_NOTIFICATIONS,
    data : data
  }
}

function setActualStage(data) {
  return {
    type : types.SET_ACTUAL_STAGE,
    data : data
  }
}

function setRefreshPeriod(data) {
  return {
    type : types.SET_REFRESH_PERIOD,
    data : data
  }
}

function getSettings() {
  return {
    type: types.GET_SETTINGS_FROM_LOCAL,
    data: false
  }
}

export function enableNotifications() {
  return function (dispatch) {
    dispatch(setNotifications(true));
  }
}

export function disableNotifications() {
  return function (dispatch) {
    dispatch(setNotifications(false));
  }
}

export function setPeriodBetweenCalls(seconds) {
  return function (dispatch) {
    dispatch(setRefreshPeriod(seconds));
  }
}

export function setActualStageInSettings(stage) {
  return function (dispatch) {
    dispatch(setActualStage(stage));
  }
}

export function getLocalSettings() {
  return function (dispatch) {
    dispatch(getSettings());
  }
}
