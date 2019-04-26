import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Login from './components/Login/Login';


import CardList from './containers/CardList/CardList';
import SaveButton from './components/SaveButton/SaveButton';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src="https://pbs.twimg.com/profile_images/779964501881946112/S3a8rbfc_400x400.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to HearthRater!</h1>
        </header>
        <div className="CardList">
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/cardlist" component={CardList} />
        </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
