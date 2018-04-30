import React, { Component } from 'react'
import {List, Image,Container} from "semantic-ui-react";
import { connect } from 'react-redux'
import store from "../store";
import * as riderStageConnectionActions from "../actions/riderStageConnectionsActions";

class SingleTrikotActual extends Component {

    constructor(props){
        super(props);

        this.state = {
            updated: false
        }
    }

    fetchRiderStageConnections(id) {
        store.dispatch(riderStageConnectionActions.getRiderStageConnectionsFromAPI(id));
        this.setState({updated: true});
    }

    render() {
        const trikot = this.props.data;
        const {actualStage} = this.props;

        if (actualStage.id !== undefined && !this.state.updated) {
            this.fetchRiderStageConnections(actualStage.id);
        }

        const {cons} = this.props;

        const leader = cons.sort((a,b) => a.virtualGap - b.virtualGap)[0].rider;
        const mountain = cons.sort((a,b) => a.virtualGap - b.virtualGap)[0].rider;
        const point = cons.sort((a,b) => a.virtualGap - b.virtualGap)[0].rider;
        const bestSwiss = cons.filter(con => con.rider.country === 'SUI').sort((a,b) => a.virtualGap - b.virtualGap)[0].rider;
        

      const attachedRider = trikot.type === 'leader' ? (
          <p>{leader.startNr}, {leader.country}, {leader.name}, {leader.teamName}, Rang</p>
      ) : (
          trikot.type === 'mountain' ? (
              <p>{mountain.startNr}, {mountain.country}, {mountain.name}, {mountain.teamName}, Rang</p>
          ) : (
              trikot.type === 'points' ? (
                  <p>{point.startNr}, {point.country}, {point.name}, {point.teamName}, Rang</p>
              ):
                  trikot.type === 'bestSwiss' ? (
                          <p>{bestSwiss.startNr}, {bestSwiss.country}, {bestSwiss.name}, {bestSwiss.teamName}, Rang</p>
                  ) : (
                        <p>Fahrerdaten werden geladen</p>
                      )
          )
      )


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
      cons : store.cons.cons,
      maillots : store.maillots.data
  }
}

export default connect(mapStateToProps)(SingleTrikotActual);
