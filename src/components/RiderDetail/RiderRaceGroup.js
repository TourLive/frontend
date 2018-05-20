import React, { Component } from 'react'
import {connect} from "react-redux";
import store from "../../store";
import * as logActionsRaceGroupHistory from "../../actions/logActionsRaceGroupHistory";

class RiderRaceGroup extends Component {

    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => {
        this.setState({ updated:false, isLoading: false, results: []});
    };

    fetchCurrentData(stageId, riderId) {
        console.log("loading data");
        store.dispatch(logActionsRaceGroupHistory.getLogsRaceGroupHistory(stageId, riderId));
        this.setState({updated: true});
    }


    render() {
        const { isLoading, value, results } = this.state;
        const rider = this.props.selectedRider;
        const {logsRaceGroupHistory} = this.props;
        const {actualStage} = this.props;
        if (actualStage !== undefined && !this.state.updated) {
            this.fetchCurrentData(actualStage.id, rider.riderId);
        }


        console.log("aktuelle stage: " + actualStage);
        console.log("aktuelle log: " + logsRaceGroupHistory);
        if(logsRaceGroupHistory !== undefined){
            logsRaceGroupHistory.map(a => {
                console.log("history data:" +a.message);
            });

        }

        const raceGroups  = logsRaceGroupHistory !== "" ? (
            logsRaceGroupHistory.map(rG => {
            <div key={rG.id} className="App-RaceGroup-Rider">
                Renngruppe : {rG.message}
            </div>
            })
        ): <div className="App-RaceGroup-Rider">Keine Renngruppe vorhanden, Fahrer nimmt aktuell nicht am Rennen teil</div>;
        /*const {raceGroups} = this.props

        const rider = this.props.selectedRider;
        const actualRaceGroup = raceGroups.find(rG => rG.riders.find(r => r.id === rider.id));

        const raceGroup = actualRaceGroup !== undefined ? (
                <div key={actualRaceGroup.id} className="App-RaceGroup-Rider">
                    Aktuelle Renngruppe: {actualRaceGroup.raceGroupType}
                </div>
        ): <div className="App-RaceGroup-Rider">Keine Renngruppe vorhanden, Fahrer nimmt aktuell nicht am Rennen teil</div>;
    */
        return (
            <div>
                {logsRaceGroupHistory.length > 0 ? (logsRaceGroupHistory.map((rG, i) => {
                    if(i === 0){ return <div key={i} className="App-RaceGroup-Rider">
                        Aktuelle Renngruppe: {rG.message}
                    </div>}
                    return<div key={i} className="App-RaceGroup-Rider">
                        {rG.message}
                    </div>
                })):(<div className="App-RaceGroup-Rider">Keine Renngruppe vorhanden, Fahrer nimmt aktuell nicht am Rennen teil</div>)}
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        logsRaceGroupHistory: store.logsRaceGroupHistory.data,
        actualStage: store.actualStage.data
    }
}

export default connect(mapStateToProps)(RiderRaceGroup);