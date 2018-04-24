import * as types from "../actions/actionTypes";

const initialState = {
  cons: [],
  error: false
};

const riderStageConnectionReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_RIDERSTAGECONNECTIONS:
      return Object.assign({}, state, {
        cons: action.data,
        error : false
      })
    default:
      return state;
  }
}

export default riderStageConnectionReducer;