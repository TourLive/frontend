import * as types from "../actions/actionTypes";

const initalState = {
  riders : [],
  error : false
};

const riderReducer = (state = initalState, action) => {
  switch(action.type) {
    case types.GET_RIDERS:
      console.log(action.data);
      return Object.assign({}, state, {
        riders: action.data,
        error : false
      })
    default:
  }
}

export default riderReducer;