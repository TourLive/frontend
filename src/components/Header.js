import React, { Component } from 'react';

class Header extends Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  render() {
    return (
      <div>
        <input type="text" value={this.props.title} onChange={this.handleChange.bind(this)} />
        <header>header {this.props.title}</header>
      </div>
    );
  }
}

export default Header;
