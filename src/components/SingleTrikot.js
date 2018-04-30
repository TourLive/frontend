import React, { Component } from 'react'
import {List, Image,Container} from "semantic-ui-react";
import store from '../store'
import { connect } from 'react-redux'

class SingleTrikot extends Component {
  render() {
    const trikot = this.props.data;
    const {riders} = this.props;
    const {cons} = this.props;
    const sortedConnections = cons.sort((a, b) => a.officialGap - b.officialGap);
    let rank;

      let rider = riders.find((e) => {
          return e.id === trikot.riderId;
      });
      
    if(sortedConnections.length > 0){
        rank = sortedConnections.findIndex(con => con.rider.id === rider.id) + 1;
    }


    const attachedRider = rider === undefined ? (
        <p>Fahrerdaten werden geladen</p>
    ) : (
        <p>{rider.startNr}, {rider.country}, {rider.name}, {rider.teamName}, Rang: {rank}</p>
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
      riders : store.riders.riders,
      cons: store.cons.cons
  }
}

export default connect(mapStateToProps)(SingleTrikot);
