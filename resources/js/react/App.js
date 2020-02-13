import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//  Redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';

//  Component imports
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
              <Header />
              <Main />
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
