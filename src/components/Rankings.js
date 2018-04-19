import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import * as riderActions from "../actions/riderActions";
import * as riderStageConnectionsActions from "../actions/riderStageConnectionsActions";
import store from "../store";
import {connect} from "react-redux";
import TrackView from "./TrackView";
import OfficalRanking from "./OfficialRanking";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';

class Rankings extends Component {

    constructor(props){
        super(props);

        this.state = {
            actualStage: '8',
            activeItem : 'official'
        }
    }

    handleMenuItemClick = (e, {name}) => this.setState({activeItem: name})


    fetchCurrentSettings() {
        if(store.getState().actualStage.data.id !== "undefined"){
            this.setState({actualStage: store.getState().actualStage.data.id});
        }
        store.dispatch(riderStageConnectionsActions.getRiderStageConnectionsFromAPI(this.state.actualStage));
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
                <Menu.Item as={Link} key={4} to="/rankings/mountain" name='mountainRanking' active={activeItem === 'mountainRanking'} onClick={this.handleMenuItemClick}>
                    Berg
                </Menu.Item>
            ]
        );

        const nav = (
            <Menu stackable>
                {navMenu}
            </Menu>
        );

        const {cons} = this.props;
        console.log(cons);

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
        cons : store.cons.cons
    }
}

export default connect(mapStateToProps)(Rankings);