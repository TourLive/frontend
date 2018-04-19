import { combineReducers } from "redux";
import activeStageReducer from "./activeStageReducer";
import activeRaceReducer from "./activeRaceReducer";
import riderReducer from "./riderReducer";
import riderStageConnectionReducer from "./riderStageConnectionReducer";

const rootReducer = combineReducers({
    actualStage : activeStageReducer,
    actualRace : activeRaceReducer,
    riders : riderReducer,
    cons : riderStageConnectionReducer
});

export default rootReducer;