import React, { Component } from 'react'
import {connect} from "react-redux";
import {List, Image,Container} from "semantic-ui-react";
import store from "../store";

class RiderJudgment extends Component {
    render() {
        const {judgmentRiderConnections} = this.props;
        console.log({judgmentRiderConnections});
        const rider = this.props.selectedRider;

        const judgments = judgmentRiderConnections.filter(jRC => jRC.rider.id === rider.id).map((jRC) =>
            <div className="App-Judgment-Rider">
                {jRC.judgment.name}, Platz: {jRC.rank}
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