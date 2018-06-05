import React, { Component } from 'react';
import {Header, Button, Flag} from "semantic-ui-react";
import countries from "../../util/countries";
import RoundedRecetangle from '../common/RoundedRecetangle';

class SingleJudgment extends Component {
  render() {
    const judgment = this.props.data;
    const {riders} = this.props;
    const {judgmentRiderConnections} = this.props;
    const description = `An Kilometer ${judgment.distance} auf der Strecke`;

    return(
      <div className="App-Judgment-Single">
        <Button onClick={this.props.close}>&lt; Zurück zu allen Wertungen</Button><br/>
        <Header as="h1">Wertung | {judgment.name}</Header>
        <RoundedRecetangle content={description}/>
        {judgment.reward.points.map((reward,i) => {
          let rider;
          let flag;
          let RewardRank = reward;
          let jRC = judgmentRiderConnections.find((e) => {
            let rank = i+1;
            return (e.judgment.id === judgment.id && e.rank === rank);
          });
          if (jRC === undefined) {
            let moneyArray = judgment.reward.money;
            let money = moneyArray[i];
            if (money !== undefined && money !== 0) {
                RewardRank = 1;
                jRC = judgmentRiderConnections.find((e) => {
                    let rank = i+1;
                    console.log(rank);
                    return (e.judgment.id === judgment.id && e.rank === rank);
                });
            }
          }
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

          if (RewardRank !== 0) {
            return (
              <div key={i+1} className="App-Judgment-Rank">
                <h5>Platz {i+1}</h5>
                {linkedRider}
              </div>
            )
          }
          return null;
        })}
      </div>
    );
  }
}


export default SingleJudgment;
