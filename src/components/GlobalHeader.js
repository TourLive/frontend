import React, {Component} from "react";
import * as globalActions from "../actions/globalActions";
import store from "../store"
import {Link} from "react-router-dom";
import * as riderActions from '../actions/riderActions';
import * as judgementActions from '../actions/judgmentActions';
import * as gpxActions from '../actions/gpxActions';

class GlobalHeader extends Component {
      constructor(props){
        super(props);

        this.state = {
          updated: false
        }
      }

    fetchCurrentSettings() {
        store.dispatch(globalActions.getSettingsFromAPI());
    }

    fetchStaticData(id) {
      store.dispatch(riderActions.getRidersFromAPI(id));
      store.dispatch(judgementActions.getJudgmentsOfStage(id));
      store.dispatch(gpxActions.getGPXTracks(id));
      this.setState({updated: true});
    }

    componentDidMount() {
        this.fetchCurrentSettings();
    }

      render() {
        const {actualStage} = this.props;
        const {actualRace} = this.props;

        if (actualStage.id !== undefined && !this.state.updated) {
          this.fetchStaticData(actualStage.id);
        }

        return(
          <header className="App-header">
                <Link to="/view/track"><img src="../logo.png" alt="Logo" className="App-Header-Image"/></Link>
                <div className="App-title Inline">{actualRace.name} / {actualStage.stageName}</div>
                <a href="https://www.hsr.ch/de/" target="_blank"><img src="../logo_HSR.png" alt="HSR" className="App-hsr Inline"/></a>
          </header>
        );
      }
}

export default GlobalHeader;