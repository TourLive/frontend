import * as types from "../actions/actionTypes";

const initialState = {
  data: [],
  error: false,
  loading: false,
  display: false,
  single : {}
};

const judgmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_JUDGMENTS:
      return {...state, data : action.data, loading : false};
    case types.SET_JUDGMENTS_ERROR:
      return {...state, data : [], loading : false, error: true};
    case types.SET_HIDE_JUDGMENT:
      return {...state, display: false, single: {}};
    case types.SET_DISPLAY_JUDGMENT:
       return {...state, display: true, single: action.data};
    default:
      return state;
  }
};

export default judgmentReducer;