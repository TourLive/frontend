import * as types from "../actions/actionTypes";

const initialState = {
  data: [],
  error: false,
  loading: false
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NOTIFICATIONS:
      return {...state, data : action.data, loading : false};
    case types.GET_NOTIFICATIONS_ERROR:
      return {...state, data : [], loading : false, error: true};
    default:
      return state;
  }
}
export default notificationsReducer;