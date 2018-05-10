import React, { Component } from 'react';
import {List, Image,Container} from "semantic-ui-react";
import { connect } from 'react-redux';
import countries from "./countries";

class SingleTrikotActual extends Component {

    render() {
        const trikot = this.props.data;
        const {cons} = this.props;

        let leader;
        let mountain;
        let point;
        let bestSwiss;
        let sortedConnections = cons.sort((a, b) => a.virtualGap - b.virtualGap);
        let rankOfLeader;
        let rankOfMountain;
        let rankOfPoint;
        let rankOfBestSwiss;

        if(cons.length > 0){
            leader = cons.sort((a,b) => a.virtualGap - b.virtualGap)[0].rider;
            rankOfLeader= sortedConnections.findIndex(con => con.rider.id === leader.id) + 1;
            mountain = cons.sort((a,b) => a.virtualGap - b.virtualGap)[0].rider;
            rankOfMountain= sortedConnections.findIndex(con => con.rider.id === mountain.id) + 1;
            point = cons.sort((a,b) => a.virtualGap - b.virtualGap)[0].rider;
            rankOfPoint= sortedConnections.findIndex(con => con.rider.id === point.id) + 1;
            bestSwiss = cons.filter(con => con.rider.country === 'SUI').sort((a,b) => a.virtualGap - b.virtualGap)[0].rider;
            rankOfBestSwiss = sortedConnections.findIndex(con => con.rider.id === bestSwiss.id) + 1;
        }


      const attachedRider = trikot.type === 'leader' && leader !== undefined? (
          <p>{leader.startNr}, {leader.country}, {leader.name}, {leader.teamName}, Rang: {rankOfLeader}</p>
      ) : (
          trikot.type === 'mountain' && mountain !== undefined ? (
              <p>{mountain.startNr}, {mountain.country}, {mountain.name}, {mountain.teamName}, Rang: {rankOfMountain}</p>
          ) : (
              trikot.type === 'points' && point !== undefined ? (
                  <p>{point.startNr}, {point.country}, {point.name}, {point.teamName}, Rang: {rankOfPoint}</p>
              ):
                  trikot.type === 'bestSwiss' && bestSwiss !== undefined ? (
                          <p>{bestSwiss.startNr}, {bestSwiss.country}, {bestSwiss.name}, {bestSwiss.teamName}, Rang: {rankOfBestSwiss}</p>
                  ) : (
                        <p>Fahrerdaten werden geladen</p>
                      )
          )
      );

    return(
        <List.Item>
            <Image avatar src='maillot.svg' />
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
      cons : store.cons.cons
  }
}

export default connect(mapStateToProps)(SingleTrikotActual);
