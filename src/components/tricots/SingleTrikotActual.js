import React, { Component } from 'react';
import {List, Feed, Flag} from "semantic-ui-react";
import countries from '../../util/countries'

class SingleTrikotActual extends Component {

    render() {
        const trikot = this.props.data;
        const {cons} = this.props;

        let leader;
        let mountain;
        let point;
        let bestSwiss;
        let sortedConnections = cons.sort((a, b) => (a.virtualGap + a.officialGap) - (b.virtualGap + b.officialGap));
        let rankOfLeader;
        let rankOfMountain;
        let rankOfPoint;
        let rankOfBestSwiss;
        let flag;
        let sortedArray;
        let tempRSC;
        let tempArray;

        if (cons.length > 0) {
            switch(trikot.type) {
                case 'leader':
                    let temp = cons;
                    sortedArray = temp.sort((a,b) => (a.virtualGap + a.officialGap) - (b.virtualGap + a.officialGap));
                    leader = sortedArray[0].rider;
                    tempRSC = sortedArray[0];
                    tempArray = sortedArray.filter((a)  => (tempRSC.virtualGap + tempRSC.officialGap) === (a.virtualGap + a.officialGap));
                    if(tempArray.length > 1 && trikot.type == 'leader'){
                        let checkIfStillLeaderFromStart = tempArray.findIndex(con => con.rider.id === trikot.riderId);
                        if(checkIfStillLeaderFromStart > 0){
                            leader = tempArray[checkIfStillLeaderFromStart].rider;
                        }
                    }
                    rankOfLeader= 1;
                    break;
                case 'mountain':
                    let mtemp = cons;
                    sortedArray = mtemp.sort((a,b) => b.mountainBonusPoints - a.mountainBonusPoints);
                    mountain = sortedArray[0].rider;
                    tempRSC = sortedArray[0];
                    tempArray = sortedArray.filter((a)  => tempRSC.mountainBonusPoints === a.mountainBonusPoints);
                    if(tempArray.length > 1 && trikot.type === 'mountain'){
                        let checkIfStillLeaderFromStart = tempArray.findIndex(con => con.rider.id === trikot.riderId);
                        if(checkIfStillLeaderFromStart > 0){
                            mountain = tempArray[checkIfStillLeaderFromStart].rider;
                        }
                    }
                    rankOfMountain= sortedConnections.findIndex(con => con.rider.id === mountain.id) + 1;
                    break;
                case 'points':
                    let mpoint = cons;
                    sortedArray = mpoint.sort((a,b) => b.bonusPoints - a.bonusPoints);
                    point = sortedArray[0].rider;
                    tempRSC = sortedArray[0];
                    tempArray = sortedArray.filter((a)  => tempRSC.bonusPoints === a.bonusPoints);
                    if(tempArray.length > 1 && trikot.type === 'points'){
                        let checkIfStillLeaderFromStart = tempArray.findIndex(con => con.rider.id === trikot.riderId);
                        if(checkIfStillLeaderFromStart > 0){
                            point = tempArray[checkIfStillLeaderFromStart].rider;
                        }
                    }
                    rankOfPoint= sortedConnections.findIndex(con => con.rider.id === point.id) + 1;
                    break;
                case 'bestSwiss':
                    bestSwiss = cons.filter(con => con.rider.country === 'SUI').sort((a,b) => (a.virtualGap + a.officialGap) - (b.virtualGap + b.officialGap))[0].rider;
                    rankOfBestSwiss = sortedConnections.findIndex(con => con.rider.id === bestSwiss.id) + 1;
                    break;
                default:
                    flag = undefined;
            }
      }

      switch(trikot.type) {
        case 'leader':
          if (leader !== undefined) {
            flag = countries.find((v) => {
              return v.ioc === leader.country;
            });
          }
          break;
        case 'mountain':
          if (mountain !== undefined) {
            flag = countries.find((v) => {
              return v.ioc === mountain.country;
            });
          }
          break;
        case 'points':
          if (point !== undefined) {
            flag = countries.find((v) => {
              return v.ioc === point.country;
            });
          }
          break;
        case 'bestSwiss':
          if (bestSwiss !== undefined) {
            flag = countries.find((v) => {
              return v.ioc === bestSwiss.country;
            });
          }
          break;
        default:
          flag = undefined;
      }

      const attachedRider = trikot.type === 'leader' && leader !== undefined ? (
          <p><b>{leader.startNr}</b> <Flag className="App-Flag" name={flag.iso.toLowerCase()}/> <b>{leader.name}</b>, {leader.teamName}, Rang: {rankOfLeader}</p>
      ) : (
          trikot.type === 'mountain' && mountain !== undefined ? (
              <p><b>{mountain.startNr}</b> <Flag className="App-Flag" name={flag.iso.toLowerCase()}/> <b>{mountain.name}</b>, {mountain.teamName}, Rang: {rankOfMountain}</p>
          ) : (
              trikot.type === 'points' && point !== undefined ? (
                  <p><b>{point.startNr}</b> <Flag className="App-Flag" name={flag.iso.toLowerCase()}/> <b>{point.name}</b>, {point.teamName}, Rang: {rankOfPoint}</p>
              ):
                  trikot.type === 'bestSwiss' && bestSwiss !== undefined ? (
                          <p><b>{bestSwiss.startNr}</b> <Flag className="App-Flag" name={flag.iso.toLowerCase()}/> <b>{bestSwiss.name}</b>, {bestSwiss.teamName}, Rang: {rankOfBestSwiss}</p>
                  ) : (
                        <p>Keine Daten vorhanden</p>
                      )
          )
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

export default SingleTrikotActual;
