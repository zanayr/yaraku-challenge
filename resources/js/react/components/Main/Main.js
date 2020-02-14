import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Action from '../button/Action/Action';
import List from '../list/List/List';

class Main extends Component {

  componentDidMount() {
    this.props.onMount(); // Dispatch call to reducer to fetch all data
  }

  render() {
    return (
      <main>
          <div className='wrapper'>
            <List action={this.props.toggle} />
            <Action click={this.props.toggle} />
          </div>
      </main>
    );
  }
}

// export default Main;

const mapDispatchToProps = dispatch => {
  return {
    onMount: () => dispatch(actions.get_async())
  };
};

export default connect(null, mapDispatchToProps)(Main);