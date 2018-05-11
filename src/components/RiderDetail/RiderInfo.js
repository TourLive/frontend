import React, { Component } from 'react'
import {Card} from "semantic-ui-react";
import {connect} from "react-redux";
import RiderImage from "../RiderImage";

class RiderInfo extends Component {



    render() {
        const {cons} = this.props;
        const rider = this.props.selectedRider;

        function getRankOfRider (riderId) {
            let sortedConnections = cons.sort((a, b) => a.virtualGap - b.virtualGap);
            return sortedConnections.findIndex(con => con.rider.id === riderId) + 1;
        }


        return (
          <Card>
            <RiderImage source={rider.id} />
            <Card.Content>
              <Card.Header>{rider.name}</Card.Header>
              <Card.Meta>{rider.team}</Card.Meta>
              <Card.Description>Nationalität: {rider.country}</Card.Description>
              <Card.Description>StartNr: {rider.startNr}</Card.Description>
              <Card.Description>Aktueller Rang: {getRankOfRider(rider.id)}</Card.Description>
            </Card.Content>
          </Card>
        )

    }
}

function mapStateToProps(store) {
    return {
        cons : store.cons.cons
    }
}

export default connect(mapStateToProps)(RiderInfo);