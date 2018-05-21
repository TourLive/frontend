import React, {Component} from "react";

class RiderRaceGroupElement extends Component {
    render() {
        const rG =  this.props.data;
        const index = this.props.index;
        const calculationTop = 1;
        const divStyle = {
            paddingTop: `${calculationTop}rem`
        };

        return(
            <li style={divStyle}>
                <div>
                    {index === 0 ? (
                        <span className="App-RaceGroup-Rider">Aktuelle Renngruppe: {rG.message}</span>
                    ): <span className="App-RaceGroup-Rider">{rG.message}</span> }
                </div>
            </li>
        );
    }
}

export default RiderRaceGroupElement;