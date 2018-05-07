import React, { Component } from 'react'
import {List, Image,Container, Flag} from "semantic-ui-react";
import { connect } from 'react-redux';
import countries from "./countries";

class SingleTrikot extends Component {
  render() {
    const trikot = this.props.data;
    const {riders} = this.props;
    const {cons} = this.props;
    const sortedConnections = cons.sort((a, b) => a.officialGap - b.officialGap);
    let rank;
    let flag;

    let rider = riders.find((e) => {
        return e.id === trikot.riderId;
    });

    if (rider !== undefined) {
      flag = countries.find((v) => {
        return v.ioc === rider.country;
      });
    }


    if(sortedConnections.length > 0){
        rank = sortedConnections.findIndex(con => con.rider.id === rider.id) + 1;
    }

    const attachedRider = rider === undefined ? (
        <p>Fahrerdaten werden geladen</p>
    ) : (
      <p><b>{rider.startNr}</b> <Flag name={flag.iso.toLowerCase()}/> <b>{rider.name}</b>, {rider.teamName}, Rang: {rank}</p>
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
