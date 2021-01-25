import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';


class App extends Component {

    render() {
        return (
            <div className="container">
                <Header />
                
                <Footer />
            </div>

        );
    }
}

export default App;

if (document.getElementById('App')) {
    ReactDOM.render(<Router><App /></Router>, document.getElementById('App'));
}
