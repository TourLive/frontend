import * as types from "../actions/actionTypes";

const initialState = {
  refreshPeriod: 60,
  notifications: false,
  actualStage: 0
};

function saveSettingsToLocalStorage(data) {
    localStorage.setItem("refreshPeriod", data.refreshPeriod);
    localStorage.setItem("notifications", data.notifications);
    localStorage.setItem("actualStage", data.actualStage);
}

function getSettingsFromLocalStorage() {
    let rp = localStorage.getItem("refreshPeriod");
    let n = localStorage.getItem("notifications");
    let aS = localStorage.getItem("actualStage");
    return {rp,n,aS};
}

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_NOTIFICATIONS:
      console.log(state);
      const setNot = {...state, notifications : action.data};
      console.log(setNot);
      saveSettingsToLocalStorage(setNot);
      return setNot;
    case types.SET_REFRESH_PERIOD:
      const setRep = {...state, refreshPeriod : action.data};
      saveSettingsToLocalStorage(setRep);
      return setRep;
    case types.SET_ACTUAL_STAGE:
      const setStage = {...state, actualStage : action.data};
      saveSettingsToLocalStorage(setStage);
      return setStage;
    case types.GET_SETTINGS_FROM_LOCAL:
      const local = getSettingsFromLocalStorage();
      if (local.rp === null || local.aS === null || local.n === null) {
        return state;
      }
      return {...state, actualStage : local.aS, notifications : local.n, refreshPeriod : local.rp};
    default:
      return state;
  }
}
export default settingsReducer;