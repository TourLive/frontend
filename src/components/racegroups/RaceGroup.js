import React, { Component } from 'react';
import {Header, Button, Flag} from "semantic-ui-react";
import store from "../../store";
import * as raceGroupsActions from "../../actions/raceGroupsActions";
import countries from "../../util/countries";

class RaceGroup extends Component {
    constructor(props) {
        super(props);

        this.close = this.close.bind(this);
    }
    close() {
        store.dispatch(raceGroupsActions.disableSingleRaceGroup());
    }
    render() {
        const {raceGroups} = this.props;

        console.log(raceGroups);
        const rG = raceGroups[0];
        let name = "";

        if (rG.raceGroupType === "FELD") {
            name = "Feld";
        } else if (rG.raceGroupType === "LEAD") {
            name = "Spitzengruppe";
        } else {
            name = "GRUPPE " + rG.Position;
        }

        let time = rG.actualGapTime;
        let date = new Date(1000*time);
        let mm = date.getUTCMinutes();
        let ss = date.getSeconds();
        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}

        return(
            <div className="App-Judgment-Single">
                <Button onClick={this.close}>&lt; Zurück zur Streckenansicht</Button><br/>
                <Header as="h1">{name}</Header>
                <p>Abstand zur Spitze: {mm}:{ss}</p>
                <Header as="h4">Fahrer in dieser Renngruppe</Header>
                {rG.riders.map(elem => {
                    let flag;
                    if (elem !== undefined) {
                        flag = countries.find((v) => {
                            return v.ioc === elem.country;
                        });
                    }
                    return <p key={elem.id}><b>{elem.startNr}</b> <Flag name={flag.iso.toLowerCase()}/> <b>{elem.name}</b>, {elem.teamName}</p>
                })}
            </div>
        );
    }
}


export default RaceGroup;
