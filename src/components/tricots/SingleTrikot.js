import React, { Component } from 'react'
import {List, Flag, Feed} from "semantic-ui-react";
import countries from "../common/countries";

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
      <p><b>{rider.startNr}</b> <Flag className="App-Flag" name={flag.iso.toLowerCase()}/> <b>{rider.name}</b>, {rider.teamName}, Rang: {rank}</p>
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

export default SingleTrikot;
