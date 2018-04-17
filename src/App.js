import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {connect} from "react-redux";
import {Menu} from 'semantic-ui-react';
import Home from "./components/Home";
import Rankings from "./components/Rankings";
import Tricots from "./components/Tricots";
import Judgments from "./components/Judgments";
import Settings from "./components/Settings";

class App extends Component {
    state = {activeItem: 'home'}

    handleMenuItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state;

        const footerMenu =  (
            [
                <Menu.Item as={Link} key={1} to="/trackview" name='home' active={activeItem === 'home'} onClick={this.handleMenuItemClick}>
                    Home
                </Menu.Item>,
                <Menu.Item as={Link} key={2} to="/rankings" name='rankings' active={activeItem === 'rankings'} onClick={this.handleMenuItemClick}>
                    Klassemente
                </Menu.Item>,
                <Menu.Item as={Link} key={3} to="/tricots" name='tricots' active={activeItem === 'tricots'} onClick={this.handleMenuItemClick}>
                    Trikots
                </Menu.Item>,
                <Menu.Item as={Link} key={4} to="/judgments" name='judgments' active={activeItem === 'judgments'} onClick={this.handleMenuItemClick}>
                    Wertungen
                </Menu.Item>,
                <Menu.Item as={Link} key={5} to="/settings" name='settings' active={activeItem === 'settings'} onClick={this.handleMenuItemClick}>
                    Einstellungen
                </Menu.Item>
            ]
        );

        const footerNav = (
            <Menu stackable>
                {footerMenu}
            </Menu>
        );


        return (
            <Router>
                <div className="App">
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