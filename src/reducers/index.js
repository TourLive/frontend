import { combineReducers } from "redux";
import activeStageReducer from "./activeStageReducer";
import activeRaceReducer from "./activeRaceReducer";
import riderReducer from "./riderReducer";
import riderStageConnectionReducer from "./riderStageConnectionReducer";
import maillotReducer from "./maillotReducer";
import settingsReducer from "./settingsReducer";

const rootReducer = combineReducers({
    actualStage : activeStageReducer,
    actualRace : activeRaceReducer,
    riders : riderReducer,
    cons : riderStageConnectionReducer,
    maillots : maillotReducer,
    settings : settingsReducer
});

export default rootReducer;