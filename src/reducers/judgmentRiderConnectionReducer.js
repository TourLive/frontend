import * as types from "../actions/actionTypes";

const initialState = {
  data: [],
  error: false,
  loading: false
};

const judgmentRiderConnectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_JUDGEMENTRIDERCONNECTION:
      return {...state, data : action.data, loading : false};
    case types.SET_JUDGEMENTRIDERCONNECTION_ERROR:
      return {...state, data : [], loading : false, error: true};
    default:
      return state;
  }
}
export default judgmentRiderConnectionReducer;