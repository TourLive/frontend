import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {connect} from "react-redux";
import {Menu, Icon} from 'semantic-ui-react';
import Home from "./components/Home";
import Rankings from "./components/Rankings";
import Tricots from "./components/Tricots";
import Judgments from "./components/Judgments";
import Settings from "./components/Settings";
import GlobalHeader from "./components/GlobalHeader";
import * as settingsActions from './actions/settingsActions'
import store from './store'

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
                <Menu.Item as={Link} key={1} to="/trackview" name='home' active={activeItem === 'home'} onClick={this.handleMenuItemClick}>
                    <Icon className="App-Icon-White" name="home"/>
                </Menu.Item>,
                <Menu.Item as={Link} key={2} to="/rankings" name='rankings' active={activeItem === 'rankings'} onClick={this.handleMenuItemClick}>
                    <Icon className="App-Icon-White" name="cubes"/>
                </Menu.Item>,
                <Menu.Item as={Link} key={3} to="/tricots" name='tricots' active={activeItem === 'tricots'} onClick={this.handleMenuItemClick}>
                    <Icon className="App-Icon-White" name="flag checkered"/>
                </Menu.Item>,
                <Menu.Item as={Link} key={4} to="/judgments" name='judgments' active={activeItem === 'judgments'} onClick={this.handleMenuItemClick}>
                    <Icon className="App-Icon-White" name="balance"/>
                </Menu.Item>,
                <Menu.Item as={Link} key={5} to="/settings" name='settings' active={activeItem === 'settings'} onClick={this.handleMenuItemClick}>
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
                    <GlobalHeader/>
                    <Switch>
                        <Route path="/rankings" component={Rankings}/>
                        <Route path="/tricots" component={Tricots}/>
                        <Route path="/judgments" component={Judgments}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                    <footer className="App-footer">
                        {footerNav}
                    </footer>
                </div>
            </Router>
        );
    }
}

function mapStateToProps(store) {
    return {}
}

export default connect(mapStateToProps)(App);