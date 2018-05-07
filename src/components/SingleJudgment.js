import React, { Component } from 'react';
import {Header, Button, Flag} from "semantic-ui-react";
import {connect} from "react-redux";
import countries from "./countries";

class SingleJudgment extends Component {
  render() {
    const judgment = this.props.data;
    const {riders} = this.props;
    const {judgmentRiderConnections} = this.props;
    console.log(countries);

    return(
      <div className="App-Judgment-Single">
        <Button onClick={this.props.close}>&lt; Zurück zu allen Wertungen</Button><br/>
        <Header as="h1">Wertung | {judgment.name}</Header>
        <p>An Kilometer <b>{judgment.distance}</b> auf der Strecke</p>
        {judgment.reward.points.map((reward,i) => {
          let rider;
          let flag;
          let jRC = judgmentRiderConnections.find((e) => {
            let rank = i+1;
            return (e.judgment.id === judgment.id && e.rank === rank);
          });
          if (jRC !== undefined) {
            rider = riders.find((o) => {
              return o.id === jRC.rider.id;
            });
            if (rider !== undefined) {
                flag = countries.find((v) => {
                    return v.ioc === rider.country;
                });
            }
          }


          const linkedRider = jRC !== undefined ? (
            <p><b>{rider.startNr}</b> <Flag name={flag.iso.toLowerCase()}/> <b>{rider.name}</b>, {rider.teamName}</p>
          ) : (
            <p>Wertung wurde noch nicht vergeben</p>
          );

          if (reward !== 0) {
            return (
              <div className="App-Judgment-Rank">
                <h5 key={i+1}>Platz {i+1}</h5>
                {linkedRider}
              </div>
            )
          }
        })}
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    riders : store.riders.riders,
    judgmentRiderConnections : store.judgmentRiderConnections.data
  }
}

export default connect(mapStateToProps)(SingleJudgment);
