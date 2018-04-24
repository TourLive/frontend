import React, { Component } from 'react';
import {Header} from "semantic-ui-react";
import {connect} from "react-redux";

class SingleJudgment extends Component {
  render() {
    const judgment = this.props.data;
    const {riders} = this.props;
    /*let rider = riders.find((e) => {
      return e.id === trikot.riderId;
    });
    console.log(rider);*/

    return(
      <div>
        <Header as="h1">Wertung | {judgment.name}</Header>
        {judgment.reward.points.map((reward,i) => {
          if (reward !== 0) {
            return (
              <h5 key={i+1}>Platz {i+1}</h5>
            )
          }
        })}
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    riders : store.riders.riders
  }
}

export default connect(mapStateToProps)(SingleJudgment);
