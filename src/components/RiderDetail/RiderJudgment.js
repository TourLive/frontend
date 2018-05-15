import React, { Component } from 'react'
import {connect} from "react-redux";

class RiderJudgment extends Component {
    render() {
        const {judgmentRiderConnections} = this.props;
        const rider = this.props.selectedRider;

        const judgments = judgmentRiderConnections.filter(jRC => jRC.rider.id === rider.id).map((jRC) =>
            <div key={jRC.id} className="App-Judgment-Rider">
                <b>{jRC.judgment.name} bei Kilometer {jRC.judgment.distance}</b>, {jRC.rank}. Platz
            </div>
        );

        return <div>
            {judgments}
            </div>
    }
}

function mapStateToProps(store) {
    return {
        judgmentRiderConnections: store.judgmentRiderConnections.data
    }
}

export default connect(mapStateToProps)(RiderJudgment);