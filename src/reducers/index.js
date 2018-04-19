import { combineReducers } from "redux";
import activeStageReducer from "./activeStageReducer";
import activeRaceReducer from "./activeRaceReducer";
import riderReducer from "./riderReducer";

const rootReducer = combineReducers({
    actualStage : activeStageReducer,
    actualRace : activeRaceReducer,
    riders : riderReducer
});

export default rootReducer;