import { combineReducers } from "redux";
import activeStageReducer from "./activeStageReducer";
import activeRaceReducer from "./activeRaceReducer";
import riderReducer from "./riderReducer";
import riderStageConnectionReducer from "./riderStageConnectionReducer";
import maillotReducer from "./maillotReducer";
import settingsReducer from "./settingsReducer";
import judgmentReducer from "./judgmentReducer";
import judgmentRiderConnectionReducer from "./judgmentRiderConnectionReducer";
import gpxReducer from "./gpxReducer";
import searchReducer from "./searchReducer";
import notificationsReducer from "./notificationsReducer";
import timelineReducer from "./timelineReducer";
import logReducerRaceGroupHistory from "./logReducerRaceGroupHistory";
import currentRaceGroupReducer from "./currentRaceGroupReducer";

const rootReducer = combineReducers({
    actualStage : activeStageReducer,
    actualRace : activeRaceReducer,
    riders : riderReducer,
    cons : riderStageConnectionReducer,
    maillots : maillotReducer,
    settings : settingsReducer,
    judgments : judgmentReducer,
    judgmentRiderConnections : judgmentRiderConnectionReducer,
    gpsData : gpxReducer,
    searchState : searchReducer,
    notifications : notificationsReducer,
    timeline : timelineReducer,
    logsRaceGroupHistory : logReducerRaceGroupHistory,
    currentRaceGroup : currentRaceGroupReducer
});

export default rootReducer;