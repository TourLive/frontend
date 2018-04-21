import * as types from "../actions/actionTypes";

const initialState = {
  refreshPeriod: 60,
  notifications: false,
  actualStage: 0
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_NOTIFICATIONS:
      return {...state, notifications : action.data};
    case types.SET_REFRESH_PERIOD:
      return {...state, refreshPeriod : action.data};
    case types.SET_ACTUAL_STAGE:
      return {...state, actualStage : action.data};
    default:
      return state;
  }
}
export default settingsReducer;