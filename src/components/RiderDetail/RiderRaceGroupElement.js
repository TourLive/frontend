import React, {Component} from "react";

class RiderRaceGroupElement extends Component {
    render() {
        const rG =  this.props.data;
        const index = this.props.index;

        const dt = new Date(rG.timestamp);

        return(
            <div className="history-element">
                 {index === 0 ? (
                    <span>{rG.message} | Aktuelle Renngruppe ({dt.timeNow()})</span>
                 ): <span>{rG.message} ({dt.timeNow()})</span> }
            </div>
        );
    }
}

export default RiderRaceGroupElement;