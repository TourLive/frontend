import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import * as riderStageConnectionsActions from "../actions/riderStageConnectionsActions";
import store from "../store";
import {connect} from "react-redux";
import OfficalRanking from "./OfficialRanking";
import VirtualRanking from "./VirtualRanking";
import PointRanking from "./PointRanking";
import MountainRanking from "./MountainRanking";
import {Route, Switch, Link, Redirect} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';

class Rankings extends Component {

    constructor(props){
        super(props);

        this.state = {
            updated: false,
            activeItem : 'official'
        }
    }

    handleMenuItemClick = (e, {name}) => this.setState({activeItem: name})


    fetchCurrentRiderStageConnections(id) {
        store.dispatch(riderStageConnectionsActions.getRiderStageConnectionsFromAPI(id));
        this.setState({updated: true});
        this.setState({activeItem: 'officialRanking'});
    }

    render() {
        const {activeItem} = this.state;
        const {actualStage} = this.props;

        if (actualStage.id !== undefined && !this.state.updated) {
            this.fetchCurrentRiderStageConnections(actualStage.id);
        }
        
        return(
            <div className="App-Content">
                <Helmet>
                    <title>Klassemente</title>
                </Helmet>
                <div>
                    <Header as="h1" color='red'>Klassemente</Header>
                    <p className="App-Timestamp"><strong>Letzte Aktualisierung:</strong> {new Date().today()} {new Date().timeNow()}</p>
                </div>
                <Menu compact>
                  <Menu.Item as={Link} key={1} to="/rankings/official" name='officialRanking' active={activeItem === 'officialRanking'} onClick={this.handleMenuItemClick}>
                    Offiziell
                  </Menu.Item>
                  <Menu.Item as={Link} key={2} to="/rankings/virtual" name='virtualRanking' active={activeItem === 'virtualRanking'} onClick={this.handleMenuItemClick}>
                    Virtuell
                  </Menu.Item>
                  <Menu.Item as={Link} key={3} to="/rankings/point" name='pointRanking' active={activeItem === 'pointRanking'} onClick={this.handleMenuItemClick}>
                    Punkte
                  </Menu.Item>
                  <Menu.Item as={Link} key={4} to="/rankings/mountain" name='mountainRanking' active={activeItem === 'mountainRanking'} onClick={this.handleMenuItemClick}>
                    Berg
                  </Menu.Item>
                </Menu>
                <Switch>
                    <Route path="/rankings/official" component={OfficalRanking}/>
                    <Route path="/rankings/virtual" component={VirtualRanking}/>
                    <Route path="/rankings/point" component={PointRanking}/>
                    <Route path="/rankings/mountain" component={MountainRanking}/>
                </Switch>
                <Redirect to="/rankings/official"/>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        cons : store.cons.cons,
        actualStage : store.actualStage.data
    }
}

export default connect(mapStateToProps)(Rankings);