import { combineReducers } from "redux";
import activeStageReducer from "./activeStageReducer";
import activeRaceReducer from "./activeRaceReducer";
import riderReducer from "./riderReducer";
import riderStageConnectionReducer from "./riderStageConnectionReducer";
import maillotReducer from "./maillotReducer";
import settingsReducer from "./settingsReducer";
import raceGroupReducer from "./raceGroupReducer";
import judgementReducer from "./judgementReducer";

const rootReducer = combineReducers({
    actualStage : activeStageReducer,
    actualRace : activeRaceReducer,
    riders : riderReducer,
    cons : riderStageConnectionReducer,
    maillots : maillotReducer,
    settings : settingsReducer,
    raceGroups : raceGroupReducer,
    judgements : judgementReducer
});

export default rootReducer;