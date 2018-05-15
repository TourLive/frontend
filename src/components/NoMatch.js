import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import { Redirect } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    console.log(this.props);
    return(
      <div className="App-Content">
        <Helmet>
          <title>Einstellungen</title>
        </Helmet>
        <Header as="h1" className="SecondHeader" color='red'>404 - Not Found</Header>
        <div>
          <h1>Sorry, can’t find that.</h1>
          <Redirect to="/home" target='_self'>
          </Redirect>
        </div>
      </div>
    );
  }
}

export default NoMatch;