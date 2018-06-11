import React, {Component} from "react";

class TrackTimelineEndElement extends Component {
  render() {
    const size =  this.props.size;
    const calculationTop = 1 + 0.1 * size;
    const divStyle = {
      paddingTop: `${calculationTop}rem`
    };

    return(
      <li style={divStyle} className="App-Last-Timeline-Element">

      </li>
    );
  }
}

export default TrackTimelineEndElement;