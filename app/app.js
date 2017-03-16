import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Emojis from './components/Emojis';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      filterText: '',
      emojis: []
    };

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }

  handleFilterTextInput (filterText) {
    this.setState({
      filterText: filterText
    });
  }

  componentDidMount () {
    axios.get("https://api.github.com/emojis")
      .then(res => {
        var emojis = [];
        for (const key of Object.keys(res.data)) {
          emojis.push({
            "name": key,
            "url": res.data[key]
          });
        }
        this.setState({
          emojis: emojis
        });
      });
  }

  render () {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <Emojis
          emojis={this.state.emojis}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

// Render to index.html
ReactDOM.render(
  <App />,
  document.getElementById('content')
);
