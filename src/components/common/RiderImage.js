import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'

class RiderImage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      failed: false
    };
  }

  _onError = () => {
    this.setState({failed: true});
  }

  render () {
    const defaultImage = <Image source={this.props.default} style={this.props.style}/>;

    if (this.state.failed) return defaultImage;

    const imageName = `../riders/${this.props.source}.jpg`;
    console.log(imageName);

    return (
      <Image onError={this._onError} src={imageName}/>
    );
  }
}

export default RiderImage;