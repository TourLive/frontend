import React, { Component } from 'react'
import {connect} from "react-redux";
import RiderInfo from "./RiderInfo";
import RiderJudgment from "./RiderJudgment";
import RiderTrikot from "./RiderTrikots";
import RiderRaceGroup from "./RiderRaceGroup";

class RiderDetail extends Component {

    render() {
        const rider = this.props.selectedRider;
        return <div>
            <RiderInfo selectedRider={rider}/>
            <div className="Horizontal-Line"/>
            <div className="App-title">Trikots<RiderTrikot selectedRider={rider}/></div>
            <div className="Horizontal-Line"/>
            <div className="App-title">Wertungen<RiderJudgment selectedRider={rider}/></div>
            <div className="Horizontal-Line"/>
            <div className="App-title">Gruppenhistorie<RiderRaceGroup selectedRider={rider}/></div>
        </div>

    }
}

function mapStateToProps(store) {
    return {

    }
}

export default connect(mapStateToProps)(RiderDetail);