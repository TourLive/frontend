import React, {Component} from "react";
import JudgmentTimelineElement from "./JudgmentTimelineElement";

class JudgmentTimeline extends Component {
    render() {
        const elements = this.props.elements;
        return(
            <section className="timeline">
                <ul className="App-Timeline">
                    {elements.sort(((a, b) => b.distance - a.distance)).map((element,i) => {
                        return (<JudgmentTimelineElement key={i} data={element}/>);
                    })}
                </ul>
            </section>
        );
    }
}

export default JudgmentTimeline;