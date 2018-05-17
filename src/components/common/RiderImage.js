import React, { Component } from 'react';

class RiderImage extends Component {
  constructor (props) {
    super(props);

    this.state={link: this.props.source, default: this.props.default};
    this.onError=this.onError.bind(this);
  }

  onError(){
    console.log("error: could not find picture");
    this.setState(function(){ return {link: this.state.default}; });
  };

  render () {
    return (
      <img className="App-Image-Rider" alt="Rider" onError={this.onError} src={this.state.link}/>
    );
  }
}

export default RiderImage;