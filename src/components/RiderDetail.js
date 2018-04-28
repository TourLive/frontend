import React, { Component } from 'react'
import {connect} from "react-redux";
import store from "../store";

class RiderDetail extends Component {
    render() {
        return (
            <div>
                <p>{this.props.selectedRider.name}</p>
            </div>

        )
    }
}

function mapStateToProps(store) {
    return {
        riders : store.riders.riders
    }
}

export default connect(mapStateToProps)(RiderDetail);