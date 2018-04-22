import React, {Component} from "react";
import * as globalActions from "../actions/globalActions";
import {connect} from "react-redux";
import store from "../store"
import {Link} from "react-router-dom";
import * as riderActions from '../actions/riderActions';
import * as judgementActions from '../actions/judgmentActions';

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
      this.setState({updated: true});
    }

    componentDidMount() {
        this.fetchCurrentSettings();
    }

      render() {
        const {actualStage} = this.props;
        const {actualRace} = this.props;

        if (actualStage.id !== undefined && !this.state.updated) {
          console.log(actualStage.id);
          this.fetchStaticData(actualStage.id);
        }

        return(
          <header className="App-header">
            <Link to="/"><img src="logo.png" alt="Logo" className="App-Header-Image"/></Link>
            <div className="App-title Inline">{actualRace.name} / {actualStage.stageName}</div>
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