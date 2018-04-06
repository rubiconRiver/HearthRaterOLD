import React, { Component } from 'react';
import './App.css';

import CardList from './containers/CardList/CardList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://cdn.tempostorm.com/articles/rank-1.square.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to HearthRater!</h1>
        </header>
        <p className="App-intro">       
        </p>
        <CardList />
      </div>
    );
  }
}

export default App;
