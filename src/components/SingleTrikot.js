import React, { Component } from 'react'
import {List, Image,Container} from "semantic-ui-react";
import store from '../store'
import { connect } from 'react-redux'

class SingleTrikot extends Component {
  render() {
    const trikot = this.props.data;
    const {riders} = this.props;
    let rider = riders.find((e) => {
        return e.id === trikot.riderId;
    });

    const attachedRider = rider === undefined ? (
        <p>Fahrer wird geladen</p>
    ) : (
        <p>{rider.startNr}, {rider.country}, {rider.name}, {rider.teamName}, Rang</p>
    );

    return(
      <List.Item>
        <Image avatar src='http://localhost:3000/maillot.svg' />
        <List.Content>
          <div className="App-Trikot-Box">
            <List.Header>{trikot.name}</List.Header>
            <Container className="App-Trikot-Content">
              <span><b>Partner:</b> {trikot.partner}<br/></span>
              {attachedRider}
            </Container>
          </div>
        </List.Content>
      </List.Item>
    );
  }
}

function mapStateToProps(store) {
  return {
      riders : store.riders.riders
  }
}

export default connect(mapStateToProps)(SingleTrikot);
