import React, {Component} from "react";
import Parser from 'html-react-parser';
import * as raceGroupsActions from "../../actions/raceGroupsActions";
import store from "../../store";

class TrackTimelineElement extends Component {
    constructor(props) {
        super(props);

        this.open = this.open.bind(this);
    }
    open(raceGroup) {
        store.dispatch(raceGroupsActions.enableSingleRaceGroup(raceGroup));
    }

    render() {
        const element =  this.props.data;
        const calculationTop = 1 + 0.1 * element.gap;
        const divStyle = {
            paddingTop: `${calculationTop}rem`
        };

        let ele = element.type === "racegroup" ? '' +
            '': '';

        console.log(element);
        return(
            <li style={divStyle}>
                <div className="App-Timeline-Text">
                    {element.type === "racegroup" &&
                        <span onClick={()=>this.open(element)} className="App-Timeline-Distance">KM {element.distance} | {Parser(element.text)} </span>
                    }
                    {element.type !== "racegroup" &&
                        <span className="App-Timeline-Distance">KM {element.distance} | {Parser(element.text)} </span>
                    }
                </div>
            </li>
        );
    }
}

export default TrackTimelineElement;