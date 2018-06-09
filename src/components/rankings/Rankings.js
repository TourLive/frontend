import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import * as riderStageConnectionsActions from "../../actions/riderStageConnectionsActions";
import store from "../../store";
import {Route, Switch, Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import VirtualRankingContainer from '../../containers/rankings/VirtualRankingContainer'
import PointRankingContainer from '../../containers/rankings/PointRankingContainer'
import MountainRankingContainer from '../../containers/rankings/MountainRankingContainer'

class Rankings extends Component {

    constructor(props){
        super(props);

        this.state = {
            updated: false,
            activeItem : 'virtual',
            lastActualized : new Date().timeNow(),
            timer : null
        }

        this.tick = this.tick.bind(this)
    }

    handleMenuItemClick = (e, {name}) => this.setState({activeItem: name});


    fetchInitalRiderStageConnections(id) {
        store.dispatch(riderStageConnectionsActions.getRiderStageConnectionsFromAPI(id));
        this.setState({updated: true});
        this.setState({activeItem: 'virtual'});
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
      this.setState({lastActualized : new Date().timeNow()});
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
                    <title>Virtuelle Klassemente</title>
                </Helmet>
                <div>
                    <Header as="h1" color='red'>Virtuelle Klassemente</Header>
                    <p className="App-Timestamp"><strong>Letzte Aktualisierung:</strong> {new Date().today()} {this.state.lastActualized}</p>
                </div>
                <Menu compact>
                  <Menu.Item as={Link} key={1} to="/rankings/virtual" name='virtual' active={activeItem === 'virtual'} onClick={this.handleMenuItemClick}>
                    Gesamt
                  </Menu.Item>
                  <Menu.Item as={Link} key={2} to="/rankings/point" name='point' active={activeItem === 'point'} onClick={this.handleMenuItemClick}>
                    Punkte
                  </Menu.Item>
                  <Menu.Item as={Link} key={3} to="/rankings/mountain" name='mountain' active={activeItem === 'mountain'} onClick={this.handleMenuItemClick}>
                    Berg
                  </Menu.Item>
                </Menu>

                <Switch>
                    <Route path="/rankings/virtual" component={VirtualRankingContainer}/>
                    <Route path="/rankings/point" component={PointRankingContainer}/>
                    <Route path="/rankings/mountain" component={MountainRankingContainer}/>
                </Switch>
            </div>
        );
    }
}

export default Rankings;