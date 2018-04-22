import * as types from "../actions/actionTypes";

const initialState = {
  data: [],
  error: false,
  loading: false
};

const raceGroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_RACEGROUPS:
      return {...state, data : action.data, loading : false};
    case types.SET_RACEGROUPS_ERROR:
      return {...state, data : [], loading : false, error: true};
    default:
      return state;
  }
}
export default raceGroupReducer;