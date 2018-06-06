import React, {Component} from "react";
import Parser from 'html-react-parser';

class TrackTimelineElement extends Component {
    render() {
        const element =  this.props.data;
        const calculationTop = 1 + 0.1 * element.gap;
        const divStyle = {
            paddingTop: `${calculationTop}rem`
        };

        return(
            <li style={divStyle}>
                <div className="App-Timeline-Text">
                    <span className="App-Timeline-Distance">KM {element.distance} </span> | {Parser(element.text)}
                </div>
            </li>
        );
    }
}

export default TrackTimelineElement;