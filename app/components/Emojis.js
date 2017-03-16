import React, { Component } from 'react';
import Emoji from './Emoji';

class Emojis extends Component {
  render() {
    var emojis = [];
    this.props.emojis.forEach((emoji, index) => {
      if (emoji.name.indexOf(this.props.filterText) === -1) {
        return;
      }
      emojis.push(<Emoji key={index} name={emoji.name} url={emoji.url} />);
    });

    var content = emojis;
    if (this.props.filterText && emojis.length == 0) {
      content = <p>No Emojis found! Try another..</p>;
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

export default Emojis;
