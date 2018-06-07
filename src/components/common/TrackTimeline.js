import React, {Component} from "react";
import TrackTimelineElement from "./TrackTimelineElement";
import TrackTimelineEndElement from './TrackTimelineEndElement'
import scrollToComponent from "react-scroll-to-component"

class TrackTimeline extends Component {
    constructor(props) {
        super(props);
        this.ref = null;

        this.setRef = element => {
            this.ref = element;
        }
    }
    componentDidUpdate() {
        if (this.ref !== null) {
            scrollToComponent(this.ref);
        }
        //this.ref.focus();
    }

    render() {
        const elements = this.props.elements;
        let bottomSize = 0;
        return(
            <section className="timeline">
                <ul className="App-Timeline">
                    {elements.map((element,i) => {
                        console.log(element);
                        if(elements.length === i + 1){bottomSize = element.distance;}
                        if (element.text === "FELD") {
                            return (<TrackTimelineElement key={i} ref={e => this.ref = e } data={element}/>);
                        } else {
                            return (<TrackTimelineElement key={i} data={element}/>);
                        }
                    })}
                    <TrackTimelineEndElement size={bottomSize}/>
                </ul>
            </section>
        );
    }
}

export default TrackTimeline;