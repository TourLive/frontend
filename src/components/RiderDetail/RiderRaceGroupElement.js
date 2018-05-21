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
            <li style={divStyle}>
                <div className="App-RaceGroup-Rider">
                    {index === 0 ? (
                        <span className="App-Timeline-Distance">Aktuelle Renngruppe: {rG.message}</span>
                    ): <span>{rG.message}</span> }
                </div>
            </li>
        );
    }
}

export default RiderRaceGroupElement;