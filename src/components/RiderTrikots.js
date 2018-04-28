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
        const bestSwiss = cons.filter(con => con.country === 'SUI').sort((a,b) => a.virtualGap - b.virtualGap)[0].rider;

        const riderMaillots = maillots.map(m => {
            console.log("calc leader");
            let leader = cons.sort((a,b) => a.virtualGap - b.virtualGap)[0].rider;
            console.log({leader});
            console.log({mountain});
            console.log({point});
            console.log({bestSwiss});
            leader.id === rider.id ?
                <div key={m.id}>Partner: {m.partner}, Trikot: {m.name}</div> :
                <div>hallo</div>;
        });

        return <div>
            {riderMaillots}
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