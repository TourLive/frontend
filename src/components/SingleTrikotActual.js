import React, { Component } from 'react'
import {List, Image,Container} from "semantic-ui-react";
import store from '../store'
import { connect } from 'react-redux'
import * as maillotActions from "../actions/maillotActions";
import * as riderStageConnectionsActions from "../actions/riderStageConnectionsActions";

class SingleTrikotActual extends Component {
    constructor(props){
        super(props);

        this.state = {
            updated: false
        }
    }

    fetchCurrentRiderStageConnections(id) {
        store.dispatch(riderStageConnectionsActions.getRiderStageConnectionsFromAPI(id));
        this.setState({updated: true});
    };


  render() {
    const trikot = this.props.data;
    const {cons} = this.props;
    const {actualStage} = this.props;

    if (cons.riders === undefined && !this.state.updated) {
          this.fetchCurrentRiderStageConnections(actualStage.id);
    }

    let con = cons.find((e) => {
      let connection;
      console.log(trikot.size);
        Object.keys(trikot).forEach(key => {
          console.log(trikot.type)
            /*switch(trikot.type){
              case "leader":
              return cons.sort((a,b) => b.virtualGap - a.virtualGap)[0];
              break;
            case "mountain":
              return cons.sort((a,b) => b.mountainBonusPoints - a.mountainBonusPoints)[0];
              break;
            case "points":
              return cons.sort((a,b) => b.bonusPoints - a.bonusPoints)[0];
              break;
            case "bestSwiss":
              let filtered = cons.filter(a => a.rider.teamShortName = 'SUI');
              console.log("filtered ");
              console.log("rider " + filtered.sort((a,b) => b.virtualGap - a.virtualGap)[0].rider.name);
              return filtered.sort((a,b) => b.virtualGap - a.virtualGap)[0];
            break;
            default:
            break;
        }*/
        });
        /*
        switch(trikot.type){
            case "leader":
                return cons.sort((a,b) => b.virtualGap - a.virtualGap)[0];
                break;
            case "mountain":
                return cons.sort((a,b) => b.mountainBonusPoints - a.mountainBonusPoints)[0];
                break;
            case "points":
                return cons.sort((a,b) => b.bonusPoints - a.bonusPoints)[0];
                break;
            case "bestSwiss":
                let filtered = cons.filter(a => a.rider.teamShortName = 'SUI');
                console.log("filtered ");
                console.log("rider " + filtered.sort((a,b) => b.virtualGap - a.virtualGap)[0].rider.name);
                return filtered.sort((a,b) => b.virtualGap - a.virtualGap)[0];
                break;
            default:
              break;
        }*/
    });

    const attachedRider = con === undefined ? (
        <p>Fahrer wird geladen</p>
    ) : (
        <p>{con.rider.startNr}, {con.rider.country}, {con.rider.name}, {con.rider.teamName}, Rang</p>
    );

    return(
      <List.Item>
        <Image avatar src='http://localhost:3000/maillot.svg' />
        <List.Content>
          <div className="App-Trikot-Box">
            <List.Header>{trikot.name}</List.Header>
            <Container className="App-Trikot-Content">
              <span><b>Partner:</b> {trikot.partner}<br/></span>
              {attachedRider}
            </Container>
          </div>
        </List.Content>
      </List.Item>
    );
  }
}

function mapStateToProps(store) {
  return {
      actualStage : store.actualStage.data,
      cons : store.cons.cons
  }
}

export default connect(mapStateToProps)(SingleTrikotActual);
