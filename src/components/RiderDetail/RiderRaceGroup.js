import React, { Component } from 'react'
import {connect} from "react-redux";

class RiderRaceGroup extends Component {
    render() {
        const {raceGroups} = this.props;
        const rider = this.props.selectedRider;
        const actualRaceGroup = raceGroups.find(rG => rG.riders.find(r => r.id === rider.id));

        const raceGroup = actualRaceGroup !== undefined ? (
                <div key={actualRaceGroup.id} className="App-RaceGroup-Rider">
                    Aktuelle Renngruppe: {actualRaceGroup.raceGroupType}
                </div>
        ): <div className="App-RaceGroup-Rider">Keine Renngruppe vorhanden</div>;

        return <div>
            {raceGroup}
            </div>
    }
}

function mapStateToProps(store) {
    return {
        raceGroups: store.raceGroups.data
    }
}

export default connect(mapStateToProps)(RiderRaceGroup);