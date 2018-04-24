import React, {Component} from "react";
import {Route, Switch, NavLink} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import TrackView from "./TrackView";
import CardView from "./CardView";
import HeightView from "./HeightView";
import { connect } from 'react-redux';
import store from "../store";
import * as raceGroupActions from "../actions/raceGroupsActions";


class Home extends Component {
    constructor(props) {
      super(props);

      this.state = {
        updated: false,
        activeItem : 'trackview'
      }
    }

    handleMenuItemClick = (e, {name}) => this.setState({activeItem: name})

    fetchCurrentRaceGroups(id) {
      store.dispatch(raceGroupActions.getCurrentRaceGroups(id));
      this.setState({updated: true});
    }

    render() {
        const {activeItem} = this.state;
        const {actualStage} = this.props;

        if (actualStage.id !== undefined && !this.state.updated) {
          this.fetchCurrentRaceGroups(actualStage.id);
        }

        const homeMenu =  (
            [
                <Menu.Item as={NavLink} key={1} to="/trackview" name='trackview' active={activeItem === 'trackview'} onClick={this.handleMenuItemClick}>
                    Streckenansicht
                </Menu.Item>,
                <Menu.Item as={NavLink} key={2} to="/cardview" name='cardview' active={activeItem === 'cardview'} onClick={this.handleMenuItemClick}>
                    Kartenansicht
                </Menu.Item>,
                <Menu.Item as={NavLink} key={3} to="/heightview" name='heightview' active={activeItem === 'heightview'} onClick={this.handleMenuItemClick}>
                    Höhenprofil
                </Menu.Item>
            ]
        );

        const homeNav = (
            <Menu stackable>
                {homeMenu}
            </Menu>
        );


        return(
            <div className="App-Content-Home">
                <header className="App-header-home">
                    {homeNav}
                </header>
                <Switch>
                    <Route path="/trackview" component={TrackView}/>
                    <Route path="/cardview" component={CardView}/>
                    <Route path="/heightview" component={HeightView}/>
                </Switch>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        actualStage : store.actualStage.data
    }
}

export default connect(mapStateToProps)(Home);