import React, { Component } from 'react';
import './App.css';
import * as riderActions from "./actions/riderActions";
import { connect } from "react-redux";
import store from "./store";

@connect(state => ({riders : state.riders.riders}))
class App extends Component {
  fetchData() {
    store.dispatch(riderActions.getRidersFromAPI())
  }
  render() {
    const { riders }  = this.props;

    if (!riders.length) {
      return (
        <div className="App">
          <button onClick={this.fetchData.bind(this)}>Daten von der API holen.</button>
        </div>
      )
    }

    const mappedRiders = riders.map(rider => <li key={rider.id}>{rider.firstName}{rider.lastName}</li>)
    return (
        <div className="App">
          <button onClick={this.fetchData.bind(this)}>Erneut Daten von der API holen</button>
          <h1>Riders</h1>
          <ul>{mappedRiders}</ul>
        </div>
    )
  }
}

export default App;