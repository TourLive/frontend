import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import * as riderActions from "../actions/riderActions";
import store from "../store";
import {connect} from "react-redux";
import TrackView from "./TrackView";
import OfficalRanking from "./OfficialRanking";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';

class Rankings extends Component {
    state = {activeItem: 'official'}

    handleMenuItemClick = (e, {name}) => this.setState({activeItem: name})


    fetchCurrentSettings() {
        store.dispatch(riderActions.getRidersFromAPI(store.getState().actualStage.data.id));
    }

    componentDidMount() {
        this.fetchCurrentSettings();
        console.log("Component did mount");
    }


    render() {
        const {activeItem} = this.state;

        const navMenu =  (
            [
                <Menu.Item as={Link} key={1} to="/rankings/official" name='officialRanking' active={activeItem === 'officialRanking'} onClick={this.handleMenuItemClick}>
                    Offiziell
                </Menu.Item>,
                <Menu.Item as={Link} key={2} to="/rankings/virtual" name='virtualRanking' active={activeItem === 'virtualRanking'} onClick={this.handleMenuItemClick}>
                    Virtuell
                </Menu.Item>,
                <Menu.Item as={Link} key={3} to="/rankings/point" name='pointRanking' active={activeItem === 'pointRanking'} onClick={this.handleMenuItemClick}>
                    Punkte
                </Menu.Item>,
                <Menu.Item as={Link} key={3} to="/rankings/mountain" name='mountainRanking' active={activeItem === 'mountainRanking'} onClick={this.handleMenuItemClick}>
                    Berg
                </Menu.Item>
            ]
        );

        const nav = (
            <Menu stackable>
                {navMenu}
            </Menu>
        );


        const {riders} = this.props;
        console.log(riders);

        return(
            <div className="App-Content">
                <Helmet>
                    <title>Klassemente</title>
                </Helmet>
                <Header as="h1" color='red'>Klassemente</Header>
                <div>{nav}</div>
                <Switch>
                    <Route path="/rankings/official" component={OfficalRanking}/>
                    <Route path="/rankings/virtual" component={TrackView}/>
                    <Route path="/rankings/point" component={TrackView}/>
                    <Route path="/rankings/mountain" component={TrackView}/>
                </Switch>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        actualStage : store.actualStage.data,
        riders : store.riders.data
    }
}

export default connect(mapStateToProps)(Rankings);