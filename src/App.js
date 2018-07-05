import React, { Component } from 'react';
import './App.css';

import CardList from './containers/CardList/CardList';
import SaveButton from './components/SaveButton/SaveButton';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="http://digitalspyuk.cdnds.net/18/14/980x490/landscape-1522924460-avengers-infinity-war-poster.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to HearthRater!</h1>
        </header>
        <p className="App-intro">       
        </p>
        <CardList />
        <SaveButton/>
      </div>
    );
  }
}

export default App;
