import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Component1 from './Component/Componenet1';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to redux</h1>
        </header>
        <p className="App-intro">
          Hello world
        </p>
        <Component1/>
      </div>
      </Provider>
    );
  }
}

export default App;
