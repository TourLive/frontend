import React, {Component} from "react";
import * as globalHeaderActions from "../actions/globalHeaderActions";
import {connect} from "react-redux";
import store from "../store"

class GlobalHeader extends Component {
    fetchCurrentSettings() {
        store.dispatch(globalHeaderActions.getSettingsFromAPI());
    }

    componentDidMount() {
        this.fetchCurrentSettings();
        console.log("Component did mount");
    }

    render() {
        const {actualStage} = this.props;
        const {actualRace} = this.props;

        return(
            <header className="App-header">
                <div className="Inline"><img src="logo.png" alt="TourLive Logo" className="App-logo"/></div>
                <div className="App-title Inline">{actualRace.name}</div>
                <div className="App-title Inline">{actualStage.stageName}</div>
            </header>
        );
    }
}


function mapStateToProps(store) {
    return {
        actualStage : store.actualStage.data,
        actualRace : store.actualRace.data
    }
}

export default connect(mapStateToProps)(GlobalHeader);