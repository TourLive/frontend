import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import TrackView from "./TrackView";
import CardView from "./CardView";
import HeightView from "./HeightView";

class Home extends Component {
    state = {activeItem: 'trackview'}

    handleMenuItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state;

        const homeMenu =  (
            [
                <Menu.Item as={Link} key={1} to="/trackview" name='trackview' active={activeItem === 'trackview'} onClick={this.handleMenuItemClick}>
                    Streckenansicht
                </Menu.Item>,
                <Menu.Item as={Link} key={2} to="/cardview" name='cardview' active={activeItem === 'cardview'} onClick={this.handleMenuItemClick}>
                    Kartenansicht
                </Menu.Item>,
                <Menu.Item as={Link} key={3} to="/heightview" name='heightview' active={activeItem === 'heightview'} onClick={this.handleMenuItemClick}>
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

export default Home;