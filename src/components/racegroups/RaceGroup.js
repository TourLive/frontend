import React, { Component } from 'react';
import {Header, Button} from "semantic-ui-react";
import store from "../../store";
import * as raceGroupsActions from "../../actions/raceGroupsActions";

class RaceGroup extends Component {
    constructor(props) {
        super(props);

        this.close = this.close.bind(this);
    }
    close() {
        store.dispatch(raceGroupsActions.disableSingleRaceGroup);
    }
    render() {
        return(
            <div className="App-Judgment-Single">
                <Button onClick={this.close}>&lt; Zurück zur Streckenansicht</Button><br/>
                <Header as="h1">Gruppe</Header>
            </div>
        );
    }
}


export default RaceGroup;
