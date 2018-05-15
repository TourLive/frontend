import React, {Component} from "react";

class TrackTimelineElement extends Component {
    render() {
        const element =  this.props.data;
        const calculationTop = 1 + 0.1 * element.gap;
        const divStyle = {
            paddingTop: `${calculationTop}rem`
        };

        return(
            <li style={divStyle}>
                <div>
                    <span className="App-Timeline-Distance">KM {element.distance} </span> | {element.text}
                </div>
            </li>
        );
    }
}

export default TrackTimelineElement;