import React, {Component} from "react";

class TrackTimelineElement extends Component {
    render() {
        const element =  this.props.data;
        console.log(element);
        const calculationTop = 0.5 + 0.1 * element.gap;
        const calculationBottom = 0.5 + 0.1 * element.gapEnd;
        const divStyle = {
            paddingTop: `${calculationTop}rem`,
            paddingBottom: `${calculationBottom}rem`,
        };

        return(
            <li style={divStyle}>
                <div>
                    <time>{element.distance}</time>
                    {element.text}
                </div>
            </li>
        );
    }
}

export default TrackTimelineElement;