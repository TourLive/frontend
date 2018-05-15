import React, {Component} from 'react';
import './App.css';
import 'react-notifications/lib/notifications.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Menu, Icon} from 'semantic-ui-react';
import Tricots from "./components/tricots/Tricots";
import * as settingsActions from './actions/settingsActions';
import store from './store';
import HomeContainer from './containers/HomeContainer';
import SettingsContainer from './containers/SettingsContainer';
import RankingsContainer from './containers/RankingsContainer';
import GlobalHeaderContainer from './containers/GlobalHeaderContainer';
import JudgmentsContainer from './containers/JudgmentsContainer';
import Notifications from "./containers/NotificationsContainer";
import NoMatch from "./components/NoMatch";

class App extends Component {
    state = {activeItem: 'home'}

    componentDidMount() {
      store.dispatch(settingsActions.getLocalSettings());
    }

    handleMenuItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state;

        const footerMenu =  (
            [
                <Menu.Item as={Link} key={1} to="/view/track" name='home' active={activeItem === 'home'} className="navitem" onClick={this.handleMenuItemClick}>
                    <Icon className="App-Icon-White" name="home"/>
                </Menu.Item>,
                <Menu.Item as={Link} key={2} to="/rankings" name='rankings' active={activeItem === 'rankings'} className="navitem" onClick={this.handleMenuItemClick}>
                    <Icon className="App-Icon-White" name="cubes"/>
                </Menu.Item>,
                <Menu.Item as={Link} key={3} to="/tricots" name='tricots' active={activeItem === 'tricots'} className="navitem" onClick={this.handleMenuItemClick}>
                    <Icon className="App-Icon-White" name="shirtsinbulk"/>
                </Menu.Item>,
                <Menu.Item as={Link} key={4} to="/judgments" name='judgments' active={activeItem === 'judgments'} className="navitem" onClick={this.handleMenuItemClick}>
                    <Icon className="App-Icon-White" name="trophy"/>
                </Menu.Item>,
                <Menu.Item as={Link} key={5} to="/settings" name='settings' active={activeItem === 'settings'} className="navitem" onClick={this.handleMenuItemClick}>
                    <Icon className="App-Icon-White" name="settings"/>
                </Menu.Item>
            ]
        );

        const footerNav = (
            <Menu activeIndex='0'>
                {footerMenu}
            </Menu>
        );


        return (
            <Router>
                <div className="App" style={{ display:"flex", minHeight:"100vh", flexDirection:"column" }}>
                    <GlobalHeaderContainer/>
                    <Notifications/>
                    <Switch>
                        <Route path="/rankings" component={RankingsContainer}/>
                        <Route path="/tricots" component={Tricots}/>
                        <Route exact path="/judgments" component={JudgmentsContainer}/>
                        <Route exact path="/settings" component={SettingsContainer}/>
                        <Route exact path="/" component={HomeContainer}/>
                        <Route exact path="/view/*" component={HomeContainer}/>
                        <Route path="*" component={NoMatch} status={404}/>
                    </Switch>
                    <footer className="App-footer">
                        {footerNav}
                    </footer>
                </div>
            </Router>
        );
    }
}

export default App;