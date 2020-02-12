import React, { Component } from 'react';
import axios from 'axios';

import Action from '../button/Action/Action';
import List from '../list/List/List';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get('/api/books')
      .then(response => {
        this.setState({data: response.data});
      });
  }

  render() {
    return (
      <main>
          <div className="wrapper">
            <List data={this.state.data} />
            <Action />
          </div>
      </main>
    );
  }
}

export default Main;