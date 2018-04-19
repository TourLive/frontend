import { combineReducers } from "redux";
import activeStageReducer from "./activeStageReducer";
import activeRaceReducer from "./activeRaceReducer";

const rootReducer = combineReducers({
    actualStage : activeStageReducer,
    actualRace : activeRaceReducer
});

export default rootReducer;