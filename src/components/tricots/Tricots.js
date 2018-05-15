import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import {Route, Switch, Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import TricotsActualContainer from '../../containers/TricotsActualContainer'
import TricotsStartContainer from '../../containers/TricotsStartContainer'

class Trikots extends Component {
  constructor(props){
    super(props);

    this.state = {
        activeItem : 'trikotsStart'

    }
  }

    handleMenuItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
        const {activeItem} = this.state;

        return(
            <div className="App-Content">
                <Helmet>
                    <title>Trikotträger</title>
                </Helmet>
                <Header as="h1" color='red'>Trikotträger</Header>
                <Menu compact>
                  <Menu.Item as={Link} key={1} to="/tricots/start" name='trikotsStart' active={activeItem === 'trikotsStart'} onClick={this.handleMenuItemClick}>
                    Stand beim Start
                  </Menu.Item>
                  <Menu.Item as={Link} key={2} to="/tricots/actual" name='trikotsActual' active={activeItem === 'trikotsActual'} onClick={this.handleMenuItemClick}>
                    Stand Atkuell
                  </Menu.Item>
                </Menu>
                <Switch>
                    <Route path="/tricots" component={TricotsStartContainer}/>
                    <Route path="/tricots/start" component={TricotsStartContainer}/>
                    <Route path="/tricots/actual" component={TricotsActualContainer}/>
                </Switch>
            </div>
        );
    }
}

export default Trikots;