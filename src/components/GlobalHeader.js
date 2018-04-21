import React, {Component} from "react";
import * as globalActions from "../actions/globalActions";
import {connect} from "react-redux";
import store from "../store"
import {Link} from "react-router-dom";
import * as riderActions from '../actions/riderActions'

class GlobalHeader extends Component {
    fetchCurrentSettings() {
        store.dispatch(globalActions.getSettingsFromAPI());
    }

    componentDidMount() {
        this.fetchCurrentSettings();
    }

    render() {
        const {actualStage} = this.props;
        const {actualRace} = this.props;

        return(
            <header className="App-header">
                <Link to="/"><img src="logo.png" alt="Logo" className="App-Header-Image"/></Link>
                <div className="App-title Inline">{actualRace.name}Tour de Suisse / {actualStage.stageName}</div>
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