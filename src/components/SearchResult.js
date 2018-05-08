import React, { Component } from 'react'
import RiderInfo from "./RiderDetail/RiderInfo";
import RiderJudgment from "./RiderDetail/RiderJudgment";
import RiderTrikot from "./RiderDetail/RiderTrikots";
import RiderRaceGroup from "./RiderDetail/RiderRaceGroup";
import {Divider} from "semantic-ui-react";

class SearchResult extends Component {

    render() {
        const rider = this.props.selectedRider;
        return <div>
            <h1>Informationen zum Fahrer</h1>
            <RiderInfo selectedRider={rider}/>
            <Divider/>
            <div className="App-title">Trikots<RiderTrikot selectedRider={rider}/></div>
            <Divider/>
            <div className="App-title">Wertungen<RiderJudgment selectedRider={rider}/></div>
            <Divider/>
            <div className="App-title">Gruppenhistorie<RiderRaceGroup selectedRider={rider}/></div>
        </div>

    }
}

export default SearchResult;