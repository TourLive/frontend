import * as types from "../actions/actionTypes";

const initialState = {
  riders: [],
  error: false
};

const riderReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_RIDERS:
      return Object.assign({}, state, {
        riders: action.data,
        error : false
      })
    default:
      return state;
  }
}

export default riderReducer;