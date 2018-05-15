import React, {Component} from "react";
import TrackTimelineElement from "./TrackTimelineElement";
import TrackTimelineEndElement from './TrackTimelineEndElement'

class TrackTimeline extends Component {
    render() {
        const elements = this.props.elements;
        const bottomSize = this.props.bottom;
        return(
            <section class="timeline">
                <ul className="App-Timeline">
                    {elements.map(element => {
                        return (<TrackTimelineElement data={element}/>);
                    })}
                    <TrackTimelineEndElement size={bottomSize}/>
                </ul>
            </section>
        );
    }
}

export default TrackTimeline;