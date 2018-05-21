import React, { Component } from 'react'
import store from "../../store";
import * as logActionsRaceGroupHistory from "../../actions/logActionsRaceGroupHistory";
import RiderRaceGroupElement from "./RiderRaceGroupElement";

class RiderRaceGroup extends Component {

    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => {
        this.setState({ updated:false});
    };

    fetchCurrentData(stageId, riderId) {
        store.dispatch(logActionsRaceGroupHistory.getLogsRaceGroupHistory(stageId, riderId));
        this.setState({updated: true});
    }


    render() {
        const rider = this.props.selectedRider;
        const {logs} = this.props;
        const {actualStage} = this.props;
        if (actualStage !== undefined && !this.state.updated) {
            this.fetchCurrentData(actualStage.id, rider.riderId);
        }

        return (
            <section className="timeline">
                <ul>
                    {logs.length > 0 ? (logs.map((rG, i) => {
                        return <RiderRaceGroupElement key={i} data={rG} index={i}/>
                    })):(<div className="App-RaceGroup-Rider">Keine Renngruppe vorhanden, Fahrer nimmt aktuell nicht am Rennen teil</div>)}
                </ul>
            </section>
        );
    }
}

export default RiderRaceGroup;