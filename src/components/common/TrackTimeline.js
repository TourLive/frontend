import React, {Component} from "react";
import TrackTimelineElement from "./TrackTimelineElement";

class TrackTimeline extends Component {
    render() {
        const elements = this.props.elements;

        return(
            <section class="timeline">
                <ul>
                    {elements.map(element => {
                        return (<TrackTimelineElement data={element}/>);
                    })}
                </ul>
            </section>
        );
    }
}

export default TrackTimeline;