import React, {Component} from "react";
import TrackTimelineElement from "./TrackTimelineElement";
import TrackTimelineEndElement from './TrackTimelineEndElement'

class TrackTimeline extends Component {
    render() {
        const elements = this.props.elements;
        let bottomSize = 0;
        return(
            <section class="timeline">
                <ul className="App-Timeline">
                    {elements.map((element,i) => {
                        if(elements.length === i + 1){bottomSize = element.distance;}
                        return (<TrackTimelineElement data={element}/>);
                    })}
                    <TrackTimelineEndElement size={bottomSize}/>
                </ul>
            </section>
        );
    }
}

export default TrackTimeline;