import React, {Component} from "react";
import * as judgmentActions from "../../../actions/judgmentActions";
import store from "../../../store";
import * as regex from "../../../util/regex";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";

class JudgmentTimelineElement extends Component {
    constructor(props) {
        super(props);

        this.open = this.open.bind(this);
    }
    open(judgment) {
        console.log("HERE");
        console.log(judgment);
        store.dispatch(judgmentActions.enableSingleJudgment(judgment));
    }

    render() {
        const element =  this.props.data;

        let cat = "";
        let sprint = regex.SPRINT_REGEX.exec(element.name);
        let spurt = regex.SPURT_REGEX.exec(element.name);
        let berg = regex.BERG_REGEX.exec(element.name);
        let bergHC = regex.BERG_HC_REGEX.exec(element.name);
        let bergKat1 = regex.BERG_KAT1_REGEX.exec(element.name);
        let bergKat2 = regex.BERG_KAT2_REGEX.exec(element.name);
        let bergKat3 = regex.BERG_KAT3_REGEX.exec(element.name);
        let punkteZeit = regex.PUNKTE_ZEIT_REGEX.exec(element.name);

        if(sprint !== null && sprint[0] !== null){ cat = "sprint";}
        if(spurt !== null && spurt[0] !== null) { cat = "sprint"; }
        if(berg !== null && berg[0] !== null) { cat = "berg"; }
        if(bergHC !== null && bergHC[0] !== null){ cat = "berg_hc";}
        if(bergKat1 !== null && bergKat1[0] !== null){ cat = "berg_kat1";}
        if(bergKat2 !== null && bergKat2[0] !== null){ cat = "berg_kat2";}
        if(bergKat3 !== null && bergKat3[0] !== null){ cat = "berg_kat3";}
        if(punkteZeit !== null && punkteZeit[0] !== null) {cat = "ziel";}

        const marker = "KM: " + element.distance + " | " + element.name;

        cat += " judgments";

        return(
            <li className={cat}>
                <div className="App-Timeline-Text judgmentsDiv">
                    <p>{marker}</p>
                    <Button value={element.id} onClick={()=>this.open(element)}>Infos zur Wertung</Button>
                </div>
            </li>
        );
    }
}

export default JudgmentTimelineElement;