import axios from "axios";
import * as types from "./actionTypes";
import * as api from "../util/api.js"
import store from "../store"

function receiveTimeline(judgments, raceGroups, stage) {
    let elements = [];
    judgments.map(judgment => {elements.push({distance : judgment.distance, text : judgment.name})});
    raceGroups.map(raceGroup => {elements.push({distance : 90, text : raceGroup.raceGroupType})});
    elements.sort((a,b) => b.distance - a.distance);
    let elems = [];
    let lastElement = null;
    let size = elements.length;
    elements.map((elem, i) => {
        let gap = 0;
        if (i === 0) {
            gap = stage.distance - elem.distance;
        } else if(size === i + 1) {
            gap = lastElement.distance - elem.distance;
        } else {
            gap = lastElement.distance - elem.distance;
        }
        lastElement = elem;
        elems.push({distance : elem.distance, text : elem.text, gap: gap});
    });
    return {
    type : types.SET_TIMELINE_RESULT,
    timelineData : elems
  }
}

function receiveTimelineError(data) {
  return {
    type : types.SET_TIMELINE_ERROR,
    timelineData : data
  }
}

export function getTimelineOfStage(id) {
    return function (dispatch) {
        axios.all([getCurrentRaceGroups(id)])
            .then(axios.spread(function (raceGroups) {
                var actualStore = store.getState();
                const judgments = actualStore.judgments.data;
                const stage = actualStore.actualStage.data;
                if(judgments === undefined || raceGroups === undefined || stage === undefined){
                  dispatch(receiveTimelineError("Error on loading data"));
                } else {
                  dispatch(receiveTimeline(judgments, raceGroups, stage));
                }
            }));
    }
}

function getCurrentRaceGroups(id) {
        return axios({
            url: api.LINK_RACEGROUPS + id,
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        }).then(function (response) {
            if (response.status === 200) {
                return response.data;
            } else {
                return undefined;
            }
        }).catch(function (response) {
            return undefined;
        });
}

function getGPSDataFromCnlabAPI() {
    return axios({
        url : api.LINK_STAGES + stageId,
        timeout : 20000,
        method: 'get',
        responseType: 'json'
    }).then(function (response) {
        if (response.status === 200) {
            return response.data;
        } else {
            return undefined;
        }
    }).catch(function (response) {
        return undefined;
    });
}
