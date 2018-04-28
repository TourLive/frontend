import React, { Component } from 'react'
import {connect} from "react-redux";
import RiderInfo from "./RiderInfo";
import store from "../store";

class RiderDetail extends Component {

    render() {
        return <div>
            <RiderInfo selectedRider={this.props.selectedRider}/>
            <div className="Horizontal-Line"/>
            <div><h3>Trikots</h3></div>
            <div className="Horizontal-Line"/>
            <div><h3>Wertungen</h3></div>
            <div className="Horizontal-Line"/>
            <div><h3>Gruppenhistorie</h3></div>
        </div>

    }
}

function mapStateToProps(store) {
    return {
        cons : store.cons.cons
    }
}

export default connect(mapStateToProps)(RiderDetail);