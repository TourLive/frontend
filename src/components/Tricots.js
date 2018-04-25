import React, {Component} from "react";
import {Header, List, Image} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import SingleTrikot from "./SingleTrikot";
import * as maillotActions from '../actions/maillotActions'
import store from '../store'
import {connect} from "react-redux";
import {Route, Switch, Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import TricotsStart from "./TricotsStart";
import TricotsActual from "./TricotsActual";

class Trikots extends Component {
  constructor(props){
    super(props);

    this.state = {
        updated: false,
        activeItem : 'trikotsStart'

    }
  }

  fetchCurrentMaillots(id) {
    store.dispatch(maillotActions.getCurrentMaillots(id));
    this.setState({updated: true});
  }

    handleMenuItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
        const {maillots} = this.props;
        const {actualStage} = this.props;
        const {activeItem} = this.state;

        if (actualStage.id !== undefined && !this.state.updated) {
          this.fetchCurrentMaillots(actualStage.id);
        }

      const navMenu =  (
          [
              <Menu.Item as={Link} key={1} to="/tricots/start" name='trikotsStart' active={activeItem === 'trikotsStart'} onClick={this.handleMenuItemClick}>
                  Stand beim Start
              </Menu.Item>,
              <Menu.Item as={Link} key={2} to="/tricots/actual" name='trikotsActual' active={activeItem === 'trikotsActual'} onClick={this.handleMenuItemClick}>
                  Stand Atkuell
              </Menu.Item>
          ]
      );

      const nav = (
          <Menu stackable>
              {navMenu}
          </Menu>
      );

        return(
            <div className="App-Content">
                <Helmet>
                    <title>Trikotträger</title>
                </Helmet>
                <Header as="h1" color='red'>Trikotträger</Header>
                <div>{nav}</div>
                <Switch>
                    <Route path="/tricots/start" component={TricotsStart}/>
                    <Route path="/tricots/actual" component={TricotsActual}/>
                </Switch>
            </div>
        );
    }
}

function mapStateToProps(store) {
  return {
    maillots: store.maillots.data,
    actualStage : store.actualStage.data
  }
}

export default connect(mapStateToProps)(Trikots);