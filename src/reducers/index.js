import { combineReducers } from "redux";
import riders from "./riderReducer";

const reducers = combineReducers(riders);

export default reducers;