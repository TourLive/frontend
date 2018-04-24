import React, {Component} from "react";
import {Header, List, Image} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import SingleTrikot from "./SingleTrikot";
import * as maillotActions from '../actions/maillotActions'
import store from '../store'
import {connect} from "react-redux";

class Trikots extends Component {
  constructor(props){
    super(props);

    this.state = {
      updated: false
    }
  }

  fetchCurrentMaillots(id) {
    store.dispatch(maillotActions.getCurrentMaillots(id));
    this.setState({updated: true});
  }

  render() {
        const {maillots} = this.props;
        const {actualStage} = this.props;

        if (actualStage.id !== undefined && !this.state.updated) {
          this.fetchCurrentMaillots(actualStage.id);
        }

        return(
            <div className="App-Content">
                <Helmet>
                    <title>Trikotträger</title>
                </Helmet>
                <Header as="h1" color='red'>Trikotträger</Header>
                <h1>Stand beim Start</h1>
              <List divided verticalAlign='middle' size="massive">
                {maillots.map(x => <SingleTrikot key={x.id} data={x}/>)}
              </List>
            </div>
        );
    }
}

function mapStateToProps(store) {
  return {
    maillots: store.maillots.data,
    actualStage : store.actualStage.data
  }
}

export default connect(mapStateToProps)(Trikots);