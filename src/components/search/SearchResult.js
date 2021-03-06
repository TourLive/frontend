import React, { Component } from 'react'
import RiderInfo from "../RiderDetail/RiderInfo";
import RiderJudgment from "../RiderDetail/RiderJudgment";
import RiderTrikot from "../RiderDetail/RiderTrikot";
import {Divider, Icon, Header, Button} from "semantic-ui-react";
import store from "../../store";
import * as searchActions from "../../actions/searchActions";
import RiderRaceGroupContainer from '../../containers/search/RiderRaceGroupContainer';

class SearchResult extends Component {
    constructor(props){
        super(props);

        this.onSearchClose = this.onSearchClose.bind(this);
    }

    onSearchClose() {
        store.dispatch(searchActions.disableSearchResult());
    }

    render() {
        const rider = this.props.selectedRider;
        return <div>
            <Button onClick={this.onSearchClose}>&lt; Zurück zur Streckenübersicht</Button><br/>
            <h1>{rider.name}</h1>
            <Header as="h3"><Icon name='info'/>Informationen</Header>
            <RiderInfo selectedRider={rider}/>
            <Divider/>
            <Header as="h3"><Icon name='shirtsinbulk'/>Trikots</Header>
            <RiderTrikot selectedRider={rider}/>
            <Divider/>
            <Header as="h3"><Icon name='trophy'/>Wertungen</Header>
            <RiderJudgment selectedRider={rider}/>
            <Divider/>
            <Header as="h3"><Icon name='group'/>Gruppenhistorie</Header>
            <RiderRaceGroupContainer selectedRider={rider}/>
        </div>

    }
}

export default SearchResult;