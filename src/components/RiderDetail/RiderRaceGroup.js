import React, { Component } from 'react'
import {connect} from "react-redux";
import store from "../../store";
import * as logActionsRaceGroupHistory from "../../actions/logActionsRaceGroupHistory";
import RiderRaceGroupElement from "./RiderRaceGroupElement";

class RiderRaceGroup extends Component {

    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => {
        this.setState({ updated:false, isLoading: false, results: []});
    };

    fetchCurrentData(stageId, riderId) {
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

        return (
            <section className="timeline">
                <ul>
                    {logsRaceGroupHistory.length > 0 ? (logsRaceGroupHistory.map((rG, i) => {
                        return <RiderRaceGroupElement key={i} data={rG} index={i}/>
                    })):(<div className="App-RaceGroup-Rider">Keine Renngruppe vorhanden, Fahrer nimmt aktuell nicht am Rennen teil</div>)}
                </ul>
            </section>
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