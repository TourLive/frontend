import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import { connect } from 'react-redux'
import store from "../store"
import * as judgmentRiderConnectionActions from '../actions/judgmentRiderConnectionActions';

class Judgments extends Component {
    constructor(props){
      super(props);

      this.state = {
        updated: false,
        selected : false
      }
    }

    fetchJudgmentRiderConnections(id) {
        store.dispatch(judgmentRiderConnectionActions.getJudgmentRiderConnections(id));
    }

    render() {
        const {actualStage} = this.props;
        const {judgments} = this.props;

        if (actualStage.id !== undefined && !this.state.updated) {
          this.fetchJudgmentRiderConnections(actualStage.id);
        }

        return(
            <div className="App-Content">
                <Helmet>
                    <title>Wertungen</title>
                </Helmet>
                <Header as="h1" color='red'>Wertungen</Header>
                <h1>Wertungen</h1>
              {judgments.sort((a, b) => a.distance > b.distance).map(judgment => {
                console.log(judgment);
                return (
                  <div key={judgment.id}>
                    <h3>{judgment.name}</h3>
                    <span>{judgment.distance}</span>
                    {judgment.reward.points.map((reward,i) => {
                      if (reward !== 0) {
                        return (
                          <h1>Platz {i+1}</h1>
                        )
                      }
                    })}
                  </div>
              )
              })}
            </div>
        );
    }
}


function mapStateToProps(store) {
  return {
    actualStage : store.actualStage.data,
    judgments : store.judgments.data
  }
}

export default connect(mapStateToProps)(Judgments);