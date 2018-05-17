import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import {Route, Switch, Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import TricotsActualContainer from '../../containers/TricotsActualContainer'
import TricotsStartContainer from '../../containers/TricotsStartContainer'
import store from '../../store'
import * as riderStageConnectionsActions from '../../actions/riderStageConnectionsActions'
import * as maillotActions from '../../actions/maillotActions'

class Trikots extends Component {
  constructor(props){
    super(props);

    this.state = {
        activeItem : 'trikotsStart',
        updated: false
    }
  }

  fetchCurrentData(id) {
    store.dispatch(maillotActions.getCurrentMaillots(id));
    store.dispatch(riderStageConnectionsActions.getRiderStageConnectionsFromAPI(id));
    this.setState({updated: true});
  }

  handleMenuItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
        const {activeItem} = this.state;
        const {actualStage} = this.props;

        if (actualStage.id !== undefined && !this.state.updated) {
          this.fetchCurrentData(actualStage.id);
        }

        return(
            <div className="App-Content">
                <Helmet>
                    <title>Trikotträger</title>
                </Helmet>
                <div>
                  <Header as="h1" color='red'>Trikotträger</Header>
                  <p className="App-Timestamp"><strong>Letzte Aktualisierung:</strong> {new Date().today()} {new Date().timeNow()}</p>
                </div>
                <Menu compact>
                  <Menu.Item as={Link} key={1} to="/tricots/start" name='trikotsStart' active={activeItem === 'trikotsStart'} onClick={this.handleMenuItemClick}>
                    Stand beim Start
                  </Menu.Item>
                  <Menu.Item as={Link} key={2} to="/tricots/actual" name='trikotsActual' active={activeItem === 'trikotsActual'} onClick={this.handleMenuItemClick}>
                    Stand Atkuell
                  </Menu.Item>
                </Menu>
                <Switch>
                    <Route path="/tricots/start" component={TricotsStartContainer}/>
                    <Route path="/tricots/actual" component={TricotsActualContainer}/>
                </Switch>
            </div>
        );
    }
}

export default Trikots;