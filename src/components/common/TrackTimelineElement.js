import React, {Component} from "react";
import Parser from 'html-react-parser';
import * as raceGroupsActions from "../../actions/raceGroupsActions";
import store from "../../store";
import * as regex from "../../util/regex";

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

        let cat = "";
        if (element.type === "judgment") {
            let sprint = regex.SPRINT_REGEX.exec(element.text);
            let spurt = regex.SPURT_REGEX.exec(element.text);
            let berg = regex.BERG_REGEX.exec(element.text);
            let bergHC = regex.BERG_HC_REGEX.exec(element.text);
            let bergKat1 = regex.BERG_KAT1_REGEX.exec(element.text);
            let bergKat2 = regex.BERG_KAT2_REGEX.exec(element.text);
            let bergKat3 = regex.BERG_KAT3_REGEX.exec(element.text);
            let punkteZeit = regex.PUNKTE_ZEIT_REGEX.exec(element.text);

            if(sprint !== null && sprint[0] !== null){ cat = "sprint";}
            if(spurt !== null && spurt[0] !== null) { cat = "sprint"; }
            if(berg !== null && berg[0] !== null) { cat = "berg"; }
            if(bergHC !== null && bergHC[0] !== null){ cat = "berg_hc";}
            if(bergKat1 !== null && bergKat1[0] !== null){ cat = "berg_kat1";}
            if(bergKat2 !== null && bergKat2[0] !== null){ cat = "berg_kat2";}
            if(bergKat3 !== null && bergKat3[0] !== null){ cat = "berg_kat3";}
            if(punkteZeit !== null && punkteZeit[0] !== null) {cat = "ziel";}
        }


        return(
            <li style={divStyle} className={cat}>
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