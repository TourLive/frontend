import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import * as riderStageConnectionsActions from "../../actions/riderStageConnectionsActions";
import store from "../../store";
import {Route, Switch, Link, Redirect, withRouter} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import OfficialRankingContainer from '../../containers/OfficialRankingContainer'
import VirtualRankingContainer from '../../containers/VirtualRankingContainer'
import PointRankingContainer from '../../containers/PointRankingContainer'
import MountainRankingContainer from '../../containers/MountainRankingContainer'

class Rankings extends Component {

    constructor(props){
        super(props);

        this.state = {
            updated: false,
            activeItem : 'official',
            timer : null
        }
    }

    handleMenuItemClick = (e, {name}) => this.setState({activeItem: name})


    fetchInitalRiderStageConnections(id) {
        store.dispatch(riderStageConnectionsActions.getRiderStageConnectionsFromAPI(id));
        this.setState({updated: true});
        this.setState({activeItem: 'official'});
    }

    componentDidMount() {
      let timer = setInterval(this.tick, store.getState().settings.refreshPeriod * 1000);
      this.setState({timer});
    }

    componentWillUnmount() {
      clearInterval(this.state.timer);
    }

    tick() {
      let stageID = store.getState().actualStage.data.id;
      if (stageID !== undefined) {
          store.dispatch(riderStageConnectionsActions.getRiderStageConnectionsFromAPI(stageID));
      }
    }

    render() {
        const {activeItem} = this.state;
        const {actualStage} = this.props;
        if (actualStage.id !== undefined && !this.state.updated) {
            this.fetchInitalRiderStageConnections(actualStage.id);
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
                  <Menu.Item as={Link} key={1} to="/rankings/official" name='official' active={activeItem === 'official'} onClick={this.handleMenuItemClick}>
                    Offiziell
                  </Menu.Item>
                  <Menu.Item as={Link} key={2} to="/rankings/virtual" name='virtual' active={activeItem === 'virtual'} onClick={this.handleMenuItemClick}>
                    Virtuell
                  </Menu.Item>
                  <Menu.Item as={Link} key={3} to="/rankings/point" name='point' active={activeItem === 'point'} onClick={this.handleMenuItemClick}>
                    Punkte
                  </Menu.Item>
                  <Menu.Item as={Link} key={4} to="/rankings/mountain" name='mountain' active={activeItem === 'mountain'} onClick={this.handleMenuItemClick}>
                    Berg
                  </Menu.Item>
                </Menu>

                <Switch>
                    <Route path="/rankings" component={OfficialRankingContainer}/>
                    <Route path="/rankings/official" component={OfficialRankingContainer}/>
                    <Route path="/rankings/virtual" component={VirtualRankingContainer}/>
                    <Route path="/rankings/point" component={PointRankingContainer}/>
                    <Route path="/rankings/mountain" component={MountainRankingContainer}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Rankings);