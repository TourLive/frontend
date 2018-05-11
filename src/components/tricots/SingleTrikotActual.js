import React, { Component } from 'react';
import {List, Feed} from "semantic-ui-react";

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
          <Feed>
            <Feed.Event>
              <Feed.Label image='/maillot.svg' />
              <Feed.Content>
                <Feed.Date content={trikot.name} />
              </Feed.Content>
            </Feed.Event>
          </Feed>
          <List.Content>
            <div className="App-Trikot-Box">
              <span className="lineGap"><b>Partner:</b> {trikot.partner}<br/></span><br/>
              {attachedRider}
            </div>
          </List.Content>
        </List.Item>
    );
  }
}

export default SingleTrikotActual;
