import React, { Component } from 'react';
import './App.css';
import * as riderActions from "./actions/riderActions";
import { connect } from "react-redux";
import store from "./store";
import { Button } from "semantic-ui-react";

class App extends Component {
  fetchData() {
    store.dispatch(riderActions.getRidersFromAPI())
  }
  render() {
    const { riders }  = this.props;

    if (!riders.length) {
      return (
        <div className="App">
          <Button onClick={this.fetchData.bind(this)}>Fahrer von der API laden</Button>
        </div>
      )
    }

    const mappedRiders = riders.map(rider => <li key={rider.id}>{rider.firstName}{rider.lastName}</li>)
    return (
        <div className="App">
          <Button onClick={this.fetchData.bind(this)}>Fahrer erneut von der API laden</Button>
          <h1>Riders</h1>
          <ul>{mappedRiders}</ul>
        </div>
    )
  }
}

function mapStateToProps(store) {
    return {
      riders: store.riders.riders
    }
}
export default connect(mapStateToProps)(App);