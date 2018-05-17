import * as types from "../actions/actionTypes";

const initialState = {
  data: [],
  error: false,
  loading: false
};

const timelineReducer = (action, state = initialState) => {
  switch (action.type) {
    case types.SET_TIMELINE_RESULT:
      return {...state, data : action.timelineData, loading : false};
    case types.SET_TIMELINE_ERROR:
      return {...state, data : [], loading : false, error: true};
    default:
      return state;
  }
}
export default timelineReducer;