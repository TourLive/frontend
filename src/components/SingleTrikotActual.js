import React, { Component } from 'react'
import {List, Image,Container} from "semantic-ui-react";
import { connect } from 'react-redux'

class SingleTrikotActual extends Component {

  render() {
        const trikot = this.props.data;
        const {cons} = this.props;
        const {maillots} = this.props;

        const leader = cons.sort((a,b) => a.virtualGap - b.virtualGap)[0].rider;
        const mountain = cons.sort((a,b) => a.virtualGap - b.virtualGap)[0].rider;
        const point = cons.sort((a,b) => a.virtualGap - b.virtualGap)[0].rider;
        const bestSwiss = cons.filter(con => con.rider.country === 'SUI').sort((a,b) => a.virtualGap - b.virtualGap)[0].rider;


      const attachedRider = trikot.type !== 'leader' ? (
          <p>Fahrer wird geladen</p>
      ) : (
          <p>{leader.startNr}, {leader.country}, {leader.name}, {leader.teamName}, Rang</p>
      );

      const test = trikot.type === 'leader' ? (
          <p>{leader.startNr}, {leader.country}, {leader.name}, {leader.teamName}, Rang</p>
      ) : (
          trikot.type === 'mountain' ? (
              <p>{mountain.startNr}, {mountain.country}, {mountain.name}, {mountain.teamName}, Rang</p>
          ) : (
              <p>{mountain.startNr}, {mountain.country}, {mountain.name}, {mountain.teamName}, Rang</p>
          )
      );

    return(
        <List.Item>
            <Image avatar src='http://localhost:3000/maillot.svg' />
            <List.Content>
                <div className="App-Trikot-Box">
                    <List.Header>{trikot.name}</List.Header>
                    <Container className="App-Trikot-Content">
                        <span><b>Partner:</b> {trikot.partner}{trikot.type}<br/></span>
                        {test}
                    </Container>
                </div>
            </List.Content>
        </List.Item>
    );
  }
}

function mapStateToProps(store) {
  return {
      cons : store.cons.cons,
      maillots : store.maillots.data
  }
}

export default connect(mapStateToProps)(SingleTrikotActual);
