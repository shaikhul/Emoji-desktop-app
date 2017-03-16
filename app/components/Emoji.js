import React, { Component } from 'react';

class Emoji extends Component {
  render() {
    return (
      <img src={this.props.url} alt={this.props.name} title={this.props.name} />
    );
  }
}

export default Emoji;
