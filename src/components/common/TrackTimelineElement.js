import React, {Component} from "react";

class TrackTimelineElement extends Component {
    render() {
        const element =  this.props.data;
        console.log(element);
        return(
            <li>
                <div>
                    <time>{element.distance}</time>
                    {element.text}
                </div>
            </li>
        );
    }
}

export default TrackTimelineElement;