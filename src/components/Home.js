import React, {Component} from "react";
import {Route, Switch, NavLink, Redirect} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import TrackViewContainer from "../containers/views/TrackViewContainer";
import HeightViewContainer from "../containers/views/HeightViewContainer";
import MapViewContainer from "../containers/views/MapViewContainer";
import store from "../store";
import * as timelineActions from "../actions/timelineActions";

class Home extends Component {
    constructor(props) {
      super(props);

      this.state = {
        updated: false,
        activeItem : 'trackview',
        timer : null
      }
    }

    handleMenuItemClick = (e, {name}) => this.setState({activeItem: name})

    fetchInitalCurrentRaceGroups(id) {
      store.dispatch(timelineActions.getTimelineOfStage(id));
      this.setState({updated: true});
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
        store.dispatch(timelineActions.getTimelineOfStage(stageID));
      }
    }

    render() {
        const {activeItem} = this.state;
        const {actualStage} = this.props;

        if (actualStage.id !== undefined && !this.state.updated) {
          this.fetchInitalCurrentRaceGroups(actualStage.id);
        }

        const homeMenu =  (
            [
                <Menu.Item as={NavLink} key={1} to="/view/track" name='trackview' active={activeItem === 'trackview'} onClick={this.handleMenuItemClick}>
                    Streckenansicht
                </Menu.Item>,
                <Menu.Item as={NavLink} key={2} to="/view/map" name='cardview' active={activeItem === 'cardview'} onClick={this.handleMenuItemClick}>
                    Kartenansicht
                </Menu.Item>,
                <Menu.Item as={NavLink} key={3} to="/view/height" name='heightview' active={activeItem === 'heightview'} onClick={this.handleMenuItemClick}>
                    Höhenprofil
                </Menu.Item>
            ]
        );

        const homeNav = (
            <Menu compact>
                {homeMenu}
            </Menu>
        );

        return(
            <div className="App-Content">
                <header>
                    {homeNav}
                </header>
                <Switch>
                    <Route exact path="/view/track" component={TrackViewContainer}/>
                    <Route exact path="/view/map" component={MapViewContainer}/>
                    <Route exact path="/view/height" component={HeightViewContainer}/>
                </Switch>
                <Redirect to="/view/track"/>
            </div>
        );
    }
}

export default Home;