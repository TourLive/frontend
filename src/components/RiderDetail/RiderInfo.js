import React, { Component } from 'react'
import {Table} from "semantic-ui-react";
import {connect} from "react-redux";

class RiderInfo extends Component {



    render() {
        const {cons} = this.props;
        const rider = this.props.selectedRider;

        function getRankOfRider (riderId) {
            let sortedConnections = cons.sort((a, b) => a.virtualGap - b.virtualGap);
            return sortedConnections.findIndex(con => con.rider.id === riderId) + 1;
        }

        return <Table>
            <tbody>
            <tr>
                <td>Name: {rider.name}</td>
            </tr>
            <tr>
                <td>Team: {rider.team}</td>
            </tr>
            <tr>
                <td>StartNr: {rider.startNr}</td>
            </tr>
            <tr>
                <td>Nationalität: {rider.country}</td>
            </tr>
            <tr>
                <td>Rang: {getRankOfRider(rider.id)}</td>
            </tr>
            </tbody>
        </Table>
       

    }
}

function mapStateToProps(store) {
    return {
        cons : store.cons.cons
    }
}

export default connect(mapStateToProps)(RiderInfo);