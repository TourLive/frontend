import React, { Component } from 'react'
import {List, Flag, Feed} from "semantic-ui-react";
import countries from "../../util/countries";

class SingleTrikot extends Component {
  render() {
    const trikot = this.props.data;
    const {riders} = this.props;
    const {cons} = this.props;
    let rank;
    let flag;
    let rider;
    if (cons !== undefined) {
        const sortedConnections = cons.sort((a, b) => a.officialGap - b.officialGap);
        rider = riders.find((e) => {
          return e.id === trikot.riderId;
        });

        if (rider !== undefined) {
          flag = countries.find((v) => {
            return v.ioc === rider.country;
          });
        }
        if(sortedConnections.length > 0 && rider !== undefined){
          rank = sortedConnections.findIndex(con => con.rider.id === rider.id) + 1;
        }

    }

    const attachedRider = rider === undefined ? (
        <p>Keine Daten vorhanden</p>
    ) : (
      <p><b>{rider.startNr}</b> <Flag className="App-Flag" name={flag.iso.toLowerCase()}/> <b>{rider.name}</b>, {rider.teamName}, virtueller Rang: {rank}</p>
    );

    const imageName = "../" + trikot.color + ".png";

    return(
      <List.Item>
        <Feed>
          <Feed.Event>
            <Feed.Label image={imageName} />
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
