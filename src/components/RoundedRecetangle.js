import React, {Component} from "react";

class RoundedRecetangle extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return(
      <div className="circle long nomargin gaps"><span className="innerCircle">{this.props.content}</span></div>
    );
  }
}

export default RoundedRecetangle;