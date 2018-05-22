import React, {Component} from "react";

class RiderRaceGroupElement extends Component {
    render() {
        const rG =  this.props.data;
        const index = this.props.index;
        const calculationTop = 1.5;
        const divStyle = {
            paddingTop: `${calculationTop}rem`
        };

        return(
            <div className="history-element">
                 {index === 0 ? (
                    <span>{rG.message}: Aktuelle Renngruppe</span>
                 ): <span>{rG.message}</span> }
            </div>
        );
    }
}

export default RiderRaceGroupElement;