import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//  Redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';

//  Component imports
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: false,
        data: null,
        state: null
      }

      this.handle_onAsideToggle = this.handle_onAsideToggle.bind(this);
    }

    handle_onAsideToggle(state, data) {
      this.setState({
        active: !this.state.active,
        data: data,
        state: state
      });
    }

    render() {
        let aside = null;
        if (this.state.active) {
          aside = <Aside data={this.state.data}
                         state={this.state.state}
                         toggle={this.handle_onAsideToggle} />;
        }
        return (
            <Provider store={store}>
              <Header />
              <Main toggle={this.handle_onAsideToggle} />
              {aside}
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
