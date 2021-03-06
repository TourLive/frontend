import * as types from "../actions/actionTypes";

const initialState = {
  data: [],
  error: false,
  loading: false
};

const logReducerRaceGroupHistory = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOGS_RESULT:
      return {...state, data : action.data, loading : false};
    case types.SET_LOGS_ERROR:
      return {...state, data : [], loading : false, error: true};
    default:
      return state;
  }
}
export default logReducerRaceGroupHistory;