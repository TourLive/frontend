import React, {Component} from "react";

class TimeLineEndBlock extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return(
      <div className="circle"><span className="innerCircle">{this.props.content}</span></div>
    );
  }
}

export default TimeLineEndBlock;