import * as types from "../actions/actionTypes";

const initialState = {
  data: [],
  error: false,
  loading: false
};

const maillotReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MAILLOTS:
      return {...state, data : action.data, loading : false};
    case types.GET_ERROR_MAILLOTS:
      return {...state, data : [], loading : false, error: true};
    default:
      return state;
  }
}
export default maillotReducer;