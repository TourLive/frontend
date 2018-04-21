import React, { Component } from 'react'
import {List, Image,Container} from "semantic-ui-react";
import store from '../store'

class SingleTrikot extends Component {
  render() {
    const trikot = this.props.data;
    const rider = store.getState().riders.riders.find((element) => {
        element.id = trikot.riderId;
    })
    console.log(store.getState().riders.riders);
    return(
      <List.Item>
        <Image avatar src='http://localhost:3000/maillot.svg' />
        <List.Content>
          <div className="App-Trikot-Box">
            <List.Header>{trikot.name}</List.Header>
            <Container className="App-Trikot-Content">
              <p><b>Partner:</b> {trikot.partner}<br/>
                {rider.startNr}, {rider.country}, {rider.name}, {rider.teamName}, Rang</p>
            </Container>
          </div>
        </List.Content>
      </List.Item>
    );
  }
}

export default SingleTrikot;
