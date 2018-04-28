import React, { Component } from 'react'
import {connect} from "react-redux";
import {List, Image,Container} from "semantic-ui-react";
import store from "../store";

class RiderTrikots extends Component {
    render() {
        const {maillots} = this.props;
        const {cons} = this.props;
        const rider = this.props.selectedRider;
        const leader = cons.sort((a,b) => a.virtualGap - b.virtualGap)[0].rider;
        const mountain = cons.sort((a,b) => a.virtualGap - b.virtualGap)[0].rider;
        const point = cons.sort((a,b) => a.virtualGap - b.virtualGap)[0].rider;
        const bestSwiss = cons.filter(con => con.rider.country === 'SUI').sort((a,b) => a.virtualGap - b.virtualGap)[0].rider;

        const leaderMaillot = maillots.map(m =>
            leader.id === rider.id && m.type === 'leader' ?
                <div key={m.id} className="App-Trikot-Rider">Partner: {m.partner}, Trikot: {m.name}</div> :
                <div></div>
        );

        const mountainMaillot = maillots.map(m =>
            mountain.id === rider.id && m.type === 'mountain' ?
                <div key={m.id} className="App-Trikot-Rider">Partner: {m.partner}, Trikot: {m.name}</div> :
                <div></div>
        );

        const pointMaillot = maillots.map(m =>
            point.id === rider.id && m.type === 'points' ?
                <div key={m.id} className="App-Trikot-Rider">Partner: {m.partner}, Trikot: {m.name}</div> :
                <div></div>
        );

        const bestSwissMaillot = maillots.map(m =>
            bestSwiss.id === rider.id && m.type === 'bestSwiss' ?
                <div key={m.id} className="App-Trikot-Rider">Partner: {m.partner}, Trikot: {m.name}</div> :
                <div></div>
        );

        return <div>
            {leaderMaillot}
            {mountainMaillot}
            {pointMaillot}
            {bestSwissMaillot}
            </div>
    }
}

function mapStateToProps(store) {
    return {
        maillots: store.maillots.data,
        cons : store.cons.cons
    }
}

export default connect(mapStateToProps)(RiderTrikots);