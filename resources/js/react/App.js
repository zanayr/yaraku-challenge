import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Main />
                <Form />
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
