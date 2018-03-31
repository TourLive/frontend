import React, { Component } from 'react';
import './App.css';
import * as riderActions from "./actions/riderActions";
import { connect } from "react-redux";
import store from "./store";
import { Button, Container, Table } from "semantic-ui-react";

class App extends Component {
  fetchData() {
    store.dispatch(riderActions.getRidersFromAPI())
  }
  render() {
    const { riders }  = this.props;

    if (!riders.length) {
      return (
        <div className="App">
          <h1>TEST BUILBING OF DOCKER</h1>
          <Button onClick={this.fetchData.bind(this)}>Fahrer von der API laden</Button>
        </div>
      )
    }

    const mappedRiders = riders.map(rider => {
          return  (<Table.Row key={rider.id}>
        <Table.Cell>
          {rider.firstName}
        </Table.Cell>
        <Table.Cell>
          {rider.lastName}
        </Table.Cell>
        <Table.Cell>
          {rider.teamName}
        </Table.Cell>
        <Table.Cell>
          {rider.age}
        </Table.Cell>
      </Table.Row>
          )
    })
    return (
        <div className="App">
          <Button onClick={this.fetchData.bind(this)}>Fahrer erneut von der API laden</Button>
          <Container textAlign='center'>
            <h1>Riders</h1>
            <Table basic='very' celled collapsing>
              <Table.Header><Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Vorname</Table.HeaderCell>
                <Table.HeaderCell>Nachname</Table.HeaderCell>
                <Table.HeaderCell>Alter</Table.HeaderCell>
              </Table.Row></Table.Header>
              <Table.Body>
                {mappedRiders}
              </Table.Body>
            </Table>
          </Container>
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